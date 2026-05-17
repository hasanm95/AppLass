// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  site: "https://applass.com",
  trailingSlash: "never",
  integrations: [react(), sitemap(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  build: {
    inlineStylesheets: "always",
  }
});