# Ejercicio 09 — Socio VIP del club Sol Naciente

## Enunciado

Se ingresa por teclado la categoría de un socio del club deportivo Sol Naciente (A, B o C) y su antigüedad en años. Si el socio tiene categoría A, o su antigüedad se encuentra entre los 10 y los 20 años, mostrar el cartel "Socio vip".

## Análisis

- **Entradas:** `categoria`, `antiguedad`.
- **Salida:** el cartel "Socio vip", solo cuando corresponde.
- La condición combina un **`or`** (disyunción) entre "es categoría A" y "la antigüedad está entre 10 y 20" (esta última, a su vez, un `and` entre dos comparaciones).

## Resolución

Pseudocódigo:

```
Inicio
  Leer categoria, antiguedad
  Si (categoria = "A") or ((antiguedad >= 10) and (antiguedad <= 20)) Entonces
    Mostrar "Socio vip"
  FinSi
Fin
```

## Explicación

1. **Inicio**: comienzo del algoritmo.
2. **Leer categoria, antiguedad**: se ingresan los dos datos del socio.
3. **¿categoría = A OR (antigüedad entre 10 y 20)?**: alcanza con que se cumpla una de las dos condiciones para que el resultado sea verdadero.
4. **Sí** → se muestra "Socio vip".
5. **No** → no se muestra ningún mensaje.

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio).

## Conclusión

Aplica la disyunción lógica (`or`) vista en la unidad, combinada con un `and` anidado dentro de la misma condición — muestra cómo se combinan varios operadores lógicos en una sola expresión.

## Nota sobre ambigüedades del enunciado

El enunciado no indica qué mostrar cuando no se cumple ninguna de las dos condiciones. Se asumió que en ese caso no corresponde ningún mensaje (decisión simple), ya que solo se pide informar la condición de "Socio vip".
