# TPI Avance 3 — Implementación en el SGBD (Taller Mecánico)

En este avance tomé el modelo relacional que ya tenía armado del taller y lo
pasé a MariaDB de verdad, con todo lo que hace falta para que funcione como un
sistema real y no solo como tablas sueltas.

**Tablas:** son las mismas 9 del modelo relacional, más dos tablas de
auditoría nuevas. A las tablas de auditoría les sacó las claves foráneas a
propósito, porque si tuvieran FK y yo borro una orden, no podría guardar su
registro en la auditoría (la fila ya no existiría para apuntar a ella).

**Semillas:** cargué datos de ejemplo pensados para poder probar casos
puntuales: un cliente sin vehículos, dos órdenes todavía abiertas, una orden
vacía (sin técnico, servicio ni repuesto) para poder borrarla después, y dos
repuestos con poco stock. El stock que puse ya tiene restado lo que se usó en
esas órdenes, porque en este punto todavía no existen los triggers.

**Triggers:** `trg_orden_eliminada` guarda una copia de la orden antes de que
se borre, y `trg_descuento_stock` resta del depósito lo que se cargó en una
orden apenas se inserta. Así el descuento de stock no depende de que yo me
acuerde de hacerlo a mano cada vez.

**Procedimientos:** son las cuatro operaciones que más se repiten en el día a
día del taller — abrir una orden, agregarle un repuesto, cerrarla y consultar
el historial de un vehículo — empaquetadas para no tener que escribir el SQL
completo cada vez.

**Vistas:** junté en `v_orden_detalle` los datos que siempre se piden juntos
(la orden con la patente y el cliente), y en las otras dos vistas calculé de
una vez el total de servicios y el total de repuestos de cada orden, para no
repetir esas cuentas en cada consulta.

**Permisos:** armé un usuario por rol (administrador, recepción, mecánico y
consulta) porque no tiene sentido que alguien de recepción pueda borrar un
trigger o que un mecánico pueda ver sueldos que no están ahí pero podrían
estarlo mañana — cada uno ve y toca solo lo que necesita para su trabajo.

**Consultas:** son las preguntas que un dueño de taller haría todos los días:
qué está abierto, qué cliente tiene más autos, qué servicio se pide más, qué
hay que reponer.

**Auditoría:** queda un rastro de quién borró una orden y quién descontó
stock y cuándo, aparte de los datos en sí — útil si después hay que explicar
por qué el stock de algo cambió.

**Transacciones:** probé una transacción completa que registra una orden con
su servicio y su repuesto de una sola vez, y otra con `SAVEPOINT` para mostrar
que puedo deshacer solo una parte de lo que hice sin perder todo lo anterior.
