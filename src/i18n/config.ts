export const i18nConfig = {
  defaultLocale: "en",
  // Top 10 languages by internet users, plus Bengali.
  locales: ["en", "zh", "es", "ar", "id", "pt", "fr", "ja", "ru", "de", "bn"],
  rtlLocales: ["ar"],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

export const localeMeta: Record<
  Locale,
  { fullLabel: string; englishName: string; ogLocale: string }
> = {
  en: { fullLabel: "English", englishName: "English", ogLocale: "en_US" },
  zh: { fullLabel: "中文", englishName: "Chinese", ogLocale: "zh_CN" },
  es: { fullLabel: "Español", englishName: "Spanish", ogLocale: "es_ES" },
  ar: { fullLabel: "العربية", englishName: "Arabic", ogLocale: "ar_SA" },
  id: { fullLabel: "Bahasa Indonesia", englishName: "Indonesian", ogLocale: "id_ID" },
  pt: { fullLabel: "Português", englishName: "Portuguese", ogLocale: "pt_PT" },
  fr: { fullLabel: "Français", englishName: "French", ogLocale: "fr_FR" },
  ja: { fullLabel: "日本語", englishName: "Japanese", ogLocale: "ja_JP" },
  ru: { fullLabel: "Русский", englishName: "Russian", ogLocale: "ru_RU" },
  de: { fullLabel: "Deutsch", englishName: "German", ogLocale: "de_DE" },
  bn: { fullLabel: "বাংলা", englishName: "Bengali", ogLocale: "bn_BD" },
};

export function isRtl(locale: string): boolean {
  return (i18nConfig.rtlLocales as readonly string[]).includes(locale);
}
