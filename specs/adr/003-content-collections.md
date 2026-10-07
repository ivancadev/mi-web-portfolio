# ADR-003: Contenido en Content Collections

- **Estado:** Aceptado
- **Fecha:** 2026-10-07

## Contexto

Proyectos y bio deben ser editables sin tocar componentes, con tipado y validación, y soportar traducción ES/EN.

## Decisión

Usar **Content Collections** de Astro con Zod schemas:

- `projects/`: título, slug, resumen (ES/EN), stack[], año, destacado, enlaces (demo/repo), imagen, orden.
- `profile/`: bio (ES/EN), nombre, rol, enlaces sociales, foto, capacidades agrupadas.

Los textos de UI (botones, nav, labels) van en diccionarios `src/i18n/es.ts` y `en.ts`.

## Consecuencias

- ✅ Validación en build: si falta un campo o traducción, falla el build.
- ✅ Añadir un proyecto = añadir un archivo `.md`.
- ⚠️ Traducciones duplicadas en frontmatter (`summary_es` / `summary_en`) — aceptado por simplicidad frente a rutas por idioma separadas.
