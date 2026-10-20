# Ejercicio 14

## Enunciado

Encuentra el mayor de los números ingresados hasta que se ingrese un número negativo.

## Análisis

- **Entrada:** números, hasta que se ingrese uno negativo.
- **Proceso:** mantener el mayor visto hasta el momento y actualizarlo cuando aparece uno más grande.
- **Salida:** el mayor número ingresado (o un aviso si no hubo ninguno).
- **Estructura:** **Mientras** (centinela negativo) con **máximo** (decisión simple dentro del ciclo).

**Ambigüedades y supuestos:**

- Como los números válidos son ≥ 0, se inicializa `mayor` en −1. El 0 es válido.
- El negativo que corta el ciclo no participa de la comparación.

**Alternativas:**

- Inicializar `mayor` con el **primer** número leído (más general: funciona aunque los datos puedan ser negativos con otro centinela).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_14
   mayor <- -1
   Escribir "Ingrese números (un negativo para terminar):"
   Leer numero
   Mientras numero >= 0 Hacer
      Si numero > mayor Entonces
         mayor <- numero
      FinSi
      Leer numero
   FinMientras
   Si mayor = -1 Entonces
      Escribir "No se ingresaron números válidos"
   SiNo
      Escribir "El mayor número ingresado es: ", mayor
   FinSi
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **mayor ← -1**: valor extremo **menor que cualquier dato válido** (los válidos son ≥ 0).
3. **Leer numero**.
4. **¿numero ≥ 0?** Mientras no sea negativo, se procesa.
5. **¿numero > mayor?** Sí → **mayor ← numero**.
6. **Leer numero** (siguiente).
7. Al terminar: **¿mayor = -1?** Sí → no se ingresó ningún número válido; No → **Escribir** el mayor.
8. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 3, 9, 4 y -1 → `3, 9, 4, -1` | Ingrese números (un negativo para terminar):<br>El mayor número ingresado es: 9 |
| 0, 0 y -5 → `0, 0, -5` | Ingrese números (un negativo para terminar):<br>El mayor número ingresado es: 0 |
| solo -2 → `-2` | Ingrese números (un negativo para terminar):<br>No se ingresaron números válidos |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Para un **máximo** se parte de un valor extremo bajo y se compara cada dato. El valor inicial elegido (−1) funciona porque el centinela garantiza que los datos válidos son ≥ 0.
