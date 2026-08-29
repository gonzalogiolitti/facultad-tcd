# 06 · Transacciones e Integridad — Práctica resuelta

> Ejercicios nuevos. Se usa el mismo esquema del kiosco de la Unidad 05
> (`producto`, `venta`, `detalle_venta`, `cliente`).

---

## Ejercicio 1 — Escribir la transacción "registrar venta"

**Enunciado.** Registrar una venta del cliente 1: 2 unidades del producto 1 (precio 900) y
1 del producto 6 (precio 950). Hay que: crear la venta, cargar el detalle y descontar el
stock. Si algún producto no tiene stock suficiente, **no** debe quedar nada registrado.

### Resolución

```sql
START TRANSACTION;

-- 1. cabecera
INSERT INTO venta (fecha, id_cliente) VALUES (CURRENT_DATE, 1);
SET @v = LAST_INSERT_ID();

-- 2. renglones
INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario)
VALUES (@v, 1, 2, 900),
       (@v, 6, 1, 950);

-- 3. descuento de stock
UPDATE producto SET stock = stock - 2 WHERE id_producto = 1;
UPDATE producto SET stock = stock - 1 WHERE id_producto = 6;

-- 4. control: si algún stock quedó negativo, se deshace todo
--    (el CHECK (stock >= 0) ya haría fallar el UPDATE, pero lo verificamos explícito)
SELECT COUNT(*) INTO @negativos FROM producto WHERE stock < 0;

-- 5. cierre
-- En un procedimiento almacenado esto sería un IF; a mano, se decide con el valor:
--   si @negativos = 0  -> COMMIT;
--   si @negativos > 0  -> ROLLBACK;
COMMIT;    -- (o ROLLBACK; según @negativos)
```

### Razonamiento y decisiones

- **`START TRANSACTION`** agrupa los 4 pasos: por **atomicidad**, o entran todos o ninguno.
- **`LAST_INSERT_ID()`** recupera el `id_venta` autonumérico recién generado para usarlo en
  el detalle (respeta la **integridad referencial**: el detalle apunta a una venta que sí
  existe).
- El **`CHECK (stock >= 0)`** del esquema es la primera línea de defensa: si el descuento
  dejara stock negativo, el `UPDATE` falla y basta con `ROLLBACK`.
- El `COMMIT` recién al final asegura **durabilidad**: hasta ese momento, un corte deshace
  todo automáticamente.

> En producción esto se encapsula en un **procedimiento almacenado** con manejo de errores
> (`DECLARE ... HANDLER`) que hace `ROLLBACK` ante cualquier excepción.

---

## Ejercicio 2 — ¿Qué propiedad ACID se viola?

**Enunciado.** Para cada escenario, indicá qué letra de ACID falla.

1. Se transfiere saldo de la cuenta A a la B; se descuenta de A, pero el sistema se cae
   antes de acreditar en B. Al reiniciar, el dinero **desapareció**.
2. Una transacción confirmó una venta; un microcorte apaga el server justo después y, al
   volver, **la venta no está**.
3. Dos cajeros venden simultáneamente la última unidad de un producto; **los dos** cierran
   la venta y el stock queda en **-1**.
4. Se inserta un `detalle_venta` con `id_venta = 999`, que no existe en `venta`, y la base
   lo **acepta**.

### Resolución

| # | Falla | Por qué |
|---|---|---|
| 1 | **Atomicidad** | la transferencia son dos pasos; se hizo uno solo. Debió deshacerse el descuento de A. |
| 2 | **Durabilidad** | ya había `COMMIT`; un cambio confirmado debe sobrevivir a la caída (se recupera del log). |
| 3 | **Aislamiento** | las dos transacciones leyeron el stock antes de que la otra lo bajara → *lost update*. Con bloqueo de fila o nivel `SERIALIZABLE` una habría esperado. |
| 4 | **Consistencia** | se violó una restricción de integridad referencial; la BD pasó a un estado inválido (detalle huérfano). |

---

## Ejercicio 3 — Analizar un entrelazado de dos transacciones

**Enunciado.** `producto 6` tiene `stock = 12`. Se ejecutan en paralelo:

```
T1 (reposición)                  T2 (venta)
------------------------------   ------------------------------
a. SELECT stock  -> 12
                                 b. SELECT stock  -> 12
c. UPDATE stock = 12 + 20 (=32)
                                 d. UPDATE stock = 12 - 3 (=9)
e. COMMIT
                                 f. COMMIT
```

**Preguntas:** ¿qué stock queda? ¿qué problema es? ¿qué lo evita?

### Resolución

- **Stock final: 9.** T2 escribió último, pisando el `+20` de T1. El valor correcto sería
  `12 + 20 - 3 = 29`.
- **Problema:** **actualización perdida** (*lost update*). Ambas leyeron `12` antes de que
  la otra escribiera.
- **Cómo se evita:**
  - Usar una **escritura relativa** en vez de leer-y-escribir:
    `UPDATE producto SET stock = stock - 3 WHERE id_producto = 6;` — InnoDB toma un bloqueo
    exclusivo de fila y serializa los dos `UPDATE`, dando `29`.
  - O leer con bloqueo: `SELECT stock ... FOR UPDATE;` dentro de la transacción, para que la
    otra espere.
  - O subir el nivel de aislamiento a `SERIALIZABLE`.

**Moraleja:** siempre que se pueda, modificar en función del valor actual
(`stock = stock - :n`) en lugar de calcular en la aplicación y sobrescribir.

---

## Ejercicio 4 — Uso de SAVEPOINT

**Enunciado.** Se cargan 3 productos nuevos en una transacción. Si el tercero falla
(precio inválido), se quiere conservar los dos primeros y descartar solo el tercero, sin
abortar toda la transacción.

### Resolución

```sql
START TRANSACTION;

INSERT INTO producto (nombre, precio, stock, id_categoria)
VALUES ('Turrón', 700, 10, 2);

INSERT INTO producto (nombre, precio, stock, id_categoria)
VALUES ('Mantecol', 800, 10, 2);

SAVEPOINT antes_del_tercero;

-- este falla por el CHECK (precio >= 0)
INSERT INTO producto (nombre, precio, stock, id_categoria)
VALUES ('Pastillas', -50, 10, 2);          -- ERROR

-- se descarta SOLO desde el savepoint
ROLLBACK TO SAVEPOINT antes_del_tercero;

-- los dos primeros siguen vivos dentro de la transacción
COMMIT;      -- quedan 'Turrón' y 'Mantecol'
```

### Razonamiento

`SAVEPOINT` crea un punto intermedio. `ROLLBACK TO SAVEPOINT` deshace solo lo hecho
**después** de ese punto, manteniendo el resto de la transacción abierta. Es útil en
cargas por lotes donde un ítem defectuoso no debe tirar abajo todo el lote.

---

## Ejercicio 5 — Elegir las restricciones de integridad de un esquema

**Enunciado.** Para una tabla `reserva_cancha` de un club de pádel, elegí las restricciones
adecuadas. Datos: `id_reserva`, `id_socio`, `nro_cancha`, `fecha`, `hora_inicio`,
`hora_fin`, `estado` (`'activa'`, `'cancelada'`, `'jugada'`).

### Resolución

```sql
CREATE TABLE reserva_cancha (
    id_reserva  INT NOT NULL AUTO_INCREMENT,
    id_socio    INT NOT NULL,
    nro_cancha  INT NOT NULL,
    fecha       DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin    TIME NOT NULL,
    estado      VARCHAR(10) NOT NULL DEFAULT 'activa',

    CONSTRAINT pk_reserva PRIMARY KEY (id_reserva),

    CONSTRAINT fk_reserva_socio
        FOREIGN KEY (id_socio) REFERENCES socio (id_socio)
        ON UPDATE CASCADE ON DELETE RESTRICT,

    -- no dos reservas activas de la misma cancha en el mismo día y horario de inicio
    CONSTRAINT uq_reserva_cancha_horario UNIQUE (nro_cancha, fecha, hora_inicio),

    CONSTRAINT chk_reserva_horas  CHECK (hora_fin > hora_inicio),
    CONSTRAINT chk_reserva_estado CHECK (estado IN ('activa','cancelada','jugada'))
) ENGINE=InnoDB;
```

| Restricción | Tipo | Por qué |
|---|---|---|
| `PRIMARY KEY (id_reserva)` | unicidad + obligatoriedad | identifica la reserva |
| `FK id_socio` con `RESTRICT` | referencial | no reservar para un socio inexistente; no borrar socios con reservas |
| `UNIQUE (nro_cancha, fecha, hora_inicio)` | unicidad | evita doble reserva del mismo turno |
| `CHECK (hora_fin > hora_inicio)` | dominio / negocio | un turno no puede terminar antes de empezar |
| `CHECK (estado IN (...))` | dominio | solo valores válidos de estado |
| `NOT NULL` en fecha/horas/socio | obligatoriedad | son datos imprescindibles |

> La regla "no se pueden **solapar** dos turnos de la misma cancha" (ej: 10:00-11:30 y
> 11:00-12:30) **no** se puede expresar con `UNIQUE` ni `CHECK` simples: requiere un
> **trigger** o validación en la aplicación.

---

## Autoevaluación

1. ¿Qué hace `ROLLBACK`? ¿Y si cierro la sesión sin `COMMIT`?
2. Nombrá los 4 problemas de concurrencia.
3. ¿Qué nivel de aislamiento usa InnoDB por defecto?
4. ¿Cómo evitás una *actualización perdida* al descontar stock?
5. ¿Qué reglas de negocio **no** se pueden poner en un `CHECK` y qué se usa entonces?

<details>
<summary>Respuestas</summary>

1. Deshace todos los cambios de la transacción actual. Cerrar sin `COMMIT` provoca un
   `ROLLBACK` automático.
2. Actualización perdida, lectura sucia, lectura no repetible, lectura fantasma.
3. `REPEATABLE READ`.
4. Modificando en función del valor actual (`stock = stock - :n`) para que InnoDB serialice
   los `UPDATE`, o leyendo con `SELECT ... FOR UPDATE`.
5. Reglas que involucran varias filas o rangos (ej: solapamiento de horarios). Se usan
   **triggers** o lógica de aplicación.

</details>
