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

---

# Segunda revisión — reglas nuevas de las 2 resoluciones de referencia de la cátedra

Aprendizajes incorporados a la skill `der-ugr` (reglas 13–17) y aplicados a los `.erdplus`:
**multivaluado por frase gatillo**, **opcional con `(O)`**, **ID genérico justificado**,
**inferir relaciones no explícitas**, **atributos `inicio/fin` en N:M repetibles**.

## TP2 — `TP2_ERDPlus_import.erdplus`  (contiene los dos casos de referencia)

### Caso 1 — Institución de arte

| Elemento | Antes | Ahora | Regla |
|---|---|---|---|
| `PINTOR.corriente_artistica` | multivaluado ✔ | **`corrienteArtistica`** multivaluado | 13 — *"puede ser una o varias"* (ya estaba marcado; se ajusta el naming) |
| `PINTOR.fecha_fallecimiento` | opcional, sin `(O)` | **`fechaFallecimiento (O)`** | 14 — se agrega el sufijo `(O)` (convención de la cátedra) |
| `PINTOR.ciudad_natal` | — | **`ciudadNatal`** | 8 — naming camelCase de la cátedra |
| `CUADRO.id_cuadro` | `id_cuadro` (Unique) | **`IDCuadro`** (Unique) | 15 — **ID justificado**: un cuadro no tiene identificador natural. Se explicita como decisión correcta, no como error. |
| `exhibe.inicio_expo` / `final_expo` | atributos del rombo, sin `(O)` | **`inicioExpo`** / **`finalExpo (O)`** | 14 + 17 — N:M temporal; `finalExpo` opcional (exposición en curso) |
| `pinta` | N:M sin atributos | N:M sin atributos | 6 — se confirma: la coautoría no tiene datos propios (no toda N:M lleva atributos) |

### Caso 2 — Alquiler de autos

| Elemento | Antes | Ahora | Regla |
|---|---|---|---|
| `GARAGE.numero_garage` | `numero_garage` (Unique) | **`IDGarage`** (Unique) | 15 — **revierte** el cambio de la 1.ª revisión: el *"número único"* del garage **es** su identificador de sistema → ID justificado, naming de la cátedra. |
| `AGENCIA.numero_agencia` | `numero_agencia` (Unique) | **`IDAgencia`** (Unique) | 15 — ídem. |
| `CLIENTE.dni` | `dni` | **`DNI`** | 8 — naming de la cátedra (PK natural, sin cambio de concepto). |
| `RESERVA.nro_reserva` / `fecha_inicio` / `fecha_fin` | snake_case | **`nroReserva`** / **`fechaInicio`** / **`fechaFin`** | 8 — camelCase. |
| `involucra` (RESERVA–COCHE N:M) | sin atributos | **`inicioUso`, `finUso`** en el rombo | 17 — N:M temporal: el uso del coche varía por reserva. |
| `estaciona` | `GARAGE (0,N) — (1,1) COCHE`  (1:N) | **`COCHE (1,1) — (0,1) GARAGE`  (1:1)** | Consistencia con el enunciado: *"todo coche tiene siempre asignado un garage fijo, que no cambia"* y un garage aloja a lo sumo un coche. |
| `realiza` | `AGENCIA (0,N) — (1,1) RESERVA` | **`CLIENTE (0,N) — (0,N) AGENCIA`  (N:M)** | 16 — **relación inferida**: el enunciado no vincula explícitamente cliente y agencia, pero el sistema del alquiler lo exige. Sustituye al vínculo RESERVA–AGENCIA. |
| `efectua` | `CLIENTE (0,N) — (1,1) RESERVA` | igual | Se confirma: *"puede haber clientes sin reservas"* → participación `(0,N)` del lado cliente. |

### Caso 3 — Cadena de farmacias
Sin cambios (no es una de las dos resoluciones de referencia). `dia` y `nombre_enfermedad` ya
estaban como multivaluados (regla 13, *"los días que le corresponde guardia"*, *"las
enfermedades que tuvo"*).

## TP3 — `TP3_ERDPlus_import.erdplus`

| Elemento | Antes | Ahora | Regla |
|---|---|---|---|
| `presta.fecha_fin` | atributo del rombo | **`fecha_fin (O)`** (opcional) | 14 — un préstamo en curso todavía no tiene fecha de devolución. `presta` ya era N:M temporal (`fecha_inicio` / `fecha_fin`). |

## TP1 — `TP1_ERDPlus_import.erdplus`
Revisado: sin cambios. No hay frases gatillo de multivaluado ni de opcional; `contiene` es
N:M no repetible (un pedido es un evento único, `cantidad` en el rombo alcanza).

## TP4 — `TP4_ERDPlus_import.erdplus`
Revisado: sin cambios. `historial` (USUARIO–CANCION) ya es N:M temporal con `fecha_hora` en el
rombo (regla 17). No hay atributos multivaluados ni opcionales pendientes.

## HE2 — `HE2_gimnasio.erdplus`

| Elemento | Antes | Ahora | Regla |
|---|---|---|---|
| `ACTIVIDAD.fecha_fin_oferta` | opcional, sin `(O)` | **`fecha_fin_oferta (O)`** | 14 — sufijo `(O)`. |
| `RECIBO.fecha_pago` | opcional, sin `(O)` | **`fecha_pago (O)`** | 14 — sufijo `(O)`. |

Resto sin cambios: `realiza` (ALUMNO–ACTIVIDAD) ya lleva `fecha_inscripcion` en el rombo;
`edad` derivada; `telefono` multivaluado; `direccion` compuesta; N:M sin romper.

## Verificación final (script)
Los 5 `.erdplus` siguen siendo JSON válido; toda `parentId`/`source`/`target` existe; cada
rombo tiene exactamente 2 aristas; cada entidad `Regular` tiene **exactamente 1** atributo
`Unique`; coherencia `(O)` ↔ `isOptional` en todos los atributos; ninguna N:M rota; sin
solapamientos entre entidades / rombos / notas.

> Nota de naming: los `.erdplus` de **TP2 casos 1 y 2** quedaron en **camelCase + `IDxxx`**
> (naming exacto de las resoluciones de referencia de la cátedra). El resto de los archivos
> y los `TP*_resolucion.md` / `.drawio` conservan snake_case. Alinear todo a camelCase es un
> cambio disponible a pedido.

---

# Tercera revisión — corrección de 3 errores de cardinalidad/relación en TP2 caso 2

Detectados por el usuario comparando `TP2_ERDPlus_import.erdplus` (caso alquiler de autos)
contra la resolución real del profesor. **Los tres eran errores introducidos en revisiones
anteriores de este mismo proyecto**, no del enunciado.

| Relación | Antes (incorrecto) | Ahora (corregido) | Motivo |
|---|---|---|---|
| `efectua` | CLIENTE `(0,N)` — `(1,1)` RESERVA | **CLIENTE `(1,1)` — `(0,N)` RESERVA** | Los dos lados estaban invertidos: *"la realiza un único cliente"* es la restricción del lado **RESERVA** (`(1,1)`... espera, ver nota); *"puede haber clientes sin reservas"* es la del lado **CLIENTE**. |
| `estaciona` | COCHE `(1,1)` — `(0,1)` GARAGE  (1:1) | **COCHE `(1,1)` — `(0,N)` GARAGE**  (1:N) | El enunciado no dice que un garage aloje un único coche; sólo que *"todo coche tiene siempre asignado un garage fijo"*. La 2ª revisión lo había cambiado a 1:1 por error. |
| `realiza` | CLIENTE `(0,N)` — `(0,N)` AGENCIA  (N:M, agregada en la 2ª revisión como "inferida") | **Se elimina.** Se crea `realiza`: RESERVA `(1,1)` — `(0,N)` AGENCIA  (1:N) | *"Cada reserva se realiza en una determinada agencia"*: el sujeto es la **reserva**, no el cliente. La relación CLIENTE–AGENCIA de la 2ª revisión estaba mal inferida. |

> **Nota sobre `efectua`:** la tabla de cardinalidades que dejó el usuario en el pedido
> describe el resultado final tal como quedó configurado en el archivo (que es el que
> importa): `sourceEntityDetails` de **CLIENTE** → `Mandatory/One` **(1,1)**,
> `targetEntityDetails` de **RESERVA** → `Optional/Many` **(0,N)**. Aplicado tal cual.

## Regla general que motivó el error (agregada a la skill `der-ugr` como reglas 18–20)

1. **Regla 18 — verificar siempre la dirección semántica de cada cardinalidad** antes de
   confirmarla: no alcanza con que el par `(mín,máx)` "parezca" razonable, hay que releer
   cada lado contra una frase concreta del enunciado y confirmar que quedó en el campo
   correcto (`sourceEntityDetails` vs `targetEntityDetails`).
2. **Regla 19 — "X se realiza en Y" → relación entre X e Y**, no entre el actor que ejecuta
   X e Y. Causó el error de `realiza` (CLIENTE–AGENCIA en vez de RESERVA–AGENCIA).
3. **Regla 20 — entidad fuerte (lugar) vs. transacción**: ante una relación entre un lugar/
   organización y una transacción, verificar cuál de las dos "pertenece" al lugar — casi
   siempre es la transacción, no el actor que la originó.

El **Ejemplo 3.5** de la skill (alquiler de autos) se reescribió con los valores correctos y
una nota explícita de la corrección, para que quede como caso de estudio.

## Verificación
`TP2_ERDPlus_import.erdplus` sigue siendo JSON válido; las 4 relaciones del caso 2
(`efectua`, `involucra`, `estaciona`, `realiza`) tienen exactamente 2 aristas cada una;
ninguna referencia rota; cada entidad `Regular` conserva exactamente 1 atributo `Unique`.

## ⚠️ Pendiente — alcance de la corrección

Esta corrección se aplicó **solo a las 3 relaciones señaladas de TP2 caso 2**. El mismo tipo
de error (lados de cardinalidad invertidos, o relación conectando al actor en vez de a la
transacción) **podría estar presente en otras relaciones** de TP1, TP2 (casos 1 y 3), TP3,
TP4, HE2 y `REFERENCIA_ERDPlus.erdplus`, que no fueron re-verificadas contra la resolución
del profesor en esta pasada. Se recomienda una auditoría específica de cardinalidades con la
misma metodología (releer cada lado contra una frase del enunciado) antes de dar por
definitivos esos archivos.

---

# Cuarta revisión — 2 errores adicionales en TP2 caso 2 (estaciona, realiza)

Detectados por el usuario comparando de nuevo contra la resolución real del profesor.

| Relación | Antes | Ahora | Motivo |
|---|---|---|---|
| `estaciona` | COCHE `(1,1)` — `(0,N)` GARAGE | **COCHE `(1,1)` — `(1,1)` GARAGE**  (1:1 fija) | *"todo coche tiene siempre asignado un determinado garage, que no puede cambiar"* describe una relación **fija**: ambos lados `(1,1)`, no 1:N. |
| `realiza` | RESERVA `(1,1)` — `(0,N)` AGENCIA | **RESERVA `(0,N)` — `(1,1)` AGENCIA** | Las cardinalidades de la 3ª revisión habían quedado invertidas: *"una reserva se realiza en exactamente una agencia"* corresponde al lado **AGENCIA** `(1,1)`; *"una agencia puede tener cero o muchas reservas"* corresponde al lado **RESERVA** `(0,N)`. |

`estaciona` y `realiza` quedaron así corregidos **por tercera vez** en este proyecto — ver
el detalle completo del ida y vuelta en la sección "Nota de corrección" del Ejemplo 3.5 de
la skill `der-ugr`.

## Regla nueva agregada a la skill (regla 19)

**Relación fija / "no puede cambiar" → `(1,1)` en AMBOS lados.** Si el enunciado dice que
una relación es fija, no cambia, o queda asignada de manera permanente, la cardinalidad es
`(1,1)`–`(1,1)` (1:1 obligatoria), no 1:N. Se reordenaron las reglas 18–21 (antes 18–20) y
se reescribió la regla 18 con un checklist más estricto: escribir la frase de cada lado,
fijar el campo correcto, y **probar la lectura invertida** antes de confirmar — porque en
este ejercicio la lectura "intuitiva" resultó invertida más de una vez.

## Verificación
`TP2_ERDPlus_import.erdplus`: JSON válido, sin referencias rotas, 2 aristas por rombo, 1
atributo `Unique` por entidad fuerte.

## Estado de TP2 caso 2 (alquiler de autos) — cardinalidades finales

| Relación | Cardinalidad final |
|---|---|
| `efectua` | CLIENTE `(1,1)` — `(0,N)` RESERVA |
| `involucra` | RESERVA `(1,N)` — `(0,N)` COCHE  (N:M, `inicioUso`/`finUso` en el rombo) |
| `estaciona` | COCHE `(1,1)` — `(1,1)` GARAGE  (1:1 fija) |
| `realiza` | RESERVA `(0,N)` — `(1,1)` AGENCIA |

## ⚠️ Sigue pendiente
El resto de los archivos (TP1, TP2 casos 1 y 3, TP3, TP4, HE2, `REFERENCIA_ERDPlus.erdplus`)
**todavía no fue re-verificado** contra la resolución del profesor con esta misma
metodología. Dado que en este único caso (alquiler de autos) se necesitaron **4 rondas de
corrección** sobre solo 4 relaciones, es razonable esperar errores similares en otras partes
del proyecto.

---

# Quinta revisión — auditoría completa de cardinalidades en todos los .erdplus

Auditoría de **TP1, TP2 (casos 1/2/3), TP3, TP4 y HE2**: para cada relación de cada archivo
se releyó el enunciado correspondiente, se justificó cada lado con una frase concreta, se
verificó la lógica cruzada donde corresponde, y se revisaron N:M (no rotas, atributos en el
rombo), opcionales/multivaluados y PKs naturales.

## Corrección puntual confirmada

| Archivo | Relación | Corrección | Frase del enunciado |
|---|---|---|---|
| TP2 caso 1 | `exhibe` | CUADRO: `(0,N)` → **`(1,N)`** | *"los cuadros se exponen en varios museos"* → participación obligatoria del cuadro (mín 1). |

## Correcciones adicionales encontradas en la auditoría

| Archivo | Relación | Corrección | Frase del enunciado |
|---|---|---|---|
| TP2 caso 2 | `involucra` | RESERVA `(1,N)`→**`(0,N)`** ; COCHE `(0,N)`→**`(1,N)`** | Mismo patrón cruzado ya confirmado en `efectua`/`realiza` **dentro del mismo caso**: la reserva involucra 1..N coches y un coche participa en 0..N reservas a lo largo del tiempo (*"puede involucrar a varios coches"*). |
| TP2 caso 3 | `produce` | MEDICAMENTO `(0,N)`→**`(1,N)`** | *"…y las acciones terapéuticas **que tiene**"* — misma construcción que *"la o las monodrogas que componen cada medicamento"* (ya `(1,N)` en `composicion`): todo medicamento tiene al menos una acción terapéutica. |
| TP3 | `dirige` | DEPARTAMENTO `(0,1)`→**`(1,1)`** | *"Cada departamento **tiene** un nombre y un jefe"* → todo departamento tiene jefe: participación obligatoria, no opcional. |
| TP1 | `reporta_a` (arista duplicada) | Se corrige un **id de arista duplicado** (bug de generación, no de cardinalidad): las dos aristas de la relación unaria tenían el mismo `id`, lo que podía hacer que ERDPlus sólo reconociera una de las dos cardinalidades al importar. | — (defecto estructural, no de contenido) |

## Alcance de la "lógica cruzada" — decisión metodológica

Se verificó **cada una de las ~30 relaciones** de los 5 archivos contra su enunciado. La
"lógica cruzada" (regla 18 de la skill) sólo se **reaplicó** donde:
(a) ya había evidencia confirmada por el usuario en ese mismo caso (`involucra`, dentro del
caso alquiler de autos, junto a `efectua`/`realiza`), o
(b) el patrón es idéntico al confirmado (actor/transacción que "se realiza en" un lugar).

**No se aplicó un swap ciego a todas las relaciones 1:N/N:M restantes** (`pertenece`,
`contiene`, `provee`, `emplea`, `comercializa`, `composicion`, `presta`, `detalle`,
`trabaja_en`, `especialidad`, `atiende`, `aloja`, entre otras), porque:
1. No hay evidencia confirmada de que el patrón cruzado se extienda a relaciones de
   posesión/composición simple (pertenece-a, contiene, es-parte-de) — son estructuralmente
   distintas de "actor ejecuta transacción en lugar".
2. Al probar el swap en varias de ellas (p. ej. `dirige`) el resultado es **semánticamente
   absurdo** (forzaría a que *todo* médico sea jefe de un departamento), lo que indica que el
   swap no aplica de forma universal.
3. Todas esas relaciones, leídas de forma estándar (participación propia de cada entidad),
   **ya coinciden** con la frase del enunciado — no se detectó ningún error en ellas más allá
   de los cuatro listados arriba.

**Recomendación:** si al comparar contra la resolución del profesor aparece un patrón
similar en alguna de las relaciones no tocadas, avisar con el mismo detalle (archivo,
relación, lado, valor esperado) para poder corregirla y así seguir afinando la regla en la
skill `der-ugr`.

## Verificación estructural final (los 5 archivos)
JSON válido; toda `parentId`/`source`/`target` existe; **cada rombo tiene exactamente 2
aristas** (se corrigió 1 excepción en TP1, ver arriba); **cada entidad `Regular` tiene
exactamente 1 atributo `Unique`**; todas las relaciones N:M siguen siendo rombos (ninguna se
rompió); los atributos de cada N:M siguen dentro de su rombo; sin solapamientos.

## Sexta revisión — correcciones puntuales HE2_gimnasio.erdplus (revisión visual)

Revisión visual solicitada por el usuario sobre `Unidad 1/Hito Evaluable 2/HE2_gimnasio.erdplus`.

| Punto | Atributo/Relación | Corrección | Estado encontrado |
|---|---|---|---|
| 1 | `fecha_fin_oferta` (ACTIVIDAD) | Debe tener un solo `(O)` y `Optional: true` una sola vez | Ya estaba correcto (una sola marca) — sin cambios |
| 2 | `fecha_pago` (RECIBO) | Debe tener un solo `(O)` y `Optional: true` una sola vez | Ya estaba correcto (una sola marca) — sin cambios |
| 3 | `edad` (PROFESOR) | Debe estar marcado `Derived: true` (se calcula de `fecha_nacimiento`) | Ya estaba correcto, igual que en ALUMNO — sin cambios |
| 4 | `telefono` (ALUMNO) | El enunciado no menciona múltiples teléfonos → debe ser atributo simple, no multivaluado | **Corregido**: `types: {"Multivalued": true}` → `types: []` |

También se verificaron las cardinalidades: `dicta` PROFESOR(1,N)–(1,1)ACTIVIDAD,
`realiza` ALUMNO(0,N)–(0,N)ACTIVIDAD con `fecha_inscripcion` dentro del rombo,
`interesado_en` ALUMNO(0,N)–(0,N)ACTIVIDAD, `tiene` ALUMNO(0,N)–(1,1)RECIBO — las 4 ya
estaban correctas, sin cambios.

Único cambio real aplicado: `telefono` en ALUMNO de multivaluado a simple.
