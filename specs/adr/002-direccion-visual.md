# ADR-002: Dirección visual — Dark premium (en revisión)

- **Estado:** En revisión — galería de variantes (Fase 3b)
- **Fecha:** 2026-10-07
- **Última actualización:** 2026-10-07

## Contexto

El usuario quiere un estilo "original y moderno" y eligió la dirección **dark premium + acentos** (tipo Vercel/Linear), pero pide verlo en pantalla antes de confirmar.

## Decisión

Implementar en la Fase 3 una primera versión con:

- Fondo casi negro con superficies elevadas (bordes 1px a baja opacidad, sombras sutiles).
- Un color de acento vivo para CTAs, highlights y gradiente sutil.
- Tipografía sans geométrica para titulares grandes + sans neutra para texto.
- Microinteracciones al hover, transiciones 150–250 ms, `prefers-reduced-motion` respetado.
- Header con `backdrop-blur`.

**Gate:** el usuario aprueba o pide cambios antes de Fase 5. Si se rechaza, se enmienda este ADR o se crea ADR-00X con nueva dirección.

## Actualización Fase 3b

El usuario prefiere dark premium **de momento**, pero pidió comparar con más opciones. Se creó una galería temporal en `/preview` con 5 variantes implementadas como overrides de tokens scoped:

1. `premium` — la actual (favorita provisional)
2. `aurora` — premium con orbes de luz difuminados en deriva lenta (sin cuadrícula)
3. `editorial` — tipografía enorme, bordes visibles, mono labels, acento ámbar, sin gradientes
4. `claro` — off-white minimalista, acento azul profundo
5. `cyber` — verde neón/cian, tipografía mono, estilo terminal

**Pendiente:** decisión final del usuario → la ganadora se funde en `tokens.css`, se eliminan las variantes y páginas `/preview`, y este ADR pasa a "Aceptado".

## Consecuencias

- El resto de fases no dependen de la paleta concreta (tokens aíslan el cambio).
- Contraste AA es requisito explícito (RNF-02): los tokens se verificarán con contraste real.

## Alternativas descartadas (por ahora)

- Editorial/brutalista, minimalista claro, creativo 3D — opciones ofrecidas, elegidas como segunda opción.
