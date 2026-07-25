import i18n from 'i18next';

const localeModules = import.meta.glob('./locales/*.json', { eager: true }) as Record<
  string,
  { default: Record<string, string> }
>;

const resources: Record<string, { translation: Record<string, string> }> = {};
for (const path in localeModules) {
  const locale = path.match(/([^/]+)\.json$/)?.[1];
  if (!locale) continue;
  resources[locale] = { translation: localeModules[path].default };
}

i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
    prefix: '{',
    suffix: '}',
  },
});

export const setLocale = (locale: string) => i18n.changeLanguage(locale);

export { i18n };
