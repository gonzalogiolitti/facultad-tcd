# Material teórico-práctico para acompañar los videos de Tipos de objetos en R

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=213399_

Como se mencionó anteriormente R es un lenguaje orientado a objetos. Bajo la categoría objeto podemos guardar cadenas de caracteres (character), lógicos o booleanos (logical), números reales (numeric), números enteros (integer), números complejos (complex). Estos objetos se estructuran en clases que que pueden ser vectores, matrices, factores, listas o data frames. Éstos últimos 2 se caracterizan por tener elementos de distintas clases.
4. Vectores
Los vectores constituyen una estructura simple y son una colección ordenada de elementos. A continuación construiremos distintos vectores:
vector_numerico_1<-c(1,2,3,4,5)
vector_numerico_2<-c(1:5)
# indico el valor de inicio y valor de finalización
vector_numerico_3<-seq(1,5,1)
# indico el valor de inicio, de finalización y el valor de incremento
vector_numerico_4<-runif(5,1,5)
# indico la cantidad de números, el menor y el mayor
vector_caracter_1<-c("a","b","c","d","e")
# el encomillado indica que son caracteres
vector_caracter_2<-c(rep("a",3),rep("b",2))
# indico primero el valor que quiero que se repita y luego separado con coma el número de veces
vector_logico<-c(T,T,F,F,T)
# al utilizar la T (True) y la F (False) que son letras sin encomillado, lo toma como vector lógico
5. Factores
Los factores constituyen un tipo especial de vectores que se utilizan para datos categóricos.
factor_1<-factor(vector_caracter_2,c("a","b"),c("Amarillo","Blanco"))
# convertimos el vector_caracter_2 en un objeto factor_1 de dos niveles
Aquí también utilizamos una función, factor () para generar un nuevo objeto a partir de otro ya creado.
La función factor necesita 3 datos: el vector a convertir, los niveles del factor y las etiquetas de dichos niveles:
factor( vector_a_convertir_en_un_factor, niveles del factor, etiquetas de los niveles)
6. Matrices
Las matrices son arreglos de números en dos dimesiones y se pueden generar con la función matrix (). La función solicita 3 datos:
matrix(valores, nº de filas, nº de columnas)
.
matriz_1<-matrix(1:10,4,5,byrow = TRUE)
# aquí le indicamos que coloque los números del 1 al 10 ordenados en 4 filas y 5 columnas, comenzando a ubicarlos por fila. Por default el orden lo hace por columna
matriz_2<-matrix(1:10,4,5)
#
comparemos ambas matrices
7. Listas
Las listas son una colección ordenada de objetos y pueden crearse con la función list(). Sus argumentos son
list(nombre_del_objeto_1=objeto_1, …, nombre_del_objeto_i=objeto_i)
.
lista_1<-list(Dias=c("Lunes", "Martes", "Miercoles", "Jueves", "Viernes"), Cantidad=c(6,5,3,5,9))
# en esta lista hay dos componentes; uno llamado Dias y el otro Cantidad
lista_1$Dias
# de esta manera inspecciono los datos guardados en el componente Dias del objeto lista_1
8. Data frames
Los data frames o, en español, hoja de datos; tienen una estructura similar a la de una matriz pero puede contener clases de datos heterogéneos. Podemos generar un data frame con la función data.frame(), cuyos argumentos son vectores que constituirán las columnas.
data_frame_1<-data.frame(lista_1$Dias,factor_1,lista_1$Cantidad,vector_logico)
