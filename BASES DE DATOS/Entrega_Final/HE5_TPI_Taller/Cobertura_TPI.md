# Cobertura del TPI por unidad

| Unidad / hito | Dónde se aplica en el TPI |
|---|---|
| Arquitecturas (HE1): niveles ANSI/SPARC, cliente-servidor, lenguajes | Nivel externo = vistas y usuarios; nivel conceptual = Modelo Relacional; nivel interno = MariaDB; DBeaver (cliente) → MariaDB (servidor); bloques del script rotulados DDL/DML/DCL/TCL/DQL |
| DER (HE2): entidades, atributos, derivados, cardinalidades, N:M con atributos, historial | DER del taller con derivado `total_orden`, atributos en rombos (`cantidad`/`costo_aplicado`, `cantidad_usada`/`precio_aplicado`) y precios históricos |
| MR y 3FN (HE3) | MR de 9 tablas, 3FN verificada, FK nombradas |
| SQL, ingeniería inversa y manual (HE4) | DDL completo, semillas, `COUNT(*)` de validación |
| Consultas, vistas, triggers, procedimientos, transacciones, usuarios (clases 5–8) | Secciones 3–8 de `UGR-BBDD26-HE5_Giolitti_SQL.sql` |

Ver también `UGR-BBDD26-HE5_Giolitti_Documento.md` sección 5 (misma tabla,
dentro del documento final).
