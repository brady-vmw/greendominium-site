import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const credit = z.object({
  name: z.string(),
  url: z.string().url().optional(),
  role: z.string().optional(),
});

/**
 * Example homes — drop a markdown file (and images) in src/content/examples/.
 * Architect and greenhouse maker are required. Fields follow docs/profile-schema.md.
 */
const examples = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/examples' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      location: z.string(),
      climate: z.string(),
      greenhouse: z.string(),
      houseInside: z.string(),
      uniqueFeatures: z.array(z.string()).min(1),
      status: z.string(),
      credits: z.object({
        architect: credit,
        greenhouseMaker: credit,
        builders: z.array(credit).default([]),
        photos: z.array(credit).min(1),
      }),
      sources: z.array(
        z.object({
          title: z.string(),
          url: z.string().url(),
        }),
      ),
      hero: image(),
      gallery: z.array(image()).default([]),
      hook: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

export const collections = { examples };
