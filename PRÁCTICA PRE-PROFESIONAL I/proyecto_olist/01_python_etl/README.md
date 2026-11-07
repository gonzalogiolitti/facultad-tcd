# 01_python_etl – Lectura y limpieza de los datos de Olist

Lee los 9 CSV públicos de Olist (Kaggle), les pone nombres en español y arma el dataset de modelado:
**una fila por pedido entregado que tiene reseña** (95.824 filas, 12,81 % de reseñas negativas).

> Todos los comandos se ejecutan **desde la carpeta `proyecto_olist/`** (la que contiene `01_python_etl/`, `04_python_ml/` y `.venv/`).

## 1. Datos de entrada

Descargar el dataset *Brazilian E-Commerce Public Dataset by Olist* de Kaggle (licencia CC BY-NC-SA 4.0) y dejar los 9 CSV en `01_python_etl/data/raw/`:

```
olist_customers_dataset.csv            olist_products_dataset.csv
olist_geolocation_dataset.csv          olist_sellers_dataset.csv
olist_order_items_dataset.csv          product_category_name_translation.csv
olist_order_payments_dataset.csv       olist_orders_dataset.csv
olist_order_reviews_dataset.csv
```

`data/raw/` y `data/processed/` están en el `.gitignore` (no se versionan).

## 2. Entorno virtual (una sola vez)

Requiere Python 3.14 (con el módulo `venv`). Las versiones exactas con las que se obtuvieron los resultados están fijadas en `requirements.txt`.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install --no-cache-dir --upgrade pip
.venv/bin/python -m pip install --no-cache-dir -r 01_python_etl/requirements.txt
```

**Equipos con poca memoria (≤ 4 GB, p. ej. WSL):** instalar en tandas chicas para no saturar la RAM; el resultado es el mismo.

```bash
.venv/bin/python -m pip install --no-cache-dir numpy==2.5.4 pandas==3.1.0 scipy==1.18.1
.venv/bin/python -m pip install --no-cache-dir scikit-learn==1.9.1 joblib==1.6.0 threadpoolctl==3.7.0
.venv/bin/python -m pip install --no-cache-dir matplotlib==3.11.2 seaborn==0.13.2
.venv/bin/python -m pip install --no-cache-dir nbformat==5.11.1 nbconvert==7.17.2 ipykernel==7.4.0
```

## 3. Ejecutar el ETL

```bash
.venv/bin/python 01_python_etl/run_etl.py
```

Tarda unos segundos. Qué hace:

1. Lee los 9 CSV y compara los conteos de filas con los esperados (99.441 / 99.441 / 112.650 / 103.886 / 99.224 / 32.951 / 3.095 / 1.000.163 / 71); imprime `OK` o `DIFERENTE` por tabla.
2. Renombra tablas y columnas con el diccionario de `src/nombres_es.py` (español, snake_case, sin ñ ni tildes). Los **valores** no se tocan. Si un CSV trae una columna sin traducción, el ETL falla.
3. (Opcional, con `--exportar-stg` / `--solo-stg`) exporta las tablas de staging.
4. Arma el dataset de modelado y verifica con un `assert` que no quede ningún nombre en inglés.

**Salida:** `01_python_etl/data/processed/pedidos_modelado.csv` (22 columnas). El target es `resena_negativa` (= `puntaje` ≤ 2); `puntaje` queda solo para el EDA y **no** es predictora.

Resultado esperado al final: `filas: 95,824` y `% reseñas negativas: 12.81 %`.

## 4. Exportar staging para SQL Server

El ETL **no** se conecta a SQL Server. Para cargar la base `OlistDW` (instancia de Windows) primero se exportan las 9 tablas de staging, ya limpias y con nombres en español, a un CSV por tabla:

```bash
.venv/bin/python 01_python_etl/run_etl.py --solo-stg        # solo staging; no toca pedidos_modelado.csv
.venv/bin/python 01_python_etl/run_etl.py --exportar-stg    # staging + dataset de modelado
```

Salida: `01_python_etl/data/processed/stg/<tabla>.csv` y `_manifiesto.csv` (filas esperadas por tabla). `geolocalizacion` se exporta agregada por prefijo postal (1.000.163 → 19.015 filas). La carga la hace `02_sql_server/cargar_stg.py` con el Python de Windows; ver `02_sql_server/README.md`. `sqlalchemy` y `pyodbc` no se necesitan en WSL.

## 5. Siguiente paso

Modelado: ver `04_python_ml/README.md`.
