# ADR-004: CSS con tokens propios (sin Tailwind/uikit)

- **Estado:** Aceptado
- **Fecha:** 2026-10-07

## Contexto

Portfolio con dirección visual propia ("original y moderno") y requisito de mantenerlo documentado y especificado.

## Decisión

CSS a mano con **variables custom** (`tokens.css`) + `global.css` con reset ligero. Componentes `.astro` con `<style scoped>`.

- Tokens: colores, tipografía (fuentes via `fontsource` o system stack), escala modular, espaciado, radios, sombras, motion.
- Sin Tailwind ni frameworks CSS: evita dependencias y mantiene el design system explícito en tokens (alineado con SDD).

## Consecuencias

- ✅ Control total, cero CSS residual, tokens documentados en spec.
- ✅ Cambiar la dirección visual = cambiar tokens (bajo riesgo si ADR-002 cambia).
- ⚠️ Más escritura manual que con utilidades; aceptable para 4 secciones.

## Alternativas descartadas

- **Tailwind:** rapido pero acopla el diseño a clases utilitarias y añade build step; contraproducente si el estilo aún está en evaluación.
- **Sass/Less:** innecesario con CSS moderno (nesting nativo, `@layer`).
