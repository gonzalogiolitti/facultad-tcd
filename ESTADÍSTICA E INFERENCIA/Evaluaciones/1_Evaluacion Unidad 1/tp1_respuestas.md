# Evaluación Unidad 1 — Estadística e Inferencia

**Alumno:** Gonzalo Giolitti
**Dataset:** Cardiovascular Disease Dataset (`cardio_train.csv`)

---

## Punto 1 — Set de datos elegido

El set de datos elegido es el **Cardiovascular Disease Dataset** de Kaggle.

- **Link:** https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset
- **Autora:** Svetlana Ulianova
- **Archivo utilizado:** `cardio_train.csv` (valores separados por `;`)

---

## Punto 2 — Descripción del dataset

El *Cardiovascular Disease Dataset* reúne información clínica de **70.000 pacientes**
recogida en el momento de un examen médico. El objetivo del conjunto de datos es
**predecir la presencia o ausencia de enfermedad cardiovascular** (variable `cardio`)
a partir de datos personales, mediciones físicas y hábitos de vida.

Cada fila corresponde a un paciente y contiene **13 columnas**. Las variables se
agrupan en tres tipos:

| Tipo | Variables | Descripción |
|------|-----------|-------------|
| **Objetivas** (hechos) | `age`, `gender`, `height`, `weight` | Edad (en **días**), sexo (código 1 / 2), altura (cm) y peso (kg). |
| **De examen** (mediciones) | `ap_hi`, `ap_lo`, `cholesterol`, `gluc` | Presión arterial sistólica y diastólica; colesterol y glucosa en 3 niveles (1 = normal, 2 = por encima de lo normal, 3 = muy por encima de lo normal). |
| **Subjetivas** (informadas por el paciente) | `smoke`, `alco`, `active` | Si fuma, si consume alcohol y si realiza actividad física (0 = no, 1 = sí). |
| **Objetivo / target** | `cardio` | 1 = el paciente presenta enfermedad cardiovascular, 0 = no la presenta. |

Además existe la columna `id`, que es sólo un identificador único del paciente y no
aporta información para el análisis.

Observaciones relevantes:

- La **edad está expresada en días**; para interpretarla en años hay que dividir por 365.25
  (el rango va de ~29 a ~65 años).
- Las variables `cholesterol` y `gluc` son **categóricas ordinales** codificadas como 1/2/3.
- Las variables `gender`, `smoke`, `alco`, `active` y `cardio` son **categóricas / binarias**
  aunque R las lea como números enteros.
- Se detectan **valores atípicos / errores de carga** en la presión arterial
  (`ap_hi` y `ap_lo` presentan valores negativos y valores extremadamente altos, como
  16020 o 11000), algo esperable en datos clínicos reales y que habría que limpiar antes
  de modelar.
- La variable objetivo `cardio` está **balanceada**: su media es 0,4997, es decir
  aproximadamente 50 % de casos positivos y 50 % negativos.

---

## Punto 3 — Carga en R: `dim()` y `summary()`

El script [`tp1_unidad1.R`](tp1_unidad1.R) carga el CSV indicando `sep = ";"` y guarda
la salida completa en [`resultados_tp1.txt`](resultados_tp1.txt).

### Resultado de `dim(cardio)`

```
[1] 70000    13
```

**Descripción:** `dim()` devuelve las dimensiones del *data frame*: **70.000 filas**
(observaciones / pacientes) y **13 columnas** (variables). Confirma que el archivo se
leyó correctamente con el separador `;`; si se hubiera usado `,` como separador, R
habría cargado una sola columna.

### Resultado de `summary(cardio)`

```
       id             age            gender         height
 Min.   :    0   Min.   :10798   Min.   :1.00   Min.   : 55.0
 1st Qu.:25007   1st Qu.:17664   1st Qu.:1.00   1st Qu.:159.0
 Median :50002   Median :19703   Median :1.00   Median :165.0
 Mean   :49972   Mean   :19469   Mean   :1.35   Mean   :164.4
 3rd Qu.:74889   3rd Qu.:21327   3rd Qu.:2.00   3rd Qu.:170.0
 Max.   :99999   Max.   :23713   Max.   :2.00   Max.   :250.0
     weight           ap_hi             ap_lo           cholesterol
 Min.   : 10.00   Min.   : -150.0   Min.   :  -70.00   Min.   :1.000
 1st Qu.: 65.00   1st Qu.:  120.0   1st Qu.:   80.00   1st Qu.:1.000
 Median : 72.00   Median :  120.0   Median :   80.00   Median :1.000
 Mean   : 74.21   Mean   :  128.8   Mean   :   96.63   Mean   :1.367
 3rd Qu.: 82.00   3rd Qu.:  140.0   3rd Qu.:   90.00   3rd Qu.:2.000
 Max.   :200.00   Max.   :16020.0   Max.   :11000.00   Max.   :3.000
      gluc           smoke              alco             active
 Min.   :1.000   Min.   :0.00000   Min.   :0.00000   Min.   :0.0000
 1st Qu.:1.000   1st Qu.:0.00000   1st Qu.:0.00000   1st Qu.:1.0000
 Median :1.000   Median :0.00000   Median :0.00000   Median :1.0000
 Mean   :1.226   Mean   :0.08813   Mean   :0.05377   Mean   :0.8037
 3rd Qu.:1.000   3rd Qu.:0.00000   3rd Qu.:0.00000   3rd Qu.:1.0000
 Max.   :3.000   Max.   :1.00000   Max.   :1.00000   Max.   :1.0000
     cardio
 Min.   :0.0000
 1st Qu.:0.0000
 Median :0.0000
 Mean   :0.4997
 3rd Qu.:1.0000
 Max.   :1.0000
```

**Descripción:** `summary()` calcula, para cada variable numérica, el **mínimo, el
primer cuartil, la mediana, la media, el tercer cuartil y el máximo**. Lectura variable
por variable:

- **`id`**: identificador, va de 0 a 99999. No tiene valor estadístico (sólo sirve para
  distinguir pacientes).
- **`age`**: edad en **días**. Rango 10.798–23.713 días, es decir ≈ **29,5 a 64,9 años**;
  media ≈ 19.469 días (≈ 53,3 años). Mediana y media muy cercanas → distribución
  aproximadamente simétrica.
- **`gender`**: código 1 / 2. Media 1,35 → predomina la categoría 1 (alrededor del 65 %
  de los registros).
- **`height`**: altura en cm. Mediana 165, media 164,4. Los extremos (mín. 55, máx. 250)
  son **valores implausibles / outliers** que convendría revisar.
- **`weight`**: peso en kg. Mediana 72, media 74,2 (media > mediana → leve asimetría a la
  derecha). Mínimo de 10 kg claramente erróneo.
- **`ap_hi`** (presión sistólica): mediana e IQR razonables (120–140), pero **mínimo −150
  y máximo 16.020**: hay errores de carga evidentes.
- **`ap_lo`** (presión diastólica): misma situación, mediana 80 pero rango de −70 a 11.000.
- **`cholesterol`**: escala ordinal 1/2/3. Media 1,37 → la mayoría de los pacientes está
  en nivel 1 (normal).
- **`gluc`**: escala ordinal 1/2/3. Media 1,23 → predomina el nivel 1 (normal).
- **`smoke`**: binaria. Media 0,088 → ≈ **8,8 %** de fumadores.
- **`alco`**: binaria. Media 0,054 → ≈ **5,4 %** consume alcohol.
- **`active`**: binaria. Media 0,804 → ≈ **80,4 %** realiza actividad física.
- **`cardio`** (variable objetivo): binaria. Media 0,4997 → clases **balanceadas**
  (≈ 50 % con enfermedad cardiovascular y ≈ 50 % sin ella).

**Conclusión del punto 3:** la carga fue exitosa (70.000 × 13). El `summary()` muestra
que las variables categóricas/binarias fueron leídas como enteros y que las variables de
presión arterial (`ap_hi`, `ap_lo`), y en menor medida `height` y `weight`, contienen
valores atípicos que deberían depurarse en una etapa posterior de limpieza de datos.
