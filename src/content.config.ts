// Definición de las Content Collections (ADR-003). Astro valida en build que
// cada archivo JSON de src/content cumpla el esquema Zod; si falta un campo
// obligatorio, el build falla con un error claro.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección "projects": un archivo JSON por proyecto (id = nombre del archivo).
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    category: z.enum(['web', 'mobile']),
    featured: z.boolean().default(false), // aparece como destacado en la home
    order: z.number().default(99), // orden manual (menor = antes)
    url: z.string().url().optional(), // demo pública (si existe)
    repo: z.string().url().optional(), // repositorio (si existe)
    cover: z.string().optional(), // nombre base de la imagen de portada
    // Galería de capturas; cada imagen lleva alt por idioma.
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

// Colección "profile": un único archivo con los datos personales.
const profile = defineCollection({
  loader: glob({ base: './src/content/profile', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    role_es: z.string(),
    role_en: z.string(),
    email: z.string().email(),
    location_es: z.string(),
    location_en: z.string(),
    photo: z.string().optional(), // foto del perfil (nombre de archivo)
    // Redes sociales (GitHub, LinkedIn...): label + url.
    socials: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      }),
    ),
    bio_es: z.array(z.string()).min(1),
    bio_en: z.array(z.string()).min(1),
    // Experiencia (el orden del array define el orden en el timeline).
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
    // Formación: status controla si se muestra "Completado" o "En curso".
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
    learning: z.array(z.string()), // tecnologías "en aprendizaje"
  }),
});

export const collections = { projects, profile };
