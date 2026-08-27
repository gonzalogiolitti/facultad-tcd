# Ejercicio 05 — Mayor entre dos números

## Enunciado

Ingresar dos números y mostrar por mensaje cuál es el mayor de los dos.

## Análisis

- **Entradas:** `n1`, `n2`.
- **Salida:** mensaje indicando cuál de los dos es mayor.
- Estructura de **decisión doble** simple, con una única condición (`n1 > n2`).

## Resolución

Pseudocódigo:

```
Inicio
  Leer n1, n2
  Si n1 > n2 Entonces
    Mostrar "El mayor es n1"
  Sino
    Mostrar "El mayor es n2"
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer n1, n2**: se ingresan los dos números.
3. **¿n1 > n2?**: se comparan.
4. **Sí** → n1 es el mayor.
5. **No** → se informa que n2 es el mayor.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Ejemplo de decisión doble aplicada a comparación de valores numéricos; es la base sobre la que se construye el Problema 6, que agrega el caso de igualdad.

## Nota sobre ambigüedades del enunciado

El enunciado de este problema puntual no contempla el caso `n1 = n2` (eso se resuelve recién en el Problema 6). Tal como está planteado, si los números son iguales el algoritmo cae en la rama "Sino" e informa "El mayor es n2", lo cual es una simplificación explícita de este enunciado y no un error: se respeta la consigna tal cual está redactada.
