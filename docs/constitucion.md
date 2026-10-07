# Constitución del Proyecto — Portfolio Web Iván Cano

- **Versión:** 1.0
- **Fecha:** 2026-10-07

Principios rectores que todo el trabajo de este repositorio debe respetar. Prevalece sobre decisiones ad-hoc; cualquier conflicto se resuelve con un ADR nuevo.

## 1. Spec-first (SDD)

- Nada se implementa sin estar especificado en `specs/`.
- Flujo por fases: `spec → plan → tasks → implementación → revisión`.
- Cada fase termina en una revisión del usuario antes de pasar a la siguiente.
- El estado real del proyecto se refleja en `specs/tasks.md`.

## 2. Buenas prácticas con IA

- La IA se usa como herramienta bajo supervisión humana: **ningún cambio se da por bueno sin revisión**.
- Las decisiones técnicas quedan documentadas en ADRs (`specs/adr/`), no en la conversación.
- El contenido generado (textos, traducciones) se valida con el usuario antes de entregar.
- Trazabilidad: los cambios se versionan en git con mensajes claros.

## 3. Calidad no negociable

- TypeScript estricto; `npm run check` y `npm run build` sin errores antes de cada revisión.
- Objetivo Lighthouse ≥ 95 (Performance, Accesibilidad, SEO).
- WCAG 2.2 AA: contraste verificado, navegación por teclado, semántica correcta.
- Sin JS obligatorio para leer y navegar el sitio (islands solo donde aporta).

## 4. i18n primero

- Todo texto visible existe en ES y EN; cero cadenas hardcodeadas en componentes.
- UI → diccionarios (`src/i18n/`); contenido → colecciones con campos por idioma.
- Un texto nuevo sin traducción es un error de build, no un pendiente.

## 5. Contenido editable, arquitectura desacoplada

- Proyectos y perfil viven en Content Collections: añadir contenido no toca componentes.
- El diseño se define en tokens (`tokens.css`): cambiar de dirección visual no reescribe componentes.
- Las decisiones de contenido (qué proyecto destaca, qué se omite) las toma el usuario.

## 6. Aprendizaje continuo

- El proyecto refleja la evolución real del perfil: nuevas tecnologías se muestran con honestidad (badge "en aprendizaje" para Docker, Kubernetes, AWS).
- Prioridad de stack del portfolio: Astro + TypeScript (ver ADR-001), independiente de las tecnologías que se muestran en el contenido.

## 7. Compromisos de entrega

- [ ] `npm run check` y `npm run build` limpios
- [ ] ES/EN completos, sin placeholders al entregar
- [ ] Responsive 320px → 4K
- [ ] Aprobación visual del usuario antes de contenido final
