# Metodología de detección de anomalías — TPI-AquaMonitor

Este documento describe los dos métodos estadísticos usados para detectar
comportamientos atípicos en las series de proceso: **Z-score con ventana
deslizante** y **Bandas de Bollinger**. Ambos están implementados en
[`analisis/anomaly_detection.py`](../analisis/anomaly_detection.py) y su versión
SQL en [`questdb/queries/anomaly_detection.sql`](../questdb/queries/anomaly_detection.sql).

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
