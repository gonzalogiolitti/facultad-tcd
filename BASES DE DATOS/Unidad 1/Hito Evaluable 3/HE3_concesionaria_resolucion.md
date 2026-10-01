# Hito Evaluable 3 — Concesionaria de Vehículos

## Enunciado (resumen)

Base de datos estándar de vehículos: todo VEHICULO tiene `nombre_modelo` y `anio`, y
está compuesto por tres partes reutilizables entre vehículos: CARROCERIA (nombre +
asientos), CHASIS (nombre + número de ejes) y MOTOR (nombre + potencia + cc +
combustible). Existe una entidad transversal MARCA (id + nombre) que se vincula a
VEHICULO, CARROCERIA y MOTOR — pero **no** a CHASIS (excepción explícita del
enunciado). Un mismo vehículo puede combinar marcas distintas en cada parte (ej.
ómnibus marca Scania, carrocería MarcoPolo, motor Mercedes).

## 1. Análisis del dominio

**Entidades:** VEHICULO, CARROCERIA, CHASIS, MOTOR, MARCA.

**Relaciones — todas 1:N, ninguna N:M:** cada vehículo usa exactamente una
carrocería/chasis/motor/marca; cada elemento de catálogo puede estar usado por 0 o
muchos vehículos. Confirmado con los 12 registros de ejemplo: `id_car=3`
("HACHBACK 5 PUERTAS") se reutiliza en ONIX LTZ y SANDERO EXPRESSION; `id_ch=3`
("ORIGINAL") se reutiliza en 9 de 12 filas; el motor "2.8 TDI"/170cv/GASOIL se
reutiliza en HILUX SRX 4X4 (2008) y HILUX SR 4X2.

**Ambigüedades resueltas:**
- **VEHICULO necesita `id_vehiculo` propio** (PK generada): `nombre_modelo` se
  repite con distinto `anio` (HILUX SRX 4X4 en 1995 y en 2008), así que ni el
  nombre ni el par (nombre, año) son estables como PK de referencia para FKs
  externas.
- **CARROCERIA y CHASIS usan PK generada** (`id_carroceria`, `id_chasis`) en vez
  del nombre: los nombres son largos y se usan como FK en VEHICULO; `nombre_*`
  queda como UNIQUE (evita duplicados) pero no es PK.
- **MOTOR y MARCA usan PK generada** porque el enunciado lo pide explícitamente
  (mismo nombre de motor con distinta marca/combustible; MARCA definida como
  "un nombre y un id").
- **Cardinalidad del lado catálogo = `(0,N)`**, no `(1,N)`: la muestra no prueba
  que todo elemento de catálogo esté siempre usado por algún vehículo — puede
  haber catálogo maestro cargado sin asignar todavía.
- **`combustible` queda como atributo simple** (VARCHAR) de MOTOR, no como
  entidad aparte: no tiene atributos propios más allá del valor (NAFTA/GASOIL).

## 2. DER

### Entidades

| Entidad | Atributos | PK |
|---|---|---|
| MARCA | id_marca, nombre | `id_marca` |
| CARROCERIA | id_carroceria, nombre_carroceria, asientos | `id_carroceria` |
| CHASIS | id_chasis, nombre_chasis, numero_ejes | `id_chasis` |
| MOTOR | id_motor, nombre_motor, potencia, cc, combustible | `id_motor` |
| VEHICULO | id_vehiculo, nombre_modelo, anio | `id_vehiculo` |

Todos los atributos son simples (sin derivados, opcionales ni multivaluados —
el enunciado no lo justifica para ningún campo). Las FK no son atributos del
DER, se representan como líneas de relación.

### Relaciones

| Relación | A ↔ B | Cardinalidad (mín,máx) | Justificación |
|---|---|---|---|
| `usa_carroceria` | VEHICULO ↔ CARROCERIA | VEHICULO (1,1) — CARROCERIA (0,N) | Todo vehículo tiene exactamente una carrocería; una carrocería se reutiliza en varios vehículos |
| `usa_chasis` | VEHICULO ↔ CHASIS | VEHICULO (1,1) — CHASIS (0,N) | "ORIGINAL" se reutiliza en 9/12 filas |
| `usa_motor` | VEHICULO ↔ MOTOR | VEHICULO (1,1) — MOTOR (0,N) | "2.8 TDI" se reutiliza en filas 5 y 6 |
| `tiene_marca_vehiculo` | VEHICULO ↔ MARCA | VEHICULO (1,1) — MARCA (0,N) | Cada vehículo tiene una marca comercial propia |
| `tiene_marca_carroceria` | CARROCERIA ↔ MARCA | CARROCERIA (1,1) — MARCA (0,N) | "cada parte principal tendrá una marca especifica" |
| `tiene_marca_motor` | MOTOR ↔ MARCA | MOTOR (1,1) — MARCA (0,N) | idem, marca_motor |

### Carga en ERDPlus (regla cruzada — §4.2 skill der-ugr)

`for: X` describe la cardinalidad de la OTRA entidad. El catálogo
(CARROCERIA/CHASIS/MOTOR/MARCA) siempre va `Mandatory/One`; la entidad del lado
"muchos" (VEHICULO, o CARROCERIA/MOTOR cuando se vinculan a MARCA) va siempre
`Optional/Many`.

| Relación | for: (catálogo) | for: (entidad "muchos") |
|---|---|---|
| `usa_carroceria` | for:CARROCERIA = **Mandatory/One** | for:VEHICULO = **Optional/Many** |
| `usa_chasis` | for:CHASIS = **Mandatory/One** | for:VEHICULO = **Optional/Many** |
| `usa_motor` | for:MOTOR = **Mandatory/One** | for:VEHICULO = **Optional/Many** |
| `tiene_marca_vehiculo` | for:MARCA = **Mandatory/One** | for:VEHICULO = **Optional/Many** |
| `tiene_marca_carroceria` | for:MARCA = **Mandatory/One** | for:CARROCERIA = **Optional/Many** |
| `tiene_marca_motor` | for:MARCA = **Mandatory/One** | for:MOTOR = **Optional/Many** |

## 3. Modelo Relacional en 3FN

```
MARCA (id_marca, nombre)

CARROCERIA (id_carroceria, nombre_carroceria, asientos,
            id_marca_carroceria → FK a MARCA(id_marca))

CHASIS (id_chasis, nombre_chasis, numero_ejes)

MOTOR (id_motor, nombre_motor, potencia, cc, combustible,
       id_marca_motor → FK a MARCA(id_marca))

VEHICULO (id_vehiculo, nombre_modelo, anio,
          id_carroceria → FK a CARROCERIA(id_carroceria),
          id_chasis → FK a CHASIS(id_chasis),
          id_motor → FK a MOTOR(id_motor),
          id_marca_vehiculo → FK a MARCA(id_marca))
```

### Dependencias problemáticas de la tabla original (MODELO_VEHICULO)

La tabla desnormalizada original mezclaba en cada fila datos que no dependen de
`id_modelo_vehiculo`: `asientos` depende de la carrocería, `numero_ejes` del
chasis, `cilindrada`/`potencia`/`combustible` del motor, y el `nombre` de cada
marca de su propio id — todas dependencias transitivas (3FN). Redundancia
visible en la propia muestra: filas 1 y 11 repiten toda la fila de "HACHBACK 5
PUERTAS / 3 asientos"; filas 5 y 6 repiten todo el motor "2.8 TDI / 2799cc /
170cv / GASOIL". Se resuelve separando cada parte en su propia tabla con FK.

### Verificación 1FN/2FN/3FN

| Tabla | 1FN | 2FN | 3FN |
|---|---|---|---|
| MARCA | Atómica | PK simple → sin dependencia parcial | `nombre` depende solo de `id_marca` |
| CARROCERIA | Atómica | PK simple `id_carroceria` | `nombre_carroceria`/`asientos` dependen solo de `id_carroceria`; FK directa |
| CHASIS | Atómica | PK simple `id_chasis` | `nombre_chasis`/`numero_ejes` dependen solo de `id_chasis` |
| MOTOR | Atómica | PK simple `id_motor` (evita dependencia parcial si la PK fuera compuesta) | Todos los atributos dependen solo de `id_motor`; FK directa |
| VEHICULO | Atómica | PK simple `id_vehiculo` (necesario: `nombre_modelo` se repite con distinto `anio`) | `nombre_modelo`/`anio` dependen solo de `id_vehiculo`; 4 FK directas |

Las 5 tablas cumplen 3FN.

## 4. SQL de creación

Ver `HE3_concesionaria_esquema.sql` (mismo orden: marca → carroceria/chasis/motor
→ vehiculo; `ENGINE=InnoDB`, `DEFAULT CHARSET=utf8mb4`, constraints nombrados
`fk_tabla_campo`).

## 5. Datos de ejemplo (12 registros, referencia)

| # | nombre_modelo | año | carrocería | asientos | chasis | ejes | motor | cc | cv | combustible |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ONIX LTZ | 2012 | HACHBACK 5 PUERTAS | 3 | ORIGINAL | 2 | 1.4 8V | 1398 | 95 | NAFTA |
| 2 | COROLLA XLI | 1999 | SEDAN 5 PUERTAS | 3 | ORIGINAL | 2 | 1.8 VVTI | 1799 | 125 | NAFTA |
| 3 | PARTNER FURGON | 1999 | UTILITARIO | 3 | ORIGINAL | 2 | 1.9 DCI | 1899 | 115 | GASOIL |
| 4 | HILUX SRX 4X4 | 1995 | PICK-UP CABINA DOBLE | 3 | ORIGINAL | 2 | 3.0 TD | 2992 | 145 | GASOIL |
| 5 | HILUX SRX 4X4 | 2008 | PICK-UP CABINA DOBLE | 4 | ORIGINAL | 2 | 2.8 TDI | 2799 | 170 | GASOIL |
| 6 | HILUX SR 4X2 | 2008 | PICK-UP CABINA SIMPLE | 2 | ORIGINAL | 2 | 2.8 TDI | 2799 | 170 | GASOIL |
| 7 | LS1114/36 | 1971 | CHASIS CON CABINA | 1 | LARG. PARALELOS | 3 | OM 352 | 5675 | 140 | GASOIL |
| 8 | CARGO 1730 | 1992 | CHASIS CON CABINA | 2 | BARANDA BAJA | 3 | ISBE P5 | 5800 | 220 | GASOIL |
| 9 | S10 CD | 1995 | PICK-UP CABINA SIMPLE | 2 | ORIGINAL | 2 | 2.8 TDCI | 2801 | 160 | GASOIL |
| 10 | SPRINTER 515 CDI-CH | 2000 | FURGON | 5 | ORIGINAL | 2 | 2.2 CDI | 2193 | 132 | GASOIL |
| 11 | SANDERO EXPRESSION | 2016 | HACHBACK 5 PUERTAS | 3 | ORIGINAL | 2 | 1.6 16V | 1599 | 115 | NAFTA |
| 12 | TURBO DAILY | 1998 | FURGON | 2 | UTILITARIO | 3 | 2.5 TD | 2489 | 150 | GASOIL |

Marcas presentes en los datos: CUMMINS, CHEVROLET, TOYOTA, FORD, IVECO, MERCEDES,
PEUGEOT, RENAULT, PENTAPOL, MWM.
