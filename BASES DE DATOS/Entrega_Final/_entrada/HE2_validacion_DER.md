# HE2 — Validación del DER: Sistema de Gestión de Gimnasio
**Gonzalo Giolitti · UGR · Bases de Datos · 2026**

---

## RELACIONES

| Relación | Entidad A | Cardinalidad A | Justificación A | Entidad B | Cardinalidad B | Justificación B |
|----------|-----------|---------------|-----------------|-----------|---------------|-----------------|
| DICTA | PROFESOR | (1,N) | **Explícita** — "cada profesor dicta al menos una actividad" | ACTIVIDAD | (1,1) | **Explícita** — "cada actividad es dictada por un único profesor" |
| realiza | ALUMNO | (0,N) | **Explícita** — "un alumno puede realizar ninguna o varias actividades" | ACTIVIDAD | (0,N) | **Implícita** — una actividad puede no tener alumnos inscriptos aún |
| interesado_en | ALUMNO | (0,N) | **Explícita** — "un alumno puede estar interesado en ninguna o varias actividades" | ACTIVIDAD | (0,N) | **Implícita** — una actividad puede no tener alumnos interesados |
| TIENE | ALUMNO | (0,N) | **Implícita** — un alumno puede no tener recibos aún (ej: recién inscripto) | RECIBO | (1,1) | **Explícita** — todo recibo pertenece a exactamente un alumno |

**Total de relaciones: 4** ✓ (confirmado completo según enunciado)

---

## ATRIBUTOS

> Sección en construcción — se completa durante la recreación manual del diagrama en ERDPlus.

### ACTIVIDAD

| Atributo | Tipo | Justificación |
|----------|------|---------------|
| | | |

### PROFESOR

| Atributo | Tipo | Justificación |
|----------|------|---------------|
| | | |

### ALUMNO

| Atributo | Tipo | Justificación |
|----------|------|---------------|
| | | |

### RECIBO

| Atributo | Tipo | Justificación |
|----------|------|---------------|
| | | |

---

## CORRECCIONES PENDIENTES EN EL DIAGRAMA ERDPlus

| Elemento | Problema detectado | Corrección |
|----------|-------------------|------------|
| `fecha_fin_oferta` (ACTIVIDAD) | Marcado como (O)(O) — doble opcional sin justificación clara | Revisar: si es solo nullable, debe ser atributo simple con marca `(O)` una sola vez |
| `fecha_pago` (RECIBO) | Marcado como (O)(O) — mismo problema | Igual que arriba |
| `edad` (PROFESOR) | No marcado como derivado | Corregir: marcar como atributo derivado (línea punteada en ERDPlus) — la edad se calcula desde `fecha_nacimiento` |
| `telefono` (ALUMNO) | Marcado como multivaluado sin justificación en el enunciado | Evaluar: si el enunciado no dice "varios teléfonos", quitar la marca multivaluado |

---

## NOTAS METODOLÓGICAS

- Las cardinalidades en ERDPlus están **cruzadas**: cuando editás la cardinalidad "para entidad A", estás especificando cuántas A existen **desde la perspectiva de B** (y viceversa).
- Las cardinalidades **explícitas** están citadas directamente en el enunciado.
- Las cardinalidades **implícitas** se infieren por lógica del dominio cuando el enunciado no las menciona.
- Según la metodología del profesor: los atributos de una relación N:M se colocan en el rombo (no en las entidades).
