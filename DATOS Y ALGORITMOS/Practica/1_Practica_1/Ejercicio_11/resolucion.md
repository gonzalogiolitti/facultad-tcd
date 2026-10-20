# Ejercicio 11

## Enunciado

El mismo problema que en el punto anterior pero ahora le agregamos que diga en qué posición entró el mayor. (Ej: “el mayor fue xxx y entró quinto”)

## Análisis

- **Entrada:** seis números positivos distintos: `n1` … `n6`.
- **Proceso:** igual que el Ejercicio 10, pero cada vez que se actualiza `mayor` también se guarda en `posicion` el orden en que se ingresó.
- **Salida:** el mayor número y la posición en que fue ingresado.
- **Estructura:** **Máximo con posición**: decisiones simples consecutivas con dos asignaciones cada una.

**Ambigüedades y supuestos:**

- La posición se informa como **número** ("posición 5"). El ejemplo del enunciado usa el ordinal en letras ("quinto"); es solo formato de salida.

**Alternativas:**

- Mostrar el ordinal en letras con una cadena de decisiones sobre `posicion` (primero, segundo, … sexto), igual que en el Ejercicio 7.

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_11
   Leer n1, n2, n3, n4, n5, n6
   mayor <- n1
   posicion <- 1
   Si n2 > mayor Entonces
      mayor <- n2
      posicion <- 2
   FinSi
   Si n3 > mayor Entonces
      mayor <- n3
      posicion <- 3
   FinSi
   Si n4 > mayor Entonces
      mayor <- n4
      posicion <- 4
   FinSi
   Si n5 > mayor Entonces
      mayor <- n5
      posicion <- 5
   FinSi
   Si n6 > mayor Entonces
      mayor <- n6
      posicion <- 6
   FinSi
   Escribir "El mayor fue ", mayor, " y entró en la posición ", posicion
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer n1 … n6**.
3. **mayor ← n1** y **posicion ← 1**: al comienzo el mayor es el primero, que entró en la posición 1.
4. Para cada `ni` (i = 2 a 6): **¿ni > mayor?** Sí → `mayor ← ni` y `posicion ← i`. No → no se cambia nada.
5. **Escribir** el mayor y su posición.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 4, 9, 2, 7, 5, 1 → `4, 9, 2, 7, 5, 1` | El mayor fue 9 y entró en la posición 2 |
| 1, 2, 3, 4, 5, 6 → `1, 2, 3, 4, 5, 6` | El mayor fue 6 y entró en la posición 6 |
| 6, 5, 4, 3, 2, 1 → `6, 5, 4, 3, 2, 1` | El mayor fue 6 y entró en la posición 1 |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Cuando se busca un máximo y además "dónde" estaba, cada actualización del máximo debe actualizar también la posición. Ambas variables siempre cambian juntas.
