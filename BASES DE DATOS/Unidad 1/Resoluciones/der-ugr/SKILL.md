---
name: der-ugr
description: Metodología exacta del profesor Briant Gauna (UGR, Bases de Datos 2026) para resolver ejercicios de Diagrama Entidad-Relación (DER). Cargar antes de resolver cualquier enunciado de modelado conceptual de la materia, corregir un DER existente, o generar archivos .erdplus / *_resolucion.md. Cubre: identificación de entidades/relaciones/atributos, PK naturales, N:M sin romper, atributos derivados, cardinalidades Chen modificada (mín,máx), y el formato ERDPlus importable.
---

# DER — Metodología del profesor Briant Gauna (UGR · Bases de Datos 2026)

Esta skill codifica **cómo resuelve DER el profesor de la cátedra**, deducida de su clase
grabada ("Construcción de DER – Ejemplos Prácticos"), del apunte de la materia y de las
resoluciones de TP1–TP4 y del Hito Evaluable 2. Seguirla al pie de la letra maximiza la nota
en la rúbrica (entidades 1pt · relaciones 2pt · cardinalidades 2pt · atributos 2pt ·
diagrama claro 1pt · consistencia con el enunciado 2pt).

## Cuándo usar esta skill

- Al recibir un enunciado en lenguaje coloquial que pide un DER / modelo de datos.
- Al corregir o revisar un DER ya hecho.
- Antes de generar `*_resolucion.md` o `*.erdplus` para la materia.

---

## 1. Metodología paso a paso

### Paso 1 — Leer el enunciado completo e identificar **sustantivos → entidades candidatas**
- Subrayar los sustantivos. *"las entidades se representan con sustantivos y las relaciones con verbos"* (profesor).
- Entidad = cosa con **datos propios** y existencia independiente. Si un sustantivo solo aporta
  un nombre y nada más, probablemente sea un **atributo**, no una entidad.
- Si un sustantivo puede tener **varios valores** por instancia de otra entidad → entidad o
  atributo multivaluado, nunca `campo1, campo2, campo3`.
- **Entidades en MAYÚSCULAS y en singular**: `ALUMNO`, `ACTIVIDAD`, `RECIBO`.

### Paso 2 — Identificar **verbos entre entidades → relaciones**
- Relación = rombo con un **verbo o frase verbal en minúscula**: `dicta`, `realiza`,
  `interesado_en`, `tiene`, `pertenece`, `contiene`, `provee`.
- Leer la frase del enunciado en los **dos sentidos** (izq→der y der→izq) para nombrarla bien.
- Una **relación unaria (recursiva)** aparece cuando una entidad se relaciona **consigo misma**
  (ej: `EMPLEADO` —*reporta_a*→ `EMPLEADO`, roles jefe / subordinado).
- Dos entidades pueden tener **más de una relación** entre sí si son hechos distintos
  (ej: `ALUMNO` *realiza* `ACTIVIDAD` **y** `ALUMNO` *interesado_en* `ACTIVIDAD`).

### Paso 3 — Identificar **adjetivos / características → atributos**
- *"De cada X se sabe / se registra / interesa…"* → lista de atributos de X.
- **Atributos en minúscula, snake_case**: `fecha_nacimiento`, `tarifa_mensual`, `nro_reserva`.
- Tipos de atributo a distinguir explícitamente:
  | Tipo | Notación | Cuándo |
  |---|---|---|
  | simple | elipse | un valor atómico |
  | **compuesto** | elipse con sub-elipses | se descompone: `direccion → calle, numero, localidad` |
  | **multivaluado** | doble elipse | varios valores a la vez: `telefono`, `corriente_artistica` |
  | **derivado / calculado** | **elipse punteada** | se calcula a partir de otros; **NO se guarda** |
  | **clave (PK)** | **subrayado** | identifica la instancia (ver Paso 4) |
  | clave parcial | subrayado punteado | discriminador de entidad débil |
  | opcional | admite `NULL` | *"cuando corresponda"*, *"si tiene"* |

### Paso 4 — Definir la **PK natural** (una sola por entidad fuerte)
- Buscar el identificador **del dominio, que existe fuera del sistema**: `dni`, `cuit`,
  `cuil`, `patente`, `isbn`, `isrc`, `codigo_postal`, `nro_socio`, `matricula` (profesional),
  `codigo_producto` / `codigo_barras`, `numero_recibo` / `numero_comprobante`,
  `nombre` (cuando el enunciado dice *"el nombre no se repite"*).
- **Criterios de una buena PK** (del profesor): **única**, **estable** (no cambia) y que no
  induzca duplicados por error de tipeo.
- **Solo crear un `id` genérico si NO existe un identificador natural de un único atributo**,
  o si la clave natural sería **compuesta** (entonces un sustituto es correcto: `id_medicamento`
  cuando la clave natural es `nombre + presentacion`), o si el **enunciado lo pide
  explícitamente** (*"contar con algún identificador único"*, *"un identificador único dentro
  del sistema"*).
- **Una entidad fuerte tiene EXACTAMENTE UN atributo subrayado.** Nunca dos.
- Ejemplo del profesor (clase): entre `nombre+apellido` y `DNI`, gana `DNI`; entre `nombre de
  ciudad` y `codigo_postal`, gana `codigo_postal` (*"Santiago existe en Buenos Aires y en
  Corrientes"* → el nombre se repite y un tipeo distinto crea dos instancias de la misma ciudad).
- Si no hay atributo único natural (varios registros con el mismo nº de pasaporte) → crear un
  atributo nuevo o **combinar** dos atributos (ejemplo del profe: aerolíneas usan
  `código de reserva + apellido`).

### Paso 5 — Determinar **cardinalidades leyendo en AMBOS sentidos**
- Notación **Chen modificada de la cátedra: pares `(mín, máx)`** sobre cada extremo del rombo,
  leídos como la **participación de esa entidad** en la relación:
  - `(0,1)` opcional, a lo sumo una · `(1,1)` obligatoria, exactamente una
  - `(0,N)` opcional, muchas · `(1,N)` obligatoria, al menos una
- **Participación mínima**: `0` = participación opcional (se dibuja con **círculo**);
  `1` = participación obligatoria / total (se dibuja con **barra**).
- **Máxima**: `1` (barra / "una") o `N` (pata de gallo / "muchas").
- Procedimiento: *"voy primero hacia la derecha"* (¿cuántas B se relacionan con una A?) *"y
  luego hacia la izquierda"* (¿cuántas A con una B?). Siempre las dos lecturas, nunca una sola.
- Tipos por cardinalidad **máxima**: 1:1, **1:N** (el más común), **N:M**.

### Paso 6 — Identificar los **atributos de las relaciones N:M** (van EN EL ROMBO)
- **Las relaciones N:M casi siempre tienen atributos** — hay que pensar bien cuáles.
- Un atributo va **en el rombo** cuando **depende del par** (de la combinación de las dos
  entidades), no de una sola: `fecha_inscripcion` (alumno+actividad), `cantidad` (pedido+
  producto), `precio_al_que_se_compró` (cliente+producto: histórico, porque el precio del
  producto cambia con el tiempo), `nota` (alumno+examen), `inicio_expo` (museo+cuadro),
  `nro_pista` (canción+álbum), `orden` (lista+canción).
- **Nunca** poner ese atributo en una de las entidades. Es el error más penado.

### Paso 7 — Identificar los **atributos derivados / calculados**
- Todo lo que se **puede calcular** a partir de otros datos → **atributo derivado (elipse
  punteada)** y **NO se almacena** en la BD.
- Ejemplos: `edad` (de `fecha_nacimiento`), `total` de una compra / `precio` de un pedido
  (suma de `cantidad × precio_unitario` del rombo), `cantidad_productos` de un pedido,
  `duracion_total` de un álbum (suma de canciones), "actividad vigente" (de `fecha_fin_oferta`),
  "estado de pago" de un alumno (de los recibos sin `fecha_pago`).
- **Excepción — dato histórico congelado**: si el valor se calcula **al emitir un documento**
  y **no debe cambiar** aunque cambien las fuentes (ej: `importe` de un recibo, `precio_unitario`
  de una línea de factura), **SÍ se almacena** — no es derivado, es un hecho del momento.

---

## 2. Reglas estrictas del profesor (no negociables)

1. **PK naturales.** DNI, CUIT, CUIL, matrícula profesional, ISBN, ISRC, patente, código
   postal, número de socio, código de barras / código de producto, número de recibo /
   comprobante, nombre (si es único por enunciado). `id_` genérico **solo** si no existe
   natural simple, o la natural es compuesta, o el enunciado pide un identificador propio.
2. **Un solo atributo único (PK) por entidad fuerte.** Jamás dos subrayados.
3. **NUNCA romper una relación N:M.** Se deja como **rombo** con sus atributos dentro. No se
   sustituye por dos relaciones 1:N ni (en el DER conceptual) por una entidad asociativa.
   *(Excepción de formato: una relación **ternaria** no entra en ERDPlus como rombo binario;
   ahí sí se usa una **entidad asociativa**, y se deja constancia de que conceptualmente es
   una ternaria.)*
4. **Los atributos que dependen de la N:M van en el rombo**, nunca en las entidades.
5. **Atributos calculados/derivados → elipse punteada y NO se guardan** (salvo dato histórico
   congelado, ver Paso 7).
6. **Entidades: MAYÚSCULAS, singular.** `PROFESOR`, no `profesores`.
7. **Relaciones: minúscula, verbo o frase verbal.** `dicta`, `interesado_en`.
8. **Atributos: minúscula, snake_case.**
9. **Cardinalidades en pares Chen `(0,1) (1,1) (0,N) (1,N)`**, en **ambos** extremos.
10. **Participación**: opcional = círculo (mín 0); obligatoria/total = barra (mín 1).
11. **Entidad débil** cuando no tiene identificador propio: se identifica por la entidad
    fuerte + una **clave parcial**; la relación que las une es **identificatoria** (rombo
    doble). *(Si el enunciado / la consigna piden "una única clave natural por entidad" y el
    documento tiene un número propio — como un recibo —, preferir entidad fuerte con ese
    número.)*
12. **Relación unaria** cuando una entidad se relaciona consigo misma (jefe/subordinado,
    supervisa, es_parte_de). Dos "patas" al mismo rectángulo, con roles.

---

## 3. Ejemplos resueltos por el profesor (referencia)

### 3.1 DEPARTAMENTO – EMPLEADO  (relación 1:N, PK natural, opcional en un lado)
Enunciado: *"Un departamento posee ID y Nombre. Un empleado tiene CUIL y Nombre. Cada
empleado forma parte de un departamento; un departamento puede tener múltiples empleados."*

```
DEPARTAMENTO(nombre)                  -- PK natural: el nombre del depto no se repite
EMPLEADO(cuil, nombre)               -- PK natural: CUIL (identificador de la persona)

pertenece :  EMPLEADO (1,1) ────── (0,N) DEPARTAMENTO
```
- `EMPLEADO (1,1)`: todo empleado pertenece a **exactamente un** departamento (participación
  total → barra).
- `DEPARTAMENTO (0,N)`: un departamento puede existir **sin** empleados (participación
  opcional → círculo) y tener muchos.
- Es **1:N**. En el modelo relacional la PK de DEPARTAMENTO baja como **FK obligatoria** a
  EMPLEADO. En el DER **no** se dibuja la FK: la representa la línea de la relación.
- **Error a evitar**: poner `id_departamento` como PK teniendo `nombre` único; poner un
  `id_empleado` teniendo `CUIL`.

### 3.2 EMPLEADO – EMPLEADO  (relación **unaria**: jefe / subordinado)
Enunciado: *"Un empleado puede tener hasta un jefe, que es otro empleado. Un empleado jefe
puede tener varios empleados a su cargo."*

```
EMPLEADO(cuil, nombre)

reporta_a :  EMPLEADO (0,1) ─[subordinado]──[jefe]─ (0,N) EMPLEADO
```
- Relación **recursiva 1:N**: un empleado tiene **0 o 1** jefe `(0,1)`; un jefe tiene **0..N**
  subordinados `(0,N)`.
- El mínimo `0` del lado subordinado permite al gerente general (sin jefe).
- En el relacional se resuelve con una **FK a la misma tabla** (`cuil_jefe`) que admite `NULL`.
- **Error a evitar**: crear una entidad `JEFE` separada; poner cardinalidad en un solo sentido.

### 3.3 PEDIDO – PRODUCTO – PROVEEDOR  (N:M con atributos en el rombo, PK naturales, derivados)
Enunciado: *"Un pedido (precio, cantidad de productos) posee más de un producto. Un producto
(stock, costo unitario) puede estar en múltiples pedidos y estar enlazado a un solo
proveedor. Un proveedor (nombre, teléfono) puede proveer varios artículos."*

```
PEDIDO(numero_pedido, precio*, cantidad_productos*)       -- *  = DERIVADOS, no se guardan
PRODUCTO(codigo_producto, stock, costo_unitario)
PROVEEDOR(cuit, nombre, telefono)

contiene :  PEDIDO (1,N) ──◇[ cantidad ]◇── (0,N) PRODUCTO      -- N:M, NO se rompe
provee   :  PRODUCTO (0,1) ─────────────── (0,N) PROVEEDOR       -- 1:N
```
- **PK naturales**: `numero_pedido` (nº de comprobante del pedido), `codigo_producto`
  (código / código de barras), `cuit` del proveedor (el profe en clase usó el "NIF" como
  clave natural del proveedor).
- **`contiene` es N:M y se deja como rombo.** Su atributo **`cantidad`** (cuántas unidades de
  ese producto en ese pedido) **va en el rombo**, no en PEDIDO ni en PRODUCTO. El profesor
  además sugiere registrar en el rombo la **fecha de compra** y el **precio al que se compró**
  (histórico), porque el `costo_unitario` del producto cambia con el tiempo.
- **`precio` y `cantidad_productos` de PEDIDO son DERIVADOS**: se calculan sumando el rombo
  `contiene` (`Σ cantidad`, `Σ cantidad × precio`). Se marcan con elipse punteada y **no se
  almacenan**.
- **`provee` es 1:N**: `PRODUCTO (0,1)` — a lo sumo un proveedor; `PROVEEDOR (0,N)` — provee
  muchos. El *"proveedor"* que el enunciado nombra como dato del producto **no** es un
  atributo: es esta relación.
- **Errores a evitar**: `id_pedido`/`id_producto`/`id_proveedor`; romper `contiene` en dos
  1:N; poner `cantidad` en PRODUCTO; olvidar marcar `precio` como derivado.

---

## 4. Formato de salida (siempre los dos archivos)

### 4.1 `*_resolucion.md` — análisis completo
Estructura recomendada (ver `TP1..TP4_resolucion.md` y `HE2_gimnasio_resolucion.md`):
1. Encabezado (materia, ejercicio, herramienta).
2. Bloque de **notación** usada.
3. **§1 Entidades** — tabla `entidad | tipo (fuerte/débil) | PK natural | justificación`
   + lista de elementos del enunciado que **NO** son entidades ni atributos (típicamente las
   relaciones y los derivados).
4. **§2 Atributos por entidad** — tabla por entidad: `atributo | tipo | justificación`.
   Marcar explícitamente PK, compuesto, multivaluado, **derivado – no se almacena**, opcional.
5. **§3 Relaciones y cardinalidades** — tabla:
   `relación | extremos y (mín,máx) | tipo (1:N / N:M) | atributos EN EL ROMBO | justificación`
   + lectura de cada relación en **ambos sentidos**.
6. **§4 DER** — Mermaid `erDiagram` + descripción textual.
7. **§5 Decisiones de diseño** — cada una anclada a una frase del enunciado (PK naturales
   elegidas, por qué tal N:M no se rompe, qué es derivado y por qué, supuestos).
8. **§6 Consultas que habilita** el modelo (si el enunciado pide alguna).
9. **§7 Cobertura de la rúbrica** — mapear cada criterio a dónde se cumple.

### 4.2 `*.erdplus` — formato NATIVO de erdplus.com (importable)
Basarse en `BASES DE DATOS/Unidad 1/Prueba.erdplus` (exportación real analizada) y en
`HE2_gimnasio.erdplus`. Estructura:

```jsonc
{
  "diagramType": 1,                         // 1 = ER Diagram
  "data": {
    "nodes": [
      // Entidad (rectángulo)
      { "id": "<uuid>", "type": "Entity", "position": {"x":..,"y":..},
        "data": {"label":"ALUMNO", "type":"Regular"|"Weak"|"Associative",
                 "isConnectable":true, "isSelected":false},
        "measured": {"width":100,"height":50}, "selected":false, "dragging":false },

      // Atributo (elipse) — hijo de una entidad o de un rombo
      { "id":"<uuid>", "parentId":"<uuid host>", "type":"Attribute",
        "position": {"x":<rel>,"y":<rel>},           // RELATIVA al padre
        "data": {"label":"dni",
                 "types": {"Unique":true}            // PK / subrayado  (UNA sola por entidad fuerte)
                        | {"Multivalued":true}       // doble elipse
                        | {"Derived":true}           // punteada — NO se guarda
                        | {"Optional":true}
                        | {"Composite":true}         // + hijos con parentId = este atributo
                        | {"Partially Unique":true}  // clave parcial de entidad débil
                        | [] ,                        // (lista vacía) = atributo normal
                 "isSelected":false, "isConnectable":true},
        "measured": {"width":100,"height":50} },

      // Relación (rombo) — SOLO BINARIA (source/target)
      { "id":"<uuid>", "type":"Relationship", "position": {...},
        "data": {"label":"realiza",
                 "sourceEntityDetails": {"id":"<ent>", "minCardinality":"Mandatory"|"Optional",
                                                       "maxCardinality":"One"|"Many"},
                 "targetEntityDetails": {"id":"<ent>", "minCardinality":..., "maxCardinality":...},
                 "isSelected":false, "isConnectable":true,
                 "isIdentifying": true },            // solo si la relación es identificatoria (entidad débil)
        "measured": {"width":100,"height":50} },

      // Texto libre (para el enunciado / notas)
      { "id":"<uuid>", "type":"Label", "position": {...},
        "data": {"label":"...", "isSelected":false, "isConnectable":true},
        "measured": {"width":W,"height":H}, "selected":false, "dragging":false }
    ],
    "edges": [
      // atributo -> entidad/rombo
      {"id":"<uuid>", "type":"Attribute", "source":"<host id>", "target":"<attr id>"},
      // relación -> cada entidad participante (DOS aristas por rombo binario)
      {"id":"<relId>-><entId>;<entId>-><otherId>", "type":"Relationship",
       "source":"<relId>", "target":"<entId>",
       "data":{"id":"<relId>-><entId>", "minCardinality":..., "maxCardinality":...}}
    ],
    "viewport": {"x":..,"y":..,"zoom":..}
  },
  "name": "...",
  "folder": {"name":"Diagrams","folderType":1,"depth":0,"id":1},
  "id": <int>, "updatedAtTimestamp": <unix>
}
```

Mapeo cardinalidad de la cátedra → ERDPlus:
`(0,1)`→`Optional`/`One` · `(1,1)`→`Mandatory`/`One` · `(0,N)`→`Optional`/`Many` ·
`(1,N)`→`Mandatory`/`Many`. Cada entidad lleva **su propia** `(mín,máx)` en su lado.

Reglas al generar el `.erdplus`:
- **N:M** = nodo `Relationship` (rombo). **No** convertir en entidad (salvo ternaria).
- Atributo de N:M → `Attribute` con `parentId` = id del rombo.
- **PK** = `types:{"Unique":true}`, **una sola** por entidad `Regular`.
- **Derivado** = `types:{"Derived":true}` (nunca marcar además `Unique`).
- Compuesto = `types:{"Composite":true}` + hijos `Attribute` con `parentId` = el compuesto
  y su propia arista `Attribute`.
- Incluir el **enunciado como nodo `Label`** a un costado, sin solaparse con el DER.
- Validar antes de entregar: JSON válido; toda `parentId`/`source`/`target` existe; cada
  rombo tiene exactamente 2 aristas `Relationship`; cada entidad `Regular` tiene exactamente
  1 atributo `Unique`; sin solapes entre entidades / rombos / label.

---

## 5. Errores comunes a evitar (checklist final)

- [ ] `id_entidad` como PK cuando existe identificador natural (DNI, CUIT, ISBN, patente,
      código, número de comprobante, nombre único…).
- [ ] **Más de un** atributo marcado como único en una entidad fuerte.
- [ ] Romper una **N:M** en dos 1:N (o en entidad asociativa cuando podía quedar rombo).
- [ ] Poner el atributo de la relación **en una entidad** en vez de en el rombo.
- [ ] Olvidar marcar como **derivado** lo que se calcula (`total`, `edad`, `precio` del
      pedido, `duracion_total`, "vigente", "estado de pago").
- [ ] Guardar un derivado en la BD (salvo dato histórico congelado como `importe` de recibo).
- [ ] Cardinalidad escrita en **un solo sentido**.
- [ ] Entidad en plural o en minúscula; relación con sustantivo; atributo sin snake_case.
- [ ] Relación N:M **sin pensar** sus atributos (casi siempre tiene al menos uno).
- [ ] No usar entidad **débil** cuando la entidad no tiene identificador propio.
- [ ] No detectar una relación **unaria** (entidad relacionada consigo misma).
- [ ] Confundir un **atributo** que en realidad es una **relación** (*"actividades a cargo"*,
      *"proveedor del producto"*, *"jefe del empleado"*).

---

## 6. Archivos de referencia en el proyecto

- `BASES DE DATOS/Unidad 1/Prueba.erdplus` — exportación real de ERDPlus (plantilla del formato).
- `BASES DE DATOS/Unidad 1/Resoluciones/TP{1..4}/TP{n}_resolucion.md` + `.erdplus` — ejercicios resueltos.
- `BASES DE DATOS/Unidad 1/Hito Evaluable 2/HE2_gimnasio_resolucion.md` + `.erdplus` — caso resuelto con esta metodología.
- `BASES DE DATOS/Unidad 1/Resoluciones/REVISION_CORRECCIONES.md` — qué se corrigió en cada ejercicio y por qué.
- `BASES DE DATOS/Unidad 1/Construcción de DER - Ejemplos Prácticos (sencillos).txt` — transcripción de la clase del profesor.
