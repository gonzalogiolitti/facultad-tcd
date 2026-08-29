# 05 · SQL — Práctica resuelta

> Un único esquema de ejemplo (un **kiosco**) y 15 consultas resueltas de dificultad
> creciente, cada una con su explicación. Todo corre en MariaDB 11.8.
> Dominio nuevo, distinto a los TP.

---

## Esquema de trabajo

```sql
CREATE DATABASE IF NOT EXISTS guia_sql_kiosco
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE guia_sql_kiosco;

CREATE TABLE categoria (
    id_categoria INT NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(60) NOT NULL,
    CONSTRAINT pk_categoria PRIMARY KEY (id_categoria),
    CONSTRAINT uq_categoria_nombre UNIQUE (nombre)
) ENGINE=InnoDB;

CREATE TABLE producto (
    id_producto  INT NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(120) NOT NULL,
    precio       DECIMAL(12,2) NOT NULL,
    stock        INT NOT NULL DEFAULT 0,
    id_categoria INT NOT NULL,
    CONSTRAINT pk_producto PRIMARY KEY (id_producto),
    CONSTRAINT fk_producto_categoria
        FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_producto_precio CHECK (precio >= 0),
    CONSTRAINT chk_producto_stock CHECK (stock >= 0)
) ENGINE=InnoDB;

CREATE TABLE cliente (
    id_cliente INT NOT NULL AUTO_INCREMENT,
    nombre     VARCHAR(120) NOT NULL,
    barrio     VARCHAR(60) NULL,
    CONSTRAINT pk_cliente PRIMARY KEY (id_cliente)
) ENGINE=InnoDB;

CREATE TABLE venta (
    id_venta   INT NOT NULL AUTO_INCREMENT,
    fecha      DATE NOT NULL,
    id_cliente INT NULL,                       -- NULL = venta de mostrador sin identificar
    CONSTRAINT pk_venta PRIMARY KEY (id_venta),
    CONSTRAINT fk_venta_cliente
        FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
        ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE detalle_venta (
    id_venta       INT NOT NULL,
    id_producto    INT NOT NULL,
    cantidad       INT NOT NULL,
    precio_unitario DECIMAL(12,2) NOT NULL,
    CONSTRAINT pk_detalle_venta PRIMARY KEY (id_venta, id_producto),
    CONSTRAINT fk_dv_venta
        FOREIGN KEY (id_venta) REFERENCES venta (id_venta)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_dv_producto
        FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT chk_dv_cantidad CHECK (cantidad > 0)
) ENGINE=InnoDB;
```

### Datos de ejemplo

```sql
INSERT INTO categoria (nombre) VALUES ('Bebidas'),('Golosinas'),('Almacen'),('Kiosco');

INSERT INTO producto (nombre, precio, stock, id_categoria) VALUES
 ('Coca 500ml',      900, 40, 1),
 ('Agua 500ml',      600,  0, 1),
 ('Cerveza 1L',     1800, 15, 1),
 ('Alfajor',         600, 100,2),
 ('Chicle',          200, 200,2),
 ('Chocolate',       950, 12, 2),
 ('Yerba 1kg',      2800, 20, 3),
 ('Fideos 500g',     700, 30, 3),
 ('Cigarrillos',    2500, 25, 4),
 ('Encendedor',      500, 18, 4);

INSERT INTO cliente (nombre, barrio) VALUES
 ('Ana Díaz',   'Centro'),
 ('Beto Ruiz',  'Norte'),
 ('Caro Sosa',  'Centro'),
 ('Diego Paz',  'Sur'),
 ('Evelyn Cruz','Norte');

INSERT INTO venta (fecha, id_cliente) VALUES
 ('2026-03-01', 1),
 ('2026-03-01', 2),
 ('2026-03-02', 1),
 ('2026-03-02', NULL),
 ('2026-03-03', 3),
 ('2026-03-03', 1);

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES
 (1, 1, 2, 900),(1, 4, 3, 600),
 (2, 3, 6, 1800),
 (3, 1, 1, 900),(3, 6, 2, 950),
 (4, 5, 10, 200),
 (5, 7, 1, 2800),(5, 8, 2, 700),
 (6, 9, 1, 2500),(6,10, 1, 500),(6, 4, 2, 600);
```

---

## Consultas resueltas

### 1. Productos de la categoría "Golosinas", ordenados por precio

```sql
SELECT p.nombre, p.precio
FROM producto p
JOIN categoria c ON c.id_categoria = p.id_categoria
WHERE c.nombre = 'Golosinas'
ORDER BY p.precio DESC;
```

**Razonamiento:** necesito el nombre de la categoría, que está en otra tabla → `JOIN`.
Filtro por texto en `WHERE`. Ordeno descendente.

---

### 2. Productos sin stock

```sql
SELECT nombre FROM producto WHERE stock = 0;
```

Simple filtro. (Devuelve "Agua 500ml".) Nota: `stock = 0` es válido; sería
`IS NULL` solo si `stock` pudiera ser nulo, pero acá es `NOT NULL DEFAULT 0`.

---

### 3. Total facturado por día

```sql
SELECT v.fecha,
       SUM(dv.cantidad * dv.precio_unitario) AS total_dia
FROM venta v
JOIN detalle_venta dv ON dv.id_venta = v.id_venta
GROUP BY v.fecha
ORDER BY v.fecha;
```

**Razonamiento:** el importe de cada renglón es `cantidad * precio_unitario`. Quiero
sumarlo **por fecha** → `GROUP BY v.fecha` y `SUM(...)`.

---

### 4. Cantidad de ventas por cliente (incluyendo los que no compraron)

```sql
SELECT c.nombre,
       COUNT(v.id_venta) AS cantidad_ventas
FROM cliente c
LEFT JOIN venta v ON v.id_cliente = c.id_cliente
GROUP BY c.id_cliente, c.nombre
ORDER BY cantidad_ventas DESC, c.nombre;
```

**Razonamiento:** `LEFT JOIN` para no perder a los clientes sin ventas. Uso
`COUNT(v.id_venta)` (no `COUNT(*)`) para que los clientes sin ventas cuenten **0** y no 1
(porque `v.id_venta` es `NULL` en esas filas).

---

### 5. Clientes que nunca compraron (tres formas)

```sql
-- a) LEFT JOIN + IS NULL
SELECT c.nombre
FROM cliente c
LEFT JOIN venta v ON v.id_cliente = c.id_cliente
WHERE v.id_venta IS NULL;

-- b) NOT IN  (ojo con NULL en la subconsulta)
SELECT nombre FROM cliente
WHERE id_cliente NOT IN (SELECT id_cliente FROM venta WHERE id_cliente IS NOT NULL);

-- c) NOT EXISTS  (la más robusta)
SELECT c.nombre FROM cliente c
WHERE NOT EXISTS (SELECT 1 FROM venta v WHERE v.id_cliente = c.id_cliente);
```

**Razonamiento:** en la opción (b) hay que filtrar `IS NOT NULL` dentro de la subconsulta
porque `venta` tiene `id_cliente` nulo (venta de mostrador) y `NOT IN (…, NULL, …)`
devolvería vacío. (b) y (c) evitan ese problema; (c) es la recomendada.

---

### 6. Categorías con 3 o más productos

```sql
SELECT c.nombre, COUNT(*) AS cantidad_productos
FROM categoria c
JOIN producto p ON p.id_categoria = c.id_categoria
GROUP BY c.id_categoria, c.nombre
HAVING COUNT(*) >= 3;
```

**Razonamiento:** el filtro es sobre un resultado de agregación → va en `HAVING`, no en
`WHERE`.

---

### 7. Ticket promedio (promedio del total por venta)

```sql
SELECT AVG(total_venta) AS ticket_promedio
FROM (
    SELECT dv.id_venta,
           SUM(dv.cantidad * dv.precio_unitario) AS total_venta
    FROM detalle_venta dv
    GROUP BY dv.id_venta
) AS totales;
```

**Razonamiento:** primero calculo el total **de cada venta** (subconsulta en el `FROM`),
y después promedio esos totales. No se puede hacer en un solo nivel porque son dos
agregaciones de distinto grano.

---

### 8. Producto más caro de cada categoría

```sql
SELECT c.nombre AS categoria, p.nombre, p.precio
FROM producto p
JOIN categoria c ON c.id_categoria = p.id_categoria
WHERE p.precio = (
    SELECT MAX(p2.precio)
    FROM producto p2
    WHERE p2.id_categoria = p.id_categoria      -- subconsulta correlacionada
);
```

**Razonamiento:** por cada producto, comparo su precio con el máximo **de su misma
categoría**. La subconsulta se "correlaciona" con la fila externa a través de
`p2.id_categoria = p.id_categoria`.

---

### 9. Unidades vendidas por producto (ranking), incluyendo los que no se vendieron

```sql
SELECT p.nombre,
       COALESCE(SUM(dv.cantidad), 0) AS unidades_vendidas
FROM producto p
LEFT JOIN detalle_venta dv ON dv.id_producto = p.id_producto
GROUP BY p.id_producto, p.nombre
ORDER BY unidades_vendidas DESC;
```

**Razonamiento:** `LEFT JOIN` para incluir productos sin ventas; `COALESCE(x, 0)` reemplaza
el `NULL` de `SUM` (cuando no hay renglones) por 0.

---

### 10. Clientes del barrio Centro o Norte (operador de conjunto)

```sql
SELECT nombre, 'Centro' AS barrio FROM cliente WHERE barrio = 'Centro'
UNION
SELECT nombre, 'Norte'  AS barrio FROM cliente WHERE barrio = 'Norte'
ORDER BY barrio, nombre;
```

**Razonamiento:** ejemplo didáctico de `UNION` (se podría hacer con `WHERE barrio IN
('Centro','Norte')`). Ambos `SELECT` tienen las mismas 2 columnas y tipos compatibles.

---

### 11. Productos que se vendieron alguna vez / que nunca se vendieron (`INTERSECT` / `EXCEPT`)

```sql
-- se vendieron alguna vez
SELECT id_producto FROM producto
INTERSECT
SELECT id_producto FROM detalle_venta;

-- nunca se vendieron
SELECT id_producto FROM producto
EXCEPT
SELECT id_producto FROM detalle_venta;
```

**Razonamiento:** `INTERSECT` = está en ambas; `EXCEPT` = está en la primera y no en la
segunda. Disponibles en MariaDB ≥ 10.3.

---

### 12. Vista: "resumen de ventas" reutilizable

```sql
CREATE OR REPLACE VIEW v_resumen_venta AS
SELECT v.id_venta,
       v.fecha,
       COALESCE(c.nombre, 'Mostrador') AS cliente,
       SUM(dv.cantidad * dv.precio_unitario) AS total
FROM venta v
LEFT JOIN cliente c       ON c.id_cliente = v.id_cliente
JOIN       detalle_venta dv ON dv.id_venta = v.id_venta
GROUP BY v.id_venta, v.fecha, cliente;

-- uso:
SELECT * FROM v_resumen_venta WHERE total > 5000 ORDER BY total DESC;
```

**Razonamiento:** encapsula un JOIN + agregación que usaríamos seguido. `LEFT JOIN` a
cliente para que la venta de mostrador (`id_cliente NULL`) no se pierda y muestre
"Mostrador".

---

### 13. Aumentar 15% el precio de las bebidas

```sql
UPDATE producto
SET precio = ROUND(precio * 1.15, 2)
WHERE id_categoria = (SELECT id_categoria FROM categoria WHERE nombre = 'Bebidas');
```

**Razonamiento:** `UPDATE` con `WHERE` acotado por subconsulta escalar. `ROUND(...,2)`
para no arrastrar decimales raros.

---

### 14. Borrar clientes sin ninguna venta

```sql
DELETE FROM cliente
WHERE id_cliente NOT IN (
    SELECT id_cliente FROM venta WHERE id_cliente IS NOT NULL
);
```

**Razonamiento:** mismo cuidado que en la consulta 5b con el `NULL`. La FK de `venta`
tiene `ON DELETE SET NULL`, así que aunque un cliente tuviera ventas no se podría borrar
por accidente sin querer — pero acá justamente elegimos los que **no** tienen.

---

### 15. Días con más de 2 ventas y su facturación

```sql
SELECT v.fecha,
       COUNT(DISTINCT v.id_venta)              AS cantidad_ventas,
       SUM(dv.cantidad * dv.precio_unitario)   AS facturacion
FROM venta v
JOIN detalle_venta dv ON dv.id_venta = v.id_venta
GROUP BY v.fecha
HAVING COUNT(DISTINCT v.id_venta) > 2
ORDER BY facturacion DESC;
```

**Razonamiento:** al unir `venta` con `detalle_venta` cada venta aparece varias veces
(una por renglón); por eso `COUNT(DISTINCT v.id_venta)` y no `COUNT(*)`. El filtro por
cantidad de ventas del día va en `HAVING`.

---

## Autoevaluación

1. ¿Por qué `COUNT(v.id_venta)` y no `COUNT(*)` en un `LEFT JOIN` para contar por cliente?
2. ¿Dónde va un filtro que usa `SUM()` o `COUNT()`: `WHERE` o `HAVING`?
3. ¿Qué problema tiene `NOT IN (subconsulta)` si la subconsulta puede traer `NULL`?
4. ¿Cómo se obtiene "el más caro por categoría" con una subconsulta correlacionada?
5. ¿Qué diferencia hay entre `UNION` y `UNION ALL`?

<details>
<summary>Respuestas</summary>

1. Porque en las filas sin coincidencia `v.id_venta` es `NULL` y `COUNT` ignora `NULL`;
   `COUNT(*)` contaría esa fila igual y daría 1 en vez de 0.
2. `HAVING` (se evalúa después de agrupar). `WHERE` no admite agregaciones.
3. Si hay un `NULL` en la lista, `NOT IN` no puede garantizar "distinto de todos" y
   devuelve resultado vacío. Se resuelve filtrando `IS NOT NULL` o usando `NOT EXISTS`.
4. Comparando el precio de cada fila con `(SELECT MAX(precio) FROM producto p2 WHERE
   p2.id_categoria = p.id_categoria)`.
5. `UNION` elimina filas duplicadas (hace un ordenamiento/deduplicación); `UNION ALL` las
   deja todas y es más rápido.

</details>
