# Ejercicio 12

## Enunciado

Calcula la multiplicación de los números ingresados hasta que se ingrese un número negativo.

## Análisis

- **Entrada:** números, hasta que se ingrese uno negativo.
- **Proceso:** multiplicar cada número no negativo en un acumulador.
- **Salida:** el producto de los números ingresados.
- **Estructura:** **Mientras** (centinela: número negativo) con **acumulador multiplicativo**.

**Ambigüedades y supuestos:**

- El 0 **se considera válido** (no es negativo) y hace que el producto sea 0.
- El número negativo que corta el ciclo **no** se multiplica.
- Si el primer número ya es negativo, no se multiplicó nada y se muestra 1 (valor inicial).

**Alternativas:**

- Agregar un contador para informar un mensaje especial si no se ingresó ningún número válido.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_12
   producto <- 1
   Escribir "Ingrese números (un negativo para terminar):"
   Leer numero
   Mientras numero >= 0 Hacer
      producto <- producto * numero
      Leer numero
   FinMientras
   Escribir "El producto es: ", producto
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **producto ← 1**: el acumulador de un producto se inicializa en **1** (el neutro de la multiplicación), no en 0.
3. **Leer numero**.
4. **¿numero ≥ 0?** Mientras no sea negativo, se procesa.
5. **producto ← producto * numero**.
6. **Leer numero** (siguiente).
7. Al ingresar un negativo, **Escribir** el producto.
8. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 2, 3, 4 y -1 → `2, 3, 4, -1` | Ingrese números (un negativo para terminar):<br>El producto es: 24 |
| 5, 0, 7 y -2 → `5, 0, 7, -2` | Ingrese números (un negativo para terminar):<br>El producto es: 0 |
| solo -1 → `-1` | Ingrese números (un negativo para terminar):<br>El producto es: 1 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Diferencia clave con la suma: el acumulador de un **producto** se inicializa en **1**. Si empezara en 0, el resultado siempre sería 0.
