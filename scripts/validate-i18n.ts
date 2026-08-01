/**
 * Validates every locale file in src/i18n/locales against en.json.
 *
 * Catches the failure modes that broke the previous localization attempt:
 * missing keys, strings left in English, mangled interpolation placeholders,
 * and glossary terms that were translated when they should have been kept.
 *
 * Run: npm run validate-i18n            (all locales)
 *      npm run validate-i18n -- de      (one locale)
 *
 * Exits non-zero if any error-level problem is found, so it can gate a build.
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const LOCALES_DIR = 'src/i18n/locales';
const GLOSSARY_PATH = 'docs/i18n-glossary.md';
const SOURCE_LOCALE = 'en';

/** Strings that are legitimately identical across languages (brand names, symbols). */
const IDENTICAL_OK = /^[\s\d\p{P}\p{S}]*$|^(AppLass|MindfulGuard|Mindful Guard|ScreenVeil|FOMO ?Gen|Shopify|Android|iOS|Google Play|Reels?|Shorts|TikTok|Instagram|YouTube|Facebook|Snapchat|Opal|Freedom|AppBlock|Blog|VPN|SEO|API|CSS|HTML|WCAG|AMOLED|OLED)$/iu;

type Dict = Record<string, string>;

function load(locale: string): Dict {
  return JSON.parse(readFileSync(join(LOCALES_DIR, `${locale}.json`), 'utf-8'));
}

/** Placeholders are {name} — they must survive translation exactly. */
function placeholders(s: string): string[] {
  return (s.match(/\{[a-zA-Z0-9_]+\}/g) ?? []).sort();
}

/**
 * Reads the "Do not translate" section from the glossary.
 *
 * Also reads its "Locale exceptions" table, so a term that legitimately has an
 * established localization in one locale (Digital Wellbeing → Bien-être numérique
 * in French) is not reported against that locale while still being enforced
 * everywhere else.
 */
function loadGlossary(): { terms: string[]; exempt: Map<string, Set<string>> } {
  const empty = { terms: [], exempt: new Map<string, Set<string>>() };
  try {
    const md = readFileSync(GLOSSARY_PATH, 'utf-8');
    const section = md.split(/^##\s+Do not translate\s*$/m)[1]?.split(/^##\s/m)[0];
    if (!section) return empty;

    const [termsPart, exceptionsPart] = section.split(/^###\s+Locale exceptions\s*$/m);

    const terms = [...termsPart.matchAll(/^\|\s*`([^`]+)`/gm)].map((m) => m[1]);

    const exempt = new Map<string, Set<string>>();
    if (exceptionsPart) {
      for (const m of exceptionsPart.matchAll(/^\|\s*`([^`]+)`\s*\|\s*`([^`]+)`/gm)) {
        const [, term, locale] = m;
        if (!exempt.has(term)) exempt.set(term, new Set());
        exempt.get(term)!.add(locale);
      }
    }

    return { terms, exempt };
  } catch {
    return empty;
  }
}

function validate(
  locale: string,
  en: Dict,
  doNotTranslate: string[],
  exempt: Map<string, Set<string>>
) {
  const dict = load(locale);
  const errors: string[] = [];
  const warnings: string[] = [];

  const missing = Object.keys(en).filter((k) => !(k in dict));
  const extra = Object.keys(dict).filter((k) => !(k in en));

  if (missing.length) errors.push(`${missing.length} key(s) missing vs ${SOURCE_LOCALE}`);
  if (extra.length) warnings.push(`${extra.length} stale key(s) not in ${SOURCE_LOCALE}`);

  let untranslated = 0;
  for (const [key, source] of Object.entries(en)) {
    const value = dict[key];
    if (value === undefined) continue;

    if (!value.trim()) {
      errors.push(`empty value for ${key} ("${source.slice(0, 40)}")`);
      continue;
    }

    const want = placeholders(source);
    const got = placeholders(value);
    if (want.join() !== got.join()) {
      errors.push(
        `placeholder mismatch for ${key}: expected ${want.join(' ') || '(none)'}, got ${got.join(' ') || '(none)'}`
      );
    }

    if (value === source && !IDENTICAL_OK.test(source.trim())) {
      untranslated++;
    }

    for (const term of doNotTranslate) {
      if (exempt.get(term)?.has(locale)) continue;
      if (source.includes(term) && !value.includes(term)) {
        warnings.push(`"${term}" should be kept as-is but is absent in ${key}`);
      }
    }
  }

  if (untranslated) {
    warnings.push(`${untranslated} string(s) identical to ${SOURCE_LOCALE} — likely untranslated`);
  }

  return { errors, warnings, total: Object.keys(dict).length };
}

const requested = process.argv.slice(2);
const available = readdirSync(LOCALES_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => f.replace(/\.json$/, ''))
  .filter((l) => l !== SOURCE_LOCALE);

const targets = requested.length ? requested : available;
const en = load(SOURCE_LOCALE);
const { terms: doNotTranslate, exempt } = loadGlossary();

console.log(`Source ${SOURCE_LOCALE}.json: ${Object.keys(en).length} keys`);
if (doNotTranslate.length) {
  console.log(
    `Glossary: ${doNotTranslate.length} do-not-translate terms, ${exempt.size} with locale exceptions\n`
  );
}

let failed = false;

for (const locale of targets) {
  const { errors, warnings, total } = validate(locale, en, doNotTranslate, exempt);
  const status = errors.length ? 'FAIL' : warnings.length ? 'WARN' : 'OK';
  console.log(`[${status}] ${locale}.json — ${total} keys`);

  for (const e of errors.slice(0, 15)) console.log(`   error:   ${e}`);
  if (errors.length > 15) console.log(`   … and ${errors.length - 15} more errors`);
  for (const w of warnings.slice(0, 10)) console.log(`   warning: ${w}`);
  console.log();

  if (errors.length) failed = true;
}

process.exit(failed ? 1 : 0);
