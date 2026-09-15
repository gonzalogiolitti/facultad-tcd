<!-- página 1 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
 
Resolver los siguientes ejercicios utilizando draw.io para los diagramas de flujo y PseInt para 
escribir el pseudocódigo. 
Secuenciales 
1. Dados como datos dos números calcular la suma y el producto y mostrar los 
resultados. 
2. Dados como datos cinco números obtener el promedio e informar el resultado. 
3. Dadas las medidas de dos ángulos de un triángulo determinar la medida del tercero e 
informar el resultado. 
4. Dado como dato el importe de una factura, calcular el valor correspondiente al IVA e 
informarlo. 
5. Dado el importe bruto de una factura calcular el resultado de bonificarlo con un 4%. Al 
monto obtenido calcularle el IVA. Finalmente informar el importe bruto, el valor de la 
bonificación, el importe bruto bonificado, el monto correspondiente al IVA y el 
importe neto resultante. 
 
 
 
 
Decisión Simple 
 
6. Ingresar tres números enteros distintos. Determinar y mostrar si se ingresaron en 
forma creciente. 
7. Dado un número del 1 al 7, mostrar a qué día de la semana corresponde. 
8. Una fábrica desea controlar la calidad de dos piezas, A y B de las cuales se dan como 
dato el tipo de pieza y su medida en milímetros. Se debe indicar si la pieza cumple con 
las especificaciones de calidad que son las siguientes: 
 
Las piezas tipo A deben medir 165 mm y se admite un error de +/- 2 mm 
 
Las piezas tipo B deben medir 180 mm y se admite un error de +/- 3 mm 
9. Determinar si el primero de un conjunto de tres números dados, es mayor que los 
otros dos. 
10. Se ingresan seis números positivos DIFERENTES. Al finalizar,  mostrar un cartel que 
diga “El mayor número ingresado fue el xxx”. 
11. El mismo problema que en el punto anterior pero ahora le agregamos que diga en qué 
posición entró el mayor. (Ej: “el mayor fue xxx y entró quinto”) 
 
12. Una distribuidora de libros vende a librerías y a particulares. Aplica bonificaciones por 
cantidad según el siguiente criterio: 
i) 
A librerías: hasta 24 unidades, el 20%. Más de 24 unidades, el 25%.

---

<!-- página 2 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
ii) A particulares: menos de 6 unidades, nada; desde 6 y hasta 18 unidades, el 5%. 
Más de 18 unidades, el 10%. 
El tipo de cliente está codificado como “L” para librerías y “P” para particulares. Dado 
el importe bruto de una compra de libros, el tipo de cliente de que se trata y la 
cantidad total pedida por el mismo, determinar el importe bruto bonificado. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Soluciones: 
1)

---

<!-- página 3 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
Algoritmo Ejercicio_1 
    Leer A,B 
    Suma<-A + B 
    Prod<-A*B 
    Escribir "La suma es:", Suma 
    Escribir "El producto es: " Prod 
    FinAlgoritmo 
 
 
2) 
Algoritmo Ejercicio_2 
    Leer A,B,C,D,E 
        Prom<-(A+B+C+D+E)/5 
        Escribir "El promedio es: " Prom 
    FinAlgoritmo 
 
 
 
 
 
 
 
 
 
 
3)

---

<!-- página 4 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
Algoritmo Ejercicio_3     
    Leer Ang_1 
    Leer Ang_2 
    Ang_3<-180-Ang_1-Ang_2 
    Escribir "El tercer ángulo mide: ",Ang_3 
    FinAlgoritmo 
 
 
 
4) 
Algoritmo Ejercicio_4 
    Escribir "Ingrese el importe de la 
factura" 
    Leer Imp_Factura 
    IVA<-Imp_Factura*0.21 
    Escribir "El IVA correspondiente es: ", 
IVA 
FinAlgoritmo 
 
 
 
 
 
 
 
5)

---

<!-- página 5 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
Algoritmo Ejercicio_5 
    Escribir "Ingrese importe factura" 
    Leer Fact 
    desc<-Fact/100*4 
    Bonif<-Fact - desc 
    IVA<-Bonif * 0.21 
    Neto<-Bonif + IVA 
    Escribir "Importe de factura: ", Fact 
    Escribir "Descuento: ", desc 
    Escribir "Importe bonificado: ", Bonif 
    Escribir "IVA: ", IVA 
    Escribir "Neto a pagar: ", Neto 
FinAlgoritmo

---

<!-- página 6 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1

---

<!-- página 7 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
                                      
 
 
8) 
7)

---

<!-- página 8 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
 
 
 
 
 
 
 
 
 
 
9)

---

<!-- página 9 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
 
 
 
 
 
 
 
 
 
 
 
10)

---

<!-- página 10 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
   
 
 
11)

---

<!-- página 11 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
 
12)

---

<!-- página 12 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
 
 
 
 
 
 
 
 
6) Algoritmo ejercicio_6 
 
Leer A,B,C 
 
Si A<B  Y B<C Entonces

---

<!-- página 13 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
 
 
Escribir "Los números se ingresaron en forma creciente" 
 
SiNo 
 
 
Escribir "Los números se ingresaron en forma desordenada" 
 
Fin Si 
 
 
 
FinAlgoritmo 
 
7) Algoritmo ejercicio_7 
    Leer n 
    Si n=1 Entonces 
        Escribir "Lunes" 
    SiNo 
        Si n=2 Entonces 
            Escribir "Martes" 
        SiNo 
            Si n=3 Entonces 
                Escribir "Miércoles" 
            SiNo 
                Si n=4 Entonces 
                    Escribir "Jueves" 
                SiNo 
                    Si n=5 Entonces 
                        Escribir "Viernes" 
                    SiNo 
                        Si n=6 Entonces 
                            Escribir "Sábado" 
                        SiNo 
                            Si n=7 Entonces 
                                Escribir "Domingo" 
                            SiNo 
                                Escribir "No es un día de la semana" 
                            Fin Si 
                        Fin Si 
                    Fin Si 
                Fin Si 
            Fin Si 
        Fin Si 
    Fin Si 
         
FinAlgoritmo 
8) Algoritmo ejercicio_8 
    Escribir "ingrese el tipo de pieza" 
    Leer p 
    Escribir "Ingrese la medida de la pieza (en mm)" 
    Leer m 
    Si p="A" Entonces 
        Si m ≥ 163 Y m ≤ 167 Entonces 
            Escribir "La pieza A es de calidad" 
        SiNo 
            Escribir "La pieza A es defectuosa" 
        Fin Si 
    SiNo

---

<!-- página 14 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
        Si m ≥177 Y m ≤183 Entonces 
            Escribir "La pieza ",p," es de calidad" 
        SiNo 
            Escribir "La pieza ",p, " es defectuosa" 
        Fin Si 
    Fin Si 
    FinAlgoritmo 
 
 
9) Algoritmo ejercicio_9 
    Escribir "Escriba el primer número" 
    Leer n1 
    Escribir "Escriba el segundo número" 
    Leer n2 
    Escribir "Escriba el tercer número" 
    Leer n3 
    Si n1 < n2 Y n2 < n3 Entonces 
        Escribir "El primer número es menor que los otros dos" 
    SiNo 
        Escribir "El primer número NO es menor que los otros dos" 
    Fin Si 
    FinAlgoritmo 
 
 
 
 
 
 
 
 
 
10) Algoritmo ejercicio_10 
    Escribir "Escriba seis números diferentes" 
    Leer n1, n2, n3, n4, n5, n6 
    mayor<-n1 
    Si n2 > mayor Entonces 
        mayor<-n2 
    SiNo 
        Si n3 > mayor Entonces 
            mayor<-n3 
        SiNo 
            Si n4 > mayor Entonces 
                mayor<-n4 
            SiNo 
                Si n5 > mayor Entonces 
                    mayor<-n5 
                SiNo 
                    Si n6 > mayor Entonces 
                        mayor<-n6

---

<!-- página 15 -->

DATOS Y ALGORITMOS  
 
PRÁCTICA 1 
                    Fin Si 
                Fin Si 
            Fin Si 
        Fin Si 
    Fin Si 
    Escribir "EL mayor es: ",mayor 
    FinAlgoritmo