# 07 · Bases de Datos NoSQL — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR) · Unidad IV del programa.
> Temas: qué es NoSQL, tipos, datos estructurados/semiestructurados (JSON/XML),
> modelado y consultas documentales (MongoDB), teorema CAP.

---

## 1. ¿Por qué aparece NoSQL?

Las bases relacionales son excelentes para datos **estructurados** con relaciones claras y
necesidad de **consistencia exacta**. Pero a partir de los 2000 surgieron necesidades que
les costaban:

- **Volumen y escala web:** millones de operaciones por segundo, más de lo que un solo
  servidor grande aguanta → hace falta **escalar horizontalmente** (muchos servidores
  baratos).
- **Esquema flexible:** cada registro puede tener campos distintos (catálogos de productos,
  logs, datos de sensores).
- **Datos semiestructurados:** JSON que llega de una API, documentos, eventos.
- **Velocidad de desarrollo:** guardar directamente el objeto de la aplicación sin
  "traducirlo" a tablas.

**NoSQL** = "Not Only SQL". No reemplaza a lo relacional: es un conjunto de bases con otro
modelo de datos, pensadas para esos casos.

---

## 2. Datos estructurados, semiestructurados y no estructurados

| Tipo | Definición | Ejemplo |
|---|---|---|
| **Estructurado** | esquema fijo, encaja en tablas | una tabla `cliente(dni, nombre, saldo)` |
| **Semiestructurado** | tiene estructura (etiquetas, jerarquía) pero **flexible**, sin esquema rígido | **JSON**, **XML**, un mail con headers |
| **No estructurado** | sin estructura interna aprovechable directamente | una foto, un audio, un PDF escaneado |

### JSON (el formato de las bases documentales)

```json
{
  "id": "u-101",
  "nombre": "Ana Díaz",
  "email": "ana@mail.com",
  "direcciones": [
    { "calle": "San Martín 123", "ciudad": "Salta" },
    { "calle": "Belgrano 45",   "ciudad": "Jujuy" }
  ],
  "activo": true
}
```

Tipos JSON: objeto `{}`, arreglo `[]`, string, número, booleano, `null`. Un documento puede
**anidar** objetos y arreglos (algo imposible en una celda relacional en 1FN).

### XML

```xml
<usuario id="u-101" activo="true">
  <nombre>Ana Díaz</nombre>
  <email>ana@mail.com</email>
</usuario>
```

Más verboso que JSON; común en sistemas empresariales y configuración.

---

## 3. Los cuatro tipos de bases NoSQL

| Tipo | Unidad de dato | Ejemplo de motor | Caso típico |
|---|---|---|---|
| **Clave-valor** | una clave → un valor (opaco) | **Redis**, DynamoDB | caché, sesiones, carritos, rankings |
| **Documental** | documento JSON/BSON dentro de colecciones | **MongoDB**, CouchDB | catálogos, perfiles, contenido, apps web |
| **Columnar (wide-column)** | filas con familias de columnas dinámicas | **Cassandra**, HBase | series temporales, logs, datos masivos de escritura |
| **De grafos** | nodos y aristas con propiedades | **Neo4j** | redes sociales, recomendaciones, rutas, fraude |

La materia se centra en las **documentales (MongoDB)**.

---

## 4. Relacional vs. documental — equivalencias

| Relacional | Documental (MongoDB) |
|---|---|
| Base de datos | Base de datos |
| Tabla | **Colección** |
| Fila / registro | **Documento** (JSON/BSON) |
| Columna | **Campo** |
| `id` / PK | campo **`_id`** (único, autogenerado si no se da) |
| JOIN | se evita: se **embebe** o se hace `$lookup` |
| Esquema fijo (DDL) | **sin esquema** obligatorio: cada documento puede diferir |

---

## 5. Modelado documental: embeber vs. referenciar

La gran decisión de diseño en NoSQL documental.

### Embeber (anidar el dato adentro del documento)

```json
// documento de la colección "pedido"
{
  "_id": "p-1",
  "fecha": "2026-03-10",
  "cliente": { "nombre": "Ana Díaz", "tel": "155-01" },
  "items": [
    { "producto": "Coca 500ml", "cantidad": 2, "precio": 900 },
    { "producto": "Alfajor",    "cantidad": 3, "precio": 600 }
  ]
}
```

- **A favor:** se lee todo con **una sola consulta**, sin JOINs. Muy rápido para leer.
- **En contra:** si el dato embebido se repite en muchos documentos (los datos de Ana en
  cada pedido), hay **redundancia**; actualizarlo implica tocar muchos documentos.
- **Se usa cuando:** el dato "pertenece" al documento y se consulta junto con él, y no
  crece de forma ilimitada. Relaciones **1:1** y **1:pocos**.

### Referenciar (guardar solo el id y buscar aparte)

```json
{ "_id": "p-1", "fecha": "2026-03-10", "cliente_id": "c-42", "items": [...] }
// y aparte, colección "cliente": { "_id": "c-42", "nombre": "Ana Díaz", "tel": "155-01" }
```

- **A favor:** el dato del cliente está **una sola vez**; se actualiza en un lugar.
- **En contra:** para mostrar el pedido con el nombre del cliente hacen falta **dos
  consultas** (o `$lookup`).
- **Se usa cuando:** el dato se comparte entre muchos documentos, cambia seguido, o crece
  sin límite (relaciones **1:muchos** grandes y **muchos:muchos**).

> Regla práctica: **embeber lo que se lee junto y no crece; referenciar lo que se comparte
> y cambia.** En NoSQL se **desnormaliza a propósito**, aceptando algo de redundancia a
> cambio de velocidad de lectura.

---

## 6. Consultas básicas en MongoDB

```js
// insertar
db.cliente.insertOne({ _id: "c-1", nombre: "Ana Díaz", barrio: "Centro", puntos: 120 })
db.cliente.insertMany([ {…}, {…} ])

// buscar todos / con filtro
db.cliente.find()
db.cliente.find({ barrio: "Centro" })

// operadores de comparación
db.cliente.find({ puntos: { $gte: 100 } })          // >= 100
db.cliente.find({ barrio: { $in: ["Centro","Norte"] } })
db.cliente.find({ puntos: { $gt: 50, $lt: 200 } })

// proyección (qué campos traer): 1 = incluir, 0 = excluir
db.cliente.find({ barrio: "Centro" }, { nombre: 1, _id: 0 })

// ordenar, limitar
db.cliente.find().sort({ puntos: -1 }).limit(5)

// actualizar
db.cliente.updateOne({ _id: "c-1" }, { $set: { barrio: "Sur" } })
db.cliente.updateMany({ barrio: "Centro" }, { $inc: { puntos: 10 } })

// borrar
db.cliente.deleteOne({ _id: "c-1" })

// agregación (equivale a GROUP BY + SUM)
db.pedido.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.producto",
              unidades: { $sum: "$items.cantidad" } } },
  { $sort: { unidades: -1 } }
])
```

Comparación rápida con SQL:

| SQL | MongoDB |
|---|---|
| `SELECT * FROM cliente WHERE barrio='Centro'` | `db.cliente.find({ barrio: "Centro" })` |
| `SELECT nombre FROM cliente` | `db.cliente.find({}, { nombre: 1, _id: 0 })` |
| `... WHERE puntos >= 100` | `{ puntos: { $gte: 100 } }` |
| `ORDER BY puntos DESC LIMIT 5` | `.sort({ puntos: -1 }).limit(5)` |
| `UPDATE ... SET barrio='Sur' WHERE _id=1` | `updateOne({_id:1}, { $set: { barrio: "Sur" } })` |
| `GROUP BY ... SUM(...)` | `aggregate([{ $group: { _id: ..., x: { $sum: ... } } }])` |

---

## 7. Teorema CAP (conceptual)

En un sistema **distribuido** (datos repartidos en varios nodos), ante una **partición de
red** (P: los nodos no se pueden comunicar) hay que elegir entre:

- **C (Consistencia):** todos los nodos ven el mismo dato al mismo tiempo.
- **A (Disponibilidad):** todo pedido recibe respuesta (aunque sea con dato viejo).

No se pueden garantizar **las dos** durante una partición. Se elige:

- **CP** (consistencia + tolerancia a particiones): p. ej. MongoDB por defecto, HBase.
  Prefiere rechazar antes que dar un dato incorrecto.
- **AP** (disponibilidad + tolerancia a particiones): p. ej. Cassandra, DynamoDB.
  Prefiere responder siempre, con **consistencia eventual** (los nodos se ponen de acuerdo
  "un rato después").

Las bases relacionales de un solo nodo priorizan **CA** (no hay particiones si no está
distribuida).

---

## 8. ¿Cuándo usar cada cosa?

| Necesito... | Elijo |
|---|---|
| Transacciones exactas, muchos JOIN, reportes, integridad fuerte | **Relacional** (SQL) |
| Documentos con esquema variable, lectura rápida de "todo junto", app web | **Documental** (MongoDB) |
| Caché, sesiones, contadores, datos efímeros con acceso por clave | **Clave-valor** (Redis) |
| Escritura masiva de series temporales / logs a gran escala | **Columnar** (Cassandra) |
| Relaciones muy conectadas: "amigos de amigos", recomendaciones, rutas | **Grafos** (Neo4j) |

---

## 9. Errores comunes

- **"NoSQL es más moderno, uso eso para todo".** Para datos transaccionales y con muchas
  relaciones, lo relacional sigue siendo la mejor opción.
- **Esperar JOINs e integridad referencial automática.** En documental no hay FK que
  garantice que `cliente_id` exista; lo controla la aplicación.
- **Embeber datos que crecen sin límite** (ej: todos los comentarios de un post dentro del
  post): el documento se vuelve gigante y lento. Ahí conviene **referenciar**.
- **Normalizar como en lo relacional.** En documental se **desnormaliza a propósito**.
- **Creer que "sin esquema" = "sin diseño".** Hay que diseñar igual: qué consultas voy a
  hacer determina cómo modelo los documentos.
- **Confundir "consistencia eventual" con "datos corruptos".** Es que los nodos tardan un
  instante en sincronizarse; terminan iguales.

---

## 10. Resumen

**NoSQL** agrupa bases con modelos no relacionales — **clave-valor, documental, columnar,
grafos** — pensadas para **escala horizontal**, **esquema flexible** y datos
**semiestructurados** (JSON/XML). En las **documentales** (MongoDB) se modela decidiendo
**embeber vs. referenciar** y se **desnormaliza** para acelerar lecturas. El **teorema
CAP** dice que un sistema distribuido, ante una partición, elige entre **consistencia** y
**disponibilidad**.
