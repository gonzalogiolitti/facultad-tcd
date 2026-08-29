# Material teórico-práctico para acompañar los videos para Ingresar y guardar datos en R

_Fuente: https://virtual.ugr.edu.ar/mod/page/view.php?id=213575_

En la sección de
archivos extra
encontrarán dos archivos, cada uno con uno de los dos formatos de tablas utilizados.
9. Ingresar datos utilizando utilizando las funciones read
Muchas veces nos interesa ingrear los datos desde archivos ya generados.
función read.delim: nos permite copiar la información que tenemos en el portapapeles (clipboard):
tabla_1<-read.delim("clipboard")
# este comando funciona para Windows y Unix, para Mac utilizar tabla1<-read.delim(pipe("pbpaste"))
tabla_2<-read.delim("clipboard", sep="\t", row.names=TRUE, col.names=TRUE)
# añadiendo estos argumentos puedo mejorar la visualización de la tabla
función read.csv: nos permite ingresar la tabla en formato de csv o txt desde el entorno de Rstudio o por la consola:
tabla_3<-read.csv("~/Inferencia y estadística/Unidad 1/Tabla.txt", sep="")
# chequear antes la ruta de acceso al documento
función read_excel: nos permite ingresar la tabla en formato xlsx desde el entorno de Rstudio o por la consola:
install.packages("readxl")
# hay versiones que requieren previa instalación
library("readxl")
# si lo hacemos desde la consola primero debemos "llamar" a la librería. Si lo cargamos desde el entorno, este paso no es necesario
tabla_4<-read_excel("
~/Inferencia y estadística/Unidad 1/Tabla.
xlsx", sep="")
#
chequear antes la ruta de acceso al documento
10. Guardar datos en una tabla utilizando la función write.table()
write.table(data_frame_1, "Tabla propia.txt", row.names= TRUE, col.names = TRUE)
# guardamos el data frame 1 antes creado
write.table(data_frame_1, "Tabla propia 2.txt", col.names = FALSE)
# guardamos el data frame 1 antes creado pero sin los nombres de columna y filas
