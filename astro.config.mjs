// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: "https://applass.com",
  trailingSlash: "never",
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  vite: {
    plugins: [
      // @ts-expect-error - Vite plugin types mismatch between Tailwind CSS v4 and Astro's bundled Vite
      tailwindcss(),
    ]
  },
  build: {
    inlineStylesheets: "always",
  }
});