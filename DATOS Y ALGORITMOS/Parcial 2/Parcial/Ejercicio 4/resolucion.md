# Ejercicio 4 — Compras del local: total por cliente y recaudación

## Enunciado

Un local comercial procesa las compras de sus clientes. Se ingresan pares de datos: cantidad y precio_unitario. El ingreso finaliza cuando la cantidad ingresada sea 0. Si el monto total de una compra supera los $15.000, se aplica un descuento del 10%. Calcular y mostrar el total cobrado por cada cliente y la recaudación general del día.

Formato permitido: solo draw.io (`diagrama.drawio`). Se deja también `algoritmo.psc` como espejo del diagrama (y para probarlo) y `diagrama.png`.

## Análisis

- **¿Para o Mientras?** Mientras: no se sabe cuántos clientes hay; corta cuando la cantidad es 0.
- **¿Hay rombo?** Sí, uno: `monto > 15000`.
- **¿Qué se calcula?** El monto de cada compra (cantidad × precio), el total cobrado con o sin descuento, y la recaudación acumulada.

## Resolución

1. `recaudacion ← 0`.
2. Se lee `cantidad` **antes** del `MQ`.
3. `MQ cantidad != 0`:
   - Se lee `precio_unitario`.
   - `monto ← cantidad * precio_unitario`.
   - Si `monto > 15000`: `totalCliente ← monto * 0.9`; si no, `totalCliente ← monto`.
   - `recaudacion ← recaudacion + totalCliente`.
   - Se muestra el total cobrado al cliente.
   - Se lee la `cantidad` siguiente (al final del cuerpo).
4. Fin del MQ: se muestra la recaudación general.

## Explicación paso a paso

El 0 es el centinela, no una compra: por eso se lee antes de entrar y de nuevo al final del cuerpo, así el 0 nunca se procesa. El descuento se aplica solo si el monto **supera** 15.000 (`>`, o sea 15.000 justo no tiene descuento). El 10% de descuento se resuelve multiplicando por 0,9, que es lo que se cobra.

## Diagrama

`diagrama.drawio` y `diagrama.png`: espejo exacto de `algoritmo.psc`, con la convención de la cátedra (Mientras con hexágono y cápsula `Fin (MQ)`, rombo con Sí a la derecha y No a la izquierda).

## Pruebas

| Entrada | Salida |
|---|---|
| (2, 5000) (4, 5000) (3, 1000) 0 | 10000, 18000, 3000; recaudación 31000 |
| (3, 5000) 0 (monto justo 15.000) | 15000; recaudación 15000 |
| 0 (sin clientes) | recaudación 0 |

## Conclusión

Patrón de Mientras con centinela: lectura antes, proceso, lectura al final. Errores típicos: leer solo adentro (el 0 se procesa), usar `>=` en el descuento, o mostrar la recaudación dentro del ciclo.
