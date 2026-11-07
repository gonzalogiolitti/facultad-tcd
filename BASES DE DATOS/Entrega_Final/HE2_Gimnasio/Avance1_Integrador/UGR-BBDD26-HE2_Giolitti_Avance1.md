# Avance #1 — Definición coloquial y primera aproximación

**Alumno:** Gonzalo Giolitti

**Materia:** Bases de Datos – Tecnicatura en Ciencia de Datos – UGR – 2026

**Trabajo:** Integrador — taller mecánico independiente

Este avance está actualizado al diseño final del integrador (el mismo DER y
MR que se entregan completos en HE5).

## La situación

Es un taller mecánico chico e independiente que hoy lleva todo en cuadernos
y planillas sueltas. Quiere una base de datos para saber qué autos pasaron
por el taller, qué se les hizo y cuánto repuesto se gastó.

Los clientes dejan sus autos. De cada cliente se guarda nombre, apellido,
teléfono y mail. Un cliente puede tener varios autos (o ninguno todavía),
pero cada auto es de un solo cliente. De cada vehículo interesa la patente
(no se repite), la marca, el modelo y el año.

Cada vez que un auto entra se abre una orden de trabajo: fecha de ingreso,
fecha de egreso (vacía mientras sigue en el taller) y la descripción del
problema que cuenta el cliente. Un auto puede tener muchas órdenes con el
tiempo, pero cada orden es de un solo auto.

A cada orden se le asignan uno o más técnicos (uno de frenos, otro de
motor...), y un mismo técnico atiende muchas órdenes. Se registran los
servicios hechos (con su costo de mano de obra) y los repuestos usados (con
su precio y el stock disponible). El precio con el que se cobra un servicio
o un repuesto queda fijo en esa orden aunque el precio de lista cambie
después. Cuando se carga un repuesto en una orden, el stock tiene que bajar
solo.

El taller necesita distintos tipos de usuario: el dueño (todo), recepción
(carga clientes, autos y órdenes), mecánicos (cargan servicios y repuestos)
y alguien que solo consulta.

## Diagrama Entidad – Relación (esbozo inicial)

6 entidades: CLIENTE, VEHICULO, ORDEN_TRABAJO, TECNICO, SERVICIO, REPUESTO.
Relaciones: CLIENTE–VEHICULO (1:N), VEHICULO–ORDEN_TRABAJO (1:N),
ORDEN_TRABAJO–TECNICO (N:M), ORDEN_TRABAJO–SERVICIO (N:M, con cantidad),
ORDEN_TRABAJO–REPUESTO (N:M, con cantidad_usada). Esta idea ya no cambió:
es la misma estructura del DER final.
