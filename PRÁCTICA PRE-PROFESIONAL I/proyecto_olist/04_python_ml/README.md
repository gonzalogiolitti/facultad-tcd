# 04_python_ml – EDA y modelos para predecir la reseña negativa

**Pregunta:** al momento de la entrega, ¿el pedido recibirá una reseña negativa (`puntaje` ≤ 2)?
Se comparan tres modelos: **Random Forest**, **Gradient Boosting** (`HistGradientBoostingClassifier`) y **regresión logística**.
**Meta:** PR-AUC ≥ 0,28 en el test cronológico y mejora ≥ 30 % sobre el mejor baseline (días de atraso).

> Todos los comandos se ejecutan **desde la carpeta `proyecto_olist/`**. El entorno virtual `.venv/` vive dentro del proyecto.

## Ejecutar todo, en orden

```bash
# 0) Entorno virtual (una sola vez) – detalle y variante para poca RAM en 01_python_etl/README.md
python3 -m venv .venv
.venv/bin/python -m pip install --no-cache-dir -r 01_python_etl/requirements.txt

# 1) ETL: genera 01_python_etl/data/processed/pedidos_modelado.csv  (requiere los 9 CSV en 01_python_etl/data/raw/)
.venv/bin/python 01_python_etl/run_etl.py

# 2) Generar los notebooks a partir de los generadores (escriben en 04_python_ml/notebooks/)
.venv/bin/python 04_python_ml/src/build_eda.py
.venv/bin/python 04_python_ml/src/build_ml.py

# 3) Ejecutar los notebooks (guarda las salidas dentro de cada .ipynb)
.venv/bin/python 04_python_ml/src/ejecutar_notebook.py 04_python_ml/notebooks/01_eda.ipynb
.venv/bin/python 04_python_ml/src/ejecutar_notebook.py 04_python_ml/notebooks/02_modelos.ipynb
```

Tiempos medidos (WSL, 8 núcleos visibles, 3,7 GB de RAM): ETL unos segundos, EDA < 1 min, modelos ≈ 8 min desde cero.
Si los notebooks ya están generados, el paso 2 se puede omitir. **Los notebooks se editan en los generadores, no a mano** (si se editan a mano, el próximo `build_*.py` los pisa).

## Qué hay en cada carpeta

| Ruta | Contenido |
|---|---|
| `src/build_eda.py`, `src/build_ml.py` | Generadores de `01_eda.ipynb` y `02_modelos.ipynb` (fuente de verdad del contenido de los notebooks). Aceptan una ruta de salida opcional. |
| `src/ejecutar_notebook.py` | Ejecuta un notebook con 1 hilo por librería y timeout de 4 h por celda; guarda las salidas en el mismo archivo. |
| `notebooks/` | `01_eda.ipynb` (exploración) y `02_modelos.ipynb` (baselines, validación cruzada, ajuste, test, controles). |
| `outputs/resultados_test.csv` | PR-AUC, AUC-ROC, F1/recall al 20 %, mejora vs. baseline, IC 95 % y cumplimiento de la meta, por modelo y escenario. |
| `outputs/comparacion_cv.csv` | Validación cruzada de comparación de los 5 algoritmos (ver «Dos validaciones cruzadas»). |
| `outputs/pr_auc_por_mes.csv` | PR-AUC del test mes a mes. |
| `outputs/predicciones.csv` | Una fila por pedido del test (19.165): `id_pedido`, `fecha_compra`, `resena_negativa`, `probabilidad_negativa` (0–1), `riesgo_top20`, `modelo`. |
| `outputs/progreso.log` | Inicio y fin (con hora) de cada etapa. Útil si la corrida se corta. |
| `outputs/cache/` | Resultado de cada etapa. Si existe y el código no cambió, se **reutiliza**. Para recalcular todo desde cero: borrar esta carpeta. |

## Decisiones del diseño (no cambiar sin avisar)

- **Split cronológico 80/20** por fecha de compra (corte: 2018-05-27). El test se usa una sola vez y nunca para elegir modelo, hiperparámetros ni umbral.
- **Sin fuga:** ninguna predictora sale de la reseña. Una celda al principio de `02_modelos.ipynb` hace un `assert` que **falla** si alguna predictora es del conjunto de la reseña (puntaje, comentarios, fechas, el propio target) o si el dataset conserva una columna con nombre en inglés. Además hay un control con el target mezclado al azar.
- **Finalistas:** Random Forest, Gradient Boosting y regresión logística (con `StandardScaler`, `lbfgs`, `max_iter=1000`). ExtraTrees y el árbol de decisión solo figuran en la tabla comparativa.
- **Criterio de elección fijado de antemano:** mejor PR-AUC en la VC de ajuste (Random Forest).
- **Recursos:** 1 hilo por librería (`OMP/OPENBLAS/MKL_NUM_THREADS=1`) y paralelismo en un solo nivel con **tope de 4 procesos** (`N_JOBS = 4`, nunca `-1`) en `cross_val_score` y `RandomizedSearchCV`. No cambia los resultados; evita saturar equipos con poca RAM.

## Dos validaciones cruzadas distintas (no comparables entre sí)

| | VC de comparación (paso 2) | VC de ajuste (paso 3) |
|---|---|---|
| Archivo / lugar | `comparacion_cv.csv` | salida del paso 3 y criterio de elección |
| Tramos | 5 | 3 |
| Hiperparámetros | por defecto | los de cada combinación de la búsqueda (`RandomizedSearchCV`) |
| Random Forest | 0,473 | 0,523 |

La diferencia viene sobre todo del número de tramos (cada uno valida sobre períodos distintos; con 5 tramos el primero se entrena con muy pocos datos y puntúa ≈ 0,3). En una prueba aparte con Random Forest: hiperparámetros por defecto → 0,518 (3 tramos) y 0,473 (5 tramos); hiperparámetros ajustados → 0,523 (3) y 0,478 (5). Ninguna es el desempeño en el test.

## Resultados de referencia (test, 19.165 pedidos desde 2018-05-27, prevalencia 9,67 %)

| Modelo | PR-AUC (IC 95 %) | Mejora vs. baseline | Cumple meta |
|---|---|---|---|
| Random Forest | 0,308 [0,285; 0,332] | +46,6 % | sí |
| Gradient Boosting | 0,309 [0,286; 0,334] | +47,3 % | sí |
| Regresión logística | 0,266 [0,245; 0,287] | +26,5 % | no |
| Baseline días de atraso | 0,210 | – | – |

Sin las 3 variables de plazo (`dias_estimados`, `dias_atraso`, `llego_tarde`): RF 0,238; GB 0,243; LR 0,242. Control con target mezclado: PR-AUC 0,102 (≈ prevalencia, sin fuga). Si una corrida nueva da otros valores, revisar versiones de librerías (están fijadas en `01_python_etl/requirements.txt`).
