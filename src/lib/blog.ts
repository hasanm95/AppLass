import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { i18nConfig } from "@/i18n/config";
import { localePath } from "@/i18n/utils";

/**
 * Locale-aware href for a blog post, falling back to the default locale when that
 * translation does not exist.
 *
 * localePath() alone assumes every locale has every post. That holds for en/fr but
 * not for partially translated locales, where it produces links to pages the
 * getStaticPaths guard deliberately never builds — i.e. guaranteed 404s.
 */
export async function blogPath(lang: string, slug: string): Promise<string> {
  const translated = await getEntry("blog", `${lang}/${slug}`);
  const target = translated ? lang : i18nConfig.defaultLocale;
  return localePath(target, `/blog/${slug}`);
}

/**
 * Locales that actually have this post, for hreflang.
 *
 * Declaring an hreflang alternate for a locale that was never built points search
 * engines at a 404, so the alternate set has to match what getStaticPaths produced.
 */
export async function localesForPost(slug: string): Promise<string[]> {
  const present = await Promise.all(
    i18nConfig.locales.map(async (locale) =>
      (await getEntry("blog", `${locale}/${slug}`)) ? locale : null
    )
  );
  return present.filter((l): l is string => l !== null);
}

export interface MarkdownBlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  thumbnail: { src: string; width: number; height: number; format: string } | string;
  content: string;
  featured?: boolean;
  faqs?: { question: string; answer: string }[];
  dateModified?: string;
  entry?: CollectionEntry<'blog'>;
  keywords?: string;
  tags?: string[];
  breadcrumbName?: string;
  sidebarApps?: string[];
  ogImage?: string;
}

export async function getBlogPosts(lang: string = "en"): Promise<MarkdownBlogPost[]> {
  const posts = await getCollection('blog', (entry: CollectionEntry<'blog'>) => entry.id.startsWith(`${lang}/`));

  const allPostsData = posts.map((post: CollectionEntry<'blog'>) => {
    const slug = post.id.replace(`${lang}/`, "");
    return {
      slug,
      content: post.body || "",
      title: post.data.title,
      date: post.data.date,
      category: post.data.category,
      author: post.data.author,
      excerpt: post.data.excerpt,
      thumbnail: post.data.thumbnail || "",
      featured: post.data.featured || false,
      faqs: post.data.faqs || [],
      dateModified: post.data.dateModified,
      entry: post,
      keywords: post.data.keywords,
      tags: post.data.tags || [],
      breadcrumbName: post.data.breadcrumbName,
      sidebarApps: post.data.sidebarApps || [],
      ogImage: post.data.ogImage,
    } as MarkdownBlogPost;
  });

  // Sort posts by date
  return allPostsData.sort((a: MarkdownBlogPost, b: MarkdownBlogPost) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

export async function getBlogPostBySlug(slug: string, lang: string = "en"): Promise<MarkdownBlogPost | null> {
  try {
    let entry = await getEntry('blog', `${lang}/${slug}`);

    if (!entry && lang !== "en") {
      entry = await getEntry('blog', `en/${slug}`);
    }

    if (!entry) return null;

    return {
      slug,
      content: entry.body || "",
      title: entry.data.title,
      date: entry.data.date,
      category: entry.data.category,
      author: entry.data.author,
      excerpt: entry.data.excerpt,
      thumbnail: entry.data.thumbnail || "",
      featured: entry.data.featured || false,
      faqs: entry.data.faqs || [],
      dateModified: entry.data.dateModified,
      entry,
      keywords: entry.data.keywords,
      tags: entry.data.tags || [],
      breadcrumbName: entry.data.breadcrumbName,
      sidebarApps: entry.data.sidebarApps || [],
      ogImage: entry.data.ogImage,
    } as MarkdownBlogPost;
  } catch (e) {
    console.error(`Error loading blog post ${slug} for ${lang}`, e);
    return null;
  }
}

import { localize } from "@/i18n/localize";

export async function getBlogCategories(lang: string = "en"): Promise<string[]> {
  const posts = await getBlogPosts(lang);
  const categories = new Set(posts.map((post) => localize(post.category)));
  return [localize("All"), ...Array.from(categories)];
}
