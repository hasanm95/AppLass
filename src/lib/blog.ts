import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "blogs");

export interface MarkdownBlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  thumbnail: string;
  content: string;
  featured?: boolean;
  faqs?: { question: string; answer: string }[];
}

export function getBlogPosts(lang: string = "en"): MarkdownBlogPost[] {
  const dirPath = path.join(blogsDirectory, lang);

  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title,
        date: data.date,
        category: data.category,
        author: data.author,
        excerpt: data.excerpt,
        thumbnail: data.thumbnail,
        featured: data.featured || false,
        faqs: data.faqs || [],
      } as MarkdownBlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

export function getBlogPostBySlug(slug: string, lang: string = "en"): MarkdownBlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, lang, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      category: data.category,
      author: data.author,
      excerpt: data.excerpt,
      thumbnail: data.thumbnail,
      featured: data.featured || false,
      faqs: data.faqs || [],
    } as MarkdownBlogPost;
  } catch (e) {
    throw new Error(`Blog post ${slug} not found in ${lang}`, { cause: e });
  }
}

export function getBlogCategories(lang: string = "en"): string[] {
  const posts = getBlogPosts(lang);
  const categories = new Set(posts.map((post) => post.category));
  return ["All", ...Array.from(categories)];
}
