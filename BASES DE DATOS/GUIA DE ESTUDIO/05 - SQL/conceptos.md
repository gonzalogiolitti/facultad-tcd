# 05 · SQL — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR). SQL estándar, con las aclaraciones
> necesarias para **MariaDB 11.8** (el SGBD de la materia). Cubre DDL, DML, consultas
> (SELECT, JOIN, subconsultas, agregación), operadores de conjuntos y vistas.

---

## 1. ¿Qué es SQL?

**SQL** (Structured Query Language) es el lenguaje estándar para bases de datos
relacionales. Es **declarativo**: uno describe *qué* quiere, no *cómo* obtenerlo; el
optimizador del SGBD decide el plan de ejecución.

Sublenguajes (repaso de la Unidad 01): **DDL** (estructura), **DML** (datos), **DQL**
(consultas), **DCL** (permisos), **TCL** (transacciones).

---

## 2. DDL — Definición de datos

### CREATE DATABASE / USE

```sql
CREATE DATABASE kiosco CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE kiosco;
```

### Tipos de datos frecuentes (MariaDB)

| Tipo | Para qué | Ejemplo |
|---|---|---|
| `INT` / `BIGINT` | enteros | cantidades, IDs |
| `DECIMAL(p,e)` | números exactos (dinero) | `DECIMAL(12,2)` → 9999999999.99 |
| `VARCHAR(n)` | texto variable | `VARCHAR(80)` |
| `CHAR(n)` | texto de largo fijo | `CHAR(13)` (un CUIL) |
| `TEXT` | texto largo | descripciones |
| `DATE` | fecha | `2026-03-10` |
| `DATETIME` / `TIMESTAMP` | fecha y hora | `2026-03-10 14:30:00` |
| `BOOLEAN` | verdadero/falso (es `TINYINT(1)`) | `TRUE` / `FALSE` |

> Para dinero **nunca** uses `FLOAT`/`DOUBLE` (redondean mal): usá `DECIMAL`.

### CREATE TABLE con restricciones

```sql
CREATE TABLE categoria (
    id_categoria INT           NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(60)   NOT NULL,
    CONSTRAINT pk_categoria PRIMARY KEY (id_categoria),
    CONSTRAINT uq_categoria_nombre UNIQUE (nombre)
) ENGINE=InnoDB;

CREATE TABLE producto (
    id_producto  INT           NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(120)  NOT NULL,
    precio       DECIMAL(12,2) NOT NULL DEFAULT 0,
    stock        INT           NOT NULL DEFAULT 0,
    id_categoria INT           NOT NULL,
    CONSTRAINT pk_producto PRIMARY KEY (id_producto),
    CONSTRAINT fk_producto_categoria
        FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_producto_precio CHECK (precio >= 0),
    CONSTRAINT chk_producto_stock CHECK (stock >= 0)
) ENGINE=InnoDB;
```

Restricciones:

- **`PRIMARY KEY`** — identifica la fila; implica `NOT NULL` + `UNIQUE`.
- **`FOREIGN KEY ... REFERENCES`** — integridad referencial. `ON DELETE/UPDATE` define la
  acción referencial (`RESTRICT`, `CASCADE`, `SET NULL`).
- **`NOT NULL`** — obligatorio.
- **`UNIQUE`** — sin repetidos (clave alternativa).
- **`DEFAULT`** — valor por omisión.
- **`CHECK`** — condición de dominio. *En MariaDB, un `CHECK` no puede referenciar una
  columna que tenga acción referencial (`ON UPDATE/DELETE`); en ese caso se controla por
  aplicación o trigger.*
- **`AUTO_INCREMENT`** — numera solo (clave sustituta).

### ALTER TABLE / DROP

```sql
ALTER TABLE producto ADD COLUMN vencimiento DATE NULL;
ALTER TABLE producto MODIFY COLUMN nombre VARCHAR(150) NOT NULL;
ALTER TABLE producto DROP COLUMN vencimiento;
DROP TABLE producto;          -- borra estructura + datos
```

---

## 3. DML — Manipulación de datos

```sql
-- INSERT
INSERT INTO categoria (nombre) VALUES ('Bebidas'), ('Golosinas');
INSERT INTO producto (nombre, precio, stock, id_categoria)
VALUES ('Coca 500ml', 900, 50, 1);

-- UPDATE (¡siempre con WHERE, salvo que quieras tocar TODO!)
UPDATE producto SET precio = precio * 1.10 WHERE id_categoria = 1;

-- DELETE
DELETE FROM producto WHERE stock = 0;
```

---

## 4. SELECT — la consulta

Forma general:

```sql
SELECT   columnas / expresiones
FROM     tabla(s)
[JOIN    ... ON ...]
WHERE    condición de filas
GROUP BY columnas
HAVING   condición de grupos
ORDER BY columnas [ASC|DESC]
LIMIT    n;
```

### Orden **lógico** de evaluación (clave para entender qué se puede usar dónde)

```
1. FROM / JOIN     → arma el conjunto de filas combinadas
2. WHERE           → filtra filas individuales (todavía NO existen los grupos)
3. GROUP BY        → agrupa
4. HAVING          → filtra grupos (acá sí se pueden usar COUNT, SUM, ...)
5. SELECT          → calcula las columnas de salida (acá se definen los alias)
6. ORDER BY        → ordena el resultado
7. LIMIT           → recorta
```

Consecuencias:

- En `WHERE` **no** se pueden usar funciones de agregación (van en `HAVING`).
- En `WHERE`/`GROUP BY` **no** se pueden usar los alias definidos en `SELECT` (todavía no
  existen); en `ORDER BY` sí.

### WHERE — operadores

```sql
WHERE precio > 500
WHERE precio BETWEEN 500 AND 1000
WHERE id_categoria IN (1, 3, 5)
WHERE nombre LIKE 'Coca%'      -- % = cualquier cosa, _ = un carácter
WHERE vencimiento IS NULL      -- ¡NUNCA "= NULL"!
WHERE NOT (stock = 0)
WHERE precio > 500 AND id_categoria = 1
```

> `NULL` significa "desconocido". Cualquier comparación con `NULL` da `NULL` (ni verdadero
> ni falso). Por eso se usa `IS NULL` / `IS NOT NULL`.

### DISTINCT, ORDER BY, LIMIT

```sql
SELECT DISTINCT id_categoria FROM producto;
SELECT nombre, precio FROM producto ORDER BY precio DESC, nombre ASC;
SELECT * FROM producto ORDER BY precio DESC LIMIT 5;     -- top 5 más caros
```

---

## 5. Funciones de agregación

Resumen de muchas filas en un valor:

| Función | Qué hace |
|---|---|
| `COUNT(*)` | cuenta filas |
| `COUNT(col)` | cuenta valores **no NULL** de `col` |
| `SUM(col)` | suma |
| `AVG(col)` | promedio |
| `MIN(col)` / `MAX(col)` | mínimo / máximo |

```sql
SELECT COUNT(*) AS total_productos, AVG(precio) AS precio_promedio
FROM producto;
```

### GROUP BY / HAVING

`GROUP BY` divide las filas en grupos; la agregación se calcula **por grupo**.

```sql
-- cantidad de productos y precio promedio POR categoría
SELECT id_categoria, COUNT(*) AS cantidad, AVG(precio) AS promedio
FROM producto
GROUP BY id_categoria
HAVING COUNT(*) >= 3;         -- solo categorías con 3 o más productos
```

**Regla de oro:** toda columna del `SELECT` que **no** esté dentro de una función de
agregación **debe** estar en el `GROUP BY`.

---

## 6. JOIN — combinar tablas

### INNER JOIN — solo las filas que **coinciden** en ambas tablas

```sql
SELECT p.nombre, c.nombre AS categoria
FROM producto p
INNER JOIN categoria c ON c.id_categoria = p.id_categoria;
```

### LEFT JOIN — **todas** las de la izquierda, con NULL donde no hay coincidencia

Sirve para "los que **no tienen**":

```sql
-- categorías sin ningún producto
SELECT c.nombre
FROM categoria c
LEFT JOIN producto p ON p.id_categoria = c.id_categoria
WHERE p.id_producto IS NULL;
```

### RIGHT JOIN — el espejo del LEFT (poco usado; se prefiere reordenar y usar LEFT).

### Self-join — una tabla consigo misma (relaciones unarias)

```sql
SELECT e.nombre AS empleado, j.nombre AS jefe
FROM empleado e
LEFT JOIN empleado j ON j.legajo = e.legajo_supervisor;
```

### Producto cartesiano (`CROSS JOIN` / coma sin condición)

`FROM a, b` sin `WHERE` que las una → **todas las combinaciones**. Casi siempre es un
error. Siempre poné la condición de unión.

---

## 7. Subconsultas

Una consulta dentro de otra.

### Escalar (devuelve un único valor)

```sql
SELECT nombre, precio
FROM producto
WHERE precio > (SELECT AVG(precio) FROM producto);
```

### Con `IN` / `NOT IN` (devuelve una columna)

```sql
SELECT nombre FROM cliente
WHERE id_cliente NOT IN (SELECT id_cliente FROM venta);   -- clientes que nunca compraron
```

### Con `EXISTS` / `NOT EXISTS` (correlacionada: se evalúa por cada fila externa)

```sql
SELECT c.nombre
FROM cliente c
WHERE NOT EXISTS (
    SELECT 1 FROM venta v WHERE v.id_cliente = c.id_cliente
);
```

> `NOT EXISTS` es más seguro que `NOT IN` cuando la subconsulta puede devolver `NULL`
> (con `NULL` adentro, `NOT IN` devuelve un resultado vacío inesperado).

### En el `FROM` (tabla derivada)

```sql
SELECT categoria, promedio
FROM (
    SELECT id_categoria AS categoria, AVG(precio) AS promedio
    FROM producto GROUP BY id_categoria
) AS x
WHERE promedio > 1000;
```

---

## 8. Operadores de conjuntos

| Operador | Resultado | Nota MariaDB |
|---|---|---|
| `UNION` | filas de A **o** B, sin duplicados | soportado |
| `UNION ALL` | A + B con duplicados | soportado (más rápido) |
| `INTERSECT` | filas en A **y** B | soportado desde MariaDB 10.3 |
| `EXCEPT` | filas de A que **no** están en B | soportado desde MariaDB 10.3 |

```sql
SELECT nombre FROM cliente_web
UNION
SELECT nombre FROM cliente_local;
```

Ambos `SELECT` deben tener **la misma cantidad de columnas** y tipos compatibles.

---

## 9. Vistas

Una **vista** es una consulta guardada con nombre; se usa como si fuera una tabla.

```sql
CREATE VIEW ventas_del_dia AS
SELECT v.id_venta, v.fecha, c.nombre AS cliente, v.total
FROM venta v
JOIN cliente c ON c.id_cliente = v.id_cliente;

SELECT * FROM ventas_del_dia WHERE fecha = CURRENT_DATE;

DROP VIEW ventas_del_dia;
```

Sirven para: simplificar consultas repetidas, y para **seguridad** (mostrar solo ciertas
columnas a ciertos usuarios).

---

## 10. Errores comunes

- **`WHERE columna = NULL`.** Nunca funciona. Usá `IS NULL`.
- **Columna en `SELECT` que no está en `GROUP BY` ni agregada.** Error o resultado
  arbitrario.
- **Poner un filtro de agregación en `WHERE`.** `WHERE COUNT(*) > 3` → va en `HAVING`.
- **`INNER JOIN` cuando querías `LEFT`.** Perdés las filas sin coincidencia (justo las que
  buscabas en "los que no tienen").
- **`NOT IN` con subconsulta que puede devolver `NULL`.** Resultado vacío. Usá `NOT EXISTS`.
- **`UPDATE`/`DELETE` sin `WHERE`.** Afecta toda la tabla.
- **`FROM a, b` sin condición de unión.** Producto cartesiano.
- **Confiar en el orden sin `ORDER BY`.** El SGBD no garantiza ningún orden por defecto.
- **Comparar textos con distinta *collation* / mayúsculas** esperando exactitud.

---

## 11. Chuleta del orden de escritura vs. ejecución

```
Se ESCRIBE:   SELECT → FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT
Se EJECUTA:   FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```
