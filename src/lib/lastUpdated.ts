import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const cache = new Map<string, string | null>();

/** ISO date (YYYY-MM-DD) of the last commit touching `target`, or null if git can't say. */
function commitDate(target: string): string | null {
  const rel = path.relative(root, path.resolve(root, target));
  if (cache.has(rel)) return cache.get(rel)!;

  let date: string | null = null;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', rel], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out;
  } catch {
    // git missing, not a repo, or a shallow clone carrying no history for this path
  }

  cache.set(rel, date);
  return date;
}

/**
 * Most recent commit date across the sources that produce a page, for dateModified.
 *
 * Takes repo-relative source paths — the page template itself, plus any data
 * modules it renders from. Paths must be literal strings, not `import.meta.url`:
 * templates are bundled into dist/chunks at build time, so a module's own runtime
 * URL no longer points at anything git tracks.
 *
 * Returns undefined when git has nothing to say, and callers omit dateModified
 * rather than substitute a guess — a fabricated freshness date is worse than an
 * absent one.
 *
 * Note this reflects commits, not edits: a formatting or lint-only commit touching
 * a template will move its date.
 */
export function lastUpdatedFor(...paths: string[]): string | undefined {
  const missing = paths.filter((p) => !existsSync(path.resolve(root, p)));
  if (missing.length > 0) {
    console.warn(`[lastUpdated] path does not exist (renamed?): ${missing.join(', ')}`);
  }

  const dates = paths.map(commitDate).filter((d): d is string => d !== null);

  if (dates.length === 0) {
    console.warn(`[lastUpdated] no git history for ${paths.join(', ')} — omitting dateModified`);
    return undefined;
  }

  return dates.sort().at(-1);
}
