import type { Locale } from "./config";
import rawEnDictionary from "./dictionaries/en.json";

type SEOMetadata = {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
};

type EnDictionary = Omit<typeof rawEnDictionary, 'metadata'> & {
  metadata: {
    [K in keyof typeof rawEnDictionary.metadata]: K extends 'siteName' ? string : SEOMetadata;
  };
};

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default as unknown as EnDictionary),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default as unknown as EnDictionary),
};

export type Dictionary = EnDictionary;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
