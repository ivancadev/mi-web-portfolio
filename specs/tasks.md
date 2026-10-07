# Tasks — Estado de tareas

Leyenda: `⬜` pendiente · `🔁` en curso · `✅` completada · `❌` cancelada

## Fase 0 — Inicialización SDD ✅
- ✅ git init
- ✅ Estructura `specs/` + `specs/adr/`
- ✅ `.gitignore`
- ✅ `specs/README.md` (reglas del flujo)

## Fase 1 — Especificación ✅
- ✅ `spec.md` (requisitos, secciones, i18n, criterios)
- ✅ `plan.md` (stack, estructura, fases)
- ✅ `tasks.md` (este archivo)
- ✅ ADR-001 Astro + i18n nativo
- ✅ ADR-002 Dirección visual dark premium (tentativo)
- ✅ ADR-003 Content Collections
- ✅ ADR-004 CSS con tokens (sin Tailwind)

### Fase 1 extendida — ampliación con contenido real ✅
- ✅ Extracción del CV (`Ivan_Cano_Cv_26.pdf` vía pdftotext)
- ✅ `docs/constitucion.md` (principios rectores)
- ✅ `spec.md` → v1.1 (destacados Kakebo/Ligera, otros proyectos, tech grid, ciberseguridad/CCST, SDD+IA, aprendizaje Docker/K8s/AWS, formación DAM+grado en curso)
- ✅ ADR-005 Tech grid con filtros y niveles
- ✅ Info de Kakebo/Ligera extraída de sus webs (borradores pendientes de corrección del usuario)

## Fase 2 — Scaffold Astro ✅
- ✅ Crear proyecto Astro con TS strict (astro v7, scaffold manual)
- ✅ Configurar i18n (`es` default, `en`) + sitemap
- ✅ Estructura `src/` (components, content, i18n, layouts, pages, styles)
- ✅ `Base.astro` (head, meta, lang, hreflang, skip-link, header, footer)
- ✅ Scripts npm: `check`, `build`, `lint` — verificados: 0 errores, build OK

## Fase 3 — Design system ✅ (gate pendiente de aprobación visual)
- ✅ `tokens.css` (colores, tipografía, espaciado, radios, sombras, motion)
- ✅ Fuentes: Space Grotesk (display) + Inter Variable (texto) via Fontsource
- ✅ `global.css` (reset, tipografía, reduced-motion, utilidades)
- ✅ Componentes base: Button (3 variantes), Badge (4 tones), Section, Header, Footer
- ✅ Hero con look dark premium (glow, grid, gradient text, badges)
- ✅ `npm run check` + `npm run build` — 0 errores
- ✅ **Gate inicial:** usuario prefiere dark premium → pide más opciones

### Fase 3b — Galería de variantes 🔁
- ✅ `src/theme.ts` + 4 temas scoped (`premium`, `editorial`, `claro`, `cyber`)
- ✅ `Base.astro` con prop `theme` → `data-theme` + theme-color dinámico
- ✅ Páginas `/preview` (galería) + `/preview/[slug]` ×4 (ES y EN) con barra de navegación de variantes
- ⬜ **Gate definitivo:** usuario elige variante → ganadora se funde en `tokens.css`, se eliminan las descartadas, ADR-002 → Aceptado, spec §9 actualizada

## Fase 4 — Secciones ⬜
- ⬜ Schemas de Content Collections (projects, profile) + `content/tech.ts`
- ⬜ ProjectCard destacada (Kakebo, Ligera) + grid secundario "Otros proyectos"
- ⬜ Sección Sobre mí: bio, experiencia, formación (DAM ✅ / grado en curso)
- ⬜ Bloque ciberseguridad con badge CCST
- ⬜ Badges "en aprendizaje": Docker, Kubernetes, AWS
- ⬜ `TechGrid.astro` con filtros por categoría + nivel al hover (ADR-005)
- ⬜ Sección Contacto
- ⬜ Decisión detalle de proyecto (ADR nuevo si procede)
- ⬜ Nav responsive + toggle de idioma

## Fase 5 — Contenido real + i18n ⬜
- ⬜ Redactar contenido desde CV + indicaciones
- ⬜ **Validación usuario:** bio, borradores Kakebo/Ligera, enlaces, foto
- ⬜ Recibir capturas de Kakebo/Ligera para `public/`
- ⬜ Diccionarios ES/EN completos
- ⬜ Traducir contenido de colecciones
- ⬜ SEO: meta, OG, hreflang, sitemap

## Fase 6 — Pulido y entrega ⬜
- ⬜ Sweep responsive + test teclado
- ⬜ Lighthouse ≥ 95
- ⬜ `npm run check` y `npm run build` limpios
- ⬜ Deploy
- ⬜ Actualizar spec/tasks al estado final
