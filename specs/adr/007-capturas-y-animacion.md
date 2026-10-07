# ADR-007: Capturas de proyecto y animación de aparición

- Estado: Aceptado
- Fecha: 2026-07-10

## Contexto

Dos necesidades de Fase 4:
1. Las tarjetas y páginas de detalle usaban placeholders de color con iniciales; faltaban capturas reales de Kakebo y Ligera.
- Se quería dar dinamismo a la página, con secciones que aparecen al hacer scroll.

## Decisión

### Capturas
- Las imágenes las aporta el autor (mejor calidad y control) en `src/assets/projects/`, con nombres `<slug>-cover.<ext>` y `<slug>-N.<ext>`.
- Se procesan con `astro:assets` (`<Image>`) para optimización automática a WebP y servicios responsive.
- Resolución mediante `import.meta.glob` en `src/lib/project-assets.ts`; si la imagen no existe, se cae al placeholder de degradado con iniciales (sin romper el build).
- El schema de `projects` incorpora `cover` y `screenshots[]` con `alt_es`/`alt_en`; se elimina el flag redundante `has_screenshots` (estado derivado de las imágenes resueltas).

### Animación
- Aparición al hacer scroll con `IntersectionObserver` (vanilla, sin dependencias) en `src/scripts/reveal.ts`.
- Progressive enhancement: los elementos solo se ocultan bajo `.js`; sin JS o con `prefers-reduced-motion: reduce` se muestran siempre.
- Stagger por índice (`--reveal-index`) en grids y timeline; el hero se excluye para no penalizar el LCP.

## Consecuencias
- Positivo: sitio más vivo, imágenes optimizadas, accesibilidad preservada, 0 dependencias nuevas.
- Negativo: el autor debe nombrar los archivos según convención; hasta entonces se ven placeholders.

## Alternativas descartadas
- Capturas automáticas con Playwright: añade dependencia pesada y frágil.
- Servicio externo de screenshots: dependencia de terceros y peor rendimiento.
- Animación con librería (GSAP/Framer/AOS): innecesaria para este alcance.