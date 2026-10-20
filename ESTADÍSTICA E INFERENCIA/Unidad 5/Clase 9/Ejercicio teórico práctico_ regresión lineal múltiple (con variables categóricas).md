# Ejercicio teórico práctico: regresión lineal múltiple (con variables categóricas)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=222510_

Continuamos con el análisis de la base de datos "
Salary Prediction
". Ahora vamos a incorporar la variable cualitativa o categórica Género:
modelo3 <- lm(Salario~Edad+Antigüedad+Genero,
              data=Salary_Data)
summary(modelo3)
Para la variable Genero, se muestra como GeneroMale, esto se debe a que se genera lo que llamamos variable dummy. Es decir que en el modelo está contrastando contra una de los niveles del factor, debemos leer que cuando el Género es masculino, hay un incremento en el salario (para sorpresa de nadie).
Call:
lm(formula = Salario ~ Edad + Antigüedad + Genero, data = Salary_Data)

Residuals:
   Min     1Q Median     3Q    Max 
-59955  -7055    877  10272  74487 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept) -30267.0    16949.0  -1.786 0.074958 .  
Edad          2175.7      623.6   3.489 0.000544 ***
Antigüedad    4546.3      672.2   6.763 5.30e-11 ***
GeneroMale    7309.6     1791.0   4.081 5.49e-05 ***
---
Signif. codes:  
0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 17170 on 369 degrees of freedom
  (2 observations deleted due to missingness)
Multiple R-squared:  0.8744,	Adjusted R-squared:  0.8733 
F-statistic: 855.9 on 3 and 369 DF,  p-value: < 2.2e-16
La ecuación estimada es la siguiente: Salario
= -18700.4 + 1885.8 x Edad + 4853.8 x Antigüedad + 7309.6 x Genero Masculino
