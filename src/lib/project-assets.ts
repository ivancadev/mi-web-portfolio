import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projects/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

/**
 * Resuelve una imagen de proyecto por su nombre de archivo sin extensión.
 * Devuelve `undefined` si el archivo aún no existe (fallback a placeholder).
 */
export function getProjectImage(name?: string): ImageMetadata | undefined {
  if (!name) return undefined;
  const match = Object.entries(images).find(([path]) => {
    const file = path.split('/').pop() ?? '';
    return file.replace(/\.(png|jpe?g|webp|avif)$/i, '') === name;
  });
  return match?.[1].default;
}