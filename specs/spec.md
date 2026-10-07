# Especificación — Portfolio Web

- **Estado:** Aprobada (Fase 0–1)
- **Versión:** 1.2
- **Última actualización:** 2026-10-07
- **Principios:** ver `docs/constitucion.md`

## 1. Resumen

Portfolio web profesional bilingüe (ES/EN) de una persona desarrolladora **fullstack**. Objetivo: presentar proyectos, perfil profesional y vías de contacto con un diseño moderno, original y de alta calidad visual. Sitio principalmente estático, rápido y con SEO sólido.

## 2. Objetivos

- Mostrar proyectos con fichas claras (problema, rol, stack, resultados, enlaces).
- Comunicar perfil fullstack de forma directa y creíble.
- Contacto sin fricción (email + enlaces a redes).
- Carga rápida (< 1s contenido estático), 100/100 Lighthouse en accesibilidad y SEO como objetivo.
- Contenido gestionable sin tocar componentes (contenido en archivos, no hardcodeado).

## 3. No objetivo (fuera de alcance)

- Blog / artículos.
- CMS o backend dinámico.
- Autenticación, formularios con servidor (el contacto es `mailto:` + enlaces).
- Tienda, newsletter ni analytics invasivos.

## 4. Usuario

Visitante único tipo: reclutador, cliente potencial o colaborador que llega, en < 30 s quiere saber: **quién soy, qué hago, qué he hecho, cómo contactarme**.

## 5. Arquitectura de información (secciones)

Navegación única: `Inicio · Proyectos · Sobre mí · Contacto` + toggle de idioma.

### 5.1 Hero (Inicio)
- Nombre / marca, rol (fullstack), una frase de valor (propuesta).
- 2 CTAs: "Ver proyectos" y "Contacto".
- Elemento visual distintivo (ver ADR-002).
- Debe ocupar aproximadamente una pantalla.

### 5.2 Proyectos

**Destacados (2, posicionamiento principal):**

| Proyecto | Descripción (borrador — pendiente de corrección) | Stack (extraído de la web) |
|---|---|---|
| **Kakebo** — kakebo-sigma.vercel.app | App de finanzas personales basada en el método Kakebo japonés. Registro/login con email y recuperación de contraseña, gastos/ingresos por categorías, presupuesto y seguimiento. Dark UI. | Next.js (App Router), React, Tailwind CSS, auth propia |
| **Ligera** — ligeraapp.vercel.app | Workout tracker: registro de ejercicios (lifts), temporizador de descanso y progresión de fuerza. PWA instalable. Dark UI. | Next.js (App Router), React, Tailwind CSS, PWA (manifest + service worker) |

- Cards grandes (destacadas) con captura, título, resumen, badges de stack y CTA a la demo.
- **Ambas descripciones son borradores míos**: el usuario corrige stack, funciones y estado en Fase 5.

**Otros proyectos (grid secundario, segundo plano):**
- FocusFlow (Android/Kotlin, productividad), TravelLog (Android/Kotlin, viajes), Wowplan (Kotlin/Firebase, planes en grupo), Portfolio anterior (Next.js).
- Cards compactas: título, resumen corto, badges, enlace (repo o demo si existe).

- Cada proyecto puede abrir enlace externo (demo / repo) y/o detalle interno.
- **Decisión pendiente:** detalle en página propia vs. solo enlace externo → se resuelve en Fase 4.

### 5.3 Sobre mí

- Bio breve (2–3 párrafos) + foto. Fuentes: CV del usuario + sus indicaciones.
- **Perfil / prácticas profesionales:** enfoque en buenas prácticas con IA, **SDD (spec-first)** y desarrollo documentado.
- **Ciberseguridad:** bloque específico con la certificación **Cisco Certified Cybersecurity Support Technician (CCST)** como badge destacado + conocimientos afines.
- **Formación honesta:**
  - CFGS Desarrollo de Aplicaciones Multiplataforma (DAM) — **completado**
  - Grado en Ingeniería Informática — **en curso** (nunca presentarlo como terminado)
- **En aprendizaje (badge visual):** Docker, Kubernetes, AWS (Cloud & DevOps).
- Experiencia resumida: Sagatech (Frontend/Full Stack, ERP/CRM + módulo Nóminas), ABAI Solutions (IT Service Desk — Renfe/Adif), Freelance Android/Frontend.

#### 5.3.1 Tecnologías (interactiva)

- Grid con **filtros por categoría** (Frontend · Backend · Mobile · Cloud/DevOps · Lenguajes · Herramientas · Metodologías).
- Al hacer hover/focus: muestra **nivel de dominio** y detalle de uso.
- Tecnologías en aprendizaje (Docker, K8s, AWS) con indicador visual distinto.
- Implementación como island JS mínima → ver ADR-005.
- Datos centralizados en un archivo de contenido (no hardcodeados en el componente).

### 5.4 Contacto
- CTA principal: email (botón `mailto:` copiable).
- Enlaces a redes: GitHub, LinkedIn, y uno adicional a elegir (X/Twitter, CV…).
- Mensaje corto de disponibilidad (ej. "disponible para proyectos…").

### 5.5 Global
- **Header:** logo/nombre, nav, switch ES/EN.
- **Footer:** nombre, año, enlaces legales/redes mínimas.
- **Skip-link** de accesibilidad.

## 6. Contenido e i18n

- Idiomas: `es` (default) y `en`. Rutas: `/` (es) y `/en/…`.
- Todo el texto visible vive en el contenido o en diccionarios de traducción — sin cadenas hardcodeadas en componentes.
- `hreflang` alternates en todas las páginas; `lang` correcto en `<html>`.
- Los proyectos se modelan con **Content Collections** de Astro, con `title_es/title_en`, `summary_es/summary_en`, etc.
- Fuente de contenido: CV del usuario (`Ivan_Cano_Cv_26.pdf`, extraído el 2026-10-07) + indicaciones directas + webs de Kakebo/Ligera.
- Resto de contenido real (bio final, enlaces, foto, correcciones de proyectos) — pendiente de entrega del usuario.

## 7. Requisitos funcionales

| ID | Requisito | Prioridad |
|---|---|---|
| RF-01 | Navegar entre 4 secciones desde cualquier página | Alta |
| RF-02 | Cambiar idioma ES/EN preservando la sección actual | Alta |
| RF-03 | Listar proyectos desde contenido, con destacados primero | Alta |
| RF-04 | Cada proyecto muestra stack y al menos un enlace externo | Alta |
| RF-05 | Contacto: email visible + abrir correo con `mailto:` | Alta |
| RF-06 | Enlaces a redes sociales (mín. GitHub, LinkedIn) | Alta |
| RF-07 | Rutas canónicas + sitemap | Media |
| RF-08 | Grid de tecnologías con filtros por categoría e info al hover | Alta |
| RF-09 | Kakebo y Ligera aparecen como proyectos destacados | Alta |
| RF-10 | Ciberseguridad + cert CCST visibles en Sobre mí | Alta |
| RF-11 | Docker/K8s/AWS mostrados como "en aprendizaje" | Media |
| RF-12 | Formación: DAM completado; grado solo como "en curso" | Alta |

## 8. Requisitos no funcionales

| ID | Requisito |
|---|---|
| RNF-01 | Lighthouse: ≥ 95 en Performance/Accesibilidad/SEO |
| RNF-02 | Cumplir WCAG 2.2 AA (contraste, foco visible, semántica) |
| RNF-03 | Responsive: 320px → 4K, mobile-first |
| RNF-04 | Sin JS obligatorio para navegar/leer (islands solo para interactividad) |
| RNF-05 | Build estático; desplegable en Vercel/Netlify/GitHub Pages |
| RNF-06 | TypeScript estricto; `npm run build` y `npm run check` sin errores |

## 9. Dirección visual

**Confirmada — Dark premium con cuadrícula suavizada (ADR-002):**

- Fondo oscuro casi negro, superficies elevadas sutiles (bordes y sombras tenues).
- Acento violeta `#7c5cff` con gradiente, usado con moderación (CTAs, highlights).
- Hero: glow radial + cuadrícula muy tenue (`--grid-line` a 2.5% de opacidad) con máscara radial.
- Tipografía: Space Grotesk (titulares) + Inter (texto); escala tipográfica clara.
- Detalles premium: bordes 1px de baja opacidad, `backdrop-blur` en header, microinteracciones al hover, transiciones 150–250 ms, `prefers-reduced-motion` respetado.
- Modo claro opcional como mejora posterior (no en alcance inicial).
- Se evaluó una galería de 5 variantes (aurora, editorial, claro, cyber) — descartadas; galería eliminada del código.

Tokens de diseño en `src/styles/tokens.css` (color, tipografía, espaciado, radios, sombras, motion).

## 10. Criterios de aceptación globales

- [ ] Los 4 documentos SDD reflejan el estado real del proyecto.
- [ ] `npm run check` y `npm run build` pasan sin errores.
- [ ] Secciones completas en ES y EN, sin textos placeholder al entregar.
- [ ] Responsive y accesible (teclado, contraste, landmarks).
- [ ] El usuario aprueba el aspecto visual antes de Fase 5.

## 11. Registro de cambios

| Fecha | Versión | Cambio |
|---|---|---|
| 2026-10-07 | 1.0 | Spec inicial aprobada |
| 2026-10-07 | 1.1 | Constitución (`docs/constitucion.md`); proyectos destacados Kakebo + Ligera; grid "Otros proyectos"; tech grid interactiva (ADR-005); ciberseguridad + cert CCST; prácticas IA/SDD; aprendizaje Docker/K8s/AWS; formación DAM completado + grado en curso |
| 2026-10-07 | 1.2 | Dirección visual confirmada: dark premium + cuadrícula suavizada (ADR-002 aceptado); galería de variantes evaluada y eliminada |
