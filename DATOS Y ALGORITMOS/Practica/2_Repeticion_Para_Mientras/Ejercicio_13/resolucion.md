# Ejercicio 13

## Enunciado

Calcula la suma de los números pares ingresados hasta que se ingrese un número impar.

## Análisis

- **Entrada:** números, hasta que se ingrese uno impar.
- **Proceso:** acumular los pares; el primer impar corta el ciclo.
- **Salida:** la suma de los pares ingresados.
- **Estructura:** **Mientras** (condición: es par) con **acumulador**.

**Ambigüedades y supuestos:**

- El 0 se considera par. El impar que corta el ciclo **no** se suma.

**Alternativas:**

- Condición de corte invertida con `Repetir … Hasta Que numero MOD 2 <> 0` (no pedida en la práctica).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_13
   suma <- 0
   Escribir "Ingrese números (un impar para terminar):"
   Leer numero
   Mientras numero MOD 2 = 0 Hacer
      suma <- suma + numero
      Leer numero
   FinMientras
   Escribir "La suma de los pares es: ", suma
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **suma ← 0**.
3. **Leer numero**.
4. **¿numero MOD 2 = 0?** Mientras sea par, se procesa.
5. **suma ← suma + numero**.
6. **Leer numero** (siguiente).
7. Al ingresar un impar el ciclo termina y se **Escribir** la suma.
8. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 4, 6, 10 y 7 → `4, 6, 10, 7` | Ingrese números (un impar para terminar):<br>La suma de los pares es: 20 |
| 0, 8 y -3 → `0, 8, -3` | Ingrese números (un impar para terminar):<br>La suma de los pares es: 8 |
| solo 5 → `5` | Ingrese números (un impar para terminar):<br>La suma de los pares es: 0 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Acá la condición del `Mientras` es la **del caso que continúa** (par), no la del corte. Conviene escribirla pensando "mientras ocurra esto, seguir".
