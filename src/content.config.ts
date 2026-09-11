import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Dates land in BlogPosting JSON-LD and og:article meta, both of which require
// ISO 8601. Validate here so a stray format fails the build instead of shipping
// unparseable structured data.
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be ISO 8601 (YYYY-MM-DD)');

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './src/content/blog' }),
  // strict() so a misnamed key (e.g. updatedAt instead of dateModified) errors
  // rather than being silently dropped.
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: isoDate,
    category: z.string(),
    author: z.string(),
    dateModified: isoDate.optional(),
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
  }).strict(),
});

export const collections = { blog };
