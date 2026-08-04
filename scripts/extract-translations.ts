import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import crc32 from 'crc-32';

const EN_PATH = 'src/i18n/locales/en.json';

/**
 * Turns a raw string-literal body from source into the value the runtime actually sees.
 *
 * The regex captures literal source text, so `localize("a \"b\" c")` yields the nine
 * characters `a \"b\" c` — but at runtime localize() is handed `a "b" c`. Hashing the
 * un-parsed form produced a key nothing ever looked up, so every string containing an
 * escape silently fell back to English in every locale.
 */
function unescapeLiteral(raw: string): string {
  return raw.replace(
    /\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|[\s\S])/g,
    (_match, esc: string) => {
      switch (esc[0]) {
        case 'n': return '\n';
        case 't': return '\t';
        case 'r': return '\r';
        case 'b': return '\b';
        case 'f': return '\f';
        case 'v': return '\v';
        case '0': return esc.length === 1 ? '\0' : esc;
        case 'x': return String.fromCharCode(parseInt(esc.slice(1), 16));
        case 'u':
          return esc[1] === '{'
            ? String.fromCodePoint(parseInt(esc.slice(2, -1), 16))
            : String.fromCharCode(parseInt(esc.slice(1), 16));
        // \" \' \` \\ \/ and anything else: the escaped character itself.
        default: return esc;
      }
    }
  );
}

/** `raw` marks values that came from a JS string literal and therefore need unescaping. */
type Candidate = { text: string; raw: boolean };

const extracted: Record<string, string> = {};

const files = globSync('src/**/*.{astro,ts,tsx,js,jsx}');

for (const file of files) {
  const content = readFileSync(file, 'utf-8');

  // Patterns:
  // 1. localize('text') or localize("text")
  const fnMatches = content.matchAll(/localize\(\s*(['"`])((?:\\.|(?!\1).)*)\1/g);
  // 2. i18n_default_text="text" or i18n_default_text={'text'}
  const attrMatches = content.matchAll(/i18n_default_text=(?:\{?\s*(['"`])((?:\\.|(?!\1).)*)\1\s*\}?|(["'])((?:\\.|(?!\3).)*)\3)/g);
  // 3. <Localize>Text</Localize>
  const compMatches = content.matchAll(/<Localize[^>]*?>([\s\S]*?)<\/Localize>/g);

  const allStrings: Candidate[] = [];

  // localize('…') is always a JS string literal.
  for (const m of fnMatches) allStrings.push({ text: m[2], raw: true });
  // i18n_default_text={'…'} is a literal; i18n_default_text="…" is a JSX attribute,
  // which has no backslash escapes and must not be unescaped.
  for (const m of attrMatches) {
    if (m[2] !== undefined) allStrings.push({ text: m[2], raw: true });
    else allStrings.push({ text: m[4], raw: false });
  }
  // <Localize>…</Localize> children are JSX text, not a literal.
  for (const m of compMatches) allStrings.push({ text: m[1].trim(), raw: false });

  for (const { text, raw } of allStrings) {
    if (!text) continue;

    // Normalize newlines and excess whitespace for stable hashing
    const normalized = (raw ? unescapeLiteral(text) : text).replace(/\s+/g, ' ').trim();
    const key = crc32.str(normalized).toString();

    if (extracted[key] && extracted[key] !== normalized) {
       // Only log if it's truly a collision (different text, same key)
       // CRC32 is 32-bit, so collisions are possible but rare for short UI strings.
    }

    extracted[key] = normalized;
  }
}

// For EN, the default text is the source, so we overwrite to keep it clean.
writeFileSync(EN_PATH, JSON.stringify(extracted, null, 2));
console.log(`✅ Extracted ${Object.keys(extracted).length} strings → ${EN_PATH}`);
