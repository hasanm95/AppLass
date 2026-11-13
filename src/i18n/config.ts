export const i18nConfig = {
  defaultLocale: "en",
  // Every locale the site recognises: used for blog content, hreflang, the
  // language switcher and Astro's i18n routing.
  locales: ["en", "fr", "de", "es"],
  // Locales with a fully translated marketing/UI shell (home, apps, docs,
  // compare, legal, about). Static pages build only for these, so a
  // content-only locale like `es` (blog-first rollout) never publishes
  // English-text pages under its own URL. Promote a locale here once its
  // marketing pages are translated.
  uiLocales: ["en", "fr", "de"],
  rtlLocales: [],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

export const localeMeta: Record<
  Locale,
  { fullLabel: string; englishName: string; ogLocale: string }
> = {
  en: { fullLabel: "English", englishName: "English", ogLocale: "en_US" },
  fr: { fullLabel: "Français", englishName: "French", ogLocale: "fr_FR" },
  de: { fullLabel: "Deutsch", englishName: "German", ogLocale: "de_DE" },
  es: { fullLabel: "Español", englishName: "Spanish", ogLocale: "es_ES" },
};

export function isRtl(locale: string): boolean {
  return (i18nConfig.rtlLocales as readonly string[]).includes(locale);
}
