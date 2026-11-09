# Metodología de detección de anomalías — TPI-AquaMonitor

Este documento describe los métodos de análisis del TPI: **tendencia**, **detección de anomalías** (Z-score con ventana
deslizante) y **correlación**.

> **Stack vigente:** los tres métodos se resuelven con **consultas SQL en InfluxDB, dentro de los paneles de Grafana**
> (sección "Análisis" del tablero; las consultas están en [`scripts/construir_dashboard.py`](../scripts/construir_dashboard.py)).
> La versión en Python (Z-score y Bandas de Bollinger en [`analisis/anomaly_detection.py`](../_archivo/stack_anterior/analisis/anomaly_detection.py)) y la de QuestDB
> ([`questdb/queries/anomaly_detection.sql`](../_archivo/stack_anterior/questdb/queries/anomaly_detection.sql)) quedaron como **respaldo**.

## 0. Los tres métodos explicados simple (stack vigente)

**Tendencia: "¿hacia dónde va la variable?"**
- *Media móvil*: en cada punto se promedian las últimas 10 muestras. El promedio "alisa" el ruido y deja ver la dirección.
- *Pendiente*: se ajusta una recta a los puntos del rango elegido (regresión lineal). Si la pendiente es positiva sube, si es negativa baja.
  Se la expresa como "cambio por hora" y, si es menor al 2 % de la media por hora, se la considera *estable*.
  Ejemplo: en el filtro, la presión diferencial sube a medida que el lecho se tapa; la pendiente positiva avisa que se acerca el momento de retrolavar.
- En SQL: `avg(value) OVER (ORDER BY time ROWS BETWEEN 9 PRECEDING AND CURRENT ROW)` y `regr_slope(value, date_part('epoch', time))`.

**Anomalías (Z-score): "¿este valor es raro comparado con lo que venía pasando?"**
- Para cada valor se toma la media y el desvío de las **20 muestras anteriores**. El *z-score* dice a cuántos desvíos de esa media está el valor.
- Si |z| > 3 se marca como anomalía (en una distribución normal, solo ~0,3 % de los valores cae tan lejos por azar).
- Las bandas del gráfico son media ± 3 desvíos. Un corte de la bomba da z de −50 o más; un pH forzado, z de −4.
- Limitación: con una ventana corta puede marcar de vez en cuando un punto normal (falsos positivos); por eso se exigen al menos 10 muestras previas y el desvío tiene un **piso del 1 % de la media** (en variables de muy poco ruido, como el pH, un desvío de 0,1 con desvío típico de 0,035 daba z = 3 sin ser una falla).
- En SQL: `avg(value) OVER w`, `stddev(value) OVER w` con `WINDOW w AS (PARTITION BY equipo, variable ORDER BY time ROWS BETWEEN 20 PRECEDING AND 1 PRECEDING)`.

**Correlación: "¿dos variables se mueven juntas?"**
- El *r de Pearson* va de −1 a 1: cerca de 1, suben y bajan juntas; cerca de −1, una sube cuando la otra baja; cerca de 0, no hay relación lineal.
- En la bomba, caudal y corriente dan r ≈ 0,99 (a más caudal, más corriente: la curva de la bomba). Un r que de golpe se desarma sería una señal de problema.
- Ojo: correlación no es causalidad, y las fallas (la bomba parada baja todo a la vez) inflan la correlación.
- En SQL: `corr(caudal, corriente)` sobre una tabla con una columna por variable (se arma con `max(CASE WHEN variable = ...)` agrupando por instante).


---

## 1. Z-score con ventana deslizante

### 1.1 Fundamento

El Z-score mide cuántos desvíos estándar separa una observación de la media de su
entorno reciente. Para el punto $x_i$ de una serie temporal se calcula sobre la
ventana de los últimos $w$ puntos:

$$
\mu_i = \frac{1}{w}\sum_{k=i-w+1}^{i} x_k
\qquad
\sigma_i = \sqrt{\frac{1}{w}\sum_{k=i-w+1}^{i} (x_k - \mu_i)^2}
$$

$$
z_i = \frac{x_i - \mu_i}{\sigma_i}
$$

Se marca **anomalía** cuando:

$$
|z_i| > z_{\text{umbral}} \qquad \text{(por defecto } z_{\text{umbral}} = 3.0\text{)}
$$

### 1.2 Interpretación del umbral

Bajo la hipótesis de normalidad local, la probabilidad de que $|z| > 3$ por azar
es $\approx 0.27\,\%$ (regla empírica 68–95–99.7). Es decir, aproximadamente
1 de cada 370 muestras sería un falso positivo. Con un ciclo de muestreo de
120 s eso equivale a ~1 falsa alarma cada 12 h por variable, un ritmo tolerable
para una planta con 15 variables.

| $z_{\text{umbral}}$ | % teórico fuera | Uso recomendado |
|---|---|---|
| 2.0 | 4.55 % | Exploración / tuning, demasiadas alarmas |
| 2.5 | 1.24 % | Vigilancia sensible (severidad `warning`) |
| **3.0** | **0.27 %** | **Operación normal (severidad `warning`/`critical`)** |
| 4.0 | 0.0063 % | Sólo eventos groseros |

### 1.3 Justificación de la ventana de 20 puntos

* **Estadística suficiente:** con $w = 20$, el error estándar de $\sigma_i$ es
  $\approx \sigma/\sqrt{2(w-1)} \approx 0.16\,\sigma$; suficientemente estable
  para no disparar por ruido de estimación.
* **Reactividad:** $20 \times 120\text{ s} = 40$ min de historia. La ventana
  "olvida" una perturbación en menos de una hora, de modo que detecta cambios de
  régimen sin quedar anclada a datos viejos.
* **Costo:** `rolling(20)` es trivial en pandas y expresable como función de
  ventana `ROWS BETWEEN 19 PRECEDING AND CURRENT ROW` en QuestDB.
* La variable binaria `ESTADO` se excluye del Z-score (no tiene sentido).

---

## 2. Bandas de Bollinger

### 2.1 Fundamento

Envuelven la serie con una media móvil y una banda de ancho proporcional al
desvío móvil:

$$
\text{media}_i = \frac{1}{w}\sum_{k=i-w+1}^{i} x_k
$$

$$
\text{banda}^{\pm}_i = \text{media}_i \pm m \cdot \sigma_i
\qquad (m = 2 \text{ por defecto})
$$

Un punto es atípico si $x_i > \text{banda}^{+}_i$ o $x_i < \text{banda}^{-}_i$.

### 2.2 Relación con el Z-score

Salir de la banda de Bollinger con $m$ desvíos es **exactamente** equivalente a
$|z_i| > m$ con la misma ventana. La diferencia es de uso:

* **Z-score** → salida numérica (`z_i`), ideal para *ranking* de severidad y
  para registrar el valor en la tabla `events`.
* **Bollinger** → salida gráfica (dos series envolventes), ideal para paneles de
  Grafana (panel *Análisis avanzado*, banda calculada en SQL).

Se usa $m = 2$ en Bollinger (visualización, ~4.6 % de puntos fuera esperados,
banda "viva") y $z_{\text{umbral}} = 3$ en la detección automática (menos ruido).

---

## 3. Tabla de resultados esperados

Con el simulador corriendo en régimen normal (sin anomalías inyectadas) durante
24 h (≈ 720 muestras por variable):

| Escenario | Método | Detecciones esperadas |
|---|---|---|
| Régimen normal, por variable | Z-score $|z|>3$ | 0 – 3 (falsos positivos por ruido) |
| Régimen normal, por variable | Bollinger $m=2$ | ~30 – 35 puntos fuera de banda (esperado, no alarma) |
| `VIB_HIGH` inyectada en EQ01/VIBRACION | Z-score $|z|>3$ | Detección en 1 – 3 ciclos desde el inicio; se sostiene mientras dura |
| `PH_SPIKE` inyectada en EQ03/PH | Z-score $|z|>3$ | Detección inmediata (salto ≈ 1.4 pH ≫ 3σ) |
| `CAUDAL_DROP` en EQ01/CAUDAL | Z-score $|z|>3$ | Detección en el ciclo del escalón; luego la media móvil se adapta y deja de marcar |
| `FILTER_SAT` en EQ02/PRES_DIF | Z-score $|z|>3$ | Detección débil/nula (deriva lenta): la capta mejor `trend_analysis` |

**Conclusión de diseño:** el Z-score es fuerte ante **cambios abruptos** y débil
ante **derivas lentas**. Por eso el sistema lo complementa con
`trend_analysis.py` (regresión lineal a 24 h) para vibración y presión
diferencial, cuyos modos de falla son graduales.
