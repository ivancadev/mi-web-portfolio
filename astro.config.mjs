// @ts-check
// Configuración de Astro: sitio estático, sitemap automático y i18n ES/EN.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio de producción (usado por el sitemap y las URLs canónicas).
  site: 'https://ivan-cano-portfolio.vercel.app',
  integrations: [sitemap()],
  // i18n: español por defecto (sin prefijo) e inglés bajo /en/.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
