# Material teórico-práctico para acompañar los videos para Reasignar y modificar elementos

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=213504_

Asignar nombres a columnas y filas
Con el siguiente ejemplo trabajaremos sobre el data frame anterior, estamos considerando qué dias está libre el aula según el color indicado.
colnames(data_frame_1)<-c("Dias","Color Aula","Bancos","Libre")
# de esta manera asignamos el nombre a cada columna
rownames(data_frame_1)<-vector_caracter_1
# de esta manera asignamos el nombre a cada fila
Modificar un elemento en particular
matriz_1[1,1]<-11
# la indexación es un sistema que permite acceder o modificar elementos de un objeto. M[i,j] es el valor de la i-ésima fila y j-ésima columna de la matriz M.
Utilizar operadores
Existen distintos tipos de operadores en R, agrupados según si son:
Aritméticos: adición (+), sustracción (-), multiplicación (*), división (/) y potencia (^).
Comparativos: menor (<), mayor (>), menor o igual (<=), mayor o igual (>=), igual (==) y distinto (!=).
Lógicos: dados "a" e "a" tenemos los operadores y (a&b) u o (a|b).
A continuación utilizaremos operadores aritméticos:
1+2
1*3
1-4
4/2
2^3
Ahora vamos a generar una columna nueva que modifique los valores de la columna llamada Bancos y duplique los valores:
data_frame_1$'Bancos modif'<-data_frame_1$Bancos*2
# la primera parte de la sentencia genera una columna nueva llamada "Bancos modif" en la cual van a estar los valores correspondiente a la operación Bancos * 2
data_frame_1[,5]<-data_frame_1$Bancos*2.5
# la primera parte de la sentencia indica, mediante indexación, que en todas las filas de la columna 5 coloque los valores correspondiente a la operación Bancos * 2.5
