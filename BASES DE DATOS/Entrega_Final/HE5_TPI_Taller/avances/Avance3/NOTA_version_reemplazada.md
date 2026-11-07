# Nota — versión previa, reemplazada

Los 7 archivos `.sql` de esta carpeta (`01_Tablas` a `07_Pruebas`) son una
versión anterior del Avance #3, de antes del precio histórico y del ajuste
del stock inicial que pidió el profesor.

**Quedaron reemplazados por `UGR-BBDD26-HE5_Giolitti_SQL.sql`**, en
`HE5_TPI_Taller/`, que es la versión final: tiene el stock inicial correcto
(31, 54, 14, 6, 9, 48, 7), los triggers creados antes de las semillas, el
control de stock al final, `costo_aplicado`/`precio_aplicado`, el segundo
trigger y las 3 vistas.

No actualicé estos 7 archivos uno por uno porque habría que reordenar
secciones entre varios archivos distintos (mover la creación de triggers de
`03_Triggers.sql` a antes de `02_Semillas.sql`) y mantener dos versiones
completas del mismo sistema en paralelo es más trabajo y más riesgo de que
se desincronicen. Si para la entrega hace falta un Avance #3 en varios
archivos chicos en vez de uno solo, avisame y los separo a partir del
`.sql` final.
