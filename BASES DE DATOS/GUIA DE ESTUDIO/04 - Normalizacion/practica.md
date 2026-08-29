# 04 · Normalización — Práctica resuelta

> Ejercicios nuevos. Se aplica la receta: DF → clave → 1FN → 2FN → 3FN, mostrando cada
> descomposición y su motivo.

---

## Ejercicio 1 — Alquileres de un videoclub (0FN → 3FN)

**Tabla de partida** (todo junto, sin normalizar):

| nro_alq | fecha | dni_socio | nombre_socio | tel_socio | cod_peli | titulo | genero | precio_dia | dias | peliculas_pendientes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 01/03 | 30 | Ana | 155-01 | P1 | Matrix | Sci-Fi | 500 | 2 | "P3, P7" |
| 2 | 05/03 | 30 | Ana | 155-01 | P2 | Titanic | Drama | 400 | 3 | "P3, P7" |
| 3 | 06/03 | 41 | Beto | 155-02 | P1 | Matrix | Sci-Fi | 500 | 1 | "" |

### Paso 1 — Dependencias funcionales

```
nro_alq            → fecha, dni_socio, cod_peli, dias
dni_socio          → nombre_socio, tel_socio, peliculas_pendientes
cod_peli           → titulo, genero, precio_dia
```

### Paso 2 — Clave candidata

`nro_alq` determina todo lo demás (directa o transitivamente) y es mínima → **clave = `nro_alq`**.

### Paso 3 — 1FN

`peliculas_pendientes` guarda una **lista** ("P3, P7") → **no atómico**. Además es un
atributo multivaluado del socio, no del alquiler.

Se saca a una tabla propia:

```
PENDIENTE(<u>*dni_socio*</u>, <u>*cod_peli*</u>)
```

Tras 1FN quedan: `ALQUILER(nro_alq, fecha, dni_socio, nombre_socio, tel_socio, cod_peli,
titulo, genero, precio_dia, dias)` + `PENDIENTE`.

### Paso 4 — 2FN

La clave (`nro_alq`) es **simple** ⇒ no puede haber dependencias parciales ⇒ ya está en
2FN. (Pasamos directo a 3FN.)

### Paso 5 — 3FN

Buscamos no-clave que determina a otro no-clave:

- `nro_alq → dni_socio → nombre_socio, tel_socio` → **transitiva** (`dni_socio` no es clave).
- `nro_alq → cod_peli → titulo, genero, precio_dia` → **transitiva** (`cod_peli` no es clave).

Se separan:

```
SOCIO(<u>dni_socio</u>, nombre_socio, tel_socio)

PELICULA(<u>cod_peli</u>, titulo, genero, precio_dia)

ALQUILER(<u>nro_alq</u>, fecha, dias, *dni_socio*, *cod_peli*)
      *dni_socio* → SOCIO.dni_socio
      *cod_peli*  → PELICULA.cod_peli

PENDIENTE(<u>*dni_socio*</u>, <u>*cod_peli*</u>)
      *dni_socio* → SOCIO.dni_socio
      *cod_peli*  → PELICULA.cod_peli
```

### Verificación

- Redundancia eliminada: el teléfono de Ana está **una vez** en `SOCIO`; el precio de
  Matrix, **una vez** en `PELICULA`.
- Alta de película sin alquiler: ahora **sí** (insertar en `PELICULA`).
- Borrar el alquiler 3 ya no borra a Beto.
- JOIN de las 3 tablas por las FK reconstruye la tabla original → descomposición sin
  pérdida.

---

## Ejercicio 2 — Detalle de pedidos de una panadería (clave compuesta → 2FN y 3FN)

**Tabla de partida.** Un renglón por producto dentro de cada pedido.

| nro_pedido | fecha_pedido | cod_prod | nombre_prod | categoria | responsable_categoria | cant | precio_unit |
|---|---|---|---|---|---|---|---|
| 100 | 02/03 | PAN | Pan francés | Panadería | Marta | 3 | 800 |
| 100 | 02/03 | FAC | Factura | Panadería | Marta | 12 | 250 |
| 101 | 03/03 | TOR | Torta | Repostería | Luis | 1 | 9000 |

### Paso 1 — DF

```
nro_pedido               → fecha_pedido
cod_prod                 → nombre_prod, categoria
categoria                → responsable_categoria
nro_pedido, cod_prod     → cant, precio_unit
```

### Paso 2 — Clave candidata

Ninguna columna sola alcanza. `nro_pedido` solo da la fecha; `cod_prod` solo da el
producto. Juntos, `(nro_pedido, cod_prod)` determinan todo →
**clave = (`nro_pedido`, `cod_prod`)**.

### Paso 3 — 1FN

Todos los valores son atómicos → **ya está en 1FN**.

### Paso 4 — 2FN (clave compuesta → buscar dependencias parciales)

- `nro_pedido → fecha_pedido` → **parcial** (depende de media clave).
- `cod_prod → nombre_prod, categoria` → **parcial**.
- `(nro_pedido, cod_prod) → cant, precio_unit` → completa (OK).

Descomposición:

```
PEDIDO(<u>nro_pedido</u>, fecha_pedido)
PRODUCTO(<u>cod_prod</u>, nombre_prod, categoria)
DETALLE(<u>*nro_pedido*</u>, <u>*cod_prod*</u>, cant, precio_unit)
```

### Paso 5 — 3FN (buscar transitivas en cada tabla)

- `PEDIDO`: solo `nro_pedido → fecha_pedido`. OK.
- `DETALLE`: solo la clave → `cant, precio_unit`. OK.
- `PRODUCTO`: `cod_prod → categoria → responsable_categoria` → **transitiva**
  (`categoria` no es clave).

Separo la categoría:

```
CATEGORIA(<u>categoria</u>, responsable_categoria)

PRODUCTO(<u>cod_prod</u>, nombre_prod, *categoria*)
      *categoria* → CATEGORIA.categoria

PEDIDO(<u>nro_pedido</u>, fecha_pedido)

DETALLE(<u>*nro_pedido*</u>, <u>*cod_prod*</u>, cant, precio_unit)
      *nro_pedido* → PEDIDO.nro_pedido
      *cod_prod*   → PRODUCTO.cod_prod
```

### Resultado

4 tablas en 3FN: `categoria`, `producto`, `pedido`, `detalle`. El responsable de
"Panadería" ahora se guarda **una sola vez**.

---

## Ejercicio 3 — Dado un conjunto de DF, encontrar la clave y la forma normal

**Enunciado.** La tabla `R(A, B, C, D, E)` tiene estas dependencias funcionales:

```
A, B → C, D, E
C    → D
D    → E
```

¿Cuál es la clave? ¿En qué forma normal está?

### Resolución

**1. Buscar la clave.** Empiezo por atributos que **no aparecen a la derecha** de ninguna
DF: `A` y `B` solo aparecen a la izquierda ⇒ tienen que estar en la clave.

Calculo el **cierre** de `{A, B}`:

- `A, B → C, D, E` ⇒ `{A,B}` alcanza `C, D, E`.
- Cierre de `{A,B}` = `{A, B, C, D, E}` = todos los atributos.

`{A, B}` determina todo y es mínima (ni `A` ni `B` solos alcanzan) → **clave candidata = (A, B)**.
No hay otra.

**2. 1FN.** Se asume que sí (valores atómicos).

**3. 2FN — ¿dependencias parciales?** Atributos no clave: `C, D, E`. ¿Alguno depende de
solo `A` o solo `B`? No: la única DF con la clave es `A,B → C,D,E` (completa). No hay
parciales → **está en 2FN**.

**4. 3FN — ¿dependencias transitivas?** Sí:

- `C → D`: `C` **no es clave** y determina a `D` (no clave). Transitiva.
- `D → E`: ídem.

⇒ **`R` NO está en 3FN. Está en 2FN.**

**5. Llevarla a 3FN.** Se sacan los determinantes no clave:

```
R1(<u>C</u>, D)          -- de C → D
R2(<u>D</u>, E)          -- de D → E
R3(<u>A</u>, <u>B</u>, *C*)   -- lo que queda; C es FK a R1
```

Ahora ninguna tabla tiene un no-clave determinando a otro no-clave.

---

## Ejercicio 4 — Identificar la anomalía

**Enunciado.** En esta tabla `CURSADA(dni_alumno, cod_materia, nombre_materia, anio,
nota)` con clave `(dni_alumno, cod_materia, anio)` y DF
`cod_materia → nombre_materia`, indicá qué anomalía ocurre en cada caso.

1. Se crea la materia "Bases de Datos II" (código BD2) pero todavía nadie la cursó.
2. "Bases de Datos" pasa a llamarse "Fundamentos de Bases de Datos".
3. Se borra la única fila de la materia "Álgebra".

### Resolución

La DF `cod_materia → nombre_materia` es **parcial** (depende de parte de la clave) ⇒ la
tabla no está en 2FN ⇒ aparecen las tres anomalías:

1. **Anomalía de inserción.** No puedo registrar BD2 con su nombre porque la fila exige
   `dni_alumno` y `anio` (no hay cursadas todavía).
2. **Anomalía de actualización.** El nombre de la materia está repetido en cada cursada;
   hay que cambiarlo en **todas** las filas o queda inconsistente.
3. **Anomalía de borrado.** Al borrar esa fila se pierde el dato "el código AL1 se llama
   Álgebra".

**Arreglo:** separar `MATERIA(<u>cod_materia</u>, nombre_materia)` y dejar
`CURSADA(<u>*dni_alumno*</u>, <u>*cod_materia*</u>, <u>anio</u>, nota)`.

---

## Autoevaluación

1. ¿Qué se hace **antes** de analizar 2FN o 3FN?
2. Si la PK es un único atributo, ¿puede haber dependencias parciales?
3. Diferencia entre dependencia **parcial** y **transitiva**.
4. ¿Qué significa `C → D`?
5. ¿Las tres anomalías (inserción, actualización, borrado) aparecen juntas o por separado?

<details>
<summary>Respuestas</summary>

1. Escribir todas las DF y **encontrar la clave candidata**.
2. No. 1FN ⇒ 2FN automáticamente cuando la clave es simple.
3. Parcial: un no-clave depende de **parte de una clave compuesta**. Transitiva: un
   no-clave depende de **otro atributo no clave**.
4. Que si dos filas tienen el mismo `C`, entonces tienen el mismo `D` (`C` determina `D`).
5. Suelen aparecer **juntas**: son síntomas del mismo problema (una DF que no debería
   estar en esa tabla).

</details>
