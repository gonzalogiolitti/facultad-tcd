# Ejercicio 01

## Enunciado

Dados como datos dos números calcular la suma y el producto y mostrar los resultados.

## Análisis

- **Entrada:** dos números, `a` y `b`.
- **Proceso:** `suma = a + b` y `producto = a * b`.
- **Salida:** la suma y el producto.
- **Estructura:** **Secuencial** pura: las instrucciones se ejecutan una detrás de otra, sin decisiones ni repeticiones.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_01
   Leer a, b
   suma <- a + b
   producto <- a * b
   Escribir "La suma es: ", suma
   Escribir "El producto es: ", producto
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio** del algoritmo.
2. **Leer a, b**: se ingresan los dos números.
3. **suma ← a + b**: se calcula la suma y se guarda en `suma`.
4. **producto ← a * b**: se calcula el producto y se guarda en `producto`.
5. **Escribir**: se muestran ambos resultados (una salida por cada resultado).
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 3 y 4 → `3, 4` | La suma es: 7<br>El producto es: 12 |
| -2 y 5 → `-2, 5` | La suma es: 3<br>El producto es: -10 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Ejemplo básico de estructura secuencial: entrada → proceso → salida. Guardar cada resultado en una variable propia hace el código más claro que calcular dentro del `Escribir`.
