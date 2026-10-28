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
Escribir "Ingrese el elemento de la fila ", i, ", columna ", j
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

---

<!-- página 43 -->

Intercalación

---

<!-- página 44 -->

Tenemos dos arreglos, ambos del mismo tipo de elementos. Ambos 
clasificados con el mismo criterio (ambos en forma creciente o ambos 
en forma decreciente).
No necesariamente ambos con la misma cantidad de elementos. 
Llamemos a y b a ambos arreglos.
Sea N la cantidad de elementos de a, y sea M la cantidad de 
elementos de b. Queremos armar un nuevo arreglo c que contenga 
todos los elementos de a y todos los elementos de b (es decir que 
tenga N+M elementos) y que esté también clasificado con el mismo 
criterio.
Introducción

---

<!-- página 45 -->

Ejemplo

---

<!-- página 46 -->

Sería muy ineficiente armar un nuevo arreglo que contenga al 
principio los elementos de a y al final los de b y luego clasificarlo.
Sea i el índice con que recorremos a; j el índice con que recorremos b 
y k el de c.
La idea es recorrer desde el principio los arreglos a y b, comenzamos 
con los índices i, j, k en 1 comparamos ai con bj y al elemento menor 
lo copiamos en ck, incrementamos en 1 a k y al índice del arreglo del 
que hayamos copiado, así hasta agotar uno de los dos arreglos, 
luego ponemos los elementos que quedaban sin colocar del otro, “al 
final” de c.
Consideración

---

<!-- página 47 -->

Leer un arreglo de 3 elementos enteros (se sabe que ingresa 
clasificado en forma creciente), leer luego un arreglo de 7 elementos 
enteros (se sabe que ingresa clasificado en forma creciente). Formar 
un arreglo que contenga todos los elementos del primero y todos los 
elementos del segundo y que también esté clasificado en forma 
creciente.
Problema 8

---

<!-- página 48 -->

Algoritmo Intercalacion
Definir a Como Entero
Dimension a[3]
Definir b Como Entero
Dimension b[7]
Definir c Como Entero
Dimension c[10]
Para i<-1 Hasta 3 Con Paso 1 Hacer
Escribir "Ingrese el numero ", i, " del primer array: "
Leer a[i]
Fin Para
Para i<-1 Hasta 7 Con Paso 1 Hacer
Escribir "Ingrese el numero ", i, " del segundo array: "
Leer b[i]
Fin Para
i <- 1
j <- 1
k <- 1
Solución Problema 8

---

<!-- página 49 -->

Mientras i<=3 Y j<=7 Hacer
Si a[i] <= b[j] Entonces
c[k] <- a[i]
i <- i+1
SiNo
c[k] <- b[j]
j <- j+1
FinSi
k <- k+1
Fin Mientras
Si i>3 Entonces
Para m<-j Hasta 7 Con Paso 1 Hacer
c[k] <- b[m]
k<-k+1
Fin Para
SiNo
Para m<-i Hasta 3 Con Paso 1 Hacer
c[k] <- a[m]
k<-k+1
Fin Para
FinSi
Para i <-1 Hasta 10 Con Paso 1 Hacer
Escribir c[i]
Fin Para
FinAlgoritmo
Solución Problema 8 (Cont)

---

<!-- página 50 -->

Eficiencia del 
Algoritmo

---

<!-- página 51 -->

¿Por qué decimos que el algoritmo que acabamos de presentar es 
más eficiente que copiar a en c y a partir de ahí copiar b en c, para 
luego clasificar c?
En nuestro algoritmo no tenemos ningún anidamiento de estructuras 
de repetición. En cambio en los métodos de clasificación tenemos 
anidadas dos estructuras de repetición.
Eficiencia

---

<!-- página 52 -->

Ejercicios Pre-Parcial

---

<!-- página 53 -->

Se tienen como datos: número de vendedor e Importe de cada una de 
las ventas realizadas por cada uno de los vendedores de una 
empresa.
No se sabe cuántas ventas se han realizado por lo que un número de 
vendedor igual a cero indica fin de datos. Los vendedores están 
numerados del 1 al 3.
Al final mostrar código vendedor y la suma total que vendió.
Ejercicio 1

---

<!-- página 54 -->

Algoritmo Eje1PreParcial
Definir TotalVendedor Como Real
Dimension TotalVendedor[3]
Para i<-1 Hasta 3 Con Paso 1 Hacer
TotalVendedor[i] <- 0
Fin Para
Escribir "Ingrese el numero de vendedor: "
Leer nv
Mientras nv <> 0 Hacer
Escribir "Ingrese el monto de la venta: "
Leer mv
TotalVendedor[nv] <- TotalVendedor[nv] + mv
Escribir "Ingrese el numero de vendedor: "
Leer nv
Fin Mientras
Para i<-1 Hasta 3 Con Paso 1 Hacer
Escribir "El vendedor ", i, " vendio la suma total de: $ ", TotalVendedor[i]
Fin Para
FinAlgoritmo
Solución - Ejercicio 1

---

<!-- página 55 -->

Ingresar 20 números enteros en un arreglo y luego mostrarlos 
ordenados en forma decreciente.
Ejercicio 2

---

<!-- página 56 -->

Algoritmo Eje2PreParcial
Definir a Como Entero
Dimension a[20]
Para i<-1 Hasta 20 Con Paso 1 Hacer
Escribir "Ingrese el ", i, " numero: "
Leer a[i]
FinPara
Para i<-1 Hasta 19 Con Paso 1 Hacer
Para j<-i+1 Hasta 20 Con Paso 1 Hacer
Si a[i]<a[j] Entonces
aux<-a[i]
a[i]<-a[j]
a[j]<-aux
FinSi
FinPara
FinPara
Para i<- 1 Hasta 20 Con Paso 1 Hacer
Escribir a[i]
FinPara
FinAlgoritmo
Solución - Ejercicio 2

---

<!-- página 57 -->

Se ingresan 30 números enteros ordenados en forma creciente y un 
valor “n”. Se desea saber si el valor “n” coincide con algún elemento 
del arreglo; si es así, indicar la posición en que fue encontrado, sino 
exhibir cartel aclaratorio.
Ejercicio 3

---

<!-- página 58 -->

Algoritmo Eje3PreParcial
Definir a Como Entero
Dimension a[5]
Para i<-1 Hasta 5 Con Paso 1 Hacer
Escribir "Ingrese el ", i, " numero: "
Leer a[i]
FinPara
Escribir "Ingrese el numero buscado: "
Leer n
inf<-1
sup<-5
med<- redon((inf+sup)/2)
Mientras (inf<=sup) Y (n<>a[med]) Hacer
Si n<a[med] Entonces
sup<-med-1
SiNo
inf<-med+1
FinSi
med<- redon((inf+sup)/2)
FinMientras
Si n<>a[med]
Escribir "No se encontro"
SiNo
Escribir "El numero ", n, " se encuentra en la posicion ", med
FinSi
FinAlgoritmo
Solución - Ejercicio 3

---

<!-- página 59 -->

Se tienen los siguientes datos de 30 alumnos de primer año:
-
número de alumno (entero)
-
nota 1, nota 2, nota 3, nota 4 (entero)
Se desea cargar los datos en un arreglo bidimensional y luego exhibir 
el número de alumno que tuvo la mejor nota de todas y en que parcial 
la obtuvo.
Ejercicio 4

---

<!-- página 60 -->

Se tienen los siguientes datos de 30 alumnos de primer año:
-
número de alumno (entero)
-
nota 1, nota 2, nota 3, nota 4 (entero)
Se desea cargar los datos en un arreglo bidimensional y luego exhibir 
el número de alumno que tuvo la mejor nota de todas y en que parcial 
la obtuvo.
Ejercicio 4

---

<!-- página 61 -->

Se tienen los siguientes datos de 30 alumnos de primer año:
-
número de alumno (entero)
-
nota 1, nota 2, nota 3, nota 4 (entero)
Se desea un listado de los mismos ordenados en forma creciente por 
número de alumno.
Ejercicio 5

---

<!-- página 62 -->

Se tienen los siguientes datos de 30 alumnos de primer año:
-
número de alumno (entero)
-
nota 1, nota 2, nota 3, nota 4 (entero)
Se desea un listado de los mismos ordenados en forma creciente por 
número de alumno.
Ejercicio 5

---

<!-- página 63 -->

Se tienen los siguientes datos de 30 alumnos de primer año:
-
número de alumno (entero)
-
nota 1, nota 2, nota 3, nota 4 (entero)
Se desea ingresar un número de alumno y buscarlo por medio de la 
búsqueda dicotómica dentro del arreglo. Si se encuentra, dar el 
número de alumno junto con las notas de los 4 parcial, sino exhibir 
cartel aclaratorio.
Ejercicio 6

---

<!-- página 64 -->

Suponga un array con 3 notas (correspondientes a tres materias) que 
van del 1 al 10. Calcule el promedio de los aprobados, el promedio de 
los desaprobados, la cantidad de aprobados y desaprobados. 
En total son 20 alumnos y se aprueba con 6.
Ejercicio 7

---

<!-- página 65 -->

Intercalación
Dos sucursales de una empresa registran sus ventas diarias en 
arreglos Alfa (9 valores) y Beta (7 valores), ambos ordenados en 
forma ascendente.
 Se pide combinar ambas ventas, manteniendo el orden ascendente 
durante la intercalación, y luego mostrar el resultado final en orden 
descendente (de mayor a menor venta).
Ejercicio 8

---

<!-- página 66 -->

Proceso Intercalacion_VentasSucursales
Definir A, B, total Como Entero
Dimension A[9], B[7], total[16]
Definir i, j, k, m Como Entero
// Ascendente
A[1]<-100; A[2]<-120; A[3]<-140; A[4]<-150; A[5]<-190; A[6]<-210; A[7]<-260; A[8]<-300; A[9]<-320
B[1]<-110; B[2]<-130; B[3]<-135; B[4]<-170; B[5]<-200; B[6]<-280; B[7]<-350
i<-1; j<-1; k<-1
Mientras i<=9 Y j<=7 Hacer
Si A[i] <= B[j] Entonces
total[k]<-A[i]; i<-i+1
SiNo
total[k]<-B[j]; j<-j+1
FinSi
k<-k+1
FinMientras
Si i>9 Entonces
Para m<-j Hasta 7
total[k]<-B[m]; k<-k+1
FinPara
SiNo
Para m<-i Hasta 9
total[k]<-A[m]; k<-k+1
FinPara
FinSi
Escribir "Combinado (desc):"
Para m<-16 Hasta 1 Con Paso -1
Escribir total[m]
FinPara
FinProceso
Solución - Ejercicio 8

---

<!-- página 67 -->

Intercalación
Se tienen las temperaturas registradas durante la mañana y la tarde 
en dos listados diferentes, cada uno con 6 valores ordenados 
ascendentemente.
Realizar la intercalación de ambos en uno solo que conserve el orden 
ascendente, y luego mostrar las temperaturas en forma descendente, 
es decir, desde la temperatura más alta hasta la más baja.
Ejercicio 9

---

<!-- página 68 -->

Proceso Intercalacion_Temperaturas
Definir man, tar, tot Como Real
Dimension man[6], tar[6], tot[12]
Definir i, j, k, m Como Entero
man[1]<-10.5; man[2]<-12.0; man[3]<-13.2; man[4]<-14.0; man[5]<-15.8; man[6]<-16.1
tar[1]<-11.0; tar[2]<-12.5; tar[3]<-14.1; tar[4]<-15.0; tar[5]<-16.2; tar[6]<-17.4
i<-1; j<-1; k<-1
Mientras i<=6 Y j<=6 Hacer
Si man[i] <= tar[j] Entonces
tot[k]<-man[i]; i<-i+1
SiNo
tot[k]<-tar[j]; j<-j+1
FinSi
k<-k+1
FinMientras
Si i>6 Entonces
Para m<-j Hasta 6
tot[k]<-tar[m]; k<-k+1
FinPara
SiNo
Para m<-i Hasta 6
tot[k]<-man[m]; k<-k+1
FinPara
FinSi
Escribir "Temperaturas (desc):"
Para m<-12 Hasta 1 Con Paso -1
Escribir tot[m]
FinPara
FinProceso
Solución - Ejercicio 9

---

<!-- página 69 -->

Intercalación
Dos ligas deportivas, Liga 1 (4 equipos) y Liga 2 (6 equipos), 
almacenan los puntos obtenidos por cada equipo en arreglos 
ordenados ascendentemente.
Se solicita intercalar los datos de ambas ligas en un solo arreglo que 
mantenga el orden ascendente y, finalmente, mostrar la lista de 
puntos en orden descendente, desde el mayor puntaje hasta el 
menor.
Ejercicio 10

---

<!-- página 70 -->

Proceso Intercalacion_PuntosLigas
Definir L1, L2, T Como Entero
Dimension L1[4], L2[6], T[10]
Definir i, j, k, m Como Entero
L1[1]<-12; L1[2]<-18; L1[3]<-21; L1[4]<-25
L2[1]<-10; L2[2]<-14; L2[3]<-16; L2[4]<-22; L2[5]<-27; L2[6]<-30
i<-1; j<-1; k<-1
Mientras i<=4 Y j<=6 Hacer
Si L1[i] <= L2[j] Entonces
T[k]<-L1[i]; i<-i+1
SiNo
T[k]<-L2[j]; j<-j+1
FinSi
k<-k+1
FinMientras
Si i>4 Entonces
Para m<-j Hasta 6
T[k]<-L2[m]; k<-k+1
FinPara
SiNo
Para m<-i Hasta 4
T[k]<-L1[m]; k<-k+1
FinPara
FinSi
Escribir "Puntos combinados (desc):"
Para m<-10 Hasta 1 Con Paso -1
Escribir T[m]
FinPara
FinProceso
Solución - Ejercicio 10