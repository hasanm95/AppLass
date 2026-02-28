import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    author: z.string(),
    featured: z.boolean().optional().default(false),
    excerpt: z.string(),
    thumbnail: image().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional().default([]),
  }),
});

export const collections = { blog };
