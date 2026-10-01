# Ejercitación teórico-práctica (contraste de dos muestras, normales e independientes)

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=221080_

Supongamos que queremos determinar si hay diferencias entre el nivel de expresión promedio de cierta proteína asociada a cáncer en personas que habitan en dos ciudades diferentes. Se sabe que la expresión promedio de dicha proteína es 258 mg/ml.
Variable en estudio: Nivel de expresión de proteína (mg/ml)
Unidad elemental: persona con cáncer
Factor en estudio: ciudad en la que habita
Niveles del factor: ciudad 1 y ciudad 2
Nos podemos plantear distintas hipótesis, como por ejemplo:
No hay diferencias en los niveles de expresión entre ambas ciudades
En una ciudad  el nivel de la expresión es mayor
La cantidad de personas con niveles de expresión mayor al deseado es igual en ambas ciudades
En una ciudad la cantidad de personas con niveles de expresión menor al deseado
En términos formales deberíamos plantear las hipótesis de la siguiente manera:
Hipótesis nula: la expresión promedio de la proteína de interés en la ciudad 1 es igual a la de la ciudad 2  o bien,  H0)
µ1=
µ2
Hipótesis alternativa: la expresión promedio de la proteína de interés en la ciudad 1 es mayor a la de la ciudad 2 o bien, H1)
µ1>
µ2
Hipótesis nula: la proporción de personas con expresión mayor al deseado en la ciudad 1 es igual a la de la ciudad 2  o bien,  H0) p
1=p
2
Hipótesis alternativa: la proporción de personas con expresión mayor al deseado en la ciudad 1 es menor a la de la ciudad 2  , H1) p
1<p
2
Para contrastar las primeras dos hipótesis, referidas a la expresión promedio, podemos utilizar el siguiente código en R:
Como primer paso generamos los datos de cada ciudad:
ciudad1<-c(241,232,234,252,251,238,241,247,244,250,246,255,237,247,244)
ciudad2<-c(300,318,294,298,305,288,288,303,293,300,305,291,307,301,299)
Luego, vamos a realizar un test de normalidad, es decir, vamos a corroborar si
hay evidencia para suponer que el conjunto de datos proviene de una distribución normal
lapply(
# me permite aplicar una función a diferentes objetos
data.frame(ciudad1,ciudad2),
# los objetos están un df
shapiro.test)
# función que quiero aplicar
La salida es la siguiente:
$ciudad1
Shapiro-Wilk normality test
data:  X[[i]]
W = 0.9816, p-value = 0.9792
$ciudad2
Shapiro-Wilk normality test
data:  X[[i]]
W = 0.95585, p-value = 0.6207
Como ambos p-value son mayores a 0.05, que es nuestro nivel de significación,
no
rechazamos la hipótesis de que los datos siguen una distribución normal.
El paso siguiente entonces, es realizar un test T:
t.test(ciudad1,
ciudad2,
alternative = "less",
# aquí podemos elegir "two.sided" para bilaterlal, es decir que evalue si son distintas, o "greater" para unilateral a la derecha, es decir la diferencia de medias es mayor a 0 (lo que significa que en la ciudad 1 la expresión es mayor que en la ciudad 2)
paired=FALSE,
# las muestras no están apareadas,
conf.level=0.95,
# valor de 1-alfa
var.equal = TRUE
#
consideramos las variancias iguales, pueden ser diferentes también. Esto se corrobora con bartlett.test
)
La salida es la siguiente:
Two Sample t-test
data:  ciudad1 and ciudad2
t = -20.646, df = 28, p-value < 2.2e-16
alternative hypothesis: true difference in means is less than 0
95 percent confidence interval:
-Inf -50.84855
sample estimates:
mean of x mean of y
243.9547  299.3692
En la salida tenemos un p-value < 0.05, entonces tenemos evidencia para rechazar la hipótesis nula y por lo tanto concluir que en la ciudad 2 el nivel de expresión es mayor. Esta conclusión puede ser realizada porque el test contrasta diferencia de medias; por lo que la hipótesis alternativa se plantea como: media de la ciudad 1 - media ciudad 2 < 0, de ahí el
'alternative=less'.
Conclusión: Con un nivel de significación del 5% los niveles de expresión en ambas ciudades es distinto, siendo la expresión en la ciudad 2 mayor a la ciudad 1.
Para contrastar las primeras dos hipótesis, referidas a la proporción, podemos utilizar el siguiente código en R:
Utilizaremos la función 'prop.test':
prop.test(x=c(sum(ciudad1>255),sum(ciudad2>255)),
# de esta manera ingreso la frecuencia absoluta de casos mayores al valor límite
n=c(15,15),
# como son dos grupos, debo dar dos valores de extensión de muestra, pueden o no ser iguales
alternative = "less",
# de esta manera digo que p1<p2 por lo que p1<-p2<0
conf.level = 0.95)
# valor de 1-alfa
La salida es la siguiente:
2-sample test for equality of proportions with continuity correction
data:  c(sum(ciudad1 > 255), sum(ciudad2 > 255)) out of c(15, 15)
X-squared = 22.634, df = 1, p-value = 9.8e-07
alternative hypothesis: less
95 percent confidence interval:
-1.000000 -0.760728
sample estimates:
prop 1     prop 2
0.06666667 1.00000000
En la salida tenemos un p-value < 0.05, entonces tenemos evidencia para rechazar la hipótesis nula.
Conclusión: Con un nivel de significación del 5% la proporción de personas con expresión mayor al deseado en la ciudad 1 es menor a la de la ciudad 2 .
