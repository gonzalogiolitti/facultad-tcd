# Manual de Usuario — HE4: Bolsa de Valores

Gonzalo Giolitti — Bases de Datos, UGR — Ingeniería Inversa

## Escenario

Me dieron 5 tablas de un sistema de bolsa de valores y tuve que reconstruir el
diseño de atrás para adelante. La idea central: un inversor (una persona) puede
tener varias cuentas comitentes, como si cada cuenta fuera una cuenta bancaria
con su propio saldo. Cada cuenta tiene un portafolio, es decir, qué activos
tiene y en qué cantidad. Los activos (acciones como ALUA, BMA, GGAL) tienen un
símbolo, una descripción y un precio que cambia. Cada vez que alguien compra o
vende un activo desde una cuenta, eso queda registrado como un movimiento, con
fecha, tipo (compra o venta), cantidad y monto.

## Entidades y atributos

**INVERSOR**
| Campo | Tipo | Significado |
|---|---|---|
| DNI (PK) | BIGINT | Identifica a la persona, no lo inventé yo |
| NOMBRE | VARCHAR | Nombre |
| APELLIDO | VARCHAR | Apellido |

**CUENTA_COMITENTE**
| Campo | Tipo | Significado |
|---|---|---|
| NRO_CUENTA (PK) | INT | Número de cuenta, como un número de cuenta bancaria |
| SALDO_DISPONIBLE | DECIMAL | Plata libre para operar |
| ACTIVOS_VALORIZADOS | DECIMAL | **Derivado**: suma de precio × cantidad de cada activo del portafolio de esa cuenta |
| DNI_INVERSOR (FK) | BIGINT | A qué inversor pertenece |

**ACTIVO**
| Campo | Tipo | Significado |
|---|---|---|
| NRO_ACTIVO (PK) | INT | Identifica el activo |
| SIMBOLO (UNIQUE) | VARCHAR | Ticker (ALUA, BMA, etc.), no se puede repetir |
| DESCRIPCION | VARCHAR | Nombre de la empresa |
| PRECIO | DECIMAL | Precio actual, cambia con el tiempo |

**MOVIMIENTO**
| Campo | Tipo | Significado |
|---|---|---|
| NRO_MOVIMIENTO (PK) | INT | Identifica la operación |
| FECHA_TRANSACCION | DATE | Cuándo se hizo |
| TIPO_TRANSACCION | VARCHAR | 'Compra' o 'Venta' |
| CUENTA (FK) | INT | Desde qué cuenta se operó |
| ACTIVO (FK) | INT | Qué activo se operó |
| CANTIDAD | INT | Cuánto se compró/vendió |
| MONTO | DECIMAL | Plata de la operación |

## Relaciones y cardinalidades

- **tiene** — INVERSOR (0,N) — (1,1) CUENTA_COMITENTE: un inversor puede no
  tener cuentas todavía o tener varias; toda cuenta es de un único inversor
  (confirmado con el DNI 14158506, que tiene las cuentas 978 y 979).
- **portafolio** (N:M) — CUENTA_COMITENTE (0,N) — (0,N) ACTIVO: una cuenta
  puede no tener activos aún o tener varios, y un mismo activo puede estar en
  el portafolio de varias cuentas. CANTIDAD vive en esta relación, no en
  ninguna de las dos entidades.
- **registra_cuenta** — CUENTA_COMITENTE (0,N) — (1,1) MOVIMIENTO: una cuenta
  puede tener 0 o muchos movimientos; todo movimiento pertenece a una sola
  cuenta.
- **registra_activo** — ACTIVO (0,N) — (1,1) MOVIMIENTO: un activo puede
  aparecer en 0 o muchos movimientos; todo movimiento es sobre un solo activo.

(Carga en ERDPlus con la regla cruzada: en las tres relaciones 1:N, el lado
"padre" —INVERSOR, CUENTA_COMITENTE, ACTIVO— va `for:X = Optional/Many`, y el
lado "hijo" va `for:X = Mandatory/One`. En `portafolio`, los dos lados van
`Optional/Many`.)

## Justificación del diseño

**Claves naturales:** usé DNI, NRO_ACTIVO, NRO_CUENTA y NRO_MOVIMIENTO tal
cual venían en el enunciado, sin inventar ningún `id_` nuevo — ya eran
identificadores naturales del dominio.

**Por qué PORTAFOLIO es N:M y no se rompe:** una cuenta tiene muchos activos y
un activo está en muchas cuentas al mismo tiempo. Si lo modelara como dos
relaciones 1:N perdería la información de "cuánto tiene cada cuenta de cada
activo", que es justamente CANTIDAD. Por eso queda como relación N:M con
CANTIDAD adentro del rombo, y en el modelo relacional se convierte en la
tabla `portafolio` con clave compuesta (nro_cuenta, nro_activo).

**Por qué MOVIMIENTO es entidad y no una relación:** un movimiento tiene su
propia clave (NRO_MOVIMIENTO) y sus propios atributos que no dependen de una
combinación cuenta-activo sino de la operación puntual (fecha, tipo, monto).
Además la misma combinación cuenta-activo puede repetirse en varios
movimientos distintos (compré y después vendí el mismo activo desde la misma
cuenta), así que no puede ser una relación N:M entre cuenta y activo —
necesita su propia identidad. Por eso la modelé como entidad con dos
relaciones 1:N hacia CUENTA_COMITENTE y ACTIVO.

**El atributo derivado:** ACTIVOS_VALORIZADOS no es un dato que alguien
ingresa, es el resultado de sumar precio × cantidad de todo lo que hay en el
portafolio de esa cuenta. Por eso en el DER lo marco como derivado (línea
punteada). En el SQL lo mantengo como columna de todas formas porque la
tabla original del enunciado lo pide explícitamente — en un sistema real
probablemente lo recalcularía con un trigger o una vista en vez de guardarlo,
pero no lo armé así para no salirme de lo que pide la consigna.

**3FN, tabla por tabla:**
- `inversor`, `activo`, `cuenta_comitente`, `movimiento`: tienen PK simple,
  así que no hay forma de que exista dependencia parcial (2FN automática), y
  cada atributo no-clave depende únicamente de su propia PK, sin pasar por
  otro atributo no-clave (3FN). El único punto raro es ACTIVOS_VALORIZADOS en
  `cuenta_comitente`, que en rigor depende del portafolio y no solo de
  NRO_CUENTA — technically rompe 3FN, pero queda así porque el enunciado de la
  tabla original lo exige tal cual (ya lo expliqué arriba).
- `portafolio`: tiene PK compuesta (nro_cuenta, nro_activo). CANTIDAD depende
  de la combinación completa de las dos columnas, no de una sola — por eso no
  hay dependencia parcial y cumple 2FN. No tiene más atributos, así que 3FN es
  trivial.

**El problema de los activos 13 y 14:** cuando armé las tablas con FK de
verdad, los INSERT de PORTAFOLIO y MOVIMIENTO fallaban porque hacen referencia
a los activos 13 y 14, que no están en la lista de 11 activos que da el
enunciado. Pensé en desactivar las FK para que entraran los datos, pero eso es
exactamente lo que no hay que hacer (si las FK no están activas, no hay forma
de garantizar que los datos sean consistentes). En vez de eso, agregué dos
filas "activo 13" y "activo 14" marcadas como complemento (símbolo ACT13 y
ACT14, descripción "Activo no listado en el enunciado", precio 0.01), con un
comentario en el SQL que explica por qué están. El activo 12 lo dejé sin
crear porque ninguna otra tabla lo menciona.

## Cómo ejecutar el SQL

1. Abrir DBeaver y conectarme a mi servidor MariaDB (o MySQL 8).
2. Abrir `HE4_Giolitti_MR_Bolsa.sql` y ejecutarlo completo de una sola vez —
   ya incluye `CREATE DATABASE IF NOT EXISTS bolsa`, las 5 tablas en el orden
   correcto (inversor → activo → cuenta_comitente → portafolio → movimiento)
   y los INSERT de ejemplo al final.
3. Si ya existía una base `bolsa` de una corrida anterior y quiero empezar de
   cero, antes corro `DROP DATABASE IF EXISTS bolsa;`.
4. Verificación rápida: `SELECT * FROM cuenta_comitente;` debería devolver 6
   filas, y `SELECT * FROM activo;` 13 filas (los 11 del enunciado más los 2
   de complemento).

Probé este script contra una MariaDB 11.8.6 real (instancia local, base
limpia) y corrió sin errores: se crean las 5 tablas, entran las 6+13+6+5+7
filas de ejemplo, y las 5 FK y los 3 `CHECK` (tipo_transaccion, cantidad > 0,
precio >= 0) rechazan datos inválidos cuando los probé a propósito.
