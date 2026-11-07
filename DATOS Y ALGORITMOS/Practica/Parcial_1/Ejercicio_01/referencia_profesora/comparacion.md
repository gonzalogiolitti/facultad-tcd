# Comparación con la profesora — Parcial_1/Ejercicio_01 (Para)

Nuestro: `../diagrama.png`. Imágenes: `lado_a_lado.png`, `comparacion_formas.png`. Solo se comparó; no se modificó ningún diagrama ni `.psc`.

Referencias usadas (miradas página por página):
- AyD-diagramacionlogica-parte2, pág. 14 (Sentencia para + Fin (Para))
- pág. 16 (Problema 17), pág. 28 (Problema 21), pág. 36 (Problema 25: Para + decisión + mínimo)

| Construcción | Profesora | Nuestro | Coincide | Nota |
|---|---|---|---|---|
| Inicio / Fin | Círculo (parte2 p.16, 28, 36) | Círculo | SÍ | |
| Entrada | Teclado con solo la variable: `N`, `A` (p.28, 36) | `objetivoDiario`, `montoVenta` en forma de teclado, sin "Leer" | SÍ | Misma orientación (lado superior sube hacia la derecha). Nuestra pendiente es más suave. |
| Proceso, valores iniciales | Un rectángulo con varias asignaciones (`CP←0`/`CI←0` en p.45; `AMIN←1000` p.36) | `diasCumplidos ← 0` / `ventasTotales ← 0` juntas | SÍ | Misma disposición. |
| Hexágono Para | `Para i ← 1 , 10 , 1`, hexágono bajo y largo (p.14, 36) | `Para dia ← 1 , 30 , 1`, hexágono más alto | PARCIAL | Misma figura y notación; el nuestro es más alto y menos alargado. El texto entra. |
| Cuerpo del Para con decisión | Rombo dentro del Para, `Sí` derecha / `No` izquierda, la rama `No` vuelve a la línea principal (p.36) | Igual | SÍ | En p.36 la unión es una línea sin punta; la nuestra entra con una punta de flecha. |
| Acumulador dentro del Para | `S ← S+N` en rectángulo (p.16) | `ventasTotales ← ventasTotales + montoVenta` | SÍ | |
| Cápsula Fin (Para) | Cápsula con tramos rectos arriba y abajo (p.14, 16) | Cápsula más ovalada | PARCIAL | Mismo texto `Fin (Para)`, sin flecha de retorno (igual que ella). |
| Display | Cuña con punta a la izquierda y lados rectos, lado derecho en arco (p.16, 36) | `shape=display`: punta a la izquierda, tope y base planos, esquinas derechas redondeadas | PARCIAL | Misma familia (punta izquierda, derecha curva). La suya es más puntiaguda; en la suya el texto toca el arco y se corta ("S"); en la nuestra el texto entra con holgura. |
| Dos salidas seguidas | Una sola Display con dos líneas de texto (p.36: `"Altura mínima ",AMIN` / `"En la ubicación ",UMIN`) | Dos Display separadas | PARCIAL | Ver "Variantes": ella usa también una Display por salida (p.16, 28). |
| Rombo con Sí / No | `No` y `Sí` pegados a los vértices superiores, salidas por los vértices laterales (parte1 p.26, parte2 p.36) | Igual | SÍ | |
| Círculos de unión | No hay | No hay | SÍ | |
| Anotaciones punteadas | Opcionales (parte1 p.12, 18) | No | SIN REFERENCIA necesaria | Son opcionales. |

Resumen: coinciden las construcciones. Hay diferencias de proporción (hexágono, cápsula, Display) y una de agrupación (dos Display).
