# ADR-006: Páginas de detalle para proyectos

- **Estado:** Aceptado (decisión del usuario)
- **Fecha:** 2026-10-07

## Contexto

La spec v1.1 dejaba pendiente la decisión: fichas de proyecto con solo enlace externo vs. páginas de detalle propias.

## Decisión

**Páginas de detalle propias** para todos los proyectos:

- Rutas ES: `/proyectos/[slug]` · Rutas EN: `/en/projects/[slug]`
- Generadas desde la Content Collection `projects` (una entrada → 2 páginas, i18n resuelto en build).
- Contenido por página: reto, rol, funcionalidades, stack, CTA a demo/repo, bloque de capturas (placeholder hasta que el usuario entregue imágenes en Fase 5).
- La home mantiene las cards (destacadas Kakebo/Ligera + grid "Otros proyectos") que enlazan al detalle.

## Consecuencias

- ✅ Profundidad para reclutadores; proyectos sin demo (FocusFlow, TravelLog, Wowplan) muestran su valor.
- ⚠️ Más alcance: plantilla de detalle + contenido por proyecto (reto/rol/funciones) — redactado como borrador en Fase 4, validado por el usuario en Fase 5.
- ⚠️ Las capturas de Kakebo/Ligera son placeholder hasta Fase 5.

## Alternativas descartadas

- Solo enlaces externos: perdía profundidad y no servía para apps sin demo pública.
