# 06 · Transacciones e Integridad de los Datos — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR) · Unidad III del programa.
> Temas: transacción, propiedades **ACID**, control de concurrencia, bloqueos,
> recuperación ante fallos y restricciones de integridad.

---

## 1. ¿Qué es una transacción?

Una **transacción** es un conjunto de operaciones sobre la base de datos que se ejecutan
como **una sola unidad**: o se hacen **todas**, o **ninguna**.

Ejemplo cotidiano — registrar una venta en el kiosco implica 3 pasos:

1. Insertar la fila en `venta`.
2. Insertar los renglones en `detalle_venta`.
3. Descontar el `stock` de cada producto.

Si la luz se corta después del paso 2, la base quedaría con una venta **sin descontar
stock**: inconsistente. La transacción evita eso: si algo falla, se deshace todo.

```sql
START TRANSACTION;
    INSERT INTO venta (fecha, id_cliente) VALUES (CURRENT_DATE, 1);
    SET @v = LAST_INSERT_ID();
    INSERT INTO detalle_venta VALUES (@v, 1, 2, 900);
    UPDATE producto SET stock = stock - 2 WHERE id_producto = 1;
COMMIT;      -- confirma: los cambios quedan permanentes
-- si algo salió mal:  ROLLBACK;  -- deshace TODO lo hecho desde START TRANSACTION
```

- **`COMMIT`**: hace permanentes los cambios.
- **`ROLLBACK`**: deshace todos los cambios de la transacción.
- **`SAVEPOINT nombre`** + **`ROLLBACK TO nombre`**: deshacer solo hasta un punto
  intermedio.
- **Autocommit:** por defecto MariaDB confirma cada sentencia sola. `START TRANSACTION`
  (o `BEGIN`) lo desactiva hasta el `COMMIT`/`ROLLBACK`.

---

## 2. Propiedades ACID

Toda transacción bien gestionada garantiza **A-C-I-D**:

| Letra | Propiedad | Qué significa | Ejemplo del kiosco |
|---|---|---|---|
| **A** | **Atomicidad** | todo o nada | si falla el `UPDATE` de stock, se borra también la `venta` insertada |
| **C** | **Consistencia** | la BD pasa de un estado válido a otro válido (se respetan todas las reglas: claves, `CHECK`, FK) | nunca queda un `detalle_venta` apuntando a una `venta` inexistente |
| **I** | **Aislamiento** (Isolation) | transacciones simultáneas no se interfieren; el resultado es como si se hubieran ejecutado una tras otra | dos cajas vendiendo el último producto a la vez no dejan stock negativo |
| **D** | **Durabilidad** | una vez confirmada (`COMMIT`), sobrevive a cortes de luz y caídas | tras el `COMMIT`, aunque se apague el servidor, la venta está guardada |

---

## 3. Problemas de concurrencia (qué pasa si NO hay aislamiento)

Cuando varias transacciones tocan los mismos datos al mismo tiempo pueden aparecer:

### 3.1 Actualización perdida (lost update)

```
T1 lee stock = 10
T2 lee stock = 10
T1 escribe stock = 10 - 3 = 7
T2 escribe stock = 10 - 5 = 5     ← se perdió el descuento de T1; debería ser 2
```

### 3.2 Lectura sucia (dirty read)

T2 lee un dato que T1 **modificó pero todavía no confirmó**. Si T1 hace `ROLLBACK`, T2
trabajó con un valor que **nunca existió**.

### 3.3 Lectura no repetible (non-repeatable read)

T1 lee una fila, T2 la modifica y hace `COMMIT`, T1 vuelve a leer la **misma** fila y
obtiene un valor distinto dentro de la misma transacción.

### 3.4 Lectura fantasma (phantom read)

T1 hace `SELECT COUNT(*) ... WHERE barrio = 'Norte'` → 5. T2 inserta un cliente de Norte y
confirma. T1 repite el `SELECT` → 6. Aparecieron filas "fantasma" que antes no estaban.

---

## 4. Niveles de aislamiento

Se elige cuánto aislamiento se quiere (más aislamiento = más seguro pero más lento):

| Nivel | Evita lectura sucia | Evita no repetible | Evita fantasma |
|---|:---:|:---:|:---:|
| `READ UNCOMMITTED` | ❌ | ❌ | ❌ |
| `READ COMMITTED` | ✅ | ❌ | ❌ |
| `REPEATABLE READ` (por defecto en InnoDB) | ✅ | ✅ | ✅* |
| `SERIALIZABLE` | ✅ | ✅ | ✅ |

`*` InnoDB, gracias a su mecanismo de *next-key locking* + MVCC, evita también la mayoría
de los fantasmas en `REPEATABLE READ`.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---

## 5. Bloqueos (locks) e interbloqueo (deadlock)

El SGBD usa **bloqueos** para implementar el aislamiento:

- **Bloqueo compartido (S, shared):** para leer. Varios pueden tenerlo a la vez.
- **Bloqueo exclusivo (X, exclusive):** para escribir. Solo uno; nadie más lee ni escribe
  esa fila hasta que se libere.

**Interbloqueo (deadlock):** dos transacciones se esperan mutuamente.

```
T1 bloquea fila A, quiere fila B
T2 bloquea fila B, quiere fila A
→ ninguna avanza
```

InnoDB **detecta** el deadlock y **aborta una** de las dos (la que hizo menos trabajo) con
un error; esa transacción debe reintentarse. Para prevenirlo: acceder a las tablas/filas
**siempre en el mismo orden** y mantener las transacciones **cortas**.

---

## 6. Recuperación ante fallos

El SGBD debe poder volver a un estado consistente tras una caída. Mecanismos:

- **Log de transacciones (write-ahead log):** antes de tocar los datos, se anota en un
  archivo de log qué se va a cambiar. Tras un fallo:
  - **REDO:** rehace las transacciones **confirmadas** que no llegaron a disco.
  - **UNDO:** deshace las transacciones **no confirmadas** que sí tocaron datos.
- **Checkpoint:** punto en el que se vuelca todo lo pendiente a disco; acota cuánto log
  hay que releer al recuperarse.
- **Backups** (copias completas o incrementales) para desastres mayores.

---

## 7. Restricciones de integridad (el otro tema de la unidad)

Son reglas que la base **hace cumplir siempre**, en toda transacción:

| Restricción | Qué garantiza | SQL |
|---|---|---|
| **Unicidad** | no hay valores repetidos | `PRIMARY KEY`, `UNIQUE` |
| **Obligatoriedad** | el dato no falta | `NOT NULL` |
| **Referencial** | una FK apunta a algo que existe | `FOREIGN KEY ... REFERENCES` |
| **De chequeo / dominio** | el valor cumple una condición | `CHECK (precio >= 0)` |
| **De negocio compleja** | reglas que no entran en un `CHECK` | *triggers* o lógica de aplicación |

Las restricciones y las transacciones trabajan juntas: dentro de una transacción se pueden
violar temporalmente algunas reglas, pero al `COMMIT` **todo** debe ser consistente (esa
es la "C" de ACID).

---

## 8. Errores comunes

- **Creer que `START TRANSACTION` sin `COMMIT` guarda igual.** Si cerrás la sesión sin
  `COMMIT`, se hace `ROLLBACK`.
- **Transacciones larguísimas.** Mantienen bloqueos mucho tiempo, aumentan deadlocks y
  llenan el log. Hacé transacciones cortas.
- **Confundir consistencia con aislamiento.** Consistencia = se respetan las reglas;
  aislamiento = las concurrentes no se estorban.
- **Suponer que `READ UNCOMMITTED` "es más rápido y no pasa nada".** Podés leer datos que
  después se deshacen.
- **No reintentar tras un deadlock.** El SGBD aborta una transacción; la aplicación
  **debe** volver a intentarla.
- **Poner toda la validación en la app y ninguna en la BD.** Si otro programa escribe
  directo, los datos se corrompen. Las restricciones van **en la base**.

---

## 9. Resumen

Una **transacción** agrupa operaciones en una unidad **atómica**, **consistente**,
**aislada** y **duradera** (**ACID**). La **concurrencia** mal controlada produce lecturas
sucias/no repetibles/fantasma y actualizaciones perdidas; se controla con **niveles de
aislamiento** y **bloqueos**, cuidando los **deadlocks**. La **recuperación** se apoya en
un **log** con REDO/UNDO y checkpoints. Las **restricciones de integridad** (`PK`,
`UNIQUE`, `NOT NULL`, `FK`, `CHECK`) son las reglas que la base garantiza en todo momento.
