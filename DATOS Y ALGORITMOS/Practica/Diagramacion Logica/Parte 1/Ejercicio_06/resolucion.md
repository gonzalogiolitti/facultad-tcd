# Ejercicio 06 — Mayor entre dos números, con igualdad

## Enunciado

Ingresar dos números y mostrar el mayor entre ambos. Si los dos números son iguales, mostrar el cartel "Son iguales".

## Análisis

- **Entradas:** `n1`, `n2`.
- **Salida:** el mayor de los dos, o "Son iguales" si coinciden.
- Estructura de **decisión anidada**: hay una decisión dentro de otra, ya que existen más de dos alternativas posibles (n1 mayor, n2 mayor, o iguales).

## Resolución

Pseudocódigo:

```
Inicio
  Leer n1, n2
  Si n1 = n2 Entonces
    Mostrar "Son iguales"
  Sino
    Si n1 > n2 Entonces
      Mostrar "El mayor es n1"
    Sino
      Mostrar "El mayor es n2"
    FinSi
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer n1, n2**: se ingresan los dos números.
3. **¿n1 = n2?** (decisión externa): si son iguales, se muestra "Son iguales" y el flujo termina.
4. Si **no** son iguales, se evalúa una **segunda decisión anidada**: **¿n1 > n2?**
5. Según esa segunda condición se informa cuál de los dos es mayor.
6. Ambos caminos confluyen antes de **Fin**.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Ejemplo directo de decisión anidada: resuelve la limitación señalada en el Problema 5, cubriendo ahora las tres alternativas posibles (n1 mayor, n2 mayor, iguales).
