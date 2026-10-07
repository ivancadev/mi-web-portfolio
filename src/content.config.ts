import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    category: z.enum(['web', 'mobile']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    cover: z.string().optional(),
    screenshots: z
      .array(
        z.object({
          name: z.string(),
          alt_es: z.string(),
          alt_en: z.string(),
        }),
      )
      .default([]),
    stack: z.array(z.string()).min(1),
    summary_es: z.string(),
    summary_en: z.string(),
    problem_es: z.string(),
    problem_en: z.string(),
    role_es: z.string(),
    role_en: z.string(),
    features_es: z.array(z.string()).min(1),
    features_en: z.array(z.string()).min(1),
  }),
});

const profile = defineCollection({
  loader: glob({ base: './src/content/profile', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    role_es: z.string(),
    role_en: z.string(),
    email: z.string().email(),
    location_es: z.string(),
    location_en: z.string(),
    socials: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      }),
    ),
    bio_es: z.array(z.string()).min(1),
    bio_en: z.array(z.string()).min(1),
    experience: z.array(
      z.object({
        company: z.string(),
        role_es: z.string(),
        role_en: z.string(),
        period: z.string().optional(),
        summary_es: z.string(),
        summary_en: z.string(),
        highlights_es: z.array(z.string()).default([]),
        highlights_en: z.array(z.string()).default([]),
      }),
    ),
    education: z.array(
      z.object({
        title_es: z.string(),
        title_en: z.string(),
        period: z.string(),
        status: z.enum(['completed', 'in-progress']),
      }),
    ),
    certs: z.array(
      z.object({
        name: z.string(),
        issuer: z.string(),
        focus_es: z.string(),
        focus_en: z.string(),
      }),
    ),
    learning: z.array(z.string()),
  }),
});

export const collections = { projects, profile };
