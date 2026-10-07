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

## Fase 2 — Scaffold Astro ⬜
- ⬜ Crear proyecto Astro con TS strict
- ⬜ Configurar i18n (`es` default, `en`)
- ⬜ Estructura `src/` (components, content, i18n, layouts, pages, styles)
- ⬜ `Base.astro` (head, meta, lang, skip-link, header, footer)
- ⬜ Scripts npm: `check`, `build`, `lint`

## Fase 3 — Design system ⬜
- ⬜ `tokens.css` (colores, tipografía, espaciado, radios, sombras)
- ⬜ `global.css` (reset, tipografía, reduced-motion)
- ⬜ Componentes base: Button, Section, Badge, Header, Footer
- ⬜ Hero con estilo dark premium
- ⬜ **Gate:** aprobación visual del usuario

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
