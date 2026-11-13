import { i18nConfig } from './config';

/**
 * Href for a site-chrome link (navbar, footer, breadcrumb home) that is
 * locale-aware but degrades for content-only locales.
 *
 * Full-UI locales (en/fr/de) behave exactly like localePath().
 *
 * A content-only locale (e.g. es, which only has blog posts) has no home, apps,
 * docs or marketing pages, so linking localePath('es', '/about') would point at
 * a page getStaticPaths never builds — a 404. For those locales:
 *   - '/' (home) and '/blog' both resolve to the localized blog index, which is
 *     the only hub that exists in that language;
 *   - '/blog/...' stays in-locale;
 *   - everything else falls back to the default locale, because that content
 *     only exists in English.
 */
export function chromePath(lang: string, path: string = '/') {
  const isUiLocale = (i18nConfig.uiLocales as readonly string[]).includes(lang);
  if (isUiLocale) return localePath(lang, path);

  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/' || normalized === '/blog') return localePath(lang, '/blog');
  if (normalized.startsWith('/blog/')) return localePath(lang, normalized);
  return localePath(i18nConfig.defaultLocale, normalized);
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && i18nConfig.locales.includes(lang as any)) {
    return lang;
  }
  return i18nConfig.defaultLocale;
}

/**
 * Build a locale-aware href for use in links.
 * - Default locale (en): returns clean path, no prefix.
 *   localePath('en', '/about') → '/about'
 * - Other locales: prepends /{lang}.
 *   localePath('fr', '/about') → '/fr/about'
 *
 * The middleware then rewrites /about → /en/about internally at request time.
 */
export function localePath(lang: string, path: string = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (lang === i18nConfig.defaultLocale) return normalized;
  
  // Avoid trailing slash for root localized paths (e.g., return /fr instead of /fr/)
  const pathPart = normalized === '/' ? '' : normalized;
  return `/${lang}${pathPart}`;
}

/**
 * Creates a translation function `t('path.to.key')` from a loaded dictionary.
 */
export function useTranslations(dict: any) {
  return function t(key: string): string | any {
    return key.split('.').reduce((obj, k) => (obj || {})[k], dict) || key;
  };
}
