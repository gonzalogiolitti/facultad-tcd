# Ejercicio 10

## Enunciado

Se ingresan seis números positivos DIFERENTES. Al finalizar, mostrar un cartel que diga “El mayor número ingresado fue el xxx”.

## Análisis

- **Entrada:** seis números positivos distintos: `n1` … `n6`.
- **Proceso:** se supone que el mayor es `n1` y se lo compara con cada uno de los demás: si alguno lo supera, pasa a ser el nuevo mayor.
- **Salida:** el mensaje "El mayor número ingresado fue el xxx".
- **Estructura:** **Máximo** con **decisiones simples consecutivas** (independientes, no anidadas).

**Ambigüedades y supuestos:**

- Los números son positivos y diferentes (el enunciado lo garantiza), por eso no se valida.

**Alternativas:**

- Con repetición `Para` y una sola lectura dentro del ciclo (se verá en la Práctica de repetición).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_10
   Leer n1, n2, n3, n4, n5, n6
   mayor <- n1
   Si n2 > mayor Entonces
      mayor <- n2
   FinSi
   Si n3 > mayor Entonces
      mayor <- n3
   FinSi
   Si n4 > mayor Entonces
      mayor <- n4
   FinSi
   Si n5 > mayor Entonces
      mayor <- n5
   FinSi
   Si n6 > mayor Entonces
      mayor <- n6
   FinSi
   Escribir "El mayor número ingresado fue el ", mayor
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer n1 … n6**.
3. **mayor ← n1**: se parte de que el primero es el mayor.
4. **¿n2 > mayor?** Si es así, `mayor ← n2`. Si no, no se hace nada y se sigue.
5. Se repite la misma pregunta para **n3, n4, n5 y n6** (cada una es una decisión simple independiente de las anteriores).
6. **Escribir** el mensaje con el valor de `mayor`.
7. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 4, 9, 2, 7, 5, 1 → `4, 9, 2, 7, 5, 1` | El mayor número ingresado fue el 9 |
| crecientes 1…6 → `1, 2, 3, 4, 5, 6` | El mayor número ingresado fue el 6 |
| decrecientes 6…1 → `6, 5, 4, 3, 2, 1` | El mayor número ingresado fue el 6 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Para hallar un máximo se compara cada dato con el mayor actual. Las decisiones deben ser **independientes** (cada `Si` con su `FinSi`): si se encadenaran con `SiNo`, al cumplirse una condición se dejarían de comparar los demás números y el resultado podría ser incorrecto.
