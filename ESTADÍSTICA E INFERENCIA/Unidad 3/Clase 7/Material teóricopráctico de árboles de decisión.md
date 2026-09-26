# Material teóricopráctico de árboles de decisión

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=220735_

En estadística, nos referimos a árboles de decisión a una técnica de aprendizaje supervisado en la que hay una variable objetivo (o bien, dependiente) y queremos encontrar una función que nos permita predecir; a partir de otras variables predictoras (o independientes), el valor de la variable objetivo. L
a técnica para generar árboles de decisión que usaremos en es
te ejemplo es  "
Classification And Regression Trees" (
CART
) con el paquete "
Recursive Partitioning and Regression Trees"
o  R
PART
.
Podemos generar árboles de decisión o regresión, dependiendo de la variable objetivo; si ésta es discreta construiremos un árbol de decisión y si ésta es continua, construiremos un árbol de regresión. Si bien este método es muy utilizado, su principal desventaja es el "overfitting" (sobreajuste) a la muestra con la que construimos el árbol. Su principal ventaja es el poco uso de cómputo y fácil interpretación.
Librerías utilizadas en este ejercicio:
library(tidyverse)
library(rpart)
library(rpart.plot)
library(caret)
# para generar la matriz de confusión y obtener las métricas, classification and regression training
Vamos a utilizar el conjunto de datos de
"Potabilidad del agua"
que puedan descargar a través del link a kaggle o bien desde los recursos provistos.
Primero hacemos un inspección de la información y ubicamos la variable objetivo. En este caso la variable objetivo es "Potability"
summary(water_potability)
datos <- water_potability %>% 
  mutate_at("Potability", factor)
# Potability: Indicates if water is safe for human consumption. Potable -1 and Not potable -0
Para poder realizar el árbol, debemos dividir el conjunto de datos para que algunos sean utilizados para entrenar al àrbol y otros para validar el método de clasificación:
datos_entrenamiento<-sample_frac(datos, .7)
# 70% de los datos destinados a entrenamiento y el resto a la prueba
datos_prueba<-setdiff(datos,datos_entrenamiento)
Luego procedemos a crear el primer arbol:
arbol_1<-rpart(
formula=Potability~.,
data=datos_entrenamiento
)
Para graficar el arbol, utilizamos el paquete y la función 'rpart.plot':
rpart.plot(arbol_1)
La interpratoción debe realizarse de la siguiente manera:
- Cada nodo (rectangulo) está coloreado de acuerdo a la categoría mayoritaria entre los datos que agrupa, en nuestro caso sería verde (potable) o celeste (no potable). Esta es la categoría que ha predicho el modelo para ese grupo.
- Dentro del rectángulo se muestra qué proporción de casos pertenecen a cada categoría y la proporción del total de datos que han sido agrupados allí. Estas proporciones nos dan una idea de la precisión de nuestro modelo al hacer predicciones.

Luego, ponemos a prueba nuestra predicción utilizando los datos que no habían sido utilizados para generar el método:
prediccion_1<-predict(arbol_1, newdata = datos_prueba, type = "class")
Finalmente, evaluamos las métricas de nuestra predicción:
confusionMatrix(prediccion_1, datos_prueba_1[["Potability"]])
Vamos a generar distintos árboles y predicciones buscando la de mayor "accuracy" o precisión y cuyo kappa (coeficiente indicador de precisión) sea más cercano a 1.
