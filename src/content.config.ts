import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    category: z.string(),
    author: z.string(),
    dateModified: z.string().optional(),
    featured: z.boolean().optional().default(false),
    excerpt: z.string(),
    thumbnail: image().optional(),
    keywords: z.string().optional(),
    ogImage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional().default([]),
    breadcrumbName: z.string().optional(),
    sidebarApps: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog };
