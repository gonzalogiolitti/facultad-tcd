# Hito Evaluable 5 – Trabajo Práctico Integrador

**Alumno:** Gonzalo Giolitti

**Materia:** Bases de Datos – Tecnicatura en Ciencia de Datos – UGR – 2026

**Caso:** Taller mecánico independiente

---

## 1. Situación a modelar

Es un taller mecánico chico e independiente que hoy lleva todo en cuadernos y
planillas sueltas. Quiere una base de datos para saber qué autos pasaron por
el taller, qué se les hizo y cuánto repuesto se gastó.

Los clientes dejan sus autos. De cada cliente se guarda nombre, apellido,
teléfono y mail. Un cliente puede tener varios autos (o ninguno todavía),
pero cada auto es de un solo cliente. De cada vehículo interesa la patente
(no se repite), la marca, el modelo y el año.

Cada vez que un auto entra se abre una orden de trabajo: fecha de ingreso,
fecha de egreso (vacía mientras sigue en el taller) y la descripción del
problema que cuenta el cliente. Un auto puede tener muchas órdenes con el
tiempo, pero cada orden es de un solo auto.

A cada orden se le asignan uno o más técnicos (uno de frenos, otro de motor...),
y un mismo técnico atiende muchas órdenes. Se registran los servicios hechos
(con su costo de mano de obra) y los repuestos usados (con su precio y el
stock disponible). El precio con el que se cobra un servicio o un repuesto
queda fijo en esa orden aunque el precio de lista cambie después — por eso
cada línea de la orden guarda el precio que se aplicó en ese momento. Cuando
se carga un repuesto en una orden, el stock tiene que bajar solo.

El taller necesita distintos tipos de usuario: el dueño (todo), recepción
(carga clientes, autos y órdenes), mecánicos (cargan servicios y repuestos) y
alguien que solo consulta.

## 2. Diagrama Entidad – Relación

| Relación | Entidad | (mín,máx) | Justificación |
|---|---|---|---|
| tiene | CLIENTE | (0,N) | Explícita — "puede tener varios autos (o ninguno todavía)" |
| tiene | VEHICULO | (1,1) | Explícita — "cada auto pertenece a un solo cliente" |
| genera | VEHICULO | (0,N) | Explícita — "puede tener muchas órdenes" (o ninguna si nunca ingresó) |
| genera | ORDEN_TRABAJO | (1,1) | Explícita — "cada orden es de un solo auto" |
| asigna | ORDEN_TRABAJO | (0,N) | Inferida — la orden se abre en recepción antes de asignar técnico |
| asigna | TECNICO | (0,N) | Explícita — "un mismo técnico atiende muchas órdenes" (o ninguna si es nuevo) |
| incluye | ORDEN_TRABAJO | (0,N) | Inferida — al abrirla todavía no tiene servicios cargados |
| incluye | SERVICIO | (0,N) | Inferida — es catálogo, puede no haberse pedido nunca |
| usa | ORDEN_TRABAJO | (0,N) | Inferida — ej. una revisión general puede no usar repuestos |
| usa | REPUESTO | (0,N) | Inferida — puede no haberse usado todavía |

`asigna`, `incluye` y `usa` son relaciones N:M aparte (no atributos de
ORDEN_TRABAJO) porque de cada lado puede haber varios — varios técnicos en
una orden, varios servicios, varios repuestos — y porque `incluye` y `usa`
tienen atributos propios (`cantidad`/`costo_aplicado`,
`cantidad_usada`/`precio_aplicado`) que no son de ninguna de las dos
entidades por separado, sino de esa combinación puntual.

`total_orden` es un atributo **derivado** de ORDEN_TRABAJO (línea punteada en
el DER): se calcula sumando mano de obra y repuestos, no se guarda como
columna — lo resuelve la vista `v_total_orden`.

## 3. Modelo Relacional

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

Las claves de las tres últimas tablas son compuestas (las dos FK juntas). A
estas nueve tablas se suman dos tablas de auditoría (`auditoria_stock`,
`auditoria_servicio_eliminado`) que alimentan los triggers; no están en el
DER porque no son datos del negocio, son registro interno. El detalle de
3FN está en el Avance #2.

## 4. Qué hace el procedimiento, el trigger y cada perfil

**`sp_agregar_repuesto_orden`** busca el precio vigente del repuesto, abre una
transacción, inserta la línea en `orden_repuesto` (eso dispara
`trg_descuento_stock`, que resta del stock y audita) y confirma. Si algo
falla — orden inexistente, repuesto inexistente, repuesto repetido en la
misma orden o stock insuficiente — el `DECLARE EXIT HANDLER` hace `ROLLBACK`
y avisa; nada queda a medio aplicar. **`sp_cerrar_orden`** solo actualiza la
fecha de egreso dentro de su propia transacción. El segundo trigger,
`trg_servicio_eliminado`, guarda en `auditoria_servicio_eliminado` cualquier
línea de servicio que se borre de una orden, con quién lo hizo. Los cuatro
perfiles (`admin_taller`, `recepcion`, `mecanico`, `consulta`) separan quién
puede cargar datos de quién solo puede mirarlos; `consulta` en particular
solo ve las tres vistas, no las tablas con los precios de costo.

## 5. Qué se aplicó de cada unidad

| Unidad / hito | Dónde se aplica en el TPI |
|---|---|
| Arquitecturas (HE1): niveles ANSI/SPARC, cliente-servidor | Nivel externo = vistas y perfiles de usuario; nivel conceptual = el Modelo Relacional; nivel interno = MariaDB; DBeaver (cliente) → MariaDB (servidor); el script separa DDL (tablas), DML (semillas), DCL (permisos), TCL (transacciones) y DQL (consultas) |
| DER (HE2): entidades, atributos, derivados, cardinalidades, N:M con atributos | DER del taller con el derivado `total_orden`, atributos de N:M en los rombos (`cantidad`/`costo_aplicado`, `cantidad_usada`/`precio_aplicado`) y precio histórico |
| MR y 3FN (HE3) | 9 tablas, 3FN verificada tabla por tabla, FK nombradas |
| SQL, ingeniería inversa y manual (HE4) | DDL completo, semillas, validación `COUNT(*)` final |
| Consultas, vistas, triggers, procedimientos, transacciones, usuarios (clases 5–8) | Secciones 3 a 8 de `UGR-BBDD26-HE5_Giolitti_SQL.sql` |
