import { getCollection, getEntry, type CollectionEntry } from "astro:content";

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
  entry?: CollectionEntry<'blog'>;
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
      entry: post,
    } as MarkdownBlogPost;
  });

  // Sort posts by date
  return allPostsData.sort((a: MarkdownBlogPost, b: MarkdownBlogPost) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

export async function getBlogPostBySlug(slug: string, lang: string = "en"): Promise<MarkdownBlogPost | null> {
  try {
    const entry = await getEntry('blog', `${lang}/${slug}`);
    
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
      entry,
    } as MarkdownBlogPost;
  } catch (e) {
    throw new Error(`Blog post ${slug} not found in ${lang}`, { cause: e });
  }
}

export async function getBlogCategories(lang: string = "en"): Promise<string[]> {
  const posts = await getBlogPosts(lang);
  const categories = new Set(posts.map((post) => post.category));
  return ["All", ...Array.from(categories)];
}
