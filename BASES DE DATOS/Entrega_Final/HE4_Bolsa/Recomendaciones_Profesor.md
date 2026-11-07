# Recomendaciones del profesor — HE4 (recuperatorio)

## Qué pidió

Preguntó qué pasaría si se cargara un movimiento con cantidad negativa, o
con un tipo que no fuera "Compra" ni "Venta". Al principio del cuatrimestre
habíamos sacado los `CHECK` porque no se habían visto en clase; ahora los
recomendó directamente, así que los agregué.

## Qué hice

Agregué 5 restricciones `CHECK`, con nombre y sintaxis simple (sin `ENGINE`
ni `CHARSET`):

- `chk_movimiento_tipo`: `tipo_transaccion` solo puede ser 'Compra' o 'Venta'.
- `chk_movimiento_cantidad`: la cantidad de un movimiento tiene que ser mayor a cero.
- `chk_portafolio_cantidad`: la cantidad de un activo en cartera tiene que ser mayor a cero.
- `chk_activo_precio`: el precio de un activo no puede ser negativo.
- `chk_cuenta_saldo`: el saldo disponible de una cuenta no puede ser negativo.

Las semillas (incluidos los activos 13 y 14 de complemento) siguen cargando
sin ningún error, y los `COUNT(*)` finales dan exactamente lo mismo que
antes. Agregué al final del `.sql` una sección "Pruebas de restricciones"
con dos `INSERT` comentados que tienen que fallar (cantidad -3, tipo
'Regalo'); los probé aparte contra MariaDB y los rechaza los dos.

## Dónde está

- `UGR-BBDD26-HE4_Giolitti_SQL.sql`: los 5 `CHECK` en las tablas
  `movimiento`, `portafolio`, `activo` y `cuenta_comitente`, más la sección
  "Pruebas de restricciones" al final.
- `UGR-BBDD26-HE4_Giolitti_Manual.md`/`.docx`/`.pdf`: sección
  "Restricciones de integridad", justo antes de "Cómo ejecutar el SQL".
