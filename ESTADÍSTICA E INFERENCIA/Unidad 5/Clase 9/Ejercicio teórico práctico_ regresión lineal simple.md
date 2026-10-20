# Ejercicio teórico práctico: regresión lineal simple

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=222470_

Denominamos modelos lineales a aquellos modelos matemáticos en los cuales se explica una variable respuesta (
y
) a partir de una
combinación lineal
de variables explicativas (
xi,j
).
La ecuación modelo tiene la siguiente forma: yi,j
=
β
0
+
β
1
x
1
+ ... +
βj
xj
+ ei,j ; dónde los diferentes β son los parámetros del modelo, cada xi es el valor de cada una de las variables explicativas y ei,j es el error aleatorio entre el modelo y la realidad (error de la j-ésima observación en el i-ésimo nivel).
En el caso de la regresión lineal simple el modelo es el siguiente:
yi
=
β
0
+
β
1
xi
+ ei
En R, la función
lm
(linear models) nos permite ajustar un modelo de regresión lineal simple, siguiendo la estructura: y~x.
Tomemos como ejemplo el análisis de la base de datos "
Salary_dataset
". Una vez cargada la base, en R creamos el modelo con la siguiente sentencia:
modelo <- lm(Salary ~ YearsExperience, data = Salary_dataset)
summary(modelo)
La salida contiene la información de la estimación por cuadrados mínimos, es decir, la estimación que minimiza la suma de los cuadrados de error. Los llamados "residuos del modelo" son la diferencia entre el valor observado y el valor esperado por el modelo. Los residuos deben seguir una distribución normal, con valor espera de cero y una variancia constante (homocedasticidad). Podemos utilizar los test antes mencionados para chequear los supuestos, pero en la salida están informados.
Call:
lm(formula = Salary ~ YearsExperience, data = Salary_dataset)
Residuals:
Min      1Q  Median      3Q     Max
-7958.0 -4088.5  -459.9  3372.6 11448.0
Coefficients:
Estimate Std. Error t value Pr(>|t|)
(Intercept)      24848.2     2306.7   10.77 1.82e-11 ***
YearsExperience   9450.0      378.8   24.95  < 2e-16 ***
---
Signif. codes:
0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
Residual standard error: 5788 on 28 degrees of freedom
Multiple R-squared:  0.957,
Adjusted R-squared:  0.9554
F-statistic: 622.5 on 1 and 28 DF,  p-value: < 2.2e-16
En la primera línea muestra la ecuación utilizada, luego los residuos, le siguen las estimaciones de los coeficientes
β
0 (intercept) y
β
1 (YearsExperiencie), con los p-value correspondiente al test de Wald. Este test, es una prueba de significancia del coeficiente individual.
Luego, en la penúltima línea encontramos el valor R2 o coeficiente de determinación que indica la proporción de variabilidad observada en la variable Y explicada por el modelo, en relación a la variabilidad total. En este caso tenemos que el 95.7% de la variabilidad de los salarios es explicada por la antigüedad. En la última línea se encuentra el p-value del test; <2.2e-16  en este caso.
El contraste del test, o la hipótesis nula del test, es que no hay regresión por lo que
β
1=0, como el p-value<0.05 (nivel de significaición), concluimos que hay evidencia para modelar según una regresión lineal, estimando a la ecuación de la siguiente manera:
yi = 24848.2 + 9450 xi
En este caso yi es el salario de la i-ésima observación y xi es la í-esima antigüedad observada.
También podemos estimar por intervalo de confianza a los parámetros
β
0 y
β
1 con la función ya utilizada confint:
confint(modelo)
2.5 %   97.5 %
(Intercept)     20123.238 29573.17
YearsExperience  8674.119 10225.81
De esta manera, con una confianza del 95% el intervalo (20123.24; 29573.17) cubre al verdadero valor de
β
0; y el intervalo (8674.12; 10225.81) cubre al verdadero valor de
β1.
Una correcta interpretación de
β
0 sería: el mínimo salario de personas sin antigüedad o con una antigüedad nula. Es importante aclarar que no siempre la interpretación es lógica en términos del problema aunque en este caso si lo es.
Por otro lado,
β1 representa el incremento en el salario por incremento unitario de la antigüedad.
Para corroborar los supuestos del modelo, es decir, que los residuos tengan una distribución normal, esperanza igual a cero y variancia constante, procedemos a los siguientes test:
qqnorm(modelo$residuals)
# grafica los valores observados vs los esperados
qqline(modelo$residuals)
# grafica la recta teórica predicha
shapiro.test(modelo$residuals)
# distribución normal
Finalmente, usando ggplot del paquete tydiverse podemos generar un gráfico de dispersión con el siguiente código:
library(tydiverse)
ggplot(data = Salary_dataset,
mapping = aes(x = YearsExperience, y = Salary)) +
geom_point(color = "firebrick", size = 2) +
labs(title  =  'Diagrama de dispersión',
x  =  'Años de antigüedad',
y =  'Salario') +
geom_smooth(method = "lm", se = TRUE, color = "black") +
theme_bw() +
theme(plot.title = element_text(hjust = 0.5))
En el gráfico se observa la recta predicha por el modelo (en negro), los puntos corresponden a cada una de las observaciones (en rojo) y el intervalo de confianza (en gris). Se puede apreciar la relación lineal, fuerte y directa.
