import { i18nConfig } from './config';

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
  return `/${lang}${normalized}`;
}

/**
 * Creates a translation function `t('path.to.key')` from a loaded dictionary.
 */
export function useTranslations(dict: any) {
  return function t(key: string): string | any {
    return key.split('.').reduce((obj, k) => (obj || {})[k], dict) || key;
  };
}
