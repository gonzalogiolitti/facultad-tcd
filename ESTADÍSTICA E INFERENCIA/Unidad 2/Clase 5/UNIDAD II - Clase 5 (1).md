<!-- página 1 -->

Estadística inferencial
TECNICATURA 
UNIVERSITARIA EN CIENCIAS 
DE DATOS
2024
Esp. Aylén Avila

---

<!-- página 2 -->

●
Deﬁniciones Básicas. 
●
Etapas de un estudio estadístico. 
●
Introducción al análisis exploratorio de datos: Sumarización y visualización de datos. 
●
Distribución empírica. 
●
Distribuciones teóricas.
●
La distribución t de Student. 
●
Distribución Chi Cuadrado.
Contenidos
UNIDAD II
Introducción a los Estudios 
Estadísticos

---

<!-- página 3 -->

Distribución empírica
Introducción a los Estudios 
Estadísticos. 
Una distribución describe en términos matemáticos de qué manera se presenta un determinado fenómeno.
La distribución de una variable en un conjunto de datos, va a estar determinada por dos argumentos: los valores que 
toma la variable y la frecuencia con la que toma cada uno de los valores. 
Como mencionamos anteriormente, al explorar un conjunto de datos, buscamos describir los rasgos o características 
principales de las distribuciones de las variables. 
Frecuencia absoluta (f) de un valor (o de un intervalo): número de observaciones para las que la variable toma dicho 
valor.
Frecuencia relativa (h) es igual a la frecuencia absoluta dividida por el número total de datos (n). Siempre toma 
valores entre cero y uno. 
De la distribución de una variable cuantitativa nos interesa conocer:
●
Su posición: en torno a qué valor central toma valores la variable.
●
Su dispersión: el grado de concentración de los valores que toma la variable alrededor de su posición central.
●
Su forma: por ejemplo, la simetría, es decir, si los valores se reparten de la misma forma a uno y otro lado del 
valor central.

---

<!-- página 4 -->

Distribuciones teóricas
Introducción a los Estudios 
Estadísticos. 
La distribución de probabilidad de una variable aleatoria describe cuáles son los posibles valores (o rangos de 
valores) que la misma puede tomar, indicando cuál es la probabilidad asociada a los mismos.
Llamamos función de probabilidad o de densidad de probabilidad de una variable aleatoria discreta (v.a.d.) X, 
al conjunto de pares ordenados (x,p(x)). Siendo p(x) la probabilidad de que la v.a.d X tomo el valor x.
p(x) = P(X=x)
Hay distribuciones características de cada tipo de variable
Variables aleatorias discretas (v.a.d.)
Distribución de Bernoulli
Distribución binomial
Distribución de Poisson
Distribución geométrica
Distribución binomial negativa
Distribución hipergeométrica
Variables aleatorias continuas (v.a.c.)
Distribución uniforme
Distribución triangular
Distribución normal
Distribución exponencial
Distribución gamma
Distribución lognormal
Distribución de Weibull
Distribución beta

---

<!-- página 5 -->

Distribución de Bernoulli
Se aplica en situaciones donde sólo hay dos posibles resultados con probabilidad de ocurrencia p y 1 - p, respectivamente. Los valores que 
podría tomar esta distribución son, por lo tanto, éxito o fracaso. Un ejemplo sería determinar si una pieza de un lote saldrá defectuosa o no.
Se dice que X~Bernoulli (p) (lease X es una variable aleatoria con distribución de Bernoulli de parámetro p) si su función de probabilidad es: 
Distribución binomial 
Representa el número de veces que ocurre un resultado determinado  en n experimentos independientes, como podría ocurrir al determinar 
el número de piezas defectuosas en un lote o el número de peticiones de un producto determinado a una tienda.
Se dice que X~Binomial (p, n) (lease X es una variable aleatoria con distribución Binomial de parámetros p y n) si su función de densidad de 
probabilidad es: 
Distribución de Poisson
Pueden emplearse para modelar número de peticiones o de ocurrencias de un evento en un periodo de tiempo. La distribución de Poisson, 
aunque tiene una cola más corta y es menos ﬂexible, suele ser muy popular, al ser fácil de usar. Se trata de una distribución especialmente 
útil con eventos poco frecuentes, como el número de llamadas en una hora, el número de defectos en una pieza o el número de piezas 
fabricadas por minuto.
Se dice que X~Poisson (λ) (lease X es una variable aleatoria con distribución Binomial de parámetro λ) si su función de densidad de 
probabilidad es: 
Distribuciones teóricas en v.a.d.
Introducción a los Estudios 
Estadísticos.

---

<!-- página 6 -->

Con las distribuciones de variables continuas, lo primero que hay que determinar es si necesitamos una función acotada o no. Las 
distribuciones uniforme, triangular y beta están acotadas por los dos lados, es decir, establecen unos valores máximo y mínimo que vamos 
a poder generar. En el caso de la distribución beta, inicialmente entre 0 y 1, aunque puede escalarse y desplazarse con algunas 
transformaciones sencillas. 
Las distribuciones exponencial, gamma y Weibull son siempre mayores o iguales que 0; mientras la lognormal es estrictamente mayor que 
0. A priori, no sirven para representar v. a. que puedan tener valores negativos aunque siempre es posible desplazarlas para contemplar 
diferentes escenarios acotados en valores menores que 0.
La distribución normal no está acotada y hay que tener precaución al usarla en situaciones donde la v. a. que estamos modelando sí lo está. 
Por ejemplo, utilizar la distribución normal para modelar la altura o el peso de un conjunto de individuos es bastante habitual, ya que es 
muy difícil que se genere, por azar, una altura o peso negativas. Sin embargo, hay que tener cautela con v. a. donde la media sea cercana a 
0, o donde la desviación estándar sea del mismo o superior orden de magnitud que la media, ya que la probabilidad de que se generen 
valores negativos es muy alta
Si analizamos las distribuciones de probabilidad por sus usos más frecuentes, nos encontramos que la uniforme es la distribución de la 
máxima incertidumbre, usada únicamente cuando sólo podemos establecer un valor mínimo y máximo, pero no sabemos nada de la 
distribución de la v. a. dentro de ese intervalo.
Distribuciones teóricas en v.a.c.
Introducción a los Estudios 
Estadísticos.

---

<!-- página 7 -->

La distribución normal es la opción por defecto para casi cualquier situación, ya que es muy fácil calcular sus parámetros (media y 
desviación estándar) y, por el teorema central del límite, es una buena aproximación para cualquier fenómeno que sea resultado de una 
suma de factores. 
En general, puede ser adecuada para cualquier v. a. que tenga el 70% de los datos a una distancia inferior a la desviación estándar con 
respecto a la media. Hay que recordar que es simétrica, por lo que se comporta exactamente igual a ambos lados de la media, y tener 
cuidado con las situaciones que ya hemos visto donde deseamos una v. a. acotada en 0.
Se dice que X~Normal (μ; σ) (léase X es una variable aleatoria con distribución Normal de parámetros μ y σ) si su función de densidad de 
probabilidad es:
Distribuciones teóricas en v.a.c.
Introducción a los Estudios 
Estadísticos.

---

<!-- página 8 -->

Distribución t de Student
Introducción a los Estudios 
Estadísticos. 
La distribución t de Student es una distribución de probabilidad que se emplea para modelar datos que siguen una 
distribución normal y que tienen tamaños de muestra pequeños.
La importancia de la Distribución t radica en su capacidad para abordar muestras pequeñas, donde la varianza 
poblacional es desconocida. En tales casos, la Distribución t proporciona una herramienta valiosa para realizar 
inferencias estadísticas con mayor precisión que la Distribución normal estándar (Z).
Propiedades:
●
Simetría: La Distribución t es simétrica alrededor de su media, al igual que la Distribución normal.
●
Colas Pesadas: Una de las características distintivas de la Distribución t es que tiene colas más pesadas en 
comparación con la Distribución normal. Esto signiﬁca que es menos sensible a valores atípicos y extremos.
●
Grados de Libertad: El parámetro crítico que inﬂuye en la forma de la Distribución t es el número de grados 
de libertad (df). Cuanto mayor sea el número de grados de libertad, más se asemejará a una Distribución 
normal.
Se dice que X~t (n) (léase X es una variable aleatoria con distribución t de student de parámetro n)

---

<!-- página 9 -->

Distribución chi cuadrado
Introducción a los Estudios 
Estadísticos. 
La distribución chi cuadrada es un caso especial de la distribución gamma y se puede extender a un número no 
natural de grados de libertad. Es una familia de distribuciones donde cada distribución se deﬁne por los grados de 
libertad, cuanto menor sea el número de grados de libertad más asimétrica es. 
Propiedades:
●
Simetría: La Distribución chi es asimétrica a la derecha.
●
Grados de Libertad: Cuanto mayor sea el número de grados de libertad, más se asemejará a una Distribución 
normal.
Es muy utilizada para inferencia y pruebas de hipótesis, que veremos más adelante.
Se dice que X~ χ2 (k) (léase X es una variable aleatoria con distribución chi cuadrado de parámetro k)

---

<!-- página 10 -->

Distribuciones
Introducción a los Estudios 
Estadísticos. 
¡Manos a la obra!