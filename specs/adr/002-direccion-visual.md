# ADR-002: Dirección visual — Dark premium con cuadrícula suavizada

- **Estado:** Aceptado (decisión final del usuario)
- **Fecha:** 2026-10-07
- **Última actualización:** 2026-10-07

## Contexto

El usuario quiere un estilo "original y moderno". Se ofrecieron 4 direcciones; el usuario eligió **dark premium + acentos** (tipo Vercel/Linear) como favorita y pidió comparar con más variantes.

## Desarrollo (Fase 3b)

Se implementó una galería temporal en `/preview` con 5 variantes como overrides de tokens scoped (`html[data-theme="…"]`):

1. `premium` — dark premium con cuadrícula
2. `aurora` — premium con orbes de luz difuminados (sin cuadrícula)
3. `editorial` — tipografía enorme, bordes visibles, mono, acento ámbar
4. `claro` — off-white minimalista, azul profundo
5. `cyber` — verde neón/cian, tipografía mono, estilo terminal

## Decisión final

**Dark premium con la cuadrícula del hero suavizada** (`--grid-line: rgba(255,255,255,0.025)`, reducido desde 0.04).

Elementos confirmados:

- Fondo casi negro (`#0a0a0b`), superficies elevadas con bordes 1px a baja opacidad.
- Acento violeta `#7c5cff` con gradiente hacia azul/cian para CTAs y highlights.
- Glow radial + cuadrícula muy tenue con máscara radial en el Hero.
- Tipografía: Space Grotesk (titulares) + Inter (texto).
- Microinteracciones al hover, transiciones 150–250 ms, `prefers-reduced-motion` respetado.
- Header con `backdrop-blur`.

## Consecuencias

- La galería `/preview` y los temas descartados se **eliminaron** del código (commit de consolidación).
- El diseño se controla desde `tokens.css`: cambios futuros de paleta no tocan componentes.
- Contraste AA (RNF-02) se verifica en Fase 6 con contraste real.

## Alternativas descartadas

- Aurora (orbes), editorial, minimalista claro, cyber neón — evaluados en pantalla y descartados.
