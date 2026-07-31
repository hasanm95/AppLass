export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "fr"],
  rtlLocales: [],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

export const localeMeta: Record<
  Locale,
  { fullLabel: string; englishName: string; ogLocale: string }
> = {
  en: { fullLabel: "English", englishName: "English", ogLocale: "en_US" },
  fr: { fullLabel: "Français", englishName: "French", ogLocale: "fr_FR" },
};

export function isRtl(locale: string): boolean {
  return (i18nConfig.rtlLocales as readonly string[]).includes(locale);
}
