import { defineRouting } from "next-intl/routing";
import { i18nConfig } from "./config";

export const routing = defineRouting({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  // We handle prefixless default locale via a custom strategy
  // but for the library routing itself, we follow standard config.
  localePrefix: "as-needed",
});
