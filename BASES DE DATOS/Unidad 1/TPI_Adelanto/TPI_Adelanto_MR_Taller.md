# TPI Adelanto — Modelo Relacional: Taller Mecánico

## Sistema

Gestión de órdenes de trabajo de un taller mecánico. Un cliente tiene vehículos;
cada vehículo genera órdenes de trabajo; cada orden puede requerir varios
técnicos, incluir varios servicios (con cantidad) y usar varios repuestos (con
cantidad_usada).

## Tablas (9)

```
CLIENTE (id_cliente, nombre, apellido, telefono, email)

TECNICO (id_tecnico, nombre, apellido, especialidad)

SERVICIO (id_servicio, nombre_servicio, costo_mano_obra)

REPUESTO (id_repuesto, nombre_repuesto, precio_unitario, stock)

VEHICULO (id_vehiculo, patente, marca, modelo, anio,
          id_cliente → FK a CLIENTE(id_cliente))

ORDEN_TRABAJO (id_orden, fecha_ingreso, fecha_egreso, descripcion_problema,
               id_vehiculo → FK a VEHICULO(id_vehiculo))

ORDEN_TECNICO (id_orden → FK a ORDEN_TRABAJO(id_orden),
               id_tecnico → FK a TECNICO(id_tecnico),
               PK compuesta: (id_orden, id_tecnico))

ORDEN_SERVICIO (id_orden → FK a ORDEN_TRABAJO(id_orden),
                id_servicio → FK a SERVICIO(id_servicio),
                cantidad,
                PK compuesta: (id_orden, id_servicio))

ORDEN_REPUESTO (id_orden → FK a ORDEN_TRABAJO(id_orden),
                id_repuesto → FK a REPUESTO(id_repuesto),
                cantidad_usada,
                PK compuesta: (id_orden, id_repuesto))
```

## Cardinalidades (Chen modificada) y carga en ERDPlus (regla cruzada)

| Relación | A ↔ B | (mín,máx) | for: (lado "1"/catálogo) | for: (lado "N") |
|---|---|---|---|---|
| `tiene` | CLIENTE ↔ VEHICULO | CLIENTE (0,N) — VEHICULO (1,1) | for:CLIENTE = **Optional/Many** | for:VEHICULO = **Mandatory/One** |
| `genera` | VEHICULO ↔ ORDEN_TRABAJO | VEHICULO (0,N) — ORDEN_TRABAJO (1,1) | for:VEHICULO = **Optional/Many** | for:ORDEN_TRABAJO = **Mandatory/One** |
| `asigna` (N:M) | ORDEN_TRABAJO ↔ TECNICO | (0,N) — (0,N) | for:ORDEN_TRABAJO = **Optional/Many** | for:TECNICO = **Optional/Many** |
| `incluye` (N:M) | ORDEN_TRABAJO ↔ SERVICIO | (0,N) — (0,N) | for:ORDEN_TRABAJO = **Optional/Many** | for:SERVICIO = **Optional/Many** |
| `usa` (N:M) | ORDEN_TRABAJO ↔ REPUESTO | (0,N) — (0,N) | for:ORDEN_TRABAJO = **Optional/Many** | for:REPUESTO = **Optional/Many** |

Justificación de `(0,N)` del lado "1"/catálogo (CLIENTE, VEHICULO): un cliente
puede estar registrado sin vehículos todavía, y un vehículo puede estar
registrado sin órdenes todavía — participación opcional del lado padre.

## Verificación 1FN/2FN/3FN

Las 6 tablas base (CLIENTE, TECNICO, SERVICIO, REPUESTO, VEHICULO,
ORDEN_TRABAJO) tienen PK simple → no hay dependencia parcial posible (2FN
automática) y todos sus atributos no-clave dependen únicamente de su propia
PK, sin transitividad (3FN).

Las 3 tablas intermedias (ORDEN_TECNICO, ORDEN_SERVICIO, ORDEN_REPUESTO)
tienen PK **compuesta** — ahí sí hay que verificar 2FN explícitamente:
- `ORDEN_TECNICO`: no tiene atributos no-clave, 2FN/3FN triviales.
- `ORDEN_SERVICIO`: `cantidad` depende de la combinación **completa**
  (id_orden, id_servicio) — no de una orden sola ni de un servicio solo (la
  cantidad de un servicio es específica de esa orden en particular) → cumple
  2FN, sin dependencia parcial.
- `ORDEN_REPUESTO`: mismo análisis con `cantidad_usada` → cumple 2FN.

Ninguna de las 3 tiene dependencias transitivas entre sus atributos → 3FN.

## Nota de diseño — desvíos respecto del pedido original

1. **No usé campos `primaryKey`/`foreignKey` en el JSON `.erdplus`.** El
   formato real de erdplus.com (confirmado contra un export real,
   `Unidad 1/Prueba.erdplus`) no tiene esos campos — la PK se marca con
   `data.types:{"Unique":true}` en el atributo, y no existe marca de FK en el
   DER. Agregar esas claves no reconocidas podía volver a romper el import
   (como pasó con el formato `#src`/`#tgt` del HE3).
2. **Los atributos FK (`id_cliente` en VEHICULO, `id_vehiculo` en
   ORDEN_TRABAJO) no aparecen como atributos de la entidad en el DER** —
   solo como la línea de relación (`tiene`, `genera`), siguiendo la
   metodología de la cátedra (Chen modificada): la FK es una consecuencia de
   la relación, no un atributo propio de la entidad. Sí están, por supuesto,
   en las tablas del Modelo Relacional y en el SQL, donde corresponde.

## Verificaciones aplicadas al `.erdplus` antes de guardar

- Ningún `id` de arista contiene `#`.
- Todos los `id` de aristas `Relationship` contienen `;` (formato
  `{relId}->{entX};{entA}->{entB}`, confirmado contra `Prueba.erdplus`).
- Sin IDs duplicados (nodos ni aristas).
- Todas las referencias `source`/`target`/`parentId` apuntan a IDs existentes.
- Cada rombo tiene exactamente 2 aristas `Relationship`.
- Cada entidad tiene exactamente 1 atributo `Unique` (su PK).
- Sin solapamientos entre entidades/atributos/rombos/label.
