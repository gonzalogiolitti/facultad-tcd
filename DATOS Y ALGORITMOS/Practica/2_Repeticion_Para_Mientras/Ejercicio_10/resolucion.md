# Ejercicio 10

## Enunciado

Calcula la suma de los dígitos de un número entero ingresado por el usuario hasta que ingrese 0

## Análisis

- **Entrada:** números enteros, hasta que se ingrese 0.
- **Proceso:** para cada número, separar sus dígitos (resto de dividir por 10, luego dividir por 10) y acumularlos.
- **Salida:** la suma de todos los dígitos ingresados.
- **Estructura:** **Mientras** (centinela 0) que contiene otro **Mientras** (separar dígitos) y un **acumulador**.

**Ambigüedades y supuestos:**

- Enunciado ambiguo: se interpreta que se ingresan **varios** números hasta el 0 y se muestra **una sola** suma de **todos** los dígitos.
- Los negativos cuentan sus dígitos como positivos.

**Alternativas:**

- Mostrar la suma de dígitos de **cada** número (moviendo `Escribir` dentro del ciclo externo y reiniciando el acumulador en cada vuelta).
- Usar `ConvertirATexto` y `Longitud` para recorrer los dígitos como caracteres.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_10
   total <- 0
   Escribir "Ingrese números enteros (0 para terminar):"
   Leer numero
   Mientras numero <> 0 Hacer
      n <- abs(numero)
      Mientras n > 0 Hacer
         digito <- n MOD 10
         total <- total + digito
         n <- trunc(n / 10)
      FinMientras
      Leer numero
   FinMientras
   Escribir "La suma de los dígitos es: ", total
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **total ← 0**.
3. **Leer numero** (primera lectura, **antes** del ciclo).
4. **¿numero ≠ 0?** Mientras no se ingrese 0, se procesa.
5. **n ← abs(numero)**: se trabaja con el valor absoluto para admitir negativos.
6. Ciclo interno **¿n > 0?**: `digito ← n MOD 10` (último dígito), `total ← total + digito`, `n ← trunc(n / 10)` (se descarta el último dígito).
7. **Leer numero** (siguiente), al **final** del ciclo.
8. Al ingresar 0, **Escribir** el total.
9. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 123 y 45, luego 0 → `123, 45, 0` | Ingrese números enteros (0 para terminar):<br>La suma de los dígitos es: 15 |
| -91 y 7, luego 0 → `-91, 7, 0` | Ingrese números enteros (0 para terminar):<br>La suma de los dígitos es: 17 |
| solo 0 → `0` | Ingrese números enteros (0 para terminar):<br>La suma de los dígitos es: 0 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Patrón **lectura anticipada**: se lee antes del ciclo y al final de cada vuelta. El 0 funciona como **centinela** (valor que indica fin) y no se procesa. Separar dígitos con `MOD 10` y división entera es la técnica clásica.
