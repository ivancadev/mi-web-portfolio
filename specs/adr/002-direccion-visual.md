# ADR-002: Dirección visual — Dark premium (tentativo)

- **Estado:** Aceptado con gate de revisión en Fase 3
- **Fecha:** 2026-10-07

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

## Consecuencias

- El resto de fases no dependen de la paleta concreta (tokens aíslan el cambio).
- Contraste AA es requisito explícito (RNF-02): los tokens se verificarán con contraste real.

## Alternativas descartadas (por ahora)

- Editorial/brutalista, minimalista claro, creativo 3D — opciones ofrecidas, elegidas como segunda opción.
