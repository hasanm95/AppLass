import { i18nConfig } from './config';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && i18nConfig.locales.includes(lang as any)) {
    return lang;
  }
  return i18nConfig.defaultLocale;
}
