// Resuelve las imágenes del perfil guardadas en src/assets/profile/.
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/profile/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

export function getProfileImage(name?: string): ImageMetadata | undefined {
  if (!name) return undefined;
  const match = Object.entries(images).find(([path]) => {
    const file = path.split('/').pop() ?? '';
    return file.replace(/\.(png|jpe?g|webp|avif)$/i, '') === name;
  });
  return match?.[1].default;
}