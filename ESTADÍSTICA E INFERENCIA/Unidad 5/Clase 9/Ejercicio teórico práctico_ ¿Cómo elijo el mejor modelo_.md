# Ejercicio teórico práctico: ¿Cómo elijo el mejor modelo?

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=222514_

Continuamos con el análisis de la base de datos "
Salary Prediction
".
Supongamos que estamos contrastando modelos pero no sabemos cuál es el mejor. Vamos a recurrir al Criterio de Información de Akaike (AIC) que nos permite comparar modelos basándose en el equilibrio entre ajuste y simplicidad del modelo, a través del Log-verosimilitud y penalización por número de parámetros. La fórmula para calcularlo es AIC = 2k - 2 log(L), donde k es el número de parámetros y L es la función de verosimilitud del modelo.
Debemos elegir aquel modelo que tenga un AIC más bajo.
modelo1 <- lm(Salario~Antigüedad,
              data=Salary_Data_2)
modelo3 <- lm(Salario~Edad+Antigüedad,
              data=Salary_Data_2)
modelo4 <- lm(Salario~Edad+Antigüedad+Genero,
              data=Salary_Data_2)
modelo5 <- lm(Salario~Edad+Antigüedad+N.Educacion+Genero,
              data=Salary_Data_2)
AIC(modelo1,modelo2,modelo3,modelo4,modelo5)
La salida es la siguiente
df      AIC
modelo1  3 8359.961
modelo2  7 8246.229
modelo3  4 8353.107
modelo4  5 8338.639
modelo5  7 8246.229
Vemos que tanto el modelo 2 como el modelo 5 tienen los AIC más bajos, en estos casos se suele elegir el modelo de menos parámetros (modelo 2) o recurriendo a otras técnicas de validación.
