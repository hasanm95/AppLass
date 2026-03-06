import i18n from 'i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
});

export const setLocale = (locale: string) => i18n.changeLanguage(locale);

export { i18n };
