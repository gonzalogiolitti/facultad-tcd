# Ejercicio 03 (Estudio)

## Enunciado

Leer 8 números, contar cuántos son pares y mostrar la suma de todos.

## Análisis

- **¿Para o Mientras?** `Para`: la cantidad (8) se conoce de antemano.
- **¿Hay rombo?** Sí, una decisión simple dentro del ciclo: `n MOD 2 = 0` (es par).
- **¿Qué se calcula?** Un contador (`cantPares`) y un acumulador (`suma`) de todos los números.
- **Supuestos:** el 0 cuenta como par; los negativos se aceptan (`-2 MOD 2 = 0`).

## Resolución

```
Algoritmo Ejercicio_03
	cantPares <- 0
	suma <- 0
	Para i <- 1 Hasta 8 Con Paso 1 Hacer
		Escribir "Ingrese un número:"
		Leer n
		suma <- suma + n
		Si n MOD 2 = 0 Entonces
			cantPares <- cantPares + 1
		FinSi
	FinPara
	Escribir "Cantidad de pares: ", cantPares
	Escribir "Suma total: ", suma
FinAlgoritmo
```

## Explicación paso a paso

1. Se inicializan en 0 el contador de pares y el acumulador.
2. El `Para` repite 8 veces: se lee `n` y se suma a `suma` (todos, pares o no).
3. Si `n MOD 2 = 0`, se cuenta como par.
4. Al terminar el ciclo se muestran la cantidad de pares y la suma.

**Pruebas en PseInt (ejecutadas):**

| Caso | Entradas | Salida |
|---|---|---|
| Todos pares | 2,4,…,16 | Pares 8, Suma 72 |
| Ninguno par | 1,3,…,15 | Pares 0, Suma 64 |
| Borde: 0 y negativo | 0,-2,3,5,7,9,11,13 | Pares 2, Suma 46 |

## Diagrama

![Diagrama](./diagrama.png) · [diagrama.drawio](./diagrama.drawio)

## Conclusión

Recorrido con `Para` que combina un acumulador (todos los valores) y un contador condicionado por una decisión (solo los pares).
