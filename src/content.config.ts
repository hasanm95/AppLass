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
    // Steps for HowTo JSON-LD. The body already carries the numbered list a reader
    // sees; this is the machine-readable copy of it, because nothing can reliably
    // parse prose steps back out of rendered MDX. Keep the two in sync.
    howTo: z.object({
      // Defaults to the post title when omitted.
      name: z.string().optional(),
      // ISO 8601 duration, e.g. PT2M. schema.org wants this shape, not "2 minutes".
      totalTime: z.string().regex(/^PT(?:\d+H)?(?:\d+M)?(?:\d+S)?$/, 'must be an ISO 8601 duration, e.g. PT2M').optional(),
      steps: z.array(z.object({
        name: z.string(),
        text: z.string(),
      })).min(2, 'a HowTo needs at least two steps'),
    }).optional(),
    breadcrumbName: z.string().optional(),
    sidebarApps: z.array(z.string()).optional().default([]),
  }).strict(),
});

export const collections = { blog };
