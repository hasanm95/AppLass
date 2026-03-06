import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { globSync } from 'glob';
import crc32 from 'crc-32';

const EN_PATH = 'src/i18n/locales/en.json';

let existing: Record<string, string> = {};
try {
  existing = JSON.parse(readFileSync(EN_PATH, 'utf-8'));
} catch {
  existing = {};
}

const extracted: Record<string, string> = {};

const files = globSync('src/**/*.{astro,ts,tsx,js,jsx}');

for (const file of files) {
  const content = readFileSync(file, 'utf-8');

  // Match: localize('text') or localize("text")
  const fnMatches = content.matchAll(/localize\(\s*['"`]([^'"`]+)['"`]/g);
  // Match: i18n_default_text="text" or i18n_default_text={'text'}
  const compMatches = content.matchAll(/i18n_default_text=["'{`]([^"'}`]+)["'`}]/g);

  for (const [, text] of [...fnMatches, ...compMatches]) {
    const key = crc32.str(text).toString();

    if (extracted[key] && extracted[key] !== text) {
      console.warn(`⚠️  Collision detected: "${text}" collides with "${extracted[key]}" on key ${key}`);
    }

    extracted[key] = text;
  }
}

// Existing translator edits take priority over newly extracted defaults
const merged = { ...extracted, ...existing };

mkdirSync('src/i18n/locales', { recursive: true });
writeFileSync(EN_PATH, JSON.stringify(merged, null, 2));
console.log(`✅ Extracted ${Object.keys(extracted).length} strings → ${EN_PATH}`);
