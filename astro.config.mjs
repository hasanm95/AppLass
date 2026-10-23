// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { readdirSync, readFileSync } from "node:fs";

// <lastmod> for blog posts, read from frontmatter, so Google re-crawls a post
// when its dateModified changes instead of treating every URL as undated.
const BLOG_DIR = "./src/content/blog";
const blogLastmod = new Map();
for (const lang of readdirSync(BLOG_DIR)) {
  if (lang.startsWith(".")) continue;
  for (const file of readdirSync(`${BLOG_DIR}/${lang}`)) {
    if (!/\.mdx?$/.test(file) || file.startsWith("_")) continue;
    const fm = readFileSync(`${BLOG_DIR}/${lang}/${file}`, "utf8").split("---")[1] || "";
    const date = (fm.match(/^dateModified:\s*"?(\d{4}-\d{2}-\d{2})/m) || fm.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})/m))?.[1];
    const prefix = lang === "en" ? "" : `/${lang}`;
    if (date) blogLastmod.set(`https://applass.com${prefix}/blog/${file.replace(/\.mdx?$/, "")}`, date);
  }
}


// https://astro.build/config
export default defineConfig({
  site: "https://applass.com",
  trailingSlash: "never",
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const date = blogLastmod.get(item.url.replace(/\/$/, ""));
        if (date) item.lastmod = new Date(`${date}T00:00:00Z`).toISOString();
        return item;
      },
    }),
    mdx(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de"],
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