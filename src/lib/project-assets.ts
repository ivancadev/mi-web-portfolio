// Resuelve las imágenes de proyecto guardadas en src/assets/projects/.
// Se usa `import.meta.glob` para que Astro las procese con astro:assets
// (optimización, WebP, dimensiones) al importarlas desde los componentes.
import type { ImageMetadata } from 'astro';

// Mapa { ruta → módulo } con todas las imágenes disponibles en la carpeta.
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projects/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

/**
 * Devuelve la imagen de un proyecto por su nombre de archivo (sin extensión).
 * Ej.: getProjectImage('kakebo-cover') → ImageMetadata
 * Devuelve `undefined` si el archivo aún no existe, para caer al placeholder.
 */
export function getProjectImage(name?: string): ImageMetadata | undefined {
  if (!name) return undefined;
  const match = Object.entries(images).find(([path]) => {
    const file = path.split('/').pop() ?? '';
    return file.replace(/\.(png|jpe?g|webp|avif)$/i, '') === name;
  });
  return match?.[1].default;
}