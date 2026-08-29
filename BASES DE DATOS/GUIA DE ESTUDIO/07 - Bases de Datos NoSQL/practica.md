# 07 · Bases de Datos NoSQL — Práctica resuelta

> Ejercicios nuevos. Se practica sobre todo el **modelado documental** (MongoDB) y la
> traducción SQL ↔ MongoDB.

---

## Ejercicio 1 — Pasar un esquema relacional a documentos

**Enunciado.** Un blog tiene este Modelo Relacional:

```
USUARIO(<u>id_usuario</u>, nombre, email)
POST(<u>id_post</u>, titulo, cuerpo, fecha, *id_usuario*)
COMENTARIO(<u>id_comentario</u>, texto, fecha, *id_post*, *id_usuario*)
ETIQUETA(<u>id_etiqueta</u>, nombre)
POST_ETIQUETA(<u>*id_post*</u>, <u>*id_etiqueta*</u>)
```

Diseñá las **colecciones** de MongoDB, decidiendo en cada relación si **embeber** o
**referenciar**, con justificación.

### Resolución

Primero pienso **qué consultas** hará el blog: "ver un post con su autor, sus etiquetas y
sus comentarios" (la pantalla principal) y "ver los posts de un usuario".

#### Decisión por relación

| Relación | Decisión | Por qué |
|---|---|---|
| POST → autor (USUARIO) | **referenciar** (`autor_id` + copiar `autor_nombre`) | el usuario se comparte entre muchos posts y cambia; pero copio el nombre para no buscar aparte al listar |
| POST → ETIQUETAS | **embeber** como arreglo de strings | son pocas, cortas, se leen siempre con el post, no tienen datos propios relevantes |
| POST → COMENTARIOS | **referenciar** (colección aparte `comentario` con `post_id`) | los comentarios **crecen sin límite**; embeberlos haría el documento del post cada vez más grande |
| COMENTARIO → autor | **referenciar** + copiar nombre | mismo criterio que el autor del post |

#### Colecciones resultantes

```json
// colección: usuario
{ "_id": "u-1", "nombre": "Ana Díaz", "email": "ana@mail.com" }

// colección: post
{
  "_id": "post-1",
  "titulo": "Cómo instalar MariaDB",
  "cuerpo": "…",
  "fecha": "2026-03-10",
  "autor_id": "u-1",
  "autor_nombre": "Ana Díaz",          // dato duplicado a propósito (lectura rápida)
  "etiquetas": ["bases-de-datos", "linux", "tutorial"]   // embebido
}

// colección: comentario
{
  "_id": "com-1",
  "post_id": "post-1",                 // referencia
  "texto": "¡Gracias, me sirvió!",
  "fecha": "2026-03-11",
  "autor_id": "u-2",
  "autor_nombre": "Beto Ruiz"
}
```

#### Justificación general

- **Etiquetas embebidas**: relación "1:pocos" sin entidad propia rica → embeber elimina una
  consulta y una colección `post_etiqueta` entera.
- **Comentarios referenciados**: relación "1:muchos ilimitado" → si se embebieran, un post
  viral con 10.000 comentarios daría un documento enorme y lento de leer.
- **`autor_nombre` duplicado**: **desnormalización deliberada**. Si Ana cambia el nombre,
  hay que actualizar sus posts/comentarios con un `updateMany` — se acepta ese costo
  (raro) a cambio de mostrar la lista de posts sin un `$lookup` por fila.

---

## Ejercicio 2 — Documento con atributos variables

**Enunciado.** Un e-commerce vende productos de rubros muy distintos. Una notebook tiene
RAM, procesador y pulgadas; una remera tiene talle y color; un libro tiene autor, ISBN y
páginas. En una tabla relacional habría decenas de columnas casi siempre vacías. Modelá
tres productos como documentos.

### Resolución

```json
// colección: producto
{
  "_id": "prod-notebook-01",
  "nombre": "Notebook Lenovo IdeaPad 3",
  "rubro": "informatica",
  "precio": 850000,
  "stock": 7,
  "atributos": { "ram_gb": 16, "procesador": "Ryzen 5", "pulgadas": 15.6 }
}
{
  "_id": "prod-remera-01",
  "nombre": "Remera básica algodón",
  "rubro": "indumentaria",
  "precio": 12000,
  "stock": 120,
  "atributos": { "talle": "M", "color": "negro", "material": "algodón" }
}
{
  "_id": "prod-libro-01",
  "nombre": "Fundamentos de Bases de Datos",
  "rubro": "libros",
  "precio": 45000,
  "stock": 15,
  "atributos": { "autor": "Elmasri, Navathe", "isbn": "978-84-782-9085-7", "paginas": 968 }
}
```

### Decisiones explicadas

- Los campos **comunes a todos** (`nombre`, `rubro`, `precio`, `stock`) quedan en el nivel
  raíz → se pueden indexar y consultar igual para todos los productos.
- Los campos **variables por rubro** van en un subdocumento **`atributos`**, distinto en
  cada producto. Esto es exactamente lo que el modelo relacional no puede hacer sin
  columnas nulas o tablas EAV (entidad-atributo-valor) incómodas.
- Consultar "notebooks con 16 GB o más": `db.producto.find({ rubro: "informatica",
  "atributos.ram_gb": { $gte: 16 } })`.

---

## Ejercicio 3 — Traducir consultas SQL a MongoDB

**Enunciado.** Sobre la colección `cliente` con campos `_id`, `nombre`, `barrio`,
`puntos`, `fecha_alta`. Traducí:

| # | SQL |
|---|---|
| a | `SELECT * FROM cliente WHERE barrio = 'Norte';` |
| b | `SELECT nombre, puntos FROM cliente WHERE puntos BETWEEN 100 AND 500;` |
| c | `SELECT * FROM cliente ORDER BY puntos DESC LIMIT 3;` |
| d | `UPDATE cliente SET puntos = puntos + 50 WHERE barrio = 'Centro';` |
| e | `SELECT barrio, COUNT(*) FROM cliente GROUP BY barrio;` |

### Resolución

```js
// a) filtro simple
db.cliente.find({ barrio: "Norte" })

// b) rango + proyección (mostrar solo nombre y puntos)
db.cliente.find(
  { puntos: { $gte: 100, $lte: 500 } },
  { nombre: 1, puntos: 1, _id: 0 }
)

// c) ordenar desc y limitar
db.cliente.find().sort({ puntos: -1 }).limit(3)

// d) update masivo con incremento
db.cliente.updateMany(
  { barrio: "Centro" },
  { $inc: { puntos: 50 } }
)

// e) group by + count
db.cliente.aggregate([
  { $group: { _id: "$barrio", cantidad: { $sum: 1 } } }
])
```

### Notas

- `BETWEEN a AND b` (inclusivo) → `{ $gte: a, $lte: b }`.
- En la proyección, `_id: 0` para que no aparezca (viene por defecto).
- En `aggregate`, `$group._id` es **la clave de agrupación**; `{ $sum: 1 }` cuenta filas
  (equivale a `COUNT(*)`).

---

## Ejercicio 4 — Elegir el tipo de base NoSQL

**Enunciado.** Para cada caso elegí el tipo de base NoSQL (clave-valor, documental,
columnar o grafos) y justificá.

1. Guardar el **carrito de compras** de cada usuario mientras navega (se pisa entero cada
   vez, se accede por id de usuario, expira en 1 hora).
2. Un sistema de **recomendación** de "personas que quizás conozcas" en una red social.
3. Almacenar **eventos de clics** de un sitio: 200.000 escrituras por minuto, se consultan
   por rangos de tiempo para hacer analítica.
4. El **catálogo de películas** de una plataforma de streaming: cada película con reparto,
   géneros, sinopsis, idiomas disponibles; se muestra la ficha completa de una vez.

### Resolución

| # | Elijo | Por qué |
|---|---|---|
| 1 | **Clave-valor** (Redis) | acceso por clave (`carrito:u-42`), valor que se reemplaza completo, **TTL** de expiración nativo, no hace falta consultar por dentro |
| 2 | **Grafos** (Neo4j) | la pregunta es "amigos de mis amigos que no son mis amigos": recorrer relaciones a 2-3 saltos es la especialidad de una base de grafos |
| 3 | **Columnar** (Cassandra) | escritura masiva distribuida, datos tipo serie temporal, consultas por rango de fecha; escala horizontal para ese caudal |
| 4 | **Documental** (MongoDB) | cada película es un documento con arreglos anidados (reparto, géneros); se lee "toda junta" para armar la ficha |

---

## Ejercicio 5 — Clasificar datos

**Enunciado.** Clasificá cada dato como **estructurado**, **semiestructurado** o **no
estructurado**.

1. La tabla `factura(numero, fecha, total, cuit_cliente)`.
2. La respuesta JSON de una API del clima.
3. El video de una clase grabada.
4. Un archivo XML de configuración.
5. Una planilla de cálculo con columnas fijas y tipos consistentes.

### Resolución

| # | Clasificación | Motivo |
|---|---|---|
| 1 | **Estructurado** | esquema fijo, tipos definidos, encaja en tabla |
| 2 | **Semiestructurado** | JSON: tiene estructura (claves/valores, anidamiento) pero flexible, sin esquema rígido |
| 3 | **No estructurado** | contenido binario sin estructura interna consultable directamente |
| 4 | **Semiestructurado** | XML: etiquetas y jerarquía, estructura flexible |
| 5 | **Estructurado** | filas y columnas con tipos consistentes = tabla |

---

## Autoevaluación

1. ¿Qué equivale en MongoDB a: base, tabla, fila, columna, PK?
2. ¿Cuándo conviene **embeber** y cuándo **referenciar**?
3. ¿Por qué en NoSQL documental se desnormaliza a propósito?
4. Traducí `SELECT nombre FROM cliente WHERE puntos > 100` a MongoDB.
5. Según CAP, ¿entre qué dos propiedades hay que elegir durante una partición de red?

<details>
<summary>Respuestas</summary>

1. Base ↔ base; tabla ↔ colección; fila ↔ documento; columna ↔ campo; PK ↔ `_id`.
2. Embeber: datos que se leen junto con el documento, "1:pocos", que no crecen sin límite.
   Referenciar: datos compartidos por muchos documentos, que cambian seguido, o "1:muchos"
   grande y "muchos:muchos".
3. Porque evita JOINs (que las documentales no hacen bien) y acelera la lectura, a cambio
   de aceptar algo de redundancia.
4. `db.cliente.find({ puntos: { $gt: 100 } }, { nombre: 1, _id: 0 })`.
5. Entre **Consistencia** y **Disponibilidad** (la tolerancia a Particiones se da por
   necesaria en un sistema distribuido).

</details>
