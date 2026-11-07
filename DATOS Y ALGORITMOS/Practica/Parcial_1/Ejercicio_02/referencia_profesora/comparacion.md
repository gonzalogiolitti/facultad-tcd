# Comparación con la profesora — Parcial_1/Ejercicio_02 (Mientras)

Nuestro: `../diagrama.png`. Imágenes: `lado_a_lado.png`, `comparacion_formas.png`. Solo se comparó; no se modificó nada.

Referencias usadas (miradas página por página):
- AyD-diagramacionlogica-parte2, pág. 40 (Sentencia mientras + Fin (MQ))
- pág. 39 (suma hasta cero), pág. 42 (Problema 27), pág. 45 (Problema 28)

| Construcción | Profesora | Nuestro | Coincide | Nota |
|---|---|---|---|---|
| Inicio / Fin | Círculo | Círculo | SÍ | |
| Valores iniciales | Un rectángulo con varias asignaciones (`S←0`, `C←0`; p.42) | `totalPedidos`, `pedidosGrandes`, `montoTotal` juntas | SÍ | |
| Lectura antes del MQ y al final del cuerpo | Entrada `N` antes del MQ y otra al final del cuerpo (p.39, 42, 45) | `entrada` antes y al final | SÍ | |
| Hexágono MQ | Hexágono bajo y largo: `MQ` a la izquierda, condición al centro, `N!=0` (p.39, 40) | `MQ Mayusculas(entrada) <> "FIN"` todo junto, hexágono más alto | PARCIAL | Misma figura. Cambia el reparto del texto (ella separa "MQ" y la condición) y el operador (`!=` de ella, `<>` de PseInt). El texto entra. |
| Cápsula Fin (MQ) | Cápsula (p.40, 42, 45) | Cápsula más ovalada | PARCIAL | Mismo texto, sin flecha de retorno. |
| Decisión dentro del MQ | Rombo con `Sí` derecha / `No` izquierda, ramas que se juntan sin círculo antes de la lectura final (p.45) | `monto > 200000`, igual | SÍ | |
| Condición compuesta `and` | `(N mod 2 =0) and (N>20)`, `and` minúscula con paréntesis (p.42) | No aplica en este diagrama | SIN REFERENCIA | No hay condición compuesta que comparar. |
| Llamada a función en un proceso | No hay | `monto ← ConvertirANumero(entrada)` | SIN REFERENCIA | Ella no tiene ejemplos con funciones en un rectángulo. |
| Entrada | Teclado | Teclado | SÍ | |
| Display | Cuña con arco | `shape=display` | PARCIAL | Ver Ejercicio_01. El texto entra. |
| Rombo con Sí / No | Etiquetas en los vértices superiores | Igual | SÍ | |

Resumen: la estructura es la misma que la de p.39 y p.45. Las diferencias son de proporción de las figuras y de notación (`<>` frente a `!=`).
