import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { i18nConfig } from '../src/i18n/config';

// Free, self-hosted translation — LibreTranslate. Same engine as translate-i18n.ts.
// Run once: docker run -ti --rm -p 5000:5000 libretranslate/libretranslate
// Then:     npm run translate-blog-i18n
const LT_URL = process.env.LIBRETRANSLATE_URL || 'http://localhost:5000';
const LT_API_KEY = process.env.LIBRETRANSLATE_API_KEY || '';
const CONCURRENCY = 4;

const BLOG_DIR = 'src/content/blog';
const DEFAULT_LOCALE = i18nConfig.defaultLocale;

// LibreTranslate language codes match our locale codes 1:1 (en, ar, zh, es, id, pt, fr, ja, ru, de).
const SUPPORTED = new Set(['zh', 'es', 'ar', 'id', 'pt', 'fr', 'ja', 'ru', 'de']);

// Protect {vars}, `inline code`, and the (url) part of [text](url) / ![alt](url) from translation.
const VAR_RE = /\{[^}]+\}|`[^`]*`|\]\([^)]*\)/g;

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
  if (!text.trim()) return text;
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

// --- Frontmatter ---

const FRONTMATTER_STRING_FIELDS = ['title', 'description', 'excerpt', 'category', 'keywords', 'breadcrumbName'] as const;
const FRONTMATTER_PASSTHROUGH_FIELDS = ['date', 'dateModified', 'author', 'thumbnail', 'featured', 'sidebarApps', 'ogImage'] as const;

interface Job {
  text: string;
  apply: (translated: string) => void;
}

function collectFrontmatterJobs(data: Record<string, any>, jobs: Job[]) {
  for (const field of FRONTMATTER_STRING_FIELDS) {
    const value = data[field];
    if (typeof value === 'string' && value.trim()) {
      jobs.push({ text: value, apply: (t) => { data[field] = t; } });
    }
  }

  if (Array.isArray(data.tags)) {
    data.tags.forEach((tag: string, i: number) => {
      if (typeof tag === 'string' && tag.trim()) {
        jobs.push({ text: tag, apply: (t) => { data.tags[i] = t; } });
      }
    });
  }

  if (Array.isArray(data.faqs)) {
    data.faqs.forEach((faq: { question: string; answer: string }) => {
      if (faq.question?.trim()) {
        jobs.push({ text: faq.question, apply: (t) => { faq.question = t; } });
      }
      if (faq.answer?.trim()) {
        jobs.push({ text: faq.answer, apply: (t) => { faq.answer = t; } });
      }
    });
  }
}

// --- Body (markdown/MDX) ---

const HORIZONTAL_RULE_RE = /^\s*(---|\*\*\*|___)\s*$/;
const TABLE_SEP_RE = /^\s*\|?[\s:|-]+\|?\s*$/;
const PREFIX_RE = /^(\s*(?:#{1,6}\s+|[-*+]\s+|\d+\.\s+|>\s+)?)([\s\S]*)$/;

function isVerbatimLine(line: string, inCodeFence: boolean): boolean {
  const trimmed = line.trim();
  if (inCodeFence) return true;
  if (!trimmed) return true;
  if (trimmed.startsWith('```')) return true;
  if (trimmed.startsWith('import ')) return true;
  if (trimmed.startsWith('<')) return true; // JSX/HTML component lines
  if (HORIZONTAL_RULE_RE.test(line)) return true;
  if (TABLE_SEP_RE.test(line) && trimmed.includes('-')) return true;
  return false;
}

function collectBodyJobs(body: string, jobs: Job[]): { lines: string[] } {
  const lines = body.split('\n');
  let inCodeFence = false;

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('```')) {
      inCodeFence = !inCodeFence;
      return;
    }
    if (isVerbatimLine(line, inCodeFence)) return;

    if (trimmed.includes('|')) {
      // Table row: translate each cell independently, preserve pipe structure.
      const cells = line.split('|');
      cells.forEach((cell, cellIdx) => {
        if (cell.trim()) {
          jobs.push({ text: cell, apply: (t) => { cells[cellIdx] = t; } });
        }
      });
      lines[idx] = ''; // placeholder, rebuilt below via a deferred join
      (lines as any)[`__cells_${idx}`] = cells;
      return;
    }

    const match = line.match(PREFIX_RE);
    if (!match) return;
    const [, prefix, rest] = match;
    if (!rest.trim()) return;
    jobs.push({ text: rest, apply: (t) => { lines[idx] = prefix + t; } });
  });

  // Rebuild table lines from their translated cells after jobs run.
  const finalize = () => {
    lines.forEach((line, idx) => {
      const cells = (lines as any)[`__cells_${idx}`];
      if (cells) {
        lines[idx] = cells.join('|');
        delete (lines as any)[`__cells_${idx}`];
      }
    });
  };

  (collectBodyJobs as any)._finalize = finalize;
  return { lines };
}

async function translatePost(enRaw: string, locale: string): Promise<string> {
  const { data, content } = matter(enRaw);
  const jobs: Job[] = [];

  collectFrontmatterJobs(data, jobs);
  const { lines } = collectBodyJobs(content, jobs);

  const translations = await ltTranslateBatch(jobs.map((j) => j.text), locale);
  jobs.forEach((job, i) => job.apply(translations[i]));

  (collectBodyJobs as any)._finalize();

  return matter.stringify(lines.join('\n'), data);
}

// --- Main ---

async function main() {
  await checkServer();

  const enDir = path.join(BLOG_DIR, DEFAULT_LOCALE);
  const enFiles = readdirSync(enDir).filter((f) => /\.(md|mdx)$/.test(f));

  const targetLocales = i18nConfig.locales.filter((l) => l !== DEFAULT_LOCALE);

  for (const locale of targetLocales) {
    if (!SUPPORTED.has(locale)) {
      console.warn(`⚠️  LibreTranslate has no mapping for locale "${locale}", skipping.`);
      continue;
    }

    const localeDir = path.join(BLOG_DIR, locale);
    if (!existsSync(localeDir)) mkdirSync(localeDir, { recursive: true });

    const existing = new Set(existsSync(localeDir) ? readdirSync(localeDir) : []);
    const missing = enFiles.filter((f) => !existing.has(f));

    if (missing.length === 0) {
      console.log(`✅ ${locale}: up to date (${enFiles.length} posts).`);
      continue;
    }

    console.log(`🌍 ${locale}: translating ${missing.length} missing post(s) via LibreTranslate...`);

    for (const file of missing) {
      const enRaw = readFileSync(path.join(enDir, file), 'utf-8');
      try {
        const translated = await translatePost(enRaw, locale);
        writeFileSync(path.join(localeDir, file), translated);
        console.log(`   ✅ ${locale}/${file}`);
      } catch (err: any) {
        console.error(`   ❌ ${locale}/${file}: ${err.message}`);
      }
    }
  }
}

main().catch((err) => {
  console.error('❌ translate-blog-i18n failed:', err.message);
  process.exit(1);
});
