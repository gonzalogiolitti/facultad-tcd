# 03 · Modelo Relacional (MR) — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR). El modelo relacional es el **diseño
> lógico**: se parte del DER (Unidad 02) y se lo convierte en **tablas** listas para
> implementar en SQL (Unidad 05).

---

## 1. Vocabulario

| Término formal | Término común | Ejemplo |
|---|---|---|
| Relación | Tabla | `SOCIO` |
| Tupla | Fila / registro | `(42, 'Ana Díaz', 'ana@mail.com')` |
| Atributo | Columna / campo | `nombre` |
| Dominio | Tipo + valores permitidos | `precio`: decimal ≥ 0 |
| Grado | Cantidad de columnas | `SOCIO` tiene grado 3 |
| Cardinalidad | Cantidad de filas | hoy `SOCIO` tiene 320 filas |

### Propiedades de una relación (tabla "bien formada")

- **No hay filas duplicadas** (por eso siempre hay una clave).
- **El orden de las filas no importa.**
- **El orden de las columnas no importa** (se identifican por nombre).
- **Cada celda es atómica:** un solo valor, indivisible (no una lista). Esto es la 1FN
  (Unidad 04).

---

## 2. Tipos de claves

- **Superclave:** cualquier conjunto de columnas que identifica una fila (puede sobrar).
- **Clave candidata:** superclave **mínima** (si le sacás una columna, deja de identificar).
- **Clave primaria (PK):** la candidata elegida. Única, **no nula**, estable.
- **Clave alternativa:** las candidatas que no fueron elegidas como PK (se marcan `UNIQUE`).
- **Clave foránea (FK):** columna(s) de una tabla que **apunta a la PK de otra** (o de la
  misma). Es el mecanismo con el que el modelo relacional representa las relaciones.

---

## 3. Reglas de integridad

1. **Integridad de entidad:** ninguna columna de la PK puede ser `NULL`.
2. **Integridad referencial:** el valor de una FK **debe existir** en la tabla referida,
   **o ser `NULL`** (si la relación es opcional). No puede apuntar a algo que no está.
3. **Integridad de dominio:** cada valor respeta el tipo y las restricciones de su columna
   (`CHECK precio >= 0`, `talla IN ('S','M','L')`, etc.).
4. **Integridad definida por el usuario / reglas de negocio:** por ejemplo "la fecha de
   fin ≥ fecha de inicio".

### Acciones referenciales (qué pasa con la FK si se borra/actualiza la fila referida)

| Acción | Efecto |
|---|---|
| `RESTRICT` / `NO ACTION` | prohíbe borrar el padre si tiene hijos (el más seguro por defecto) |
| `CASCADE` | borra/actualiza también los hijos |
| `SET NULL` | pone la FK en `NULL` (solo si admite nulos) |

---

## 4. Notación de la cátedra para el Modelo Relacional

```
TABLA(clave_primaria_subrayada, atributo, atributo, clave_foranea*)
      clave_foranea* → TABLA_REFERIDA.columna       [NULL? / NOT NULL]
```

- **PK:** subrayada.  En texto plano: `<u>id</u>` o `_id_` o "id (PK)".
- **FK:** marcada con `*` y una línea que indica a qué apunta.
- Una columna puede ser **parte de la PK y FK a la vez** (típico en tablas puente y
  entidades débiles).

Ejemplo:

```
PLAN(<u>id_plan</u>, nombre, precio)
SOCIO(<u>dni</u>, nombre, email, fecha_alta, *id_plan*)
      *id_plan* → PLAN.id_plan          [NOT NULL]
```

---

## 5. Reglas de mapeo DER → MR (las que hay que saber de memoria)

### 5.1 Entidad fuerte → tabla

Una tabla con todos los atributos simples. La PK de la entidad es la PK de la tabla.

```
CLIENTE(<u>id_cliente</u>, nombre, email)
```

### 5.2 Atributo compuesto → columnas separadas

`direccion(calle, numero, ciudad)` se mapea como tres columnas `calle`, `numero`,
`ciudad`. No se guarda "direccion" entera.

### 5.3 Atributo multivaluado → tabla nueva

Tabla con la PK de la entidad (como FK) + el atributo; PK compuesta por ambos.

```
TELEFONO_CLIENTE(<u>*id_cliente*</u>, <u>telefono</u>)
      *id_cliente* → CLIENTE.id_cliente
```

### 5.4 Atributo derivado → no se guarda

`edad`, `total` se calculan con una consulta o una vista. (A veces se guarda por
rendimiento, pero hay que mantenerlo con triggers.)

### 5.5 Relación 1:N → FK en el lado "N"

La PK del lado "1" baja como FK a la tabla del lado "N".
`NOT NULL` si la participación del lado N es `(1,1)`; admite `NULL` si es `(0,1)`.

```
PROFESOR(<u>legajo</u>, nombre)
CLASE(<u>id_clase</u>, nombre, cupo, *legajo*)
      *legajo* → PROFESOR.legajo        [NOT NULL]   (CLASE (1,1) — (0,N) PROFESOR)
```

### 5.6 Relación N:M → tabla puente (intermedia / asociativa)

Tabla nueva con las **dos FK**, que juntas forman la **PK compuesta**. Los atributos de
la relación van en esta tabla.

```
SOCIO(<u>dni</u>, ...)
CLASE(<u>id_clase</u>, ...)
SE_ANOTA(<u>*dni*</u>, <u>*id_clase*</u>, fecha_anotacion)
      *dni*      → SOCIO.dni
      *id_clase* → CLASE.id_clase
```

Si el mismo par puede repetirse en el tiempo (ej: se anota, se baja, se vuelve a anotar),
se agrega `fecha_anotacion` **a la PK**.

### 5.7 Relación 1:1 → FK con UNIQUE

La FK va en **cualquiera** de las dos tablas; conviene ponerla en la de **participación
total** `(1,1)` y marcarla `UNIQUE` + `NOT NULL`.

```
EQUIPO(<u>nombre</u>, ciudad, *dni_capitan*)
      *dni_capitan* → JUGADOR.dni       [UNIQUE, NOT NULL]
```

### 5.8 Relación unaria

- **1:N:** FK a la misma tabla (admite `NULL`).
  `EMPLEADO(<u>legajo</u>, nombre, *legajo_supervisor*) → EMPLEADO.legajo`
- **N:M:** tabla puente con dos FK a la misma tabla, con nombres de rol.
  `AMISTAD(<u>*dni_a*</u>, <u>*dni_b*</u>) → PERSONA.dni (ambas)`

### 5.9 Entidad débil → PK = FK del fuerte + clave parcial

```
SOCIO(<u>dni</u>, nombre)
CUOTA(<u>*dni*</u>, <u>periodo</u>, monto, pagada)
      *dni* → SOCIO.dni
```

### 5.10 Relación ternaria → tabla con las 3 FK

```
ATIENDE(<u>*matricula*</u>, <u>*id_paciente*</u>, <u>*nro_consultorio*</u>, <u>fecha_hora</u>)
```

---

## 6. Ejemplo completo de mapeo

DER (gimnasio, del ejercicio 1 de la práctica de la Unidad 02):

```
SOCIO(dni PK, nombre, email, fechaAlta)
CLASE(idClase PK, nombre, cupo, horario)
PROFESOR(legajo PK, nombre, titulo {multivaluado})
PLAN(idPlan PK, nombre, precio)
pertenece : SOCIO (1,1) ── (0,N) PLAN
se_anota  : SOCIO (0,N) ── (0,N) CLASE   [fechaAnotacion]
dicta     : CLASE (1,1) ── (0,N) PROFESOR
```

Modelo Relacional resultante:

```
PLAN(<u>id_plan</u>, nombre, precio)

PROFESOR(<u>legajo</u>, nombre)

TITULO_PROFESOR(<u>*legajo*</u>, <u>titulo</u>)                    -- multivaluado
      *legajo* → PROFESOR.legajo

SOCIO(<u>dni</u>, nombre, email, fecha_alta, *id_plan*)
      *id_plan* → PLAN.id_plan                                    [NOT NULL]

CLASE(<u>id_clase</u>, nombre, cupo, horario, *legajo*)
      *legajo* → PROFESOR.legajo                                  [NOT NULL]

SE_ANOTA(<u>*dni*</u>, <u>*id_clase*</u>, fecha_anotacion)        -- N:M
      *dni*      → SOCIO.dni
      *id_clase* → CLASE.id_clase
```

Tablas finales: `plan`, `profesor`, `titulo_profesor`, `socio`, `clase`, `se_anota` (6).

---

## 7. Errores comunes

- **Poner la FK del lado equivocado en 1:N.** La FK va **siempre en el lado "muchos"**.
  Nunca una lista de IDs en el lado "uno".
- **Olvidar la tabla puente en N:M.** No se puede representar N:M con una sola FK.
- **PK de la tabla puente incompleta.** Debe ser la combinación de las dos FK (salvo que
  se agregue fecha u orden).
- **FK que no coincide en tipo con la PK referida.** `INT` ↔ `INT`, `CHAR(13)` ↔ `CHAR(13)`.
- **Guardar atributos derivados sin mantenerlos.** `total` desactualizado.
- **Marcar `NOT NULL` una FK de relación opcional `(0,1)`.** Rompe los casos sin vínculo.
- **Meter el atributo de la relación en una de las entidades.** `cantidad` de un ítem de
  pedido va en la tabla puente, no en `PRODUCTO`.

---

## 8. Checklist

- [ ] Una tabla por entidad fuerte.
- [ ] Una tabla por atributo multivaluado.
- [ ] Una tabla puente por cada relación N:M (y por ternarias).
- [ ] Toda relación 1:N resuelta con FK en el lado "muchos".
- [ ] Toda FK indica a qué `TABLA.columna` apunta y si admite `NULL`.
- [ ] Toda tabla tiene PK; ninguna PK admite `NULL`.
- [ ] Los tipos de FK y PK referida coinciden.
