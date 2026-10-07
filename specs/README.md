# SDD — Spec-Driven Development

Estructura de especificación del proyecto. Flujo por fases:

```
spec → plan → tasks → implementación → revisión del usuario
```

## Documentos

| Documento | Propósito |
|---|---|
| `docs/constitucion.md` | Principios rectores del proyecto (prevalece sobre decisiones ad-hoc) |
| `specs/spec.md` | Especificación principal del producto (requisitos, diseño, i18n) |
| `specs/plan.md` | Plan técnico por fases (arquitectura, decisiones de implementación) |
| `specs/tasks.md` | Checklist de tareas por fase con estado |
| `specs/adr/` | Architecture Decision Records (decisiones técnicas y su porqué) |

## Reglas

1. Ninguna fase se implementa sin su spec aprobada.
2. Cada fase termina con revisión del usuario antes de pasar a la siguiente.
3. Los cambios de alcance se documentan en `spec.md` (sección "Registro de cambios") y, si son técnicos, en un ADR nuevo.
4. `tasks.md` se actualiza en tiempo real con el estado de cada tarea.
