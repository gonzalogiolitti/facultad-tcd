# Avance #2 — Construcción del Modelo Relacional

**Alumno:** Gonzalo Giolitti

**Materia:** Bases de Datos – Tecnicatura en Ciencia de Datos – UGR – 2026

**Trabajo:** Integrador — taller mecánico independiente

Este avance está actualizado al diseño final del integrador.

## Problemática (ajustada)

Un taller mecánico independiente registra clientes, sus vehículos y las
órdenes de trabajo que se les abren. Cada orden puede llevar varios
técnicos, servicios y repuestos, y cada línea de servicio o repuesto guarda
el precio con el que se cobró en ese momento.

## Diagrama Entidad – Relación

## Modelo Relacional

```
CLIENTE (id_cliente, nombre, apellido, telefono, email)
TECNICO (id_tecnico, nombre, apellido, especialidad)
SERVICIO (id_servicio, nombre_servicio, costo_mano_obra)
REPUESTO (id_repuesto, nombre_repuesto, precio_unitario, stock)
VEHICULO (id_vehiculo, patente, marca, modelo, anio, id_cliente → CLIENTE)
ORDEN_TRABAJO (id_orden, fecha_ingreso, fecha_egreso, descripcion_problema, id_vehiculo → VEHICULO)
ORDEN_TECNICO (id_orden → ORDEN_TRABAJO, id_tecnico → TECNICO)
ORDEN_SERVICIO (id_orden → ORDEN_TRABAJO, id_servicio → SERVICIO, cantidad, costo_aplicado)
ORDEN_REPUESTO (id_orden → ORDEN_TRABAJO, id_repuesto → REPUESTO, cantidad_usada, precio_aplicado)
```

Las claves de `ORDEN_TECNICO`, `ORDEN_SERVICIO` y `ORDEN_REPUESTO` son
compuestas: las dos FK juntas forman la PK. Las demás tablas tienen PK
simple (`id_*`) y las FK marcadas arriba con `→`.

**ERDPlus nombra las tablas de las relaciones N:M con el nombre de la
relación: ASIGNA, INCLUYE y USA. En el SQL se llaman orden_tecnico,
orden_servicio y orden_repuesto.**

## Verificación 1FN/2FN/3FN

| Tabla | 1FN | 2FN | 3FN |
|---|---|---|---|
| CLIENTE, TECNICO, SERVICIO, REPUESTO, VEHICULO, ORDEN_TRABAJO | Atómica | PK simple, sin dependencia parcial | Cada atributo depende solo de su PK |
| ORDEN_TECNICO | Atómica | PK compuesta, sin atributos no-clave | Trivial |
| ORDEN_SERVICIO | Atómica | `cantidad`/`costo_aplicado` dependen de la combinación completa (id_orden, id_servicio), no de una sola FK | Sin dependencias transitivas |
| ORDEN_REPUESTO | Atómica | `cantidad_usada`/`precio_aplicado` dependen de la combinación completa | Sin dependencias transitivas |

`costo_aplicado` y `precio_aplicado` no son redundantes con
`costo_mano_obra`/`precio_unitario`: son el precio con el que se cobró esa
orden puntual, que no cambia aunque el precio de lista cambie después —
por eso no rompen 3FN, son un hecho distinto con su propia clave.
