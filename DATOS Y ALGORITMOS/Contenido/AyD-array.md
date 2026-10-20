<!-- página 1 -->

Arrays
Arreglos

---

<!-- página 2 -->

Hasta ahora, para hacer referencia a un dato utilizabamos una 
variable. El problema se plantea cuando tenemos gran cantidad de 
datos que guardan entre sí una relación. No podemos utilizar una 
variable para cada dato.
Para resolver estas dificultades se agrupan los datos en un mismo 
conjunto, estos conjuntos reciben el nombre de estructura de datos 
o arreglos o arrays.
Introducción

---

<!-- página 3 -->

Es un tipo de dato estructurado.
Permite agrupar en una entidad varios datos.
Tiene las siguientes características:
- Tienen tamaño fijo.
- Todos sus elementos son del mismo tipo.
- El tipo de sus elementos puede ser cualquiera (real, string, otro 
array, record....).
- Están ubicados en la memoria principal.
Un tipo de arreglo son nuestros conocidos, vectores y matrices.
Los elementos del arreglo son referenciados a través de índices de 
manera unívoca.
¿Qué es un Array?

---

<!-- página 4 -->

Para declarar un array debemos indicar el número de elementos que 
va a tener el array.
<tipo> <identificador>[N]
Declaración de arrays

---

<!-- página 5 -->

Por ejemplo definimos un array de una dimensión (también llamado 
vector) de 10 elementos enteros.
int vector[10];
Otro ejemplo, definir un array de dos dimensiones (también llamado 
matriz o tabla) de 3 filas y cuatro columnas de cadenas.
string tabla[3][4];
Ejemplos

---

<!-- página 6 -->

Unidimensional y 
Bidimensional

---

<!-- página 7 -->

Leer dos arreglos unidimensionales a y b, de 5 elementos reales cada 
uno. Calcular la suma del producto de sus elementos de igual 
posición y mostrarlo. Suponemos que leemos primero a y luego b.
Problema 1

---

<!-- página 8 -->

inicio
para i <- 1, 5, 1
leer ai
para i <- 1, 5, 1
leer bi
fin (para)
fin (para)
sum <- 0
para i <- 1, 5, 1
sum <- sum + ai * bi
sum
fin (para)

---

<!-- página 9 -->

Algoritmo Problema1
Definir a Como Real
Dimension a[5]
Definir b Como Real
Dimension b[5]
Para i<-1 Hasta 5 Con Paso 1 Hacer
Escribir "Ingrese el elemento ", i, " del 1er array: "
Leer a[i]
Escribir "Ingrese el elemento ", i, " del 2do array: "
Leer b[i]
Fin Para
c<-0
Para i<-1 Hasta 5 Con Paso 1 Hacer
c<- c+a[i]*b[i]
Fin Para
Escribir "La suma del producto de los elementos de igual posicion de los arrays ingresados 
anteriormente es: ", c
FinAlgoritmo

---

<!-- página 10 -->

Leer por filas un arreglo entero bi-dimensional de cuatro filas y tres 
columnas y armar un arreglo unidimensional con la suma de los 
elementos de cada fila y otro con la suma de los elementos de cada 
columna. Mostrar los resultados.
Problema 2

---

<!-- página 11 -->

Problema 2 - Resolución 
Algoritmo Problema2
Definir a Como Entero
Dimension a[4,3]
Definir sumf Como Entero
Dimension sumf[4]
Definir sumc Como Entero
Dimension sumc[3]
Para i<-1 Hasta 4 Con Paso 1 Hacer
Para j<- 1 Hasta 3 Con Paso 1 Hacer
Escribir "Ingrese el elemento de la fila ", i-1, ", columna ", j
Leer a[i,j]
FinPara
Fin Para
Para i<-1 Hasta 4 Con Paso 1 Hacer
sumf[i]<-0
Para j<- 1 Hasta 3 Con Paso 1 Hacer
sumf[i]<-sumf[i]+a[i,j]
FinPara
Fin Para
Para j<-1 Hasta 3 Con Paso 1 Hacer
sumc[j]<-0
Para i <- 1 Hasta 4 Con Paso 1 Hacer
sumc[j]<-sumc[j]+a[i,j]
FinPara
FinPara

---

<!-- página 12 -->

Problema 2 - Resolución 
Para i<-1 Hasta 4 Con Paso 1 Hacer
sumf[i]<-0
Para j<- 1 Hasta 3 Con Paso 1 Hacer
sumf[i]<-sumf[i]+a[i,j]
FinPara
Fin Para
Escribir "El array con la suma de los elementos de cada fila es: " 
Para i<-1 Hasta 4 Con Paso 1 Hacer
Escribir sumf[i]
FinPara
Escribir "El array con la suma de los elementos de cada columna es: " 
Para i<-1 Hasta 3 Con Paso 1 Hacer
Escribir sumc[i]
FinPara
FinAlgoritmo

---

<!-- página 13 -->

Una escuela tiene cinco grados (numerados del 1 al 5), de cada uno 
de los cuales hay cuatro divisiones (numeradas del 1 al 4) y se desea 
analizar para cada grado las cantidades de alumnos que concurren a 
cada uno de ellos. 
Leer por grado la cantidad de alumnos de cada uno de los veinte 
cursos e informar cual es el grado y división que tiene mas alumnos 
(se supone que es uno solo).
Problema 3

---

<!-- página 14 -->

Algoritmo prueba1
Definir escu Como Entero
Dimension escu[5,4]
Para i<-1 Hasta 5 Con Paso 1 Hacer
Para j<- 1 Hasta 4 Con Paso 1 Hacer
Escribir "la cantidad de alumnos del grado ", i, " division ", j
Leer escu[i,j]
FinPara
Fin Para
gradomax <- 1
divmax <- 1
maxalum <- escu[1,1]
Para i<-1 Hasta 5 Con Paso 1 Hacer
Para j<- 1 Hasta 4 Con Paso 1 Hacer
Si escu[i,j]>maxalum Entonces
gradomax <- i
divmax <- j
maxalum <- escu[i,j]
Fin Si
FinPara
Fin Para
Escribir "Con ", maxalum, " alumnos, el grado ", gradomax, " division ", divmax, " es el mayor"
FinAlgoritmo
Problema 3 - Resolución

---

<!-- página 15 -->

Tareas sobre Arrays
CLASIFICACIÓN , BÚSQUEDA E 
INTERCALACIÓN

---

<!-- página 16 -->

Clasificación (Ordenamiento): Dado un arreglo, clasificar 
(reordenar) sus elementos de modo que queden en forma creciente 
(o decreciente).
Búsqueda: Dado un arreglo, determinar si un cierto dato se 
encuentra o no dentro de él.
Intercalación: Dados dos arreglos que contengan elementos del 
mismo tipo, ambos clasificados con el mismo criterio, no 
necesariamente ambos con la misma cantidad de elementos. Armar 
un tercer arreglo que contenga los elementos de ambos y que esté 
clasificado con el mismo criterio.
Introducción

---

<!-- página 17 -->

Clasificación

---

<!-- página 18 -->

Veremos dos metodos (existen otros):
-
Por Intercambio (burbuja):
-
Por selección de mínimo:
Introducción

---

<!-- página 19 -->

Consiste en comparar el último elemento del arreglo con el penúltimo, 
si están en el orden buscado, se los deja así, si no, se los 
intercambia. Luego se compara el penúltimo con el antepenúltimo, si 
están en el orden buscado, se los deja así, si no, se los intercambia. 
Y así sucesivamente hasta repetir lo mismo, comparando el primer 
elemento con el segundo. De esta manera, nos aseguramos que en 
la primer posición quedó el menor o el mas liviano, elemento que se 
comportó como una burbuja.
Repetimos lo mismo, siempre comenzando desde el fondo del 
arreglo, pero esta vez llegamos hasta la segunda posición del arreglo. 
Estamos seguros que los dos mas pequeños quedaron en las dos 
primeras posiciones y en orden.
Repetimos siempre lo mismo hasta la penúltima posición con lo que 
garantizamos que hasta la penúltima posición quedaron en orden, y 
por lo tanto la última también.
Intercambio

---

<!-- página 20 -->

Ejemplo Intercambio

---

<!-- página 21 -->

Leer un arreglo de 5 elementos enteros, clasificarlo por el método de 
intercambio. Imprimirlo clasificado.
Problema 4

---

<!-- página 22 -->

Algoritmo Intercambio
Definir a Como Entero
Dimension a[6]
Para i<-1 Hasta 6 Con Paso 1 Hacer
Escribir "ingrese el numero ", i
Leer a[i]
Fin Para
Para i <- 1 Hasta  5 Con Paso 1 Hacer
Para j <- 5 Hasta i Con Paso -1 Hacer
Si a[j] > a[j+1] Entonces
aux <- a[j]
a[j] <- a[j+1]
a[j+1] <- aux
FinSi
FinPara
FinPara
Para i <- 1 Hasta 6 Con Paso 1 Hacer
Escribir a[i]
FinPara
FinAlgoritmo
Problema 4

---

<!-- página 23 -->

En un primer paso, se busca el mínimo de todos los elementos del 
arreglo (memorizando valor y posición) y se lo intercambia con el que 
está en la primera posición. Luego se vuelve a buscar el mínimo, pero 
buscando desde la segunda posición en adelante y se lo intercambia 
con el segundo. Así sucesivamente hasta llegar al penúltimo 
elemento.
Por selección del mínimo

---

<!-- página 24 -->

Ejemplo Selección

---

<!-- página 25 -->

Leer un arreglo de 5 elementos enteros, clasificarlo por el método de 
selección del mínimo. Imprimirlo clasificado.
Problema 5

---

<!-- página 26 -->

Algoritmo Seleccion
Definir a Como Entero
Dimension a[6]
Para i<-1 Hasta 6 Con Paso 1 Hacer
Escribir "ingrese el numero ", i
Leer a[i]
Fin Para
Para i <- 1 Hasta 5 Con Paso 1 Hacer
min <- a[i]
posmin <- i
Para j <- i+1 Hasta 6 Con Paso 1 Hacer
Si a[j] < min Entonces
min <- a[j]
posmin <- j
FinSi
FinPara
a[posmin] <- a[i]
a[i] <- min
FinPara
Para i <- 1 Hasta 6 Con Paso 1 Hacer
Escribir a[i]
FinPara
FinAlgoritmo
Problema 5

---

<!-- página 27 -->

Búsqueda

---

<!-- página 28 -->

Dado un arreglo averiguar si dentro del arreglo está, o no un determinado 
elemento. Existen muchos métodos de búsqueda, cada uno con diferentes 
variaciones. Veremos sólo dos:
-
Búsqueda secuencial: sirve en ambos casos, pero en arreglos 
clasificados, de muchos elementos, si bien funciona, es ineficiente y no 
deberíamos usarla.
-
Búsqueda binaria (o dicotómica): sirve si el arreglo está clasificado. Si 
no tenemos garantía de que el arreglo esté clasificado, no hay que usarla.
Introducción

---

<!-- página 29 -->

También en cada uno de los métodos podemos distinguir dos posibilidades. 
Que, en caso de estar el elemento buscado tenga la posibilidad de estar mas 
de una vez y debamos decidir si nos conformamos con encontrar una 
ocurrencia, o querramos encontrar todas.
Introducción

---

<!-- página 30 -->

Consiste en recorrer uno a uno los elementos del arreglo (no 
clasificado) y compararlos con k hasta encontrarlo o no.
Para ejemplificar, supongamos que tenemos el arreglo a de 7 
elementos enteros y deseamos saber si un cierto entero k está o no 
dentro del arreglo, y si está, en que posición está su primer 
ocurrencia. Supongamos
Búsqueda Secuencial

---

<!-- página 31 -->

Búsqueda Secuencial

---

<!-- página 32 -->

Leer un arreglo de 7 elementos enteros. Leer luego un entero. 
Informar si este entero está o no. Si está, informar la posición de su 
primera ocurrencia.
Problema 6

---

<!-- página 33 -->

Algoritmo busquedasecuencia
Definir a Como Entero
Dimension a[7]
Para i<-1 Hasta 7 Con Paso 1 Hacer
Escribir "Ingrese el numero ", i
Leer a[i]
Fin Para
Escribir "Ingrese el numero que desea buscar"
Leer k
i<-1
Escribir a[i]
Escribir k
Mientras (a[i] <> k Y i <= 7) Hacer
i<-i+1
Fin Mientras
Si a[i] = k Entonces
Escribir "Esta en la posicion ", i
SiNo
Escribir "No esta"
Fin Si
FinAlgoritmo
Problema 6

---

<!-- página 34 -->

Leer un arreglo de 7 elementos enteros. Leer luego un entero. 
Informar si ese entero está o no. Si está, informar la posición de todas 
sus ocurrencias.
Problema Ejercicio

---

<!-- página 35 -->

Algoritmo EjercicioTarea
Definir a Como Entero
Dimension a[7]
Para i<-1 Hasta 7 Con Paso 1 Hacer
Escribir "Ingrese el numero ", i
Leer a[i]
Fin Para
Escribir "Ingrese el numero buscado"
Leer k
esta <- Falso
Para i<-1 Hasta 7 Con Paso 1 Hacer
Si a[i] = k Entonces
Escribir "Esta en la posicion ", i
esta <- Verdadero
Fin Si
Fin Para
Si esta = Falso Entonces
Escribir "No esta"
Fin Si
FinAlgoritmo
Solución problema ejercicio

---

<!-- página 36 -->

Consiste en tener dos indicadores, uno de la posición de menor orden 
(min) y otro de la posición de mayor orden (max). Al principio uno 
valdrá 1 y el otro N, suponiendo que la cantidad de elementos sea N.
Probamos si el elemento que está en el “medio” del arreglo es igual al 
buscado.
Si es el buscado, lo hemos encontrado y finaliza el algoritmo 
(suponemos que nos conformamos con una sola ocurrencia).
Si no es el buscado, nos fijamos si es mayor o menor al buscado, y 
como el arreglo está clasificado, si el elemento del “medio” es menor, 
si el buscado está, está en la parte de “abajo” (o la derecha depende 
como representemos el arreglo), y nos quedamos con esa parte 
bajando min hasta medio, pero como ya sabíamos que el del “medio” 
no era, lo bajamos una posición más, es decir hacemos
min ← medio + 1
 
Búsqueda Dicotómica

---

<!-- página 37 -->

Análogo razonamiento si el elemento del “medio” es mayor.
En nuestro algoritmo si max y min son de distinta paridad, su 
promedio daría “coma cinco” lo que está prohibido como índice, 
entonces tomamos la división entera, es decir hacemos
medio ← ( min + max ) div 2 donde con div simbolizamos la división 
entera.
 
Búsqueda Dicotómica

---

<!-- página 38 -->

Vamos a ejemplificar para el caso de búsqueda exitosa (el elemento 
buscado se encuentra en el arreglo). Supongamos que el elemento 
que busco es 9 ( k = 9 ).
Ejemplo

---

<!-- página 39 -->

Vamos a ejemplificar para el caso de búsqueda fallida (el elemento 
buscado NO se encuentra en el arreglo). Supongamos que el 
elemento que busco es 23 ( k = 23 )
Ejemplo

---

<!-- página 40 -->

Si un arreglo clasificado tiene elementos repetidos, estarán 
agrupados en posiciones adyacentes. Aplicando el algoritmo de 
búsqueda dicotómica, que es mucho más rápido que el secuencial, 
encontraremos uno, pero no sabemos si es el “primero”, el “último”, o 
uno cualquiera del grupo, hacemos lo siguiente: vamos “hacia arriba” 
hasta llegar al primer elemento del grupo igual a la clave y luego 
“bajamos” listando las posiciones mientras los elementos sean 
iguales al buscado.
Consideración

---

<!-- página 41 -->

Leer un arreglo de 11 elementos enteros, se sabe que está clasificado 
en forma creciente. Leer luego un entero. Informar si ese entero está 
o no. Si está, informar su posición. Interesa ubicar una sola 
ocurrencia.
Problema 7

---

<!-- página 42 -->

Solución Problema 7
Algoritmo BusquedaDicotomica
Definir a Como Entero
Dimension a[11]
Para i<-1 Hasta 11 Con Paso 1 Hacer
Escribir "Ingrese el numero ", i
Leer a[i]
Fin Para
Escribir "Ingrese el numero buscado: "
Leer k
min <- 1
max <- 11
medio <- round((min + max) / 2)
Mientras a[medio] <> k Y min <= max Hacer
Si a[medio] < k Entonces
min <- medio + 1
SiNo
max <- medio - 1
FinSi
medio <- round((min + max) / 2)
Fin Mientras
Si a[medio] = k Entonces
Escribir "Esta en la posicion ", medio
SiNo
Escribir "No esta"
FinSi
FinAlgoritmo