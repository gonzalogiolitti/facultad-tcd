# 01 · Introducción a las Bases de Datos — Práctica resuelta

> Ejercicios nuevos (no son los de los TP). Cada uno está resuelto y explicado.
> Objetivo: fijar los conceptos de la teoría con casos cotidianos.

---

## Ejercicio 1 — Detectar problemas en un sistema de archivos sueltos

**Enunciado.** Una peluquería lleva sus turnos en una sola planilla:

| fecha | hora | cliente | tel | servicio | precio | peluquero | comision_peluquero |
|---|---|---|---|---|---|---|---|
| 12/03 | 10:00 | Ana Díaz | 155-0001 | Corte | 3000 | Marcos | 40% |
| 12/03 | 11:00 | Ana Diaz | 155-0001 | Color | 8000 | Marcos | 40% |
| 12/03 | 12:00 | Juan Paz | 155-0002 | Corte | 3000 | Sofía | 35% |

Identificá **todos** los problemas y explicá cada uno.

### Resolución

Recorro la planilla buscando datos que se repiten y datos que dependen de otros.

1. **Redundancia de datos del cliente.** `tel` de Ana se repite en cada turno suyo. Si
   tuviera 20 turnos, estaría 20 veces.
2. **Inconsistencia ya presente.** "Díaz" vs "Diaz". Para la computadora son personas
   distintas; un conteo de "turnos por cliente" daría mal.
3. **Anomalía de actualización.** Si sube la comisión de Marcos al 45%, hay que editar
   todas las filas de Marcos. Si se escapa una, hay dos comisiones para el mismo peluquero.
4. **Anomalía de inserción.** No puedo dar de alta un servicio nuevo (ej: "Alisado
   $15000") hasta que alguien lo pida, porque la fila necesita fecha, hora y cliente.
5. **Anomalía de borrado.** Si borro el único turno de "Color", pierdo el precio del
   servicio "Color".
6. **Dependencias mezcladas.** `precio` depende del `servicio`, `comision_peluquero`
   depende del `peluquero`, `tel` depende del `cliente`. Están todos en la misma fila
   aunque describen cosas diferentes.
7. **Concurrencia.** Si la recepcionista y la dueña editan la planilla a la vez, una pisa
   a la otra.
8. **Seguridad.** No puedo mostrarle a un peluquero solo sus turnos sin darle acceso a
   los teléfonos de todos los clientes.

### Conclusión / decisión de diseño

Los datos hablan de **cuatro cosas distintas**: clientes, peluqueros, servicios y turnos.
Una base de datos separaría eso en cuatro conjuntos y los relacionaría. Ese es
justamente el trabajo de las Unidades 02 (modelo ER) y 03 (modelo relacional).

---

## Ejercicio 2 — Clasificar sentencias SQL en DDL / DML / DCL / TCL

**Enunciado.** Indicá a qué sublenguaje pertenece cada sentencia y por qué.

| # | Sentencia |
|---|---|
| a | `CREATE TABLE socio (id INT PRIMARY KEY, nombre VARCHAR(80));` |
| b | `INSERT INTO socio VALUES (1, 'Ana');` |
| c | `GRANT SELECT ON socio TO 'recepcion'@'localhost';` |
| d | `ALTER TABLE socio ADD email VARCHAR(120);` |
| e | `ROLLBACK;` |
| f | `UPDATE socio SET nombre = 'Ana María' WHERE id = 1;` |
| g | `COMMIT;` |
| h | `DROP TABLE socio;` |

### Resolución

Regla mental: *¿toca la estructura → DDL? ¿toca los datos → DML? ¿toca permisos → DCL?
¿confirma o deshace → TCL?*

| # | Sublenguaje | Motivo |
|---|---|---|
| a | **DDL** | crea una estructura (una tabla) |
| b | **DML** | agrega datos |
| c | **DCL** | otorga un permiso |
| d | **DDL** | modifica la estructura de la tabla |
| e | **TCL** | deshace los cambios de la transacción actual |
| f | **DML** | modifica datos existentes |
| g | **TCL** | confirma (hace permanentes) los cambios |
| h | **DDL** | elimina una estructura |

---

## Ejercicio 3 — Ubicar decisiones en el nivel de abstracción correcto

**Enunciado.** Un club deportivo pide varios cambios. Indicá si cada uno afecta al nivel
**físico**, **lógico** o **externo (vistas)**, y si rompe o no la independencia de datos.

1. "Quiero que la consulta de socios morosos sea más rápida."
2. "Agreguemos la fecha de nacimiento a cada socio."
3. "El profe de natación solo debe ver los socios de su actividad, sin ver las cuotas."
4. "Movamos la base a un disco de estado sólido nuevo."
5. "Separemos el campo `direccion` en `calle`, `numero` y `ciudad`."

### Resolución

1. **Físico.** Se resuelve creando un **índice**. No cambia qué datos hay ni las vistas →
   se aprovecha la **independencia física**.
2. **Lógico.** Cambia el esquema conceptual (una columna nueva en la entidad SOCIO). Las
   vistas viejas que no usan esa columna siguen funcionando → **independencia lógica**.
3. **Externo.** Es una **vista** nueva (`socios_natacion` sin la columna de cuotas). No
   cambia el esquema lógico.
4. **Físico.** Puro almacenamiento. Ni el esquema lógico ni las vistas se enteran.
5. **Lógico.** El atributo `direccion` era **compuesto**; ahora se descompone. Es un cambio
   de esquema conceptual; puede requerir ajustar vistas que mostraban `direccion` entera.

---

## Ejercicio 4 — Elegir el tipo de base de datos

**Enunciado.** Para cada caso, decidí si conviene una base **relacional** o una **NoSQL
documental**, y justificá.

1. Sistema de facturación de una empresa (facturas, clientes, impuestos, cuentas por
   cobrar). Reportes contables exactos.
2. Catálogo de productos de un e-commerce donde cada categoría tiene atributos muy
   distintos (una notebook tiene RAM y procesador; una remera tiene talle y color).
3. Registro de "me gusta" y comentarios de una red social con millones de eventos por día.
4. Gestión académica de la facultad (alumnos, materias, inscripciones, notas, correlativas).

### Resolución

1. **Relacional.** Datos muy estructurados, relaciones claras, y sobre todo **transacciones
   y consistencia exacta** (la contabilidad no admite errores). Es el caso de libro para
   SQL + ACID.
2. **NoSQL documental.** El **esquema es variable** por categoría; en una tabla relacional
   quedarían decenas de columnas vacías. Un documento JSON por producto guarda solo los
   atributos que ese producto tiene.
3. **NoSQL** (documental o clave-valor). Volumen enorme, escritura masiva, y no se necesita
   consistencia inmediata ni JOINs complejos. Escala horizontal.
4. **Relacional.** Muchas relaciones entre entidades (inscripción cruza alumno y materia),
   reglas de integridad (no inscribir sin aprobar la correlativa), reportes con JOIN. Encaja
   perfecto en el modelo relacional.

**Idea clave:** no hay una opción "mejor" siempre. Se elige según *estructura de los datos*,
*tipo de consultas*, *volumen* y *necesidad de consistencia*.

---

## Ejercicio 5 — Esquema vs. instancia

**Enunciado.** Clasificá cada afirmación como parte del **esquema** o de la **instancia**.

1. "La tabla PRODUCTO tiene las columnas código, nombre, precio y stock."
2. "Hoy hay 1.204 productos cargados."
3. "El producto con código 55 se llama 'Yerba 1kg' y cuesta $2.800."
4. "El precio nunca puede ser negativo."
5. "Ayer se vendieron 37 productos."

### Resolución

| # | Clasificación | Por qué |
|---|---|---|
| 1 | **Esquema** | define la estructura de la tabla |
| 2 | **Instancia** | es un dato que cambia con cada alta/baja |
| 3 | **Instancia** | son valores concretos de una fila |
| 4 | **Esquema** | es una **restricción** (`CHECK precio >= 0`), parte de la definición |
| 5 | **Instancia** | resultado de consultar datos concretos en un momento dado |

---

## Autoevaluación rápida

Respondé sin mirar la teoría:

1. Nombrá tres anomalías que aparecen al guardar todo en una sola planilla.
2. ¿Qué es la independencia física de datos? Dá un ejemplo.
3. ¿En qué nivel de abstracción vive una vista?
4. ¿`TRUNCATE` es DDL o DML? ¿Y `SELECT`?
5. ¿Cuál es la diferencia entre MariaDB y una base de datos llamada `kiosco`?

<details>
<summary>Respuestas</summary>

1. Inserción, actualización y borrado (más redundancia e inconsistencia).
2. Poder cambiar el almacenamiento interno (índices, disco) sin tocar el esquema lógico ni
   los programas. Ej: agregar un índice para acelerar una consulta.
3. En el nivel **externo**.
4. `TRUNCATE` es **DDL** (borra y recrea la estructura de almacenamiento de la tabla);
   `SELECT` es consulta (DQL/DML según la clasificación).
5. MariaDB es el **SGBD** (el motor que administra); `kiosco` es una **base de datos
   concreta** gestionada por ese motor.

</details>
