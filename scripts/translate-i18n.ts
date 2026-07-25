import { readFileSync, writeFileSync, existsSync } from 'fs';
import { i18nConfig } from '../src/i18n/config';

// Free, self-hosted translation — LibreTranslate. Zero cost, no signup, no rate limit.
// Run once: docker run -ti --rm -p 5000:5000 libretranslate/libretranslate
// Then:     npm run translate-i18n
const LT_URL = process.env.LIBRETRANSLATE_URL || 'http://localhost:5000';
const LT_API_KEY = process.env.LIBRETRANSLATE_API_KEY || '';
const CONCURRENCY = 4;

const EN_PATH = 'src/i18n/locales/en.json';

// LibreTranslate language codes match our locale codes 1:1 (en, ar, zh, es, id, pt, fr, ja, ru, de).
const SUPPORTED = new Set(['zh', 'es', 'ar', 'id', 'pt', 'fr', 'ja', 'ru', 'de']);

const VAR_RE = /\{[^}]+\}/g;

function protectVars(text: string): { protected: string; vars: string[] } {
  const vars: string[] = [];
  const protectedText = text.replace(VAR_RE, (m) => {
    vars.push(m);
    return `XVAR${vars.length - 1}X`;
  });
  return { protected: protectedText, vars };
}

function restoreVars(text: string, vars: string[]): string {
  return text.replace(/XVAR(\d+)X/g, (_, i) => vars[Number(i)] ?? '');
}

async function ltTranslateOne(text: string, target: string): Promise<string> {
  const res = await fetch(`${LT_URL}/translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: text,
      source: 'en',
      target,
      format: 'text',
      api_key: LT_API_KEY,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`LibreTranslate ${res.status} for "${target}": ${body}`);
  }

  const data = (await res.json()) as { translatedText: string };
  return data.translatedText;
}

async function runPool<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function ltTranslateBatch(texts: string[], target: string): Promise<string[]> {
  const protectedTexts = texts.map(protectVars);
  const translated = await runPool(protectedTexts, CONCURRENCY, (p) => ltTranslateOne(p.protected, target));
  return translated.map((t, i) => restoreVars(t, protectedTexts[i].vars));
}

async function checkServer() {
  try {
    const res = await fetch(`${LT_URL}/languages`);
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    console.error(
      `❌ Can't reach LibreTranslate at ${LT_URL}.\n` +
      '   Start it first:\n' +
      '   docker run -ti --rm -p 5000:5000 libretranslate/libretranslate\n' +
      '   (or set LIBRETRANSLATE_URL to point at a running instance)'
    );
    process.exit(1);
  }
}

async function main() {
  await checkServer();

  const en: Record<string, string> = JSON.parse(readFileSync(EN_PATH, 'utf-8'));
  const enKeys = Object.keys(en);

  const targetLocales = i18nConfig.locales.filter((l) => l !== i18nConfig.defaultLocale);

  for (const locale of targetLocales) {
    if (!SUPPORTED.has(locale)) {
      console.warn(`⚠️  LibreTranslate has no mapping for locale "${locale}", skipping.`);
      continue;
    }

    const path = `src/i18n/locales/${locale}.json`;
    const existing: Record<string, string> = existsSync(path)
      ? JSON.parse(readFileSync(path, 'utf-8'))
      : {};

    const staleKeys = Object.keys(existing).filter((k) => !(k in en));
    for (const k of staleKeys) delete existing[k];

    const missingKeys = enKeys.filter((k) => !existing[k]);

    if (missingKeys.length === 0) {
      if (staleKeys.length > 0) {
        const reordered: Record<string, string> = {};
        for (const k of enKeys) reordered[k] = existing[k];
        writeFileSync(path, JSON.stringify(reordered, null, 2));
        console.log(`🧹 ${locale}: pruned ${staleKeys.length} stale key(s), nothing new to translate.`);
      } else {
        console.log(`✅ ${locale}: up to date.`);
      }
      continue;
    }

    console.log(`🌍 ${locale}: translating ${missingKeys.length} new key(s) via LibreTranslate...`);
    const translated = await ltTranslateBatch(
      missingKeys.map((k) => en[k]),
      locale
    );
    missingKeys.forEach((k, i) => {
      existing[k] = translated[i];
    });

    const reordered: Record<string, string> = {};
    for (const k of enKeys) reordered[k] = existing[k];
    writeFileSync(path, JSON.stringify(reordered, null, 2));
    console.log(`✅ ${locale}: wrote ${missingKeys.length} new translation(s), pruned ${staleKeys.length} stale key(s).`);
  }
}

main().catch((err) => {
  console.error('❌ translate-i18n failed:', err.message);
  process.exit(1);
});
