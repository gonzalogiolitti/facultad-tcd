# HE2 — Validación del DER: Sistema de Gestión de Gimnasio
**Gonzalo Giolitti · Bases de Datos · Tecnicatura en Ciencia de Datos · UGR · 2026**

---

## RELACIONES

| Relación | Entidad A | Cardinalidad A | Justificación A | Entidad B | Cardinalidad B | Justificación B |
|----------|-----------|---------------|-----------------|-----------|---------------|-----------------|
| DICTA | PROFESOR | (1,N) | **Explícita** — "un mismo profesor puede estar a cargo de una o más actividades" | ACTIVIDAD | (1,1) | **Explícita** — "cada actividad es impartida por un profesor" |
| realiza | ALUMNO | (0,N) | **Explícita** — "qué actividad o actividades realiza actualmente" | ACTIVIDAD | (0,N) | **Implícita** — una actividad puede no tener alumnos inscriptos todavía |
| interesado_en | ALUMNO | (0,N) | **Explícita** — "qué otras actividades estaría interesado en realizar" | ACTIVIDAD | (0,N) | **Implícita** — una actividad puede no tener alumnos interesados todavía |
| TIENE | ALUMNO | (0,N) | **Implícita** — un alumno recién inscripto puede no tener recibos todavía | RECIBO | (1,1) | **Explícita** — todo recibo corresponde a un alumno |

Total de relaciones: 4, confirmado completo contra el enunciado (`UGR-BBDD26-HE2.pdf`).

---

## ATRIBUTOS

### ACTIVIDAD
| Atributo | Tipo | Justificación |
|---|---|---|
| nombre (PK) | Simple, único | Identifica la actividad (Culturismo, Pilates, Ritmo, CrossFit...) |
| tarifa_mensual | Simple | "cada actividad posee una tarifa mensual fija" |
| fecha_inicio_oferta | Simple | "guardando las fechas de inicio y fin de la oferta" |
| fecha_fin_oferta (O) | Simple, opcional | Puede no tener fin todavía si la actividad sigue ofreciéndose |

### PROFESOR
| Atributo | Tipo | Justificación |
|---|---|---|
| dni (PK) | Simple, único | Clave natural de persona física |
| nombre, apellido, email | Simple | "información personal y de contacto" |
| fecha_nacimiento | Simple | Base para calcular la edad |
| edad | Derivado | Se calcula de fecha_nacimiento, no se almacena |
| telefono | Simple | "información... de contacto" — el enunciado no pide varios teléfonos, por eso no es multivaluado |
| direccion | Compuesto (calle, numero, localidad) | "información personal y de contacto" |

### ALUMNO
| Atributo | Tipo | Justificación |
|---|---|---|
| dni (PK) | Simple, único | Clave natural de persona física |
| nombre, apellido, email | Simple | "información personal" |
| fecha_nacimiento | Simple | Base para calcular la edad |
| edad | Derivado | Se calcula de fecha_nacimiento, no se almacena — igual que en PROFESOR |
| telefono | Simple | Sin justificación de multivaluado en el enunciado |
| direccion | Compuesto (calle, numero, localidad) | "información... de contacto" |
| activo | Simple | "un alumno puede dejar de asistir... sus datos deberán conservarse" — se necesita distinguir alumnos activos de inactivos sin borrarlos |

### RECIBO
| Atributo | Tipo | Justificación |
|---|---|---|
| numero_recibo (PK) | Simple, único | Identifica cada recibo |
| periodo | Simple | "el período al que corresponde" |
| importe | Simple | "el importe" |
| fecha_emision | Simple | "la fecha de emisión" |
| fecha_pago (O) | Simple, opcional | "cuando corresponda, la fecha de pago" — explícitamente opcional |

### Atributo de la relación `realiza`
| Atributo | Tipo | Justificación |
|---|---|---|
| fecha_inscripcion | Simple, en el rombo | No pertenece a ALUMNO ni a ACTIVIDAD por separado, sino a la combinación (cuándo se inscribió ese alumno en esa actividad) |

---

## CORRECCIONES APLICADAS AL DIAGRAMA ERDPlus

| Elemento | Problema detectado | Corrección | Estado |
|----------|-------------------|------------|--------|
| `fecha_fin_oferta` (ACTIVIDAD) | Marcado como (O)(O) — doble opcional | Revisado en el `.erdplus`: una sola marca `(O)` y `Optional:true` una sola vez | ✔ Ya estaba corregido |
| `fecha_pago` (RECIBO) | Marcado como (O)(O) | Igual que arriba | ✔ Ya estaba corregido |
| `edad` (PROFESOR) | No marcado como derivado | Marcado `Derived:true` (línea punteada) | ✔ Ya estaba corregido |
| `telefono` (ALUMNO) | Multivaluado sin justificación en el enunciado | Atributo simple | ✔ Ya estaba corregido |
| `telefono` (PROFESOR) | **No estaba en esta lista, pero tenía el mismo problema**: multivaluado sin que el enunciado lo pida | Atributo simple | ✔ **Corregido ahora** (ver nota abajo) |
| `edad` (ALUMNO) | No existía en ALUMNO (solo en PROFESOR) | Agregada como atributo derivado (`fecha_nacimiento` ya estaba) | ✔ **Corregido ahora**, a pedido explícito |

**Nota sobre el quinto punto:** al comparar el `.erdplus` contra este documento, los 4 puntos de la lista original ya estaban resueltos. Pero encontré el mismo error exacto en `telefono` de PROFESOR (seguía marcado `Multivalued:true`), que esta lista no mencionaba porque solo había revisado ALUMNO. Lo corregí por consistencia: el enunciado dice "información personal y de contacto" para profesor y alumno por igual, sin pedir múltiples teléfonos en ninguno de los dos casos.

**Resuelto:** `edad` queda como atributo derivado en las dos entidades (ALUMNO y PROFESOR), ambas con `fecha_nacimiento` como base del cálculo. Decisión confirmada por el usuario.

---

## NOTAS METODOLÓGICAS

- Las cardinalidades en el `.erdplus` se cargan de forma cruzada: el valor que se configura para una entidad corresponde a la cardinalidad de la OTRA entidad de la relación (ver skill `der-ugr`, regla crítica).
- Las cardinalidades **explícitas** están citadas directamente en el enunciado; las **implícitas** se infieren por lógica del dominio.
- Los atributos de una relación N:M van en el rombo, no en las entidades (aplicado en `realiza` con `fecha_inscripcion`).

## Cobertura de supuestos del enunciado

- **Historial de alumno inactivo:** cubierto por el atributo `activo` en ALUMNO — el alumno no se borra, solo cambia ese valor, así se conservan sus datos para promociones.
- **Oferta con fechas de inicio/fin:** cubierto por `fecha_inicio_oferta` y `fecha_fin_oferta (O)` en ACTIVIDAD.
- **Pago total, sin parciales:** no requiere modelado adicional — `importe` en RECIBO es un valor único por recibo; al no permitirse pagos parciales, no hace falta una tabla de pagos separada.
- **"Actividades vigentes con su tarifa" para folletos:** se resuelve con una consulta/vista sobre ACTIVIDAD filtrando por `fecha_fin_oferta IS NULL` (o `>= hoy`), no es un elemento nuevo del DER.
