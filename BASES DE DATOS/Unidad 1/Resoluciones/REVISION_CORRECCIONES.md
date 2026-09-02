# Revisión de todos los ejercicios según la metodología del profesor Briant Gauna

Se recorrieron los `.erdplus` de **TP1, TP2, TP3, TP4** y del **Hito Evaluable 2** y se aplicó
la metodología codificada en la skill `der-ugr`:

1. **PK naturales** — reemplazar `id_` genérico por el identificador del dominio (DNI, CUIT,
   ISBN, ISRC, patente, código, número de comprobante, nombre único…). `id_` sintético solo si
   no hay natural simple, la natural es compuesta, o el enunciado lo pide.
2. **Una sola clave (Unique) por entidad fuerte.**
3. **Relaciones N:M sin romper** — se dejan como rombo; sus atributos van **en el rombo**.
4. **Atributos calculados marcados como derivados** — elipse punteada, **no se almacenan**.
5. **Cardinalidades Chen `(mín,máx)` en ambos sentidos.**

> Alcance: se corrigieron los archivos **`*_ERDPlus_import.erdplus`** (los que se importan en
> erdplus.com). Los `TP*_resolucion.md` y `TP*_DER.drawio` conservan las claves didácticas
> originales; este documento es el registro autoritativo de la versión alineada con la
> metodología del profesor.

---

## TP1 — Ejercicios de práctica  (`TP1_ERDPlus_import.erdplus`)

### Claves primarias

| Entidad | Antes | Ahora | Motivo |
|---|---|---|---|
| DEPARTAMENTO | `id_departamento` (genérico) | **`nombre`** | Se elimina el `id_` y se **promueve** el atributo natural: los nombres de departamento no se repiten. El enunciado menciona *"ID y Nombre"*, pero `nombre` ya identifica de forma natural. |
| EMPLEADO | `cuil` ✔ | `cuil` | Ya era natural (identificador de la persona). Sin cambios. |
| PEDIDO | `id_pedido` (genérico) | **`numero_pedido`** | Todo pedido lleva un número de comprobante propio y correlativo. |
| PRODUCTO | `id_producto` (genérico) | **`codigo_producto`** | Los productos tienen código / código de barras (el profesor lo cita como ejemplo de PK natural). |
| PROVEEDOR | `id_proveedor` (genérico) | **`cuit`** | En la clase el profesor usa el "NIF" como clave natural del proveedor; en Argentina, el **CUIT**. |
| MEDICO | `matricula` ✔ | `matricula` | Matrícula profesional: natural. Sin cambios. |
| PACIENTE | `id_paciente` (genérico) | **`dni`** | El paciente es una persona → DNI. |
| CONSULTORIO | `numero_consultorio` ✔ | `numero_consultorio` | Ya era natural. Sin cambios. |

### Atributos derivados (nuevos)

| Entidad.atributo | Cambio | Motivo |
|---|---|---|
| `PEDIDO.precio` | → **derivado, no se almacena** | Es el total del pedido = `Σ (cantidad × costo_unitario)` sobre el rombo `contiene`. |
| `PEDIDO.cantidad_productos` | → **derivado, no se almacena** | = `Σ cantidad` de las líneas del rombo `contiene`. |

*(Esto coincide con el ejemplo que el profesor resuelve en clase: en Pedido–Producto–Proveedor,
`precio` y `cantidad` son datos calculados.)*

### Relaciones N:M — verificado

- **`contiene`** (PEDIDO `(1,N)` — `(0,N)` PRODUCTO): **sigue siendo un rombo**, no se rompió.
  Su atributo **`cantidad` está en el rombo** ✔.
- `provee` (PRODUCTO `(0,1)` — `(0,N)` PROVEEDOR): 1:N, correcto.
- `pertenece` (EMPLEADO `(1,1)` — `(0,N)` DEPARTAMENTO): 1:N, correcto.
- `reporta_a` (EMPLEADO `(0,1)` — `(0,N)` EMPLEADO): **relación unaria** jefe/subordinado, correcta.

### Relación ternaria `atiende` → entidad asociativa `ATENCION`

- `MEDICO – PACIENTE – CONSULTORIO` es una **relación ternaria**. El formato ERDPlus solo
  admite rombos **binarios**, por lo que se representa como **entidad asociativa** `ATENCION`
  con tres relaciones `(0,N)–(1,1)` hacia los participantes. **No es una N:M binaria rota**;
  se deja constancia de que conceptualmente es una ternaria.
- **Corrección:** se quitó la marca `Unique` de `ATENCION.fecha_hora`. La identidad de una
  entidad asociativa de una ternaria es la **combinación de los participantes** (+ `fecha_hora`
  como discriminador), no un único atributo.

### Cardinalidades — verificado
Todas en pares `(mín,máx)` y en ambos extremos: `(0,N)`, `(1,1)`, `(0,1)`, `(1,N)`. Sin cambios.

---

## TP2 — Estudios de caso  (`TP2_ERDPlus_import.erdplus`)

### Claves primarias

| Entidad | Antes | Ahora | Motivo |
|---|---|---|---|
| PINTOR | `nombre` ✔ | `nombre` | Enunciado: *"los nombres de los pintores no se repiten"*. |
| MUSEO | `nombre` ✔ | `nombre` | Enunciado: *"el nombre del museo no se repite"*. |
| CUADRO | `id_cuadro` | `id_cuadro` **(se mantiene)** | Un cuadro **no tiene** identificador natural simple (los títulos se repiten). `id_` justificado. |
| CLIENTE | `dni` ✔ | `dni` | Natural. |
| RESERVA | `nro_reserva` ✔ | `nro_reserva` | Enunciado: *"su número (que es único)"*. |
| COCHE | `patente` ✔ | `patente` | Enunciado: *"la patente (que será única por coche)"*. |
| GARAGE | `id_garage` (genérico) | **`numero_garage`** | Enunciado: *"Cada garage se identifica con un número único"*. |
| AGENCIA | `id_agencia` (genérico) | **`numero_agencia`** | Enunciado: *"se conoce el número único, el nombre y su dirección"*. |
| CIUDAD | `codigo_postal` ✔ | `codigo_postal` | Natural (ejemplo del profesor en clase). |
| FARMACIA | `id_farmacia` | `id_farmacia` **(se mantiene)** | El enunciado dice literalmente *"su ID"*; no hay clave natural simple. |
| EMPLEADO | `cuit` ✔ | `cuit` | Natural. |
| FARMACEUTICO | `matricula` ✔ | `matricula` | Matrícula profesional. |
| LABORATORIO | `nombre` ✔ | `nombre` | Enunciado: *"el nombre (que es único)"*. |
| MEDICAMENTO | `id_medicamento` | `id_medicamento` **(se mantiene)** | La clave natural es **compuesta** (`nombre + presentacion`). Por la regla "un solo atributo único por entidad", el sustituto es correcto. |
| MONODROGA | `nombre_cientifico` ✔ | `nombre_cientifico` | Natural. |
| ACCION_TERAPEUTICA | `nombre` ✔ | `nombre` | Natural. |

### Atributos de rombo — corrección

- **`exhibe.inicio_expo`**: se quitó la marca `Unique`. Es un **atributo del rombo N:M**
  `exhibe` (junto con `final_expo`), **no** una PK de entidad fuerte. (El hecho de que forme
  parte de la clave de la tabla puente en el modelo relacional es una cuestión del relacional,
  no del DER conceptual.)

### Relaciones N:M — verificado (ninguna rota, atributos en el rombo)

| Rombo | Cardinalidad | Atributos en el rombo |
|---|---|---|
| `pinta` | PINTOR `(1,N)` — `(1,N)` CUADRO | — *(coautoría sin datos propios)* |
| `exhibe` | MUSEO `(0,N)` — `(0,N)` CUADRO | **`inicio_expo`, `final_expo`** |
| `composicion` | MEDICAMENTO `(1,N)` — `(0,N)` MONODROGA | **`cantidad`, `unidad`** |
| `produce` | MEDICAMENTO `(0,N)` — `(0,N)` ACCION_TERAPEUTICA | — |
| `stock` | FARMACIA `(0,N)` — `(0,N)` MEDICAMENTO | **`cantidad`** |

Relaciones 1:N (`efectua`, `realiza`, `involucra`, `estaciona`, `asignado` 1:1, `contiene`,
`emplea`, `comercializa`): sin cambios. Cardinalidades en pares `(mín,máx)` en ambos extremos.

---

## TP3 — Ejercicios de práctica  (`TP3_ERDPlus_import.erdplus`)

### Claves primarias

| Entidad | Antes | Ahora | Motivo |
|---|---|---|---|
| LIBRO | `id_libro` (genérico) | **`isbn`** | Se elimina el `id_` y se **promueve** `isbn` (que ya era atributo): identificador universal del libro. |
| USUARIO (biblioteca) | `id_usuario` (genérico) | **`nro_socio`** | Número de socio / carnet de la biblioteca (el profesor cita "número de socio" como PK natural). |
| CLIENTE (tienda y restaurante) | `id_cliente` (genérico) | **`dni`** | El cliente es una persona → DNI. |
| COMPRA | `id_compra` (genérico) | **`numero_comprobante`** | El ticket / comprobante de compra tiene número propio correlativo. |
| PRENDA | `id_prenda` (genérico) | **`codigo_prenda`** | Las prendas tienen código / SKU / código de barras. |
| MEDICO | `matricula` ✔ | `matricula` | Matrícula profesional. |
| DEPARTAMENTO (hospital) | `id_departamento` (genérico) | **`nombre`** | Se elimina el `id_` y se **promueve** `nombre`: los nombres de departamento son únicos. |
| PROVEEDOR (restaurante) | `id_proveedor` (genérico) | **`cuit`** | CUIT. |
| INGREDIENTE | `id_ingrediente` (genérico) | **`codigo_ingrediente`** | Código interno del insumo. |
| PLATO | `id_plato` (genérico) | **`nombre`** | Se elimina el `id_` y se **promueve** `nombre`: en una carta el nombre del plato es único. |
| CHEF | `matricula` | **`dni`** | Un chef **no** es un profesional matriculado; su identificador natural es el DNI. |
| MOZO | `legajo` | **`dni`** | El `legajo` lo asigna el empleador (cercano a un id interno); el identificador natural de la persona es el **DNI**. |
| MESA | `numero_mesa` ✔ | `numero_mesa` | Natural. |
| PEDIDO (restaurante) | `id_pedido` (genérico) | **`numero_comanda`** | La comanda del restaurante tiene número propio. |

### Atributos derivados — verificado

- `COMPRA.total`: ya estaba marcado **derivado** (= `Σ cantidad × precio` del rombo `detalle`).
  Correcto, sin cambios.

### Atributos de rombo — corrección

- **`presta.fecha_inicio`**: se quitó la marca `Unique`. Es atributo del **rombo N:M** `presta`
  (junto con `fecha_fin`), no PK de entidad fuerte.

### Relaciones N:M — verificado (ninguna rota, atributos en el rombo)

| Rombo | Cardinalidad | Atributos en el rombo |
|---|---|---|
| `presta` | LIBRO `(0,N)` — `(0,N)` USUARIO | **`fecha_inicio`, `fecha_fin`** |
| `detalle` (tienda) | COMPRA `(1,N)` — `(0,N)` PRENDA | **`cantidad`** |
| `trabaja_en` | MEDICO `(1,N)` — `(1,N)` DEPARTAMENTO | — |
| `receta` | PLATO `(1,N)` — `(0,N)` INGREDIENTE | **`cantidad`** |
| `detalle` (restaurante) | PEDIDO `(1,N)` — `(0,N)` PLATO | **`cantidad`** |

Relaciones 1:N (`realiza`, `dirige`, `provee`, `especialidad`, `atiende`, `aloja`): sin
cambios. Cardinalidades en pares `(mín,máx)` en ambos extremos.

---

## TP4 — Aplicación de música  (`TP4_ERDPlus_import.erdplus`)

### Claves primarias

| Entidad | Antes | Ahora | Motivo |
|---|---|---|---|
| ARTISTA | `id_artista` | `id_artista` **(se mantiene)** | Los nombres artísticos se repiten / cambian; no hay identificador natural simple. |
| ALBUM | `id_album` | `id_album` **(se mantiene)** | Enunciado: *"contar con un identificador único dentro del sistema"*. |
| CANCION | `id_cancion` (genérico) | **`isrc`** | Se elimina el `id_` y se **promueve** `isrc` (que ya era atributo). El enunciado lo destaca: *"su ISRC (International Standard Recording Code)"* — es EL identificador natural de una grabación. |
| USUARIO | `id_usuario` | `id_usuario` **(se mantiene)** | Enunciado: *"así como algún identificador único"* (pide un sustituto). `email` queda como candidata alternativa. |
| LISTA_REPRODUCCION | `id_lista` | `id_lista` **(se mantiene)** | La clave natural sería **compuesta** (`usuario + nombre`); el sustituto es correcto. |

### Atributos derivados — verificado

- `ALBUM.duracion_total`: ya estaba marcado **derivado** (= suma de la duración de sus
  canciones). Correcto, sin cambios.

### Atributos de rombo — corrección

- **`historial.fecha_hora`**: se quitó la marca `Unique`. Es atributo del **rombo N:M**
  `historial` (marca temporal de la escucha), no PK de entidad fuerte.

### Relaciones N:M — verificado (ninguna rota, atributos en el rombo)

| Rombo | Cardinalidad | Atributos en el rombo |
|---|---|---|
| `contiene` | CANCION `(0,N)` — `(1,N)` ALBUM | **`nro_pista`** |
| `incluye` | LISTA_REPRODUCCION `(0,N)` — `(0,N)` CANCION | **`orden`** |
| `historial` | USUARIO `(0,N)` — `(0,N)` CANCION | **`fecha_hora`** |

Relaciones 1:N (`lanza`, `compone`, `crea`): sin cambios. Cardinalidades en pares `(mín,máx)`
en ambos extremos.

---

## HE2 — Sistema de gestión de un gimnasio  (`HE2_gimnasio.erdplus`)

**Sin cambios: ya cumple la metodología** (se rehizo en el commit anterior aplicándola).

| Verificación | Estado |
|---|---|
| PK naturales, una por entidad | ✔ `ACTIVIDAD → nombre`, `PROFESOR → dni`, `ALUMNO → dni`, `RECIBO → numero_recibo` |
| N:M sin romper | ✔ `realiza` e `interesado_en` son rombos |
| Atributo de N:M en el rombo | ✔ `fecha_inscripcion` en el rombo `realiza` |
| Derivados marcados y no almacenados | ✔ `edad` (ALUMNO, PROFESOR); *(vigencia de actividad también es derivada, documentada)* |
| Dato histórico congelado que SÍ se guarda | ✔ `RECIBO.importe` (justificado) |
| Cardinalidades Chen `(mín,máx)` en ambos sentidos | ✔ `dicta (1,N)-(1,1)`, `realiza (0,N)-(0,N)`, `interesado_en (0,N)-(0,N)`, `tiene (0,N)-(1,1)` |

---

## Resumen de cambios

| Archivo | PK naturales | Derivados marcados | Marca `Unique` quitada de rombo/asociativa |
|---|---|---|---|
| TP1 | DEPARTAMENTO→`nombre`, PEDIDO→`numero_pedido`, PRODUCTO→`codigo_producto`, PROVEEDOR→`cuit`, PACIENTE→`dni` | `PEDIDO.precio`, `PEDIDO.cantidad_productos` | `ATENCION.fecha_hora` |
| TP2 | GARAGE→`numero_garage`, AGENCIA→`numero_agencia` | — | `exhibe.inicio_expo` |
| TP3 | LIBRO→`isbn`, USUARIO→`nro_socio`, CLIENTE→`dni`, COMPRA→`numero_comprobante`, PRENDA→`codigo_prenda`, DEPARTAMENTO→`nombre`, PROVEEDOR→`cuit`, INGREDIENTE→`codigo_ingrediente`, PLATO→`nombre`, CHEF→`dni`, MOZO→`dni`, PEDIDO→`numero_comanda` | *(ya estaba: `COMPRA.total`)* | `presta.fecha_inicio` |
| TP4 | CANCION→`isrc` | *(ya estaba: `ALBUM.duracion_total`)* | `historial.fecha_hora` |
| HE2 | *(ya cumplía)* | *(ya estaba: `edad`)* | — |

**Se mantienen con `id_` sintético (justificado):** `CUADRO` (sin natural simple), `FARMACIA`
(el enunciado dice "su ID"), `MEDICAMENTO` (clave natural compuesta), `ARTISTA` (sin natural
simple), `ALBUM` y `USUARIO`-TP4 (el enunciado pide identificador propio), `LISTA_REPRODUCCION`
(clave natural compuesta).

**Verificación final (script):** los 5 archivos siguen siendo JSON válido, toda referencia
(`parentId` / `source` / `target`) existe, cada rombo tiene exactamente 2 aristas, **cada
entidad fuerte tiene exactamente 1 atributo `Unique`**, ninguna relación N:M quedó rota y no
hay solapamientos entre entidades / rombos / notas.
