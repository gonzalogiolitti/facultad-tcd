# Avance #3 — Implementación de la BD al SGBD

**Alumno:** Gonzalo Giolitti

**Materia:** Bases de Datos – Tecnicatura en Ciencia de Datos – UGR – 2026

**Trabajo:** Integrador — taller mecánico independiente

Este avance está actualizado al diseño final del integrador. El script
completo (`UGR-BBDD26-HE5_Giolitti_SQL.sql`) queda copiado al lado de este
documento, en esta misma carpeta.

## Qué hace cada parte del script

**Tablas y triggers:** las 9 tablas del negocio más dos de auditoría
(`auditoria_stock`, `auditoria_servicio_eliminado`). Los triggers se crean
antes que las semillas: `trg_descuento_stock` descuenta del stock una sola
vez cada vez que se carga un repuesto en una orden, y `trg_servicio_eliminado`
deja registro de cualquier línea de servicio que se borre.

**Semillas:** carga clientes, técnicos, servicios, repuestos (con su stock
inicial real: 31, 54, 14, 6, 9, 48, 7), vehículos y 8 órdenes de ejemplo,
con los técnicos, servicios y repuestos que usó cada una.

**Procedimientos:** `sp_agregar_repuesto_orden` busca el precio vigente del
repuesto, abre una transacción, inserta la línea (eso dispara el trigger de
stock) y confirma; si algo falla —orden o repuesto inexistente, stock
insuficiente— el `DECLARE EXIT HANDLER` hace `ROLLBACK` y avisa.
`sp_cerrar_orden` solo pone la fecha de egreso de hoy, dentro de su propia
transacción.

**Vistas:** `v_detalle_orden` junta la orden con la patente y el cliente;
`v_total_orden` suma mano de obra y repuestos de una orden; `v_stock_bajo`
lista los repuestos con menos de 10 unidades.

**Consultas:** las 7 pedidas (agregación, INNER JOIN, LEFT JOIN,
subconsulta, LIKE, HAVING, LIMIT 3), cada una resolviendo una pregunta real
del taller: cuántas órdenes hay, qué autos nunca entraron, qué repuestos
están caros, qué técnico atiende más, etc.

**Permisos:** cuatro usuarios (`admin_taller`, `recepcion`, `mecanico`,
`consulta`), cada uno con `GRANT` solo sobre lo que necesita para su
trabajo; `consulta` tiene un `GRANT` seguido de un `REVOKE` para mostrar
cómo se le acota el acceso de "toda la base" a "solo las tres vistas".

**Auditoría:** las pruebas del final dejan un rastro real — quién cargó un
repuesto, quién borró una línea de servicio, y una consulta de control que
confirma que el stock no se descontó dos veces (stock actual + usado =
stock inicial).
