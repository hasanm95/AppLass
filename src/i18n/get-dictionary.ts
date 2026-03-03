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

type SchemaMetadata = {
  organizationDescription: string;
  screenveilDescription: string;
  fomogenDescription: string;
  mindfulGuardDescription: string;
};

type EnDictionary = Omit<typeof rawEnDictionary, 'metadata'> & {
  common: {
    selectLanguage: string;
  };
  metadata: Record<string, SEOMetadata | any> & {
    siteName: string;
    default: SEOMetadata;
    schema: SchemaMetadata;
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
