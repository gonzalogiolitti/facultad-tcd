# Ejercicio 2 — Resolución B: la carga solo acepta orden estrictamente creciente

Archivo: `algoritmo_B.psc`. La resolución A (`algoritmo.psc`) queda como está: ahí se da por hecho que el usuario ingresa las patentes en orden. Acá el programa lo **obliga**.

## Qué cambia respecto de la A

Solo la carga. La búsqueda dicotómica es idéntica.

Dentro del `Para` de carga, después de leer `patentes[i]` (desde la segunda patente):

```
Si i > 1 Entonces
    Mientras patentes[i] <= patentes[i - 1] Hacer
        Escribir "Error: debe ser mayor que la anterior (", patentes[i - 1], "). Ingrese de nuevo: "
        Leer patentes[i]
    FinMientras
FinSi
```

## Por qué así

- El enunciado dice **estrictamente** creciente, por eso el rechazo es con `<=`: una patente igual a la anterior también se pide de nuevo.
- La primera patente (`i = 1`) no tiene anterior, por eso el `Si i > 1` (sin eso se leería `patentes[0]`, error 303).
- Con esta carga el vector queda siempre ordenado, así que la dicotómica es válida sin suponer nada.
- El `Mientras` de validación es el mismo patrón de lectura repetida: lee, y si no cumple, avisa y vuelve a leer.

## Pruebas

| Ingreso | Resultado |
|---|---|
| 10, 5 (error), 10 (error), 20 … 300; N = 150 | dos avisos de error; pase libre, posición 15 |
| 10, 20 … 300 (todo válido); N = 300 | sin errores; pase libre, posición 30 |
| 10, 20 … 300 (todo válido); N = 155 | Patente no encontrada |

## Cuándo usar cada una

La A es la que pide el enunciado literal (el vector "está guardado" en orden). La B es la más segura si la consigna dijera que hay que garantizar el orden al ingresar.
