# TPI — Avance #1: Definición coloquial y primera aproximación

**Gonzalo Giolitti · Bases de Datos · Tecnicatura en Ciencia de Datos · UGR · 2026**

(Requisito de HE2: "presentar una problemática en lenguaje coloquial... y esbozar un DER asociado")

## La situación

Es un taller mecánico chico e independiente que hoy lleva todo en cuadernos y
planillas sueltas. Quiere una base de datos para saber qué autos pasaron por
el taller, qué se les hizo y cuánto repuesto se gastó.

Los clientes dejan sus autos. De cada cliente se guarda nombre, apellido,
teléfono y mail. Un cliente puede tener varios autos (o ninguno todavía), pero
cada auto es de un solo cliente. De cada vehículo interesa la patente (no se
repite), la marca, el modelo y el año.

Cada vez que un auto entra se abre una orden de trabajo: fecha de ingreso,
fecha de egreso (vacía mientras sigue en el taller) y la descripción del
problema. Un auto puede tener muchas órdenes con el tiempo.

A cada orden se le asignan uno o más técnicos, y un técnico atiende muchas
órdenes. Se registran los servicios hechos (con su costo) y los repuestos
usados (con su precio y el stock disponible), y el stock tiene que bajar solo
cuando se carga un repuesto, sin que nadie lo actualice a mano.

El taller necesita además distintos tipos de usuario: dueño (todo), recepción
(carga clientes/autos/órdenes), mecánicos (cargan servicios y repuestos) y
alguien que solo consulta.

Esta idea es la primera aproximación — puede cambiar antes del Avance #2. En
la práctica no cambió: el DER de ese Avance mantiene la misma estructura.

## DER inicial (esbozo)

5 entidades centrales: CLIENTE, VEHICULO, ORDEN_TRABAJO, TECNICO, SERVICIO,
REPUESTO. Relaciones: CLIENTE–VEHICULO (1:N), VEHICULO–ORDEN_TRABAJO (1:N),
ORDEN_TRABAJO–TECNICO (N:M), ORDEN_TRABAJO–SERVICIO (N:M, con cantidad),
ORDEN_TRABAJO–REPUESTO (N:M, con cantidad_usada).

El DER completo y validado está en el Avance #2
(`UGR-BBDD26-HE5_Giolitti_Avance2.md`) y en el DER final de la entrega
(`UGR-BBDD26-HE5_Giolitti_DER.erdplus`), que son los mismos seis conceptos de
este esbozo, ya con atributos, cardinalidades y claves definidos.
