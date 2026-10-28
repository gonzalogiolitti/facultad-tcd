# Hito Evaluable 5 – Trabajo Práctico Integrador

**Alumno:** Gonzalo Giolitti
**Materia:** Bases de Datos – Tecnicatura en Ciencia de Datos – UGR
**Caso:** Taller mecánico independiente

---

## 1. Situación a modelar

Se trata de un taller mecánico chico e independiente que hoy lleva todo en cuadernos y planillas sueltas. Quiere tener una base de datos para saber qué autos pasaron por el taller, qué se les hizo y cuánto repuesto se gastó.

Los clientes dejan sus autos en el taller. De cada cliente se guarda nombre, apellido, teléfono y mail. Un cliente puede tener varios autos (o ninguno cargado todavía), pero cada auto pertenece a un solo cliente. De cada vehículo interesa la patente (no se repite), la marca, el modelo y el año.

Cada vez que un auto entra al taller se abre una orden de trabajo, con la fecha de ingreso, la fecha de egreso (que queda vacía mientras el auto sigue en el taller) y una descripción del problema que cuenta el cliente. Un auto puede tener muchas órdenes a lo largo del tiempo, pero cada orden es de un solo auto.

En cada orden trabajan uno o más técnicos (por ejemplo, uno de frenos y otro de motor), y un mismo técnico atiende muchas órdenes. De cada técnico se guarda nombre, apellido y especialidad.

En la orden también se registran los servicios realizados (cambio de aceite, alineación, etc.), que tienen un costo de mano de obra, y la cantidad de veces que se hicieron. Lo mismo con los repuestos: de cada uno se conoce el precio y el stock disponible, y en la orden se anota cuántas unidades se usaron. Cuando se carga un repuesto en una orden, el stock tiene que bajar solo, sin que nadie lo tenga que actualizar a mano.

Además, el taller necesita distintos tipos de usuarios: el dueño (administrador, puede todo), recepción (carga clientes, autos y órdenes), mecánicos (cargan servicios y repuestos) y alguien que solo consulta.

## 2. Diagrama Entidad – Relación

*(Insertar acá la imagen del DER exportada desde ERDPlus: TPI_Adelanto_DER_Taller.erdplus)*

Relaciones:

| Relación | Entidades | Cardinalidad |
|---|---|---|
| tiene | CLIENTE – VEHICULO | 1:N (un cliente tiene 0 a N vehículos; un vehículo es de un solo cliente) |
| genera | VEHICULO – ORDEN_TRABAJO | 1:N (un vehículo genera 0 a N órdenes; una orden es de un solo vehículo) |
| asigna | ORDEN_TRABAJO – TECNICO | N:M |
| incluye | ORDEN_TRABAJO – SERVICIO | N:M (atributo: cantidad) |
| usa | ORDEN_TRABAJO – REPUESTO | N:M (atributo: cantidad_usada) |

## 3. Modelo Relacional

```
CLIENTE (id_cliente, nombre, apellido, telefono, email)
TECNICO (id_tecnico, nombre, apellido, especialidad)
SERVICIO (id_servicio, nombre_servicio, costo_mano_obra)
REPUESTO (id_repuesto, nombre_repuesto, precio_unitario, stock)
VEHICULO (id_vehiculo, patente, marca, modelo, anio, id_cliente → CLIENTE)
ORDEN_TRABAJO (id_orden, fecha_ingreso, fecha_egreso, descripcion_problema, id_vehiculo → VEHICULO)
ORDEN_TECNICO (id_orden → ORDEN_TRABAJO, id_tecnico → TECNICO)
ORDEN_SERVICIO (id_orden → ORDEN_TRABAJO, id_servicio → SERVICIO, cantidad)
ORDEN_REPUESTO (id_orden → ORDEN_TRABAJO, id_repuesto → REPUESTO, cantidad_usada)
```

Las claves de las tres últimas tablas son compuestas (las dos claves foráneas juntas). A estas nueve tablas se suma `auditoria_stock`, una tabla auxiliar que usa el trigger para dejar registro de cada descuento de stock; no forma parte del DER porque no representa algo del negocio, sino un registro interno.

## 4. Contenido del archivo .sql

El archivo `HE5_Giolitti_Taller.sql` incluye, en este orden: creación de la base y las tablas, semillas, el trigger `trg_descuento_stock`, el procedimiento `sp_agregar_repuesto_orden`, la creación de los cuatro usuarios con sus permisos, las siete consultas pedidas y una prueba del procedimiento (un caso correcto y dos con error).

**Procedimiento y trigger:** `sp_agregar_repuesto_orden` carga un repuesto en una orden dentro de una transacción. Al insertar en `orden_repuesto` se dispara el trigger, que descuenta el stock y guarda el movimiento en `auditoria_stock`. Si algo falla (orden inexistente, repuesto repetido en la orden o stock insuficiente), el manejador de errores hace ROLLBACK y avisa; el stock queda como estaba.
