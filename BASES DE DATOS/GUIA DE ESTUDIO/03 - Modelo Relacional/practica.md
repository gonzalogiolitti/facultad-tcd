# 03 · Modelo Relacional — Práctica resuelta

> Se parte de un DER y se lo convierte en tablas, aplicando las reglas de mapeo de la
> teoría. Notación: `<u>PK</u>`, `*FK*`, con la tabla/columna referida y si admite `NULL`.

---

## Ejercicio 1 — Veterinaria: del DER al Modelo Relacional

Tomamos el DER del **Ejercicio 2 de la práctica de la Unidad 02**:

```
DUENIO(dni PK, nombre, telefono)
MASCOTA(nroOrden [clave parcial], nombre, especie, fechaNac)   -- débil de DUENIO
CONSULTA(idConsulta PK, fecha, motivo, diagnostico)
VETERINARIO(matricula PK, nombre)

posee   : DUENIO (1,N) ══ (1,1) MASCOTA          (identificatoria)
tiene   : MASCOTA (1,1) ── (0,N) CONSULTA
realiza : CONSULTA (1,1) ── (0,N) VETERINARIO
```

### Paso a paso

1. **Entidades fuertes → tablas.**
   `DUENIO(dni, nombre, telefono)`, `VETERINARIO(matricula, nombre)`,
   `CONSULTA(id_consulta, fecha, motivo, diagnostico)`.

2. **Entidad débil `MASCOTA` (regla 5.9).** PK = FK del fuerte (`dni`) + clave parcial
   (`nro_orden`).
   `MASCOTA(<u>*dni*</u>, <u>nro_orden</u>, nombre, especie, fecha_nac)`.

3. **Relación `tiene` (1:N, regla 5.5).** La PK de `MASCOTA` es compuesta (`dni`,
   `nro_orden`), así que **ambas** columnas bajan como FK a `CONSULTA`.

4. **Relación `realiza` (1:N).** `matricula` baja como FK a `CONSULTA`, `NOT NULL`
   (cada consulta tiene exactamente un veterinario).

### Modelo Relacional

```
DUENIO(<u>dni</u>, nombre, telefono)

VETERINARIO(<u>matricula</u>, nombre)

MASCOTA(<u>*dni*</u>, <u>nro_orden</u>, nombre, especie, fecha_nac)
      *dni* → DUENIO.dni

CONSULTA(<u>id_consulta</u>, fecha, motivo, diagnostico, *dni*, *nro_orden*, *matricula*)
      (*dni*, *nro_orden*) → MASCOTA(dni, nro_orden)      [NOT NULL]
      *matricula*          → VETERINARIO.matricula         [NOT NULL]
```

### Decisiones explicadas

- **`CONSULTA` lleva `dni` + `nro_orden`** porque la PK de la entidad débil `MASCOTA` es
  compuesta: una FK a una PK compuesta también es compuesta.
- Si `posee` fuera `(0,N)` del lado del dueño, nada cambiaría en el MR (la
  obligatoriedad se refleja recién en la carga de datos, no en la estructura).

---

## Ejercicio 2 — Cafetería con pedidos (N:M con atributos)

**DER** (del Ejercicio 4 de la práctica de la Unidad 02, ya corregido):

```
CLIENTE(idCliente PK, nombre, telefono {multivaluado})
PEDIDO(idPedido PK, fecha, total {derivado})
PRODUCTO(idProducto PK, nombre, precio)

hace    : CLIENTE (1,1) ── (0,N) PEDIDO
incluye : PEDIDO (1,N) ── (0,N) PRODUCTO   [cantidad, precioUnitario]
```

### Paso a paso

1. **`telefono` multivaluado (regla 5.3)** → tabla `TELEFONO_CLIENTE`.
2. **`total` derivado (regla 5.4)** → no se guarda; se calcula
   `SUM(cantidad * precio_unitario)` del detalle.
3. **`hace` 1:N** → `id_cliente` FK en `PEDIDO`, `NOT NULL`.
4. **`incluye` N:M (regla 5.6)** → tabla `DETALLE_PEDIDO` con PK compuesta
   (`id_pedido`, `id_producto`) y los atributos `cantidad`, `precio_unitario`.

### Modelo Relacional

```
CLIENTE(<u>id_cliente</u>, nombre)

TELEFONO_CLIENTE(<u>*id_cliente*</u>, <u>telefono</u>)
      *id_cliente* → CLIENTE.id_cliente

PRODUCTO(<u>id_producto</u>, nombre, precio)

PEDIDO(<u>id_pedido</u>, fecha, *id_cliente*)
      *id_cliente* → CLIENTE.id_cliente                    [NOT NULL]

DETALLE_PEDIDO(<u>*id_pedido*</u>, <u>*id_producto*</u>, cantidad, precio_unitario)
      *id_pedido*   → PEDIDO.id_pedido
      *id_producto* → PRODUCTO.id_producto
```

### Decisiones explicadas

- **`precio_unitario` en el detalle** además de `precio` en `PRODUCTO`: el precio del
  producto cambia con el tiempo; el detalle guarda el precio **al momento de la venta**
  (dato histórico). Es un atributo legítimo de la relación.
- **PK del detalle = (`id_pedido`, `id_producto`)**: no puede haber dos líneas del mismo
  producto en el mismo pedido (si se pide más, se sube `cantidad`).

---

## Ejercicio 3 — Relación 1:1 y relación unaria

**Enunciado.** Modelar y mapear:

- Cada **persona** (dni, nombre) tiene **a lo sumo un** pasaporte; cada **pasaporte**
  (nro, fechaVto) pertenece a **exactamente una** persona.
- Cada **empleado** (legajo, nombre) puede tener **un** supervisor, que es otro empleado.
  Un supervisor tiene a cargo a varios empleados.

### DER

```
persona_pasaporte : PERSONA (0,1) ── (1,1) PASAPORTE       -- 1:1
supervisa         : EMPLEADO (0,1) ── (0,N) EMPLEADO       -- unaria 1:N
```

### Mapeo del 1:1 (regla 5.7)

La FK va en el lado de participación **total** (`PASAPORTE` es `(1,1)`: todo pasaporte
tiene dueño), marcada `UNIQUE` para que una persona no tenga dos.

```
PERSONA(<u>dni</u>, nombre)

PASAPORTE(<u>nro</u>, fecha_vto, *dni*)
      *dni* → PERSONA.dni                 [UNIQUE, NOT NULL]
```

- `UNIQUE` sobre `dni` ⇒ como máximo un pasaporte por persona (el `(0,1)` del enunciado).
- Si la hubiéramos puesto en `PERSONA` (`*nro_pasaporte*`), habría que permitir `NULL`
  (hay personas sin pasaporte) y marcarla `UNIQUE`. También es válido; se elige según qué
  lado consultamos más.

### Mapeo de la relación unaria 1:N (regla 5.8)

FK a la misma tabla, **admite `NULL`** (el gerente general no tiene supervisor).

```
EMPLEADO(<u>legajo</u>, nombre, *legajo_supervisor*)
      *legajo_supervisor* → EMPLEADO.legajo     [NULL permitido]
```

---

## Ejercicio 4 — Escuela de música (caso integrador)

**Enunciado.** De cada **alumno**: legajo, nombre, fecha de nacimiento, y sus
**instrumentos** de interés (puede indicar varios). De cada **docente**: DNI, nombre.
Se dictan **cursos**: código, nombre, nivel; cada curso lo dicta **un** docente y un
docente puede dictar varios (o ninguno todavía). Un alumno se **inscribe** en varios
cursos; de cada inscripción se sabe la fecha y la nota final (puede estar vacía si el
curso no terminó). Cada curso tiene **un** aula asignada (número, capacidad); un aula se
usa en varios cursos en distintos horarios, pero acá simplificamos: aula fija por curso.

### DER (texto)

```
ALUMNO(legajo PK, nombre, fechaNac, instrumento {multivaluado})
DOCENTE(dni PK, nombre)
CURSO(codigo PK, nombre, nivel)
AULA(numero PK, capacidad)

dicta     : CURSO (1,1) ── (0,N) DOCENTE
tiene_aula: CURSO (1,1) ── (0,N) AULA
inscribe  : ALUMNO (0,N) ── (0,N) CURSO   [fecha, notaFinal (O)]
```

### Modelo Relacional

```
DOCENTE(<u>dni</u>, nombre)

AULA(<u>numero</u>, capacidad)

CURSO(<u>codigo</u>, nombre, nivel, *dni_docente*, *numero_aula*)
      *dni_docente* → DOCENTE.dni                [NOT NULL]
      *numero_aula* → AULA.numero                [NOT NULL]

ALUMNO(<u>legajo</u>, nombre, fecha_nac)

INSTRUMENTO_ALUMNO(<u>*legajo*</u>, <u>instrumento</u>)
      *legajo* → ALUMNO.legajo

INSCRIPCION(<u>*legajo*</u>, <u>*codigo*</u>, fecha, nota_final)
      *legajo* → ALUMNO.legajo
      *codigo* → CURSO.codigo
      -- nota_final admite NULL (curso en marcha)
```

### Decisiones explicadas

- **`instrumento` multivaluado** → tabla propia `INSTRUMENTO_ALUMNO`. Si además se
  quisiera "nivel de dominio" del instrumento, esa columna iría en la misma tabla.
- **`dicta` y `tiene_aula` son 1:N** → dos FK en `CURSO`, ambas `NOT NULL` (todo curso
  tiene docente y aula).
- **`inscribe` N:M** → tabla `INSCRIPCION` (nombre de entidad asociativa, más claro que
  `alumno_curso`). `nota_final` es atributo de la relación y **admite `NULL`**, tal como
  dice el enunciado.
- **PK de `INSCRIPCION` = (`legajo`, `codigo`)**: un alumno no se inscribe dos veces al
  mismo curso. Si se permitiera recursar, se agregaría `anio` a la PK.

### Lista final de tablas

`docente`, `aula`, `curso`, `alumno`, `instrumento_alumno`, `inscripcion` — 6 tablas.

---

## Autoevaluación

1. ¿En qué lado de una relación 1:N va la FK?
2. ¿Cómo se arma la PK de una tabla puente N:M?
3. ¿Cómo se mapea un atributo multivaluado?
4. ¿Cómo se identifica una entidad débil en el MR?
5. ¿Por qué a veces conviene guardar `precio_unitario` en el detalle de un pedido si el
   producto ya tiene `precio`?

<details>
<summary>Respuestas</summary>

1. En el lado **"muchos" (N)**.
2. Con la **combinación de las dos FK** (más una fecha/orden si el par puede repetirse).
3. Con una **tabla nueva**: FK a la entidad + el atributo; PK = ambos.
4. La PK de la débil = **FK a la entidad fuerte + su clave parcial**.
5. Porque el precio del producto cambia con el tiempo; el detalle necesita el **precio
   histórico** al momento de la venta.

</details>
