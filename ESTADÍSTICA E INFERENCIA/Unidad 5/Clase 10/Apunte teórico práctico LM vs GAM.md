# Apunte teórico práctico LM vs GAM

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=223957_

En la unidad anterior utilizamos los modelos de regresión lineal (LM) para estudiar la relación entre dos variables a partir de un conjunto de datos. En esta unidad nos interiorizaremos en modelos aditivos generalizados para posición, escala y forma (GAMLSS) que son modelos de regresión semi-paramétricos.
Los modelos GAMLSS son semi-paramétricos porque asumen que la variable respuesta sigue una determinada distribución definida por hasta cuatro parámetros (μ,σ,ν,τ) a través de los cuales se describe su posición, escala y forma. En este modelo, la variable respuesta Y sigue una distribución de la familia exponencial, cuya media puede ser modelada en función de otras variables predictorias (X
i
)
:
g(μ) = β
0
+ f
1
(x
1
) + f
2
(x
2
) + ..... + f
p
(x
p
)
Para poder seleccionar un modelo GAMLSS debemos poder comparar entre diferentes ajustes; una herramienta ya utilizada en la unidad anterior es el AIC. En esta unidad presentamos el método de validación cruzada.
Veamos con un ejemplo cómo se estima el modelo. Utilizaremos el paquete 'gamlss' que incluye una base de datos para probar los modelos.
library(gamlss)
datos<-rent
summary(datos)
colnames(datos)<-
c("Precio","m2","Año","CalidadSup","CalidadInf","Baño","Calefaccion","CocinaSup","Locacion")
El dataset incluye información sobre el precio de alquiler de una propiedad y brinda información sobre el tamaño, el año de construcción, si la calidad es superior o inferior a la media del barrio, si tiene baño, si tiene calefacción central, si la cocina es de categoría superior a la media e incluye una variable locación que es una combinación de las calidades respecto del barrio.
Siempre es una buena práctica visualizar el conjunto de datos por lo que realizaremos un gráfico para las variables que pensamos a incluir en el modelo:
library(tidyverse) 
p1 <- ggplot(data = datos, aes(x = m2, y = Precio)) + 
  geom_point(alpha = 0.4) +
  labs(ttile = "Precio vs metros2") +
  theme_bw()
p2 <- ggplot(data = datos, aes(x = Año, y = Precio)) + 
  geom_point(alpha = 0.4) +
  labs(ttile = "Precio vs año") +
  theme_bw()
p3 <- ggplot(data = datos, aes(x = Calefaccion, y = Precio)) + 
   geom_boxplot(width = 0.1, outlier.shape = NA) +
  labs(ttile = "Precio vs calefacción") +
  theme_bw()
p4 <- ggplot(data = datos, aes(x = Locacion, y = Precio)) + 
  geom_boxplot(width = 0.1, outlier.shape = NA) +
  labs(ttile = "Precio vs situación") +
  theme_bw()
ggpubr::ggarrange(
  plotlist = list(p1, p2, p3, p4))
Del primer gráfico podríamos sospechar una relación lineal entre el Precio y los Metros cuadrados (m2) aunque a mayor superficie hay más dispersión en el precio. También podemos decir que aquellos que tienen calefacción central tienen menor precio y que la Locación 1 tiene menores precios que 2 y 3.
Comenzaremos generando un modelo lineal para verificar el no cumplimiento de los supuestos (recordemos que el supuesto necesario para aplicar el modelo era la distribución normal e independiente de los residuos, con un valor esperado de 0 y con variancia constante, o bien homocedasticidad):
library(stats)
modelo.lineal<-lm(Precio~m2+Año+Calefaccion,datos)
summary(modelo.lineal)
plot(modelo.lineal$residuals) # realizamos el gráfico de probabilidad normal donde vemos que los residuos se desvían de la normalidad
shapiro.test(modelo.lineal$residuals) # al realizar el test de normalidad, como el p<0.01 rechazamos la hipótesis de normalidad
Vemos entonces que no es una buena decisión utilizar el modelo lineal para describir al conjunto de datos, por lo que recurrimos a un modelo no lineal.
Para utilizar la función 'gamlss' debemos elegir qué función de probabilidad describe mejor a la variable respuesta. Recuperando conceptos trabajados en la unidad 2, por las características de la variable precio podemos pensar en una distribución gamma (aunque también podríamos chequear otras distribuciones, en el anexo se muestra cómo).
modelo.gamlss <- gamlss(
  formula = Precio ~ m2+Año+Calefaccion,
  family  = GA,
# indicamos que el modelo de la distribución de la variable dependiente es gamma
data    = datos,
  trace   = FALSE)
summary(modelo.gamlss)
plot(modelo.gamlss)
# para corroborar el cumplimiento de los supuestos del modelo
Concluimos que es un buen ajuste y la ecuación modelo es la siguiente:
Precio = 2.84 + 0.011 m
2
+
0.02 Año
-  0.32 Calefacción
