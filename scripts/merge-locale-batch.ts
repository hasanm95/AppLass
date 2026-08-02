/**
 * Merges a batch of translations into a locale file.
 *
 * Translating ~1200 strings in one pass is unreliable, so translation is done in
 * batches and merged here. Existing values are overwritten only by keys present
 * in the batch; everything else is left untouched, so batches are order-independent
 * and safe to re-run.
 *
 * Usage: tsx scripts/merge-locale-batch.ts <locale> <batch.json>
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const [locale, batchPath] = process.argv.slice(2);

if (!locale || !batchPath) {
  console.error('usage: tsx scripts/merge-locale-batch.ts <locale> <batch.json>');
  process.exit(1);
}

const localePath = join('src/i18n/locales', `${locale}.json`);
const en: Record<string, string> = JSON.parse(readFileSync('src/i18n/locales/en.json', 'utf-8'));
const batch: Record<string, string> = JSON.parse(readFileSync(batchPath, 'utf-8'));

const current: Record<string, string> = existsSync(localePath)
  ? JSON.parse(readFileSync(localePath, 'utf-8'))
  : {};

const unknown = Object.keys(batch).filter((k) => !(k in en));
if (unknown.length) {
  console.error(`refusing to merge — ${unknown.length} key(s) not in en.json:`);
  for (const k of unknown.slice(0, 10)) console.error(`  ${k}`);
  process.exit(1);
}

let added = 0;
let changed = 0;
for (const [key, value] of Object.entries(batch)) {
  if (!(key in current)) added++;
  else if (current[key] !== value) changed++;
  current[key] = value;
}

// Keep key order aligned with en.json so diffs stay readable.
const ordered: Record<string, string> = {};
for (const key of Object.keys(en)) if (key in current) ordered[key] = current[key];
for (const key of Object.keys(current)) if (!(key in ordered)) ordered[key] = current[key];

writeFileSync(localePath, JSON.stringify(ordered, null, 2) + '\n');

const done = Object.keys(ordered).length;
const total = Object.keys(en).length;
console.log(
  `${locale}.json — merged ${Object.keys(batch).length} (${added} new, ${changed} revised)  →  ${done}/${total} keys (${Math.round((done / total) * 100)}%)`
);
