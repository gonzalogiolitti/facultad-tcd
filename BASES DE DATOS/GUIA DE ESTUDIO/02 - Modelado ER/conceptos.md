# 02 · Modelado Entidad-Relación (DER) — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR). Notación: **ERDPlus**, versión
> modificada de la notación Chen que usa la cátedra (rectángulos, elipses, rombos y
> cardinalidad en pares `(mín, máx)`).

---

## 1. ¿Para qué sirve el modelo ER?

Antes de crear tablas, se dibuja un **Diagrama Entidad-Relación (DER)**: un mapa de
**qué cosas** hay en el problema y **cómo se vinculan**, en un lenguaje que entiende
tanto el analista como el cliente. Es el **diseño conceptual**: todavía no se habla de SQL.

Método base:

- **Sustantivos** del enunciado → candidatos a **entidades** o **atributos**.
- **Verbos** que conectan sustantivos → candidatos a **relaciones**.
- Frases como "de cada X se sabe..." → **atributos** de X.
- Frases como "un X puede tener varios Y" → **cardinalidad**.

---

## 2. Entidades

Una **entidad** es una cosa del mundo real sobre la que queremos guardar datos:
`SOCIO`, `CLASE`, `PROFESOR`, `MASCOTA`.

- **Tipo de entidad** = la definición general (`SOCIO`).
- **Instancia / ejemplar** = un caso concreto ("el socio Nº 42, Ana Díaz").
- Se dibuja como un **rectángulo** con el nombre en **MAYÚSCULA y singular**.

**Entidad fuerte:** existe por sí misma y tiene clave propia (`SOCIO`).
**Entidad débil:** no puede identificarse sola; depende de otra. Se dibuja con el
rectángulo de borde **doble**. Ejemplo: `CUOTA` de un socio: "cuota 3/2026" solo tiene
sentido junto al socio al que pertenece.

---

## 3. Atributos

Un **atributo** es una propiedad de una entidad (o de una relación). Se dibuja como una
**elipse** unida a su entidad.

| Tipo | Qué es | Notación ERDPlus | Ejemplo |
|---|---|---|---|
| **Simple** | un solo valor indivisible | elipse común | `nombre`, `precio` |
| **Compuesto** | se divide en subpartes | elipse con elipses hijas | `direccion` → `calle`, `numero`, `ciudad` |
| **Multivaluado** | admite varios valores a la vez | **doble elipse** | `telefono` (una persona con 2 líneas), `corrienteArtistica` |
| **Derivado** | se calcula a partir de otros | elipse punteada | `edad` (de `fechaNac`), `totalFactura` (suma de ítems) |
| **Opcional** | puede no tener valor (NULL) | marca `(O)` | `fechaFallecimiento` |
| **Clave** | identifica unívocamente | **subrayado** | `dni`, `idClase` |

### Claves

- **Clave candidata:** atributo (o conjunto) que identifica de forma única y mínima a
  cada instancia. Puede haber varias (ej: `dni` y `email`).
- **Clave primaria (PK):** la candidata elegida como identificador oficial. Debe ser
  **única**, **no nula** y **estable** (que no cambie).
- **Clave natural:** viene del dominio (`dni`, `patente`, `isbn`).
- **Clave sustituta (surrogate):** un `id` inventado y autonumérico. Se usa cuando no hay
  una natural buena o la natural es larga/cambiante.

> Regla práctica de la cátedra: entre `nombre` y un `id`, casi siempre gana el `id`,
> porque el nombre se puede repetir y se puede tipear mal (generando duplicados).

---

## 4. Relaciones

Una **relación** (o interrelación) es un vínculo entre entidades. Se dibuja como un
**rombo** con un **verbo**: `SOCIO —inscribe→ CLASE`.

- **Grado** = cantidad de entidades que participan:
  - **Unaria (recursiva):** una entidad se relaciona consigo misma. Ej: `EMPLEADO
    supervisa EMPLEADO`.
  - **Binaria:** dos entidades (el caso más común).
  - **Ternaria:** tres entidades a la vez en una misma relación. Ej: `MÉDICO atiende
    PACIENTE en CONSULTORIO`.
- Una relación **también puede tener atributos propios**: datos que no pertenecen a
  ninguna de las entidades sino al **vínculo**. Ej: en `SOCIO —rinde→ EXAMEN`, la `nota`
  y la `fecha` son atributos de la relación.

---

## 5. Cardinalidad (lo más importante y lo que más se equivoca)

La **cardinalidad** dice **cuántas** instancias de una entidad se vinculan con la otra.
Tiene dos partes:

- **Cardinalidad máxima:** ¿1 o muchos (N)?
- **Cardinalidad mínima (participación):** ¿0 (opcional) o 1 (obligatoria)?

La cátedra las escribe como un **par `(mín, máx)`** sobre cada lado de la relación.

| Par | Significado |
|---|---|
| `(0,1)` | opcional, a lo sumo uno |
| `(1,1)` | obligatorio, exactamente uno |
| `(0,N)` | opcional, muchos |
| `(1,N)` | obligatorio, al menos uno |

### Cómo leer una relación

Se lee **en los dos sentidos**, empezando por una entidad y cruzando el rombo:

> `SOCIO (1,1) —pertenece→ (0,N) PLAN`
>
> - De izquierda a derecha: *"cada socio pertenece a **exactamente un** plan"* → `(1,1)`.
> - De derecha a izquierda: *"un plan puede tener **cero o muchos** socios"* → `(0,N)`.

### Los tres tipos por cardinalidad máxima

```
1:1   SOCIO (1,1) ── tiene ── (0,1) LLAVERO_RFID
1:N   PLAN  (1,1) ── agrupa ─ (0,N) SOCIO           ← el más frecuente
N:M   SOCIO (0,N) ── asiste ─ (0,N) CLASE           ← se resuelve con tabla puente
```

En ERDPlus la cardinalidad máxima se dibuja además con la **"pata de gallo"** (crow's
foot): una rayita = uno, tres patitas = muchos; y un círculo o una barra cerca de la
entidad indica la mínima (círculo = 0, barra = 1).

---

## 6. Entidad débil y relación identificatoria

Una **entidad débil** toma parte de su identificación de la entidad fuerte de la que
depende. La relación que las une es **identificatoria** (rombo de borde doble) y la
entidad débil aporta una **clave parcial** (subrayado punteado).

Ejemplo cotidiano — cuotas de un gimnasio:

```
SOCIO ═══(1,1)═══ paga ═══(1,N)═══ CUOTA        (CUOTA es débil)
  │                                   │
 dni (PK)                     periodo (clave parcial, subrayado punteado)
                              monto, pagada

Identificación de una cuota  =  dni del socio  +  periodo
```

"La cuota de marzo" no identifica nada; "la cuota de marzo **del socio 42**" sí.

---

## 7. Pistas para decidir: ¿entidad, atributo o relación?

- Si algo **tiene datos propios** además del nombre → **entidad**. (`PROVEEDOR` tiene
  dirección y teléfono → entidad, no un atributo `proveedor` en `PRODUCTO`.)
- Si algo puede tener **varios valores** → sacalo a una entidad o atributo multivaluado.
- Si un vínculo **tiene datos que dependen de la combinación** de dos entidades (cantidad,
  precio pactado, nota, fecha) → esos datos van **en la relación**.
- Si una relación N:M empieza a tener muchos atributos y a relacionarse con una tercera
  entidad → conviene convertirla en **entidad asociativa** (ej: `INSCRIPCIÓN`, `PEDIDO`).

---

## 8. Esquema en texto (cómo escribir un DER sin dibujar)

Cuando no se puede dibujar, la cátedra acepta describirlo así:

```
ENTIDADES
  SOCIO(dni PK, nombre, email, fechaAlta)
  CLASE(idClase PK, nombre, cupo, horario)
  PROFESOR(legajo PK, nombre)

RELACIONES
  dicta:    PROFESOR (0,N) ── (1,1) CLASE
  asiste:   SOCIO (0,N) ── (0,N) CLASE     [atributo: fechaAsistencia]
```

Y complementarlo con un diagrama Mermaid `erDiagram` si el editor lo renderiza.

---

## 9. Errores comunes

- **Olvidar la cardinalidad mínima.** Poner solo "1:N" y no aclarar si la participación es
  `(0,N)` o `(1,N)`. Cambia si la FK admite NULL o no.
- **Modelar como atributo algo que es entidad.** `ciudad` como texto suelto vs. entidad
  `CIUDAD` con código postal. Depende de si hay que guardar datos de la ciudad.
- **Atributo multivaluado escondido.** Poner `telefono1`, `telefono2`, `telefono3`. Si el
  número de valores varía, es multivaluado → entidad/atributo aparte.
- **Relación ternaria innecesaria.** Muchas ternarias son en realidad tres binarias. Usá
  ternaria solo si el hecho **necesita** las tres entidades juntas para tener sentido.
- **Clave primaria inestable.** Usar `email` de PK y después la persona lo cambia.
- **Meter atributos de la relación en una entidad.** La `nota` de un examen no es del
  alumno ni del examen: es de "este alumno rindió este examen".
- **Confundir cardinalidad con obligatoriedad de la aplicación.** El modelo describe el
  dominio, no la validación del formulario.

---

## 10. Checklist antes de dar por cerrado un DER

- [ ] Toda entidad tiene **clave primaria**.
- [ ] Toda relación tiene cardinalidad `(mín, máx)` en **ambos** extremos.
- [ ] Los atributos multivaluados y compuestos están marcados.
- [ ] Los atributos que dependen de una combinación están **en la relación**.
- [ ] Las entidades débiles tienen su relación identificatoria y su clave parcial.
- [ ] Los nombres son claros, en singular y en español.
