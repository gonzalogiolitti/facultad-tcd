# Recomendaciones del profesor — Integrador (taller mecánico)

## Qué pidió

Preguntó si el stock inicial de repuesto, que ya contemplaba lo usado en
las órdenes, no se terminaría descontando dos veces por culpa del trigger
(una vez "a mano" al armar las semillas con el stock ya rebajado, y otra
vez el trigger cuando se insertaba cada `orden_repuesto`).

## Qué hice

Cambié el orden del script: ahora los triggers se crean **antes** de las
semillas, y `repuesto.stock` se carga con el stock **inicial** real del
taller (31, 54, 14, 6, 9, 48, 7, en ese orden). Así cada `INSERT` en
`orden_repuesto` —ya sea de las semillas o de una prueba del
procedimiento— dispara el trigger una sola vez y descuenta justo lo que
corresponde, sin que yo tenga que precalcular nada a mano.

Agregué al final del `.sql` una consulta de control: para cada repuesto,
`stock actual + total usado en todas las órdenes` tiene que dar el stock
inicial. Corrí el script completo contra MariaDB y confirmé:

- Conteos finales: cliente 5, tecnico 4, servicio 6, repuesto 7, vehiculo 6,
  orden_trabajo 8, orden_tecnico 9, orden_servicio 7, orden_repuesto 10,
  **auditoria_stock 10** (antes daba 1, porque el trigger se creaba
  después de las semillas y no las auditaba), auditoria_servicio_eliminado 1.
- Control de stock: los 7 repuestos reconstruyen exacto su stock inicial
  (31, 54, 14, 6, 9, 48, 7).

## Dónde está

- `UGR-BBDD26-HE5_Giolitti_SQL.sql`: sección 2 (triggers, antes que las
  semillas), sección 3 (semillas con el stock inicial), y la consulta de
  control al final de la sección 9.
- `UGR-BBDD26-HE5_Giolitti_Documento.md`/`.docx`/`.pdf`: dos líneas nuevas
  en la sección 4, explicando el stock inicial y la consulta de control.
- Los 7 `.sql` de `avances/Avance3/` quedaron como versión anterior — ver
  `avances/Avance3/NOTA_version_reemplazada.md`.
