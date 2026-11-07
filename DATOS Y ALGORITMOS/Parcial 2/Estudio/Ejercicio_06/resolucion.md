# Ejercicio 06 — Intercalación de dos vectores

## Enunciado

Ver [enunciado.md](enunciado.md) (deducido a partir del código).

## Resolución

- Código: [algoritmo.psc](algoritmo.psc), **tal como lo escribiste** (no se modificó).
- Diagramas (uno por módulo, espejo del `.psc`):
  - [diagrama_principal.drawio](diagrama_principal.drawio) / `.png`
  - [diagrama_carga.drawio](diagrama_carga.drawio) / `.png` (`CargaDeVectores`)
  - [diagrama_intercalar.drawio](diagrama_intercalar.drawio) / `.png` (`IntercalarVectores`)

## Explicación paso a paso

1. **Principal.** Declara A y B (5 elementos) y `total` (10). Llama a `CargaDeVectores(A,B)` y a `Vector <- IntercalarVectores(A,B,total)`.
2. **CargaDeVectores.** Asigna los valores fijos: A = 1, 4, 7, 9, 12 y B = 2, 3, 5, 10, 15. Las diez asignaciones van juntas en un solo rectángulo.
3. **IntercalarVectores.** Tres índices: `i` recorre A, `j` recorre B y `k` escribe en `total`.
   - `MQ (i <= 5) and (j <= 5)`: mientras ninguno se agote, compara `A[i]` con `B[j]`, copia el menor a `total[k]` y avanza el índice de ese vector. Si son iguales, sale primero el de A. Siempre avanza `k`.
   - Al salir, uno de los dos se agotó. Si `i > 5` se agotó A y se copia el resto de B (`Para m ← j , 5 , 1`). Si no, se agotó B y se copia el resto de A (`Para m ← i , 5 , 1`).
   - Por último muestra "Nuevo vector: " y recorre `total` de 1 a 10.
4. **Resultado** con los datos de prueba: `1 2 3 4 5 7 9 10 12 15`.

## Pruebas ejecutadas

| Caso | Salida |
|---|---|
| Datos del código | 1 2 3 4 5 7 9 10 12 15 |
| B se agota primero (B = 0, 1, 2, 3, 4) | 0 1 1 2 3 4 4 7 9 12 |
| A y B iguales (valores repetidos) | 1 1 4 4 7 7 9 9 12 12 |
| Todo A menor que todo B | 1 4 7 9 12 20 21 22 23 24 |

Se probaron las dos ramas del `Si i > 5`, los repetidos y el caso en que un vector se agota de entrada.

## Observaciones sobre el código (no se cambió nada)

- `IntercalarVectores` nunca asigna su variable de retorno `NV`, así que `Vector` queda vacío en el principal. No afecta al resultado, porque la función escribe directamente en `total` y lo muestra ella misma.
- `Vector` no está declarada y no se usa después. Si el parcial pide que la función devuelva algo, convendría asignar `NV` (por ejemplo, `NV <- k - 1`).
- `Dimensionar` funciona en PseInt, pero la cátedra usa `Dimension`.
- El `Si` interior al `Mientras` está sin sangría en el `.psc`. No cambia nada al ejecutarlo.

## Notas sobre los diagramas

- Notación de las diapositivas: `y` → `and`, con cada comparación entre paréntesis.
- No se dibujan `Definir` ni `Dimensionar`.
- **SUPUESTO** (igual que en Ejercicio_05): la cátedra no dibuja subprocesos ni funciones. Se usa un círculo con el nombre del módulo, un círculo `Fin` y las llamadas como rectángulo de proceso.
