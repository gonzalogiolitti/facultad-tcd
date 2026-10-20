# Ejercicio 07

## Enunciado

Dado un número del 1 al 7, mostrar a qué día de la semana corresponde.

## Análisis

- **Entrada:** un número `n` entre 1 y 7.
- **Proceso:** se compara `n` con 1, 2, … 7 hasta encontrar el día que corresponde.
- **Salida:** el nombre del día de la semana.
- **Estructura:** **Decisiones anidadas** (cadena de `Si … SiNo Si …`).

**Ambigüedades y supuestos:**

- 1 = lunes … 7 = domingo (la semana empieza en lunes).
- Si el dato no está entre 1 y 7 se muestra un mensaje de error; el enunciado no lo pide pero evita una salida vacía.

**Alternativas:**

- `Segun n Hacer … FinSegun` de PseInt: resuelve lo mismo con menos anidamiento.
- Un arreglo con los nombres de los días (se verá más adelante).

## Resolución (pseudocódigo PseInt)

```
Algoritmo Ejercicio_07
   Leer n
   Si n = 1 Entonces
      Escribir "Lunes"
   SiNo
      Si n = 2 Entonces
         Escribir "Martes"
      SiNo
         Si n = 3 Entonces
            Escribir "Miércoles"
         SiNo
            Si n = 4 Entonces
               Escribir "Jueves"
            SiNo
               Si n = 5 Entonces
                  Escribir "Viernes"
               SiNo
                  Si n = 6 Entonces
                     Escribir "Sábado"
                  SiNo
                     Si n = 7 Entonces
                        Escribir "Domingo"
                     SiNo
                        Escribir "No es un día de la semana"
                     FinSi
                  FinSi
               FinSi
            FinSi
         FinSi
      FinSi
   FinSi
FinAlgoritmo
```

Archivo: [`algoritmo.psc`](./algoritmo.psc)

## Explicación paso a paso

1. **Inicio**.
2. **Leer n**.
3. **¿n = 1?** Sí → "Lunes".  No → se pregunta lo siguiente.
4. **¿n = 2?** Sí → "Martes".  No → sigue la cadena. Así hasta **n = 7** ("Domingo").
5. Si ninguna condición se cumple, se informa que el número **no es un día de la semana**.
6. **Fin**.

**Pruebas de ejecución** (salida real obtenida en PseInt):

| Entradas | Salida |
|---|---|
| n = 1 → `1` | Lunes |
| n = 4 → `4` | Jueves |
| n = 7 → `7` | Domingo |
| n = 0 (inválido) → `0` | No es un día de la semana |
| n = 8 (inválido) → `8` | No es un día de la semana |

## Diagrama

Ver [`diagrama.drawio`](./diagrama.drawio). Como la cadena es larga, cada "Sí" se dibujó hacia la derecha y el "No" continúa hacia abajo.

## Conclusión

Cuando hay muchas alternativas excluyentes se encadenan decisiones: cada "No" lleva a la siguiente pregunta. Incluir un caso final para valores inválidos hace el algoritmo robusto.
