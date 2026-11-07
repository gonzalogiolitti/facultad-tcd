# Estadística de símbolos de nuestros diagramas

Generado por `scripts/estadistica_simbolos.py --generar` (solo lectura: no modifica diagramas ni `.psc`).

## Alcance y método

- **Diagramas analizados:** 51 (45 contados en los promedios + 6 de módulos). `diagrama.drawio` de Diagramacion Logica/Parte 1, 1_Practica_1, 2_Repeticion_Para_Mientras, Parcial_1/Ejercicio_01 y 02, y `diagrama*.drawio` de Parcial 2/Estudio.
- **Excluidos:** Parcial 2/Estudio/Ejercicio_02 (plantilla del modo pistas), `plantilla_simbolos`, carpetas `_respaldo*` y `referencia_profesora`, y los `ejercicioN_*` de Parcial_1.
- **Módulos aparte:** Estudio/Ejercicio_05 y Ejercicio_06 (principal, subproceso y función; 6 diagramas) **no entran en los promedios**: la cátedra no tiene diagramas de módulos y el círculo con el nombre es un supuesto nuestro.
- **Clasificación por estilo y texto:** círculo (ancho = alto) = Inicio/Fin · Manual Input = Entrada · Display = Salida · rombo = Decisión · hexágono `Para...` o `MQ...` = Ciclo · cápsula `Fin (Para)` / `Fin (MQ)` = Cierre · rectángulo = Proceso. Se ignoran los textos (leyenda del enunciado, Sí/No), las anotaciones punteadas y las flechas. Celdas sin clasificar: **0**.
- **Total de figuras** = todo lo clasificado (Inicio/Fin, Ciclo, Cierre, Entrada, Salida, Decisión y Proceso).
- **Tipo de diagrama:** Para (hexágono Para y ningún MQ), Mientras (MQ y ningún Para), Mixto (ambos), Sin ciclo (ninguno).

## 1. Cantidad de diagramas por tipo (sin módulos)

| Tipo | Diagramas |
|---|---|
| Para | 10 |
| Mientras | 8 |
| Sin ciclo | 27 |
| **Total** | 45 |

## 2. Estadística por tipo y por figura (sin módulos)

Por cada figura: total, promedio, mínimo, máximo y mediana sobre los diagramas del tipo.

### Para (10 diagramas)

| Figura | Total | Promedio | Mín | Máx | Mediana |
|---|---|---|---|---|---|
| Inicio/Fin | 20 | 2,00 | 2 | 2 | 2,0 |
| Hexágono Para | 10 | 1,00 | 1 | 1 | 1,0 |
| Cierre | 10 | 1,00 | 1 | 1 | 1,0 |
| Entrada | 4 | 0,40 | 0 | 2 | 0,0 |
| Salida | 16 | 1,60 | 1 | 4 | 1,0 |
| Decisión | 9 | 0,90 | 0 | 3 | 1,0 |
| Proceso | 16 | 1,60 | 0 | 4 | 2,0 |
| Total | 85 | 8,50 | 5 | 16 | 7,0 |

### Mientras (8 diagramas)

| Figura | Total | Promedio | Mín | Máx | Mediana |
|---|---|---|---|---|---|
| Inicio/Fin | 16 | 2,00 | 2 | 2 | 2,0 |
| Hexágono MQ | 9 | 1,12 | 1 | 2 | 1,0 |
| Cierre | 9 | 1,12 | 1 | 2 | 1,0 |
| Entrada | 14 | 1,75 | 0 | 2 | 2,0 |
| Salida | 13 | 1,62 | 1 | 3 | 1,0 |
| Decisión | 4 | 0,50 | 0 | 2 | 0,0 |
| Proceso | 19 | 2,38 | 2 | 3 | 2,0 |
| Total | 84 | 10,50 | 7 | 13 | 10,5 |

### Sin ciclo (27 diagramas)

| Figura | Total | Promedio | Mín | Máx | Mediana |
|---|---|---|---|---|---|
| Inicio/Fin | 54 | 2,00 | 2 | 2 | 2,0 |
| Hexágono (Para/MQ) | 0 | 0,00 | 0 | 0 | 0,0 |
| Cierre | 0 | 0,00 | 0 | 0 | 0,0 |
| Entrada | 26 | 0,96 | 0 | 1 | 1,0 |
| Salida | 61 | 2,26 | 1 | 8 | 2,0 |
| Decisión | 45 | 1,67 | 0 | 7 | 1,0 |
| Proceso | 38 | 1,41 | 0 | 6 | 1,0 |
| Total | 224 | 8,30 | 5 | 18 | 6,0 |

## 3. Comparación con la profesora (conteo a ojo, ±1)

Referencias de la profesora: Para (10 diagramas) y Mientras (4 diagramas). El 10,5 de Mientras se obtiene contando 1,25 hexágonos MQ y 1,25 cierres por diagrama (el Problema 29 tiene dos MQ). "Dif." = nuestro − profesora; "Dentro de ±1" indica si |dif.| ≤ 1.

### Para: profesora (10 diagramas) frente a nuestros (10 diagramas)

| Figura | Profesora | Nuestro | Dif. | Dentro de ±1 |
|---|---|---|---|---|
| Inicio/Fin | 2,00 | 2,00 | 0,00 | SÍ |
| Hexágono Para | 1,00 | 1,00 | 0,00 | SÍ |
| Cierre | 1,00 | 1,00 | 0,00 | SÍ |
| Entrada | 1,00 | 0,40 | -0,60 | SÍ |
| Salida | 1,10 | 1,60 | +0,50 | SÍ |
| Decisión | 0,70 | 0,90 | +0,20 | SÍ |
| Proceso | 2,60 | 1,60 | -1,00 | SÍ |
| Total | 9,40 | 8,50 | -0,90 | SÍ |

### Mientras: profesora (4 diagramas) frente a nuestros (8 diagramas)

| Figura | Profesora | Nuestro | Dif. | Dentro de ±1 |
|---|---|---|---|---|
| Inicio/Fin | 2,00 | 2,00 | 0,00 | SÍ |
| Hexágono MQ | 1,25 | 1,12 | -0,12 | SÍ |
| Cierre | 1,25 | 1,12 | -0,12 | SÍ |
| Entrada | 2,00 | 1,75 | -0,25 | SÍ |
| Salida | 1,50 | 1,62 | +0,12 | SÍ |
| Decisión | 0,50 | 0,50 | 0,00 | SÍ |
| Proceso | 2,00 | 2,38 | +0,38 | SÍ |
| Total | 10,50 | 10,50 | 0,00 | SÍ |

Los diagramas **Sin ciclo** (27) no tienen referencia de la profesora en este conteo.

## 4. Módulos (Estudio/Ejercicio_05 y Ejercicio_06) — fuera de los promedios

| Diagrama | Tipo | Inicio/Fin | Ciclo | Cierre | Entrada | Salida | Decisión | Proceso | Total |
|---|---|---|---|---|---|---|---|---|---|
| Parcial 2/Estudio/Ejercicio_05/diagrama_buscar | Mientras | 2 | 1 | 1 | 1 | 2 | 1 | 4 | 12 |
| Parcial 2/Estudio/Ejercicio_05/diagrama_ordenar | Para | 2 | 3 | 3 | 0 | 2 | 1 | 1 | 12 |
| Parcial 2/Estudio/Ejercicio_05/diagrama_principal | Para | 2 | 2 | 2 | 1 | 1 | 0 | 1 | 9 |
| Parcial 2/Estudio/Ejercicio_06/diagrama_carga | Sin ciclo | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 3 |
| Parcial 2/Estudio/Ejercicio_06/diagrama_intercalar | Mixto | 2 | 4 | 4 | 0 | 2 | 2 | 6 | 20 |
| Parcial 2/Estudio/Ejercicio_06/diagrama_principal | Sin ciclo | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 3 |

## 5. Casos destacados

**Diagramas Mixto (Para y MQ a la vez):** Parcial 2/Estudio/Ejercicio_06/diagrama_intercalar (módulo).

**Más de 15 figuras (3):**

| Diagrama | Tipo | Total |
|---|---|---|
| Parcial 2/Estudio/Ejercicio_06/diagrama_intercalar (módulo) | Mixto | 20 |
| 1_Practica_1/Ejercicio_07 | Sin ciclo | 18 |
| Parcial 2/Estudio/Ejercicio_04 | Para | 16 |

**Mientras (o Mixto) con una sola entrada (1):** la profesora lee antes del MQ y al final del cuerpo, es decir, 2 entradas. Una sola puede ser correcto si no hay lectura dentro del ciclo; conviene revisarlos.

| Diagrama | Tipo | Entradas | Total |
|---|---|---|---|
| Parcial 2/Estudio/Ejercicio_05/diagrama_buscar (módulo) | Mientras | 1 | 12 |

Además, con **0 entradas**: Parcial 2/Estudio/Ejercicio_06/diagrama_intercalar, 2_Repeticion_Para_Mientras/Ejercicio_09.

## 6. Tabla diagrama por diagrama

`Grupo`: Contado (entra en los promedios) o Módulo. `Ciclo` = hexágono Para o MQ.

| Diagrama | Grupo | Tipo | Inicio/Fin | Ciclo | Cierre | Entrada | Salida | Decisión | Proceso | Total |
|---|---|---|---|---|---|---|---|---|---|---|
| Parcial 2/Estudio/Ejercicio_01 | Contado | Mientras | 2 | 1 | 1 | 2 | 3 | 1 | 3 | 13 |
| Parcial 2/Estudio/Ejercicio_03 | Contado | Para | 2 | 1 | 1 | 1 | 2 | 1 | 3 | 11 |
| Parcial 2/Estudio/Ejercicio_04 | Contado | Para | 2 | 1 | 1 | 1 | 4 | 3 | 4 | 16 |
| Parcial 2/Estudio/Ejercicio_05/diagrama_buscar | Módulo | Mientras | 2 | 1 | 1 | 1 | 2 | 1 | 4 | 12 |
| Parcial 2/Estudio/Ejercicio_05/diagrama_ordenar | Módulo | Para | 2 | 3 | 3 | 0 | 2 | 1 | 1 | 12 |
| Parcial 2/Estudio/Ejercicio_05/diagrama_principal | Módulo | Para | 2 | 2 | 2 | 1 | 1 | 0 | 1 | 9 |
| Parcial 2/Estudio/Ejercicio_06/diagrama_carga | Módulo | Sin ciclo | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 3 |
| Parcial 2/Estudio/Ejercicio_06/diagrama_intercalar | Módulo | Mixto | 2 | 4 | 4 | 0 | 2 | 2 | 6 | 20 |
| Parcial 2/Estudio/Ejercicio_06/diagrama_principal | Módulo | Sin ciclo | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 3 |
| 1_Practica_1/Ejercicio_01 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 0 | 1 | 6 |
| 1_Practica_1/Ejercicio_02 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 0 | 1 | 5 |
| 1_Practica_1/Ejercicio_03 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 0 | 1 | 5 |
| 1_Practica_1/Ejercicio_04 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 0 | 2 | 6 |
| 1_Practica_1/Ejercicio_05 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 5 | 0 | 2 | 10 |
| 1_Practica_1/Ejercicio_06 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 0 | 6 |
| 1_Practica_1/Ejercicio_07 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 8 | 7 | 0 | 18 |
| 1_Practica_1/Ejercicio_08 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 5 | 4 | 0 | 12 |
| 1_Practica_1/Ejercicio_09 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 0 | 6 |
| 1_Practica_1/Ejercicio_10 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 5 | 6 | 15 |
| 1_Practica_1/Ejercicio_11 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 5 | 6 | 15 |
| 1_Practica_1/Ejercicio_12 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 4 | 6 | 14 |
| 2_Repeticion_Para_Mientras/Ejercicio_01 | Contado | Para | 2 | 1 | 1 | 0 | 1 | 0 | 0 | 5 |
| 2_Repeticion_Para_Mientras/Ejercicio_02 | Contado | Para | 2 | 1 | 1 | 0 | 1 | 0 | 2 | 7 |
| 2_Repeticion_Para_Mientras/Ejercicio_03 | Contado | Para | 2 | 1 | 1 | 0 | 1 | 0 | 2 | 7 |
| 2_Repeticion_Para_Mientras/Ejercicio_04 | Contado | Para | 2 | 1 | 1 | 0 | 1 | 1 | 0 | 6 |
| 2_Repeticion_Para_Mientras/Ejercicio_05 | Contado | Para | 2 | 1 | 1 | 0 | 1 | 1 | 2 | 8 |
| 2_Repeticion_Para_Mientras/Ejercicio_06 | Contado | Para | 2 | 1 | 1 | 0 | 1 | 1 | 0 | 6 |
| 2_Repeticion_Para_Mientras/Ejercicio_07 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 3 | 2 | 0 | 8 |
| 2_Repeticion_Para_Mientras/Ejercicio_08 | Contado | Para | 2 | 1 | 1 | 0 | 2 | 1 | 0 | 7 |
| 2_Repeticion_Para_Mientras/Ejercicio_09 | Contado | Mientras | 2 | 1 | 1 | 0 | 1 | 0 | 2 | 7 |
| 2_Repeticion_Para_Mientras/Ejercicio_10 | Contado | Mientras | 2 | 2 | 2 | 2 | 1 | 0 | 3 | 12 |
| 2_Repeticion_Para_Mientras/Ejercicio_11 | Contado | Mientras | 2 | 1 | 1 | 2 | 1 | 0 | 2 | 9 |
| 2_Repeticion_Para_Mientras/Ejercicio_12 | Contado | Mientras | 2 | 1 | 1 | 2 | 1 | 0 | 2 | 9 |
| 2_Repeticion_Para_Mientras/Ejercicio_13 | Contado | Mientras | 2 | 1 | 1 | 2 | 1 | 0 | 2 | 9 |
| 2_Repeticion_Para_Mientras/Ejercicio_14 | Contado | Mientras | 2 | 1 | 1 | 2 | 2 | 2 | 2 | 12 |
| Diagramacion Logica/Parte 1/Ejercicio_01 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 0 | 1 | 6 |
| Diagramacion Logica/Parte 1/Ejercicio_02 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 0 | 1 | 5 |
| Diagramacion Logica/Parte 1/Ejercicio_03 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 1 | 2 | 7 |
| Diagramacion Logica/Parte 1/Ejercicio_04 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 2 | 8 |
| Diagramacion Logica/Parte 1/Ejercicio_05 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 0 | 6 |
| Diagramacion Logica/Parte 1/Ejercicio_06 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 3 | 2 | 0 | 8 |
| Diagramacion Logica/Parte 1/Ejercicio_07 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 2 | 3 | 9 |
| Diagramacion Logica/Parte 1/Ejercicio_08 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 0 | 6 |
| Diagramacion Logica/Parte 1/Ejercicio_09 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 1 | 0 | 5 |
| Diagramacion Logica/Parte 1/Ejercicio_10 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 0 | 2 | 7 |
| Diagramacion Logica/Parte 1/Ejercicio_11 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 1 | 0 | 1 | 5 |
| Diagramacion Logica/Parte 1/Ejercicio_12 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 0 | 6 |
| Diagramacion Logica/Parte 1/Ejercicio_13 | Contado | Sin ciclo | 2 | 0 | 0 | 1 | 2 | 1 | 0 | 6 |
| Diagramacion Logica/Parte 1/Ejercicio_14 | Contado | Sin ciclo | 2 | 0 | 0 | 0 | 6 | 5 | 1 | 14 |
| Parcial_1/Ejercicio_01 | Contado | Para | 2 | 1 | 1 | 2 | 2 | 1 | 3 | 12 |
| Parcial_1/Ejercicio_02 | Contado | Mientras | 2 | 1 | 1 | 2 | 3 | 1 | 3 | 13 |

## Archivos

- `ESTADISTICA_SIMBOLOS.csv`: tabla diagrama por diagrama (sección 6).
- `ESTADISTICA_SIMBOLOS_resumen.csv`: estadística por tipo y por figura (sección 2) con la referencia de la profesora (sección 3).
