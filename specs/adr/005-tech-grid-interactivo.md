# ADR-005: Sección de tecnologías — grid con filtros y niveles

- **Estado:** Aceptado
- **Fecha:** 2026-10-07

## Contexto

El usuario quiere mostrar sus tecnologías "interactivas, bonitas y dinámicas". La spec exige sin JS obligatorio para navegar/leer (RNF-04) y Lighthouse alto (RNF-01).

## Decisión

**Grid con filtros por categoría + nivel de dominio al hover/focus:**

- Categorías: Frontend · Backend · Mobile · Cloud/DevOps · Lenguajes · Herramientas · Metodologías.
- Cada item: logo/nombre, badge de categoría, nivel (ej. avanzado/medio/básico/aprendizaje).
- Filtros = island JS con `client:visible`; sin JS, el grid muestra todo (progressive enhancement).
- Docker/K8s/AWS con badge "en aprendizaje" diferenciado (consistente con spec §5.3).
- Datos en un módulo de contenido (`src/content/tech.ts` o colección), no en el componente.

## Consecuencias

- ✅ Dinámico y visual sin sacrificar RNF-04 (contenido legible sin JS).
- ✅ Añadir tecnología = añadir un objeto al archivo de datos.
- ⚠️ Requiere set de logos (SVG inline o paquete `simple-icons`) — decisión en Fase 3/4.

## Alternativas descartadas

- **Marquee/carrusel animado:** menos información, peor accesibilidad, ruido visual permanente.
- **Bento box:** bonito pero menos escaniable para filtros por categoría.
- **Nube orbital animada:** coste de implementación alto, difícil de hacer accesible, ilegible en móvil.
