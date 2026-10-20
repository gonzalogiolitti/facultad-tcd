# Ejercicio 11

## Enunciado

Realizar la suma de los números ingresados hasta que ingrese un punto

## Análisis

- **Entrada:** números, y un "." como señal de fin.
- **Proceso:** acumular cada número hasta leer ".".
- **Salida:** la suma de los números ingresados.
- **Estructura:** **Mientras** con **centinela de texto** y **acumulador**.

**Ambigüedades y supuestos:**

- El "punto" es el carácter `.` ingresado como señal de fin; por eso `dato` se lee como texto y se convierte con `ConvertirANumero`.

**Alternativas:**

- Usar un número centinela (por ejemplo 0 o −1) en lugar del punto: evita la conversión, pero ese valor no podría sumarse.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_11
   suma <- 0
   Escribir "Ingrese números (. para terminar):"
   Leer dato
   Mientras dato <> "." Hacer
      suma <- suma + ConvertirANumero(dato)
      Leer dato
   FinMientras
   Escribir "La suma es: ", suma
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **suma ← 0**.
3. **Leer dato**: se lee como **texto**, porque puede ser un número o el punto.
4. **¿dato ≠ "."?** Mientras no sea el punto, se procesa.
5. **suma ← suma + ConvertirANumero(dato)**: se convierte el texto a número para poder sumarlo.
6. **Leer dato** (siguiente) al final del ciclo.
7. Al leer ".", **Escribir** la suma.
8. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 5, 3, 10 y . → `5, 3, 10, .` | Ingrese números (. para terminar):<br>La suma es: 18 |
| 2.5, -1 y . → `2.5, -1, .` | Ingrese números (. para terminar):<br>La suma es: 1.5 |
| solo . → `.` | Ingrese números (. para terminar):<br>La suma es: 0 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Cuando el centinela no es un número, la variable de lectura es de **texto** y hay que convertir los datos válidos. El punto **no** se suma.
