# TPI — Avance #2: Modelo Relacional (actualizado)

**Gonzalo Giolitti · Bases de Datos · Tecnicatura en Ciencia de Datos · UGR · 2026**

(Requisito de HE3: "Construcción del Modelo Relacional... cumpliendo con la 3FN")

Parte de `TPI_Adelanto_MR_Taller.md` (Avance original). Único cambio: se
agregan dos columnas de precio histórico, decididas después, para que
`orden_servicio` y `orden_repuesto` guarden el precio con el que se cobró en
el momento, ya que `servicio.costo_mano_obra` y `repuesto.precio_unitario`
pueden cambiar con el tiempo.

## Sistema

Gestión de órdenes de trabajo de un taller mecánico. Un cliente tiene
vehículos; cada vehículo genera órdenes de trabajo; cada orden puede requerir
varios técnicos, incluir varios servicios (con cantidad y el costo aplicado
en ese momento) y usar varios repuestos (con cantidad_usada y el precio
aplicado en ese momento).

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
                costo_aplicado,                          -- NUEVO
                PK compuesta: (id_orden, id_servicio))

ORDEN_REPUESTO (id_orden → FK a ORDEN_TRABAJO(id_orden),
                id_repuesto → FK a REPUESTO(id_repuesto),
                cantidad_usada,
                precio_aplicado,                          -- NUEVO
                PK compuesta: (id_orden, id_repuesto))
```

`total_orden` (suma de mano de obra + repuestos de una orden) es un atributo
**derivado** en el DER de ORDEN_TRABAJO — no pasa al Modelo Relacional como
columna, se calcula con la vista `v_total_orden` del script final.

## Cardinalidades (Chen modificada) y carga en ERDPlus (regla cruzada)

| Relación | A ↔ B | (mín,máx) | for: (lado "1"/catálogo) | for: (lado "N") |
|---|---|---|---|---|
| `tiene` | CLIENTE ↔ VEHICULO | CLIENTE (0,N) — VEHICULO (1,1) | for:CLIENTE = **Mandatory/One** | for:VEHICULO = **Optional/Many** |
| `genera` | VEHICULO ↔ ORDEN_TRABAJO | VEHICULO (0,N) — ORDEN_TRABAJO (1,1) | for:VEHICULO = **Mandatory/One** | for:ORDEN_TRABAJO = **Optional/Many** |
| `asigna` (N:M) | ORDEN_TRABAJO ↔ TECNICO | (0,N) — (0,N) | for:ORDEN_TRABAJO = **Optional/Many** | for:TECNICO = **Optional/Many** |
| `incluye` (N:M) | ORDEN_TRABAJO ↔ SERVICIO | (0,N) — (0,N) | for:ORDEN_TRABAJO = **Optional/Many** | for:SERVICIO = **Optional/Many** |
| `usa` (N:M) | ORDEN_TRABAJO ↔ REPUESTO | (0,N) — (0,N) | for:ORDEN_TRABAJO = **Optional/Many** | for:REPUESTO = **Optional/Many** |

## Verificación 1FN/2FN/3FN

Las 6 tablas base tienen PK simple → 2FN automática, y cada atributo no-clave
depende solo de su propia PK (3FN).

Las 3 tablas intermedias tienen PK **compuesta**:
- `ORDEN_TECNICO`: sin atributos no-clave, trivial.
- `ORDEN_SERVICIO`: `cantidad` y `costo_aplicado` dependen de la combinación
  **completa** (id_orden, id_servicio) — la cantidad y el precio cobrado son
  específicos de esa línea de esa orden, no de el servicio en general ni de
  la orden en general → 2FN sin dependencia parcial, sin transitividad → 3FN.
- `ORDEN_REPUESTO`: mismo análisis con `cantidad_usada` y `precio_aplicado`.

**Por qué `costo_aplicado`/`precio_aplicado` no violan 3FN:** a primera vista
podría parecer redundante tener el precio en dos lugares (en `servicio`/
`repuesto` y de nuevo en la línea de la orden), pero no es la misma
información: `servicio.costo_mano_obra` es el precio **vigente hoy**,
mientras que `costo_aplicado` es el precio **con el que se cobró esa orden
en particular**, que no cambia aunque el precio de lista cambie después. Son
hechos distintos, cada uno depende de su propia clave.
