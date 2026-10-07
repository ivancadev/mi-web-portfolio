# ADR-001: Astro como framework + i18n nativo

- **Estado:** Aceptado
- **Fecha:** 2026-10-07

## Contexto

Portfolio bilingüe (ES/EN), principalmente estático, con 4 secciones y contenido gestionable. Se quiere máximo rendimiento, SEO sólido y mínimo JS.

## Decisión

Usar **Astro con SSG** y su sistema de **i18n nativo**:

- `defaultLocale: 'es'` → `/` es español; `/en/…` inglés.
- Content Collections para proyectos y perfil.
- JavaScript solo en islands (toggle de idioma no lo requiere; es enlace).

## Consecuencias

- ✅ HTML mínimo sin JS, ideal para RNF-04 y Lighthouse.
- ✅ hreflang/alternates soportados nativamente.
- ✅ TypeScript estricto de serie.
- ⚠️ Si en el futuro se necesita mucho estado/interactividad, valorar React/Vue islands.

## Alternativas descartadas

- **Next.js:** dinamismo innecesario, más peso y complejidad.
- **HTML/JS vanilla:** i18n, SEO y contenido manual → más trabajo y errores.
- **Vite SPA:** peor SEO y requiere JS para ver contenido.
