# Ejercicio 07

## Enunciado

Verifica si un número ingresado por el usuario es positivo, negativo o cero.

## Análisis

- **Entrada:** un número `numero`.
- **Proceso:** comparar con 0: mayor, menor o igual.
- **Salida:** un mensaje que indica el signo.
- **Estructura:** **Decisión anidada** (tres casos excluyentes). No requiere repetición.

**Alternativas:**

- Tres decisiones simples independientes (`Si > 0`, `Si < 0`, `Si = 0`).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_07
   Leer numero
   Si numero > 0 Entonces
      Escribir "El número es positivo"
   SiNo
      Si numero < 0 Entonces
         Escribir "El número es negativo"
      SiNo
         Escribir "El número es cero"
      FinSi
   FinSi
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer numero**.
3. **¿numero > 0?** Sí → positivo.
4. No → **¿numero < 0?** Sí → negativo.
5. No → solo queda que sea cero.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| 5 → `5` | El número es positivo |
| -3 → `-3` | El número es negativo |
| 0 → `0` | El número es cero |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). 

## Conclusión

Este ejercicio no usa ciclos: es un repaso de decisión anidada dentro de la práctica de repetición. Con dos preguntas se cubren los tres casos.
