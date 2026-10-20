# Ejercicio teórico práctico: regresión lineal múltiple

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=222508_

Recordemos que en la regresión lineal múltiple, la ecuación modelo tiene la siguiente forma: yi,j
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
Volveremos a utilizar la función
lm
(linear models) para ajustar un modelo de regresión lineal múltiple, siguiendo la estructura: y~x1+x2...+xj.
Tomemos como ejemplo el análisis de la base de datos "
Salary Prediction
". Una vez cargada la base, en R creamos el modelo con la siguiente sentencia (previo cambio de nombre de las variables):
colnames(Salary_Data)<-c("Edad","Genero","N.Educacion","Cargo","Antigüedad","Salario")
modelo2 <- lm(Salario~Edad+Antigüedad,
              data=Salary_Data)
summary(modelo2)
La salida contiene la información de la estimación por cuadrados mínimos, es decir, la estimación que minimiza la suma de los cuadrados de error. Vemos que, respecto de la regresión lineal simple, aparece una fila extra. Esto se debe a que tenemos dos variables explicativas: edad y antigüedad:
Call:
lm(formula = Salario ~ Edad + Antigüedad, data = Salary_Data_2)

Residuals:
   Min     1Q Median     3Q    Max 
-64540  -7436    678   9304  78062 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept) -18700.4    17060.3  -1.096  0.27373    
Edad          1885.8      632.5   2.981  0.00306 ** 
Antigüedad    4853.8      681.9   7.118 5.74e-12 ***
---
Signif. codes:  
0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 17530 on 370 degrees of freedom
  (2 observations deleted due to missingness)
Multiple R-squared:  0.8687,	Adjusted R-squared:  0.868 
F-statistic:  1224 on 2 and 370 DF,  p-value: < 2.2e-16
En la primera línea muestra la ecuación utilizada, luego los residuos, le siguen las estimaciones de los coeficientes
β
0 (intercept),
β
1 (Edad) y
β2
(Antigüedad),
en la última línea se encuentra el p-value del test; <2.2e-16  en este caso.
La ecuación estimada es la siguiente: Salario
= -18700.4 + 1885.8 x Edad + 4853.8 x Antigüedad
Aquí vemos que el
β
0 no tiene sentido en palabras del problema ya que no puede haber un salario negativo, pero es la estimación de la regresión. Vemos que el 86.9% de los salarios son explicados por la edad y la antigüedad.
También podemos estimar por intervalo de confianza a los parámetros
β
0,
β
1y
β2
con la función  confint:
confint(modelo2)
2.5 %   97.5 %
(Intercept) -52247.691 14846.877
Edad           642.010  3129.648
Antigüedad    3512.889  6194.798
