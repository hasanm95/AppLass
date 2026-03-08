import { readFileSync, writeFileSync } from 'fs';
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

  // Patterns:
  // 1. localize('text') or localize("text")
  const fnMatches = content.matchAll(/localize\(\s*(['"`])([\s\S]*?)\1/g);
  // 2. i18n_default_text="text" or i18n_default_text={'text'}
  const attrMatches = content.matchAll(/i18n_default_text=(?:\{?\s*(['"`])([\s\S]*?)\1\s*\}?|(["'])([^"']+)\3)/g);
  // 3. <Localize>Text</Localize>
  const compMatches = content.matchAll(/<Localize[^>]*?>([\s\S]*?)<\/Localize>/g);

  const allStrings: string[] = [];
  
  for (const m of fnMatches) allStrings.push(m[2]);
  for (const m of attrMatches) allStrings.push(m[2] || m[4]);
  for (const m of compMatches) allStrings.push(m[1].trim());

  for (const text of allStrings) {
    if (!text) continue;
    
    // Normalize newlines and excess whitespace for stable hashing
    const normalized = text.replace(/\s+/g, ' ').trim();
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
