import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { SECTIONS } from './consts';

const sectionSlugs = SECTIONS.map((s) => s.slug) as [string, ...string[]];

/**
 * The core knowledge base. Each article lives in
 * src/content/articles/**\/*.{md,mdx} and is grouped by its `section`
 * frontmatter into /{section}/{slug}.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    /** 150–160 chars is the SEO sweet spot; used for meta + OG description. */
    description: z.string(),
    /** Must match a section slug in consts.ts. */
    section: z.enum(sectionSlugs),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** True when the article leans on first-hand Quincy documentation. */
    quincyFeatured: z.boolean().default(false),
    /** Referenced sources — part of the E-E-A-T / research strategy. */
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .default([]),
    /** Draft articles are excluded from production builds. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
