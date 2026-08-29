# 04 · Normalización — Conceptos

> Guía de estudio · Bases de Datos · TUCD (UGR). La normalización es un método para
> **detectar y arreglar tablas mal diseñadas**, llevándolas hasta la **3FN**
> (que es la meta del programa: 1FN, 2FN, 3FN).

---

## 1. ¿Por qué normalizar?

Una tabla que junta demasiadas cosas sufre **anomalías**. Ejemplo cotidiano: un videoclub
guarda los alquileres en **una sola tabla**:

| nro_alq | socio | tel_socio | pelicula | genero | precio_dia | dias | fecha |
|---|---|---|---|---|---|---|---|
| 1 | Ana | 155-01 | Matrix | Sci-Fi | 500 | 2 | 01/03 |
| 2 | Ana | 155-01 | Titanic | Drama | 400 | 3 | 05/03 |
| 3 | Beto | 155-02 | Matrix | Sci-Fi | 500 | 1 | 06/03 |

Problemas:

- **Redundancia:** `tel_socio` de Ana y `precio_dia`/`genero` de Matrix se repiten.
- **Anomalía de actualización:** si Matrix cambia de precio, hay que tocar todas sus filas.
- **Anomalía de inserción:** no puedo dar de alta una película nueva sin que se alquile.
- **Anomalía de borrado:** si borro el alquiler 3, y era el único de Beto, pierdo su
  teléfono.

La normalización separa esa tabla en varias (`SOCIO`, `PELICULA`, `ALQUILER`) donde cada
dato vive **en un solo lugar**.

---

## 2. Dependencia funcional (DF)

Es la herramienta con la que se razona la normalización.

> **X → Y** ("X determina Y") significa: si dos filas tienen el **mismo valor de X**,
> entonces **tienen el mismo valor de Y**. X es el *determinante*.

Ejemplos en la tabla del videoclub:

- `socio → tel_socio` (un socio tiene un solo teléfono).
- `pelicula → genero, precio_dia` (cada película tiene un género y un precio por día).
- `nro_alq → socio, pelicula, dias, fecha` (el número de alquiler determina todo el resto).

Notación de la cátedra: se listan como conjuntos, `A, B → C, D`.

### Tipos de dependencia funcional

Sea `K` la clave (candidata) de la tabla.

- **DF completa (de clave completa):** `Y` depende de **toda** la clave `K`, no de una
  parte. (Solo tiene sentido si `K` es compuesta.)
- **DF parcial:** `Y` depende de **una parte** de la clave compuesta.
  Ej: si la clave es (`nro_alq`, `pelicula`) y `genero` depende solo de `pelicula`.
- **DF transitiva:** `K → Z → Y` con `Z` **no** clave. `Y` depende de la clave *a través
  de* un atributo no clave.
  Ej: `nro_alq → socio → tel_socio`: el teléfono depende del alquiler solo porque el
  alquiler determina el socio.

### DF trivial

`X → Y` es trivial si `Y` está contenido en `X` (`A,B → A`). No aportan; se ignoran.

---

## 3. Clave candidata en términos de DF

Un conjunto de atributos `K` es **clave candidata** si:

1. `K` determina **todos** los demás atributos (`K → todo`), y
2. **ningún subconjunto propio** de `K` cumple lo anterior (es mínima).

Encontrar la clave es el **primer paso** de cualquier ejercicio de normalización: sin la
clave no se puede hablar de dependencias parciales ni transitivas.

---

## 4. Primera Forma Normal (1FN)

> Una tabla está en **1FN** si **todos sus valores son atómicos**: una sola cosa por
> celda, sin listas ni grupos repetitivos, y sin columnas tipo `telefono1`, `telefono2`.

**Mal (no 1FN):**

| id_alumno | nombre | materias |
|---|---|---|
| 1 | Ana | Matemática, Física, Química |

**Bien (1FN):** una fila por valor.

| id_alumno | nombre | materia |
|---|---|---|
| 1 | Ana | Matemática |
| 1 | Ana | Física |
| 1 | Ana | Química |

(En la práctica esto lleva a sacar `materia` a su propia tabla — es el mapeo de un
atributo multivaluado.)

---

## 5. Segunda Forma Normal (2FN)

> Una tabla está en **2FN** si está en 1FN **y** ningún atributo que **no** sea clave
> depende de **solo una parte** de la clave (no hay **dependencias parciales**).

Solo puede fallar si la **clave es compuesta**. Si la PK es un solo atributo, estar en 1FN
ya implica 2FN.

**Ejemplo — inscripciones a cursos.** Clave = (`legajo_alumno`, `codigo_curso`).

| legajo | codigo_curso | nombre_curso | nombre_alumno | nota |
|---|---|---|---|---|
| 10 | C1 | Guitarra I | Ana | 8 |
| 10 | C2 | Piano I | Ana | 7 |
| 20 | C1 | Guitarra I | Beto | 9 |

DFs:

- `legajo → nombre_alumno` ← **parcial** (depende de media clave)
- `codigo_curso → nombre_curso` ← **parcial**
- `legajo, codigo_curso → nota` ← completa (OK)

**Descomposición a 2FN:**

```
ALUMNO(<u>legajo</u>, nombre_alumno)
CURSO(<u>codigo_curso</u>, nombre_curso)
INSCRIPCION(<u>*legajo*</u>, <u>*codigo_curso*</u>, nota)
```

---

## 6. Tercera Forma Normal (3FN)

> Una tabla está en **3FN** si está en 2FN **y** ningún atributo no clave depende de otro
> atributo **no clave** (no hay **dependencias transitivas**). Dicho de otro modo: todo
> atributo no clave depende **directamente** de la clave, "de la clave completa y de nada
> más que la clave".

**Ejemplo — empleados.** Clave = `legajo`.

| legajo | nombre | cod_area | nombre_area | piso_area |
|---|---|---|---|---|
| 1 | Ana | A10 | Sistemas | 3 |
| 2 | Beto | A10 | Sistemas | 3 |
| 3 | Caro | A20 | Ventas | 1 |

DFs:

- `legajo → nombre, cod_area`
- `cod_area → nombre_area, piso_area` ← **transitiva**: `legajo → cod_area → nombre_area`

`cod_area` no es clave, y determina otros atributos → viola 3FN.

**Descomposición a 3FN:**

```
AREA(<u>cod_area</u>, nombre_area, piso_area)
EMPLEADO(<u>legajo</u>, nombre, *cod_area*)
      *cod_area* → AREA.cod_area
```

---

## 7. Mención: BCNF (Forma Normal de Boyce-Codd)

Más estricta que 3FN: exige que **todo determinante sea clave candidata**. En la mayoría
de los casos prácticos, una tabla en 3FN ya está en BCNF. El programa pide hasta 3FN;
BCNF se nombra para saber que existe.

---

## 8. Proceso paso a paso (receta para el examen)

1. **Escribí todas las DF** que surgen del enunciado / de la tabla.
2. **Encontrá la(s) clave(s) candidata(s).**
3. **1FN:** ¿hay celdas con múltiples valores o columnas repetidas? Atomizá.
4. **2FN:** ¿la clave es compuesta? Buscá **dependencias parciales** y separá cada parte
   con lo que determina.
5. **3FN:** buscá **dependencias transitivas** (un no-clave que determina a otro no-clave)
   y separalo en su propia tabla, dejando una FK.
6. **Verificá:** cada tabla resultante debe poder reconstruir la original con un JOIN
   (descomposición sin pérdida) y no debe haberse perdido ninguna DF.

---

## 9. Errores comunes

- **Saltear el paso de encontrar la clave.** Sin la clave no se puede clasificar una DF
  como parcial o transitiva.
- **Buscar dependencias parciales cuando la PK es simple.** Si la PK es un solo atributo,
  no puede haber parciales: pasás directo a analizar 3FN.
- **Confundir parcial con transitiva.** Parcial = depende de *parte de la clave*.
  Transitiva = depende de *un atributo no clave*.
- **Sobre-normalizar.** Partir tablas que ya están en 3FN solo agrega JOINs sin beneficio.
- **Perder una dependencia** al descomponer (descomposición que no preserva DF).
- **Normalizar "de memoria" sin escribir las DF.** Casi siempre lleva a error.

---

## 10. Tabla resumen

| Forma | Exige... | Falla cuando... | Se arregla... |
|---|---|---|---|
| **1FN** | valores atómicos | hay listas / grupos repetitivos | una fila por valor / tabla aparte |
| **2FN** | 1FN + sin dependencias **parciales** | un no-clave depende de parte de una clave compuesta | separar cada parte de la clave con lo que determina |
| **3FN** | 2FN + sin dependencias **transitivas** | un no-clave depende de otro no-clave | mover ese grupo a su tabla con una FK |
