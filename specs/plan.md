# Plan técnico — Portfolio Web

- **Spec:** `spec.md` v1.1
- **Constitución:** `docs/constitucion.md`
- **Estado:** Fases 0–1 completadas (spec ampliada v1.1)

## Stack

| Área | Elección | Ver |
|---|---|---|
| Framework | Astro (SSG, TypeScript estricto) | ADR-001 |
| i18n | Routing nativo de Astro (`es` default, `en`) | ADR-001 |
| Contenido | Content Collections (perfil, proyectos, tech) | ADR-003 |
| Estilos | CSS con tokens custom (sin framework Tailwind) | ADR-004 |
| Dirección visual | Dark premium + cuadrícula suavizada | ADR-002 |
| Tech grid | Grid con filtros + niveles (island JS) | ADR-005 |

## Estructura del repo

```
/
├── docs/
│   └── constitucion.md     # Principios rectores del proyecto
├── specs/                  # Documentación SDD (este directorio)
├── src/
│   ├── components/         # Header, Footer, Hero, ProjectCard, TechGrid, …
│   ├── content/
│   │   ├── config.ts       # Schemas de colecciones
│   │   ├── projects/       # kakebo, ligera (featured) + otros (secondary)
│   │   ├── profile/        # bio, experiencia, formación, certs, contacto
│   │   └── tech.ts         # datos del grid de tecnologías (niveles, categorías)
│   ├── i18n/
│   │   ├── es.ts / en.ts   # Diccionarios de UI
│   │   └── util.ts         # helpers de idioma
│   ├── layouts/
│   │   └── Base.astro       # html, head, meta, header, footer
│   ├── pages/
│   │   ├── index.astro      # / (es)
│   │   ├── proyectos/…      # detalle (decidido en Fase 4)
│   │   └── en/
│   │       ├── index.astro
│   │       └── …
│   └── styles/
│       ├── tokens.css       # variables de diseño
│       └── global.css       # reset, tipografía, utilidades
├── public/                 # favicons, og-image, capturas de apps
└── package.json
```

## Fases de implementación

### Fase 2 — Scaffold
1. `npm create astro@latest` con template minimal, TS strict, no integraciones innecesarias.
2. Configurar i18n nativo (`defaultLocale: 'es'`, `locales: ['es','en']`).
3. Estructura de carpetas, `Base.astro` con `lang`, meta, skip-link.
4. ESLint/Prettier mínimos + scripts `check`, `build`, `lint`.

### Fase 3 — Design system ✅ (aprobado)
1. `tokens.css`: paleta oscura, acento, escala tipográfica, espaciados, radios, sombras, transiciones.
2. Reset global + tipografía base + `prefers-reduced-motion`.
3. Componentes base: `Header`, `Footer`, `Button`, `Section`, `Tag/Badge`.
4. Hero implementado con el look dark premium.
5. Galería de 5 variantes (`/preview`) evaluada por el usuario → **dark premium + cuadrícula suavizada** confirmado; galería eliminada del código.

### Fase 4 — Secciones
1. `ProjectCard` destacada (Kakebo, Ligera) + grid secundario "Otros proyectos" desde Content Collections.
2. Sobre mí: bio + foto + experiencia (Sagatech, ABAI, freelance) + formación (DAM completado, grado en curso).
3. Bloque ciberseguridad con badge CCST + badges "en aprendizaje" (Docker, K8s, AWS).
4. `TechGrid.astro`: grid con filtros por categoría e info al hover (island JS, datos de `content/tech.ts`).
5. Contacto: CTA email + redes.
6. Decisión: detalle de proyecto en página propia vs. enlace externo (ADR nuevo si cambia el alcance).
7. Transiciones sutiles de Astro entre páginas (si no afectan RNF-04).

### Fase 5 — Contenido real + i18n completa
1. Redactar contenido desde el CV extraído + indicaciones del usuario.
2. Validación con el usuario: bio, descripciones de Kakebo/Ligera (borrador → corrección), enlaces, foto.
3. Diccionarios ES/EN completos; traducción de contenido de colecciones.
4. SEO: title/description por página, Open Graph, hreflang, sitemap.

### Fase 6 — Pulido y entrega
1. Responsive sweep (320 → desktop), test manual de teclado.
2. Lighthouse + correcciones.
3. Deploy (Vercel/Netlify/GH Pages según prefiera el usuario).
4. Actualizar `spec.md` (criterios) y `tasks.md` (estado final).

## Riesgos

| Riesgo | Mitigación |
|---|---|
| El usuario no aprueba el estilo dark | Gate en Fase 3; ADR-002 abierto a enmienda |
| Descripciones borrador de Kakebo/Ligera incorrectas | Validación explícita del usuario en Fase 5 (spec §5.2) |
| Capturas de apps pendientes | Usuario entrega capturas; si no, capturas propias en Fase 5 |
| Detalle de proyectos amplía alcance | Decisión explícita en Fase 4 con ADR |
