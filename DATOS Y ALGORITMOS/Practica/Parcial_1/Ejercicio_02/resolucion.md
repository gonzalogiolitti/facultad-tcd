# Ejercicio 02

## Enunciado

Escribir un algoritmo que lea montos de pedidos hasta ingresar la palabra FIN.

- Entradas: monto (número) o "FIN"
- Un pedido es Grande si monto > 200000
- Contar la cantidad total de pedidos
- Contar la cantidad de Grandes
- Acumular el monto total
- Salidas:
  - "Total de pedidos: ..."
  - "Pedidos Grandes (>200.000): ..."
  - "Monto total: ..."

Estructura: Mientras (centinela "FIN") + decisión + 2 contadores + acumulador.

## Análisis

- **Entradas:** una sucesión de valores que pueden ser un número o la palabra `FIN`. Como una misma variable debe admitir ambos, se lee como **texto** (`entrada`) y se convierte a número con `ConvertirANumero` solo si no es `FIN`.
- **Proceso:** mientras `entrada` no sea `FIN`: contar el pedido, acumular el monto y, si `monto > 200000`, contar un pedido Grande.
- **Salidas:** `totalPedidos`, `pedidosGrandes` y `montoTotal`.
- **Estructuras:** repetición `Mientras` con centinela (lectura antes del ciclo y al final de cada vuelta), decisión simple, 2 contadores y 1 acumulador.
- **Supuestos:** "FIN" se acepta en mayúsculas o minúsculas (`Mayusculas(entrada)`). Un monto de exactamente 200000 **no** es Grande (`>` estricto). La palabra FIN no cuenta como pedido. No se validan entradas que no sean número ni `FIN`.
- **Alternativa:** `Repetir ... Hasta Que`, pero obligaría a verificar `FIN` dentro del ciclo; `Mientras` con lectura anticipada es más limpio.

## Resolución

```
Algoritmo Ejercicio_02
	// totalPedidos: contador de todos los pedidos ingresados
	// pedidosGrandes: contador de pedidos con monto > 200000
	// montoTotal: acumulador de los montos
	totalPedidos <- 0
	pedidosGrandes <- 0
	montoTotal <- 0
	Escribir "Ingrese el monto del pedido (o FIN para terminar):"
	Leer entrada
	Mientras Mayusculas(entrada) <> "FIN" Hacer
		monto <- ConvertirANumero(entrada)
		totalPedidos <- totalPedidos + 1
		montoTotal <- montoTotal + monto
		Si monto > 200000 Entonces
			pedidosGrandes <- pedidosGrandes + 1
		FinSi
		Escribir "Ingrese el monto del pedido (o FIN para terminar):"
		Leer entrada
	FinMientras
	Escribir "Total de pedidos: ", totalPedidos
	Escribir "Pedidos Grandes (>200.000): ", pedidosGrandes
	Escribir "Monto total: ", montoTotal
FinAlgoritmo
```

## Explicación paso a paso

1. Se inicializan en 0 los dos contadores y el acumulador.
2. Se hace la **primera lectura** antes del ciclo, para poder evaluar la condición.
3. El `Mientras` sigue mientras `entrada` no sea `FIN`.
4. Dentro del ciclo se convierte el texto a número, se cuenta el pedido y se acumula el monto.
5. Si el monto supera 200000, se cuenta además como Grande.
6. Al final de cada vuelta se lee la siguiente entrada (si no, el ciclo sería infinito).
7. Cuando se ingresa `FIN` el ciclo termina y se muestran los tres resultados.

**Pruebas en PseInt:**

| Caso | Entradas | Salida |
|---|---|---|
| Normal | 150000, 250000, 200000, 300000, FIN | Total 4, Grandes 2, Monto 900000 |
| Borde (sin pedidos) | FIN | Total 0, Grandes 0, Monto 0 |
| Borde (minúscula) | 200001, fin | Total 1, Grandes 1, Monto 200001 |

El pedido de 200000 exacto no se cuenta como Grande (caso normal: Grandes = 2, no 3).

## Diagrama

[diagrama.drawio](./diagrama.drawio)

## Conclusión

Es el esquema de recorrido con centinela: lectura anticipada, ciclo `Mientras` y nueva lectura al final de cada vuelta. Leer como texto permite recibir tanto números como la palabra `FIN` en la misma variable.
