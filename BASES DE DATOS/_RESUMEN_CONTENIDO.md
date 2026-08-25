# BASES DE DATOS - Resumen de contenido
_Última actualización: 25/08/26_

## General
**Archivo:** General/ProgramaBBDD-TUCD_v00.md
**Fecha:** No identificada
**Temas:** Programa de la asignatura, fundamentos de bases de datos, modelo entidad-relación, SQL, transacciones ACID, NoSQL, ORM, evaluación y metodología
**Resumen:** Documento oficial del programa de la asignatura Bases de Datos correspondiente a 3° año del 1° cuatrimestre de la Tecnicatura Universitaria en Ciencias de Datos (UGR, 2025). Presenta seis unidades temáticas que abarcan desde introducción a los SGBD, modelo entidad-relación y SQL, hasta transacciones, bases de datos NoSQL y mapeo objeto-relacional (ORM). Detalla la metodología de trabajo teórico-práctica con modalidad virtual, bibliografía obligatoria y complementaria, y un sistema de evaluación basado en hitos evaluables y un Trabajo Práctico Integrador (TPI), con tres vías posibles: promoción con examen diferenciado, examen regular y examen libre.

## Unidad 0
**Archivo:** Unidad 0/Apunte de Bases de datos.md
**Fecha:** No identificada
**Temas:** Introducción a bases de datos, Modelado Entidad-Relación (ER), Modelado Relacional, Operaciones de actualización y normalización, SQL
**Resumen:** Este apunte cubre el contenido completo de la materia Bases de Datos, organizado en cinco unidades. Abarca desde los conceptos fundamentales de los sistemas gestores de bases de datos (SGBD), niveles de abstracción y arquitecturas, hasta el modelado conceptual mediante diagramas Entidad-Relación (entidades, atributos, relaciones, cardinalidades, entidades débiles). Luego trata el modelado lógico relacional, incluyendo el mapeo de diagramas ER a esquemas relacionales con claves primarias, foráneas y restricciones de integridad. También desarrolla las operaciones de actualización, anomalías y el proceso de normalización hasta la tercera forma normal (3NF). Finaliza con una cobertura exhaustiva de SQL, incluyendo DDL, DML, funciones de agregación, JOIN, subconsultas, vistas y operadores de conjuntos.

## Unidad 1
**Archivo:** Unidad 1/UGR-BBDD25-U1-TP1.md
**Fecha:** No identificada
**Temas:** Diagrama Entidad-Relación, modelado conceptual de datos, interpretación de DER, ejercicios prácticos
**Resumen:** Trabajo Práctico 1 de la Unidad 1 de Bases de Datos, compuesto por dos ejercicios de práctica sobre modelado de datos. El primer ejercicio propone cuatro enunciados en lenguaje coloquial que los estudiantes deben transformar en Diagramas de Entidad-Relación (empleados/departamentos, jerarquía de jefes, pedidos/productos/proveedores, médicos/pacientes/consultorios). El segundo ejercicio plantea el proceso inverso: a partir de tres DER dados, los estudiantes deben describir en lenguaje natural la situación modelada e inferir el posible cliente o contexto de negocio que justificaría dicho modelado.

**Archivo:** Unidad 1/UGR-BBDD25-U1-TP2.md
**Fecha:** No identificada
**Temas:** Modelado de datos, Diagrama Entidad-Relación, Estudio de casos, Diseño conceptual de bases de datos
**Resumen:** El trabajo práctico presenta tres estudios de caso para ejercitar el modelado de bases de datos mediante diagramas Entidad-Relación. El primer caso aborda una institución de arte con pintores, cuadros y museos, incluyendo relaciones de coautoría y exposiciones múltiples. El segundo caso modela un sistema de reservas de autos con clientes, vehículos, garages y agencias. El tercer caso, el más complejo, plantea una cadena de farmacias con entidades como farmacias, empleados, medicamentos, monodrogas, laboratorios y acciones terapéuticas, con diversas restricciones de integridad y requerimientos de consulta.

**Archivo:** Unidad 1/UGR-BBDD25-U1-TP3.md
**Fecha:** No identificada
**Temas:** Diagrama de Entidad-Relación (DER), Modelo Relacional (MR), claves foráneas (FK), relaciones N:M, entidades y atributos
**Resumen:** Trabajo práctico de la Unidad 1 con ejercicios de modelado de bases de datos relacionales. El Ejercicio 1 propone cuatro situaciones descriptas en lenguaje coloquial (biblioteca, tienda de ropa, hospital y restaurante) a partir de las cuales se debe construir un DER y su correspondiente Modelo Relacional con atributos relevantes. El Ejercicio 2 presenta una serie de Diagramas Entidad-Relación incompletos o con errores que deben ser completados, corregidos y trasladados a un Modelo Relacional vinculando las tablas mediante claves foráneas.

**Archivo:** Unidad 1/UGR-BBDD25-U1-TP4.md
**Fecha:** No identificada
**Temas:** Modelo Entidad-Relación, Modelo Relacional, diseño de base de datos, estudio de caso
**Resumen:** Trabajo Práctico 4 de la Unidad I, basado en un estudio de caso de una aplicación de música en línea. Se presenta un enunciado detallado con los requerimientos de información sobre usuarios, canciones, álbumes, artistas y listas de reproducción, incluyendo restricciones y cardinalidades específicas para cada entidad. Se solicita al alumno construir el Diagrama Entidad-Relación (DER) y el Modelo Relacional correspondiente, junto con una justificación textual de las decisiones de diseño tomadas para completar la información faltante o ambigua del enunciado.

<!-- ESTADO_RESUMEN
{
  "secciones": [
    [
      [
        "General"
      ],
      [
        {
          "rel_path": "General/ProgramaBBDD-TUCD_v00.md",
          "fecha": "No identificada",
          "temas": "Programa de la asignatura, fundamentos de bases de datos, modelo entidad-relación, SQL, transacciones ACID, NoSQL, ORM, evaluación y metodología",
          "resumen": "Documento oficial del programa de la asignatura Bases de Datos correspondiente a 3° año del 1° cuatrimestre de la Tecnicatura Universitaria en Ciencias de Datos (UGR, 2025). Presenta seis unidades temáticas que abarcan desde introducción a los SGBD, modelo entidad-relación y SQL, hasta transacciones, bases de datos NoSQL y mapeo objeto-relacional (ORM). Detalla la metodología de trabajo teórico-práctica con modalidad virtual, bibliografía obligatoria y complementaria, y un sistema de evaluación basado en hitos evaluables y un Trabajo Práctico Integrador (TPI), con tres vías posibles: promoción con examen diferenciado, examen regular y examen libre."
        }
      ]
    ],
    [
      [
        "Unidad 0"
      ],
      [
        {
          "rel_path": "Unidad 0/Apunte de Bases de datos.md",
          "fecha": "No identificada",
          "temas": "Introducción a bases de datos, Modelado Entidad-Relación (ER), Modelado Relacional, Operaciones de actualización y normalización, SQL",
          "resumen": "Este apunte cubre el contenido completo de la materia Bases de Datos, organizado en cinco unidades. Abarca desde los conceptos fundamentales de los sistemas gestores de bases de datos (SGBD), niveles de abstracción y arquitecturas, hasta el modelado conceptual mediante diagramas Entidad-Relación (entidades, atributos, relaciones, cardinalidades, entidades débiles). Luego trata el modelado lógico relacional, incluyendo el mapeo de diagramas ER a esquemas relacionales con claves primarias, foráneas y restricciones de integridad. También desarrolla las operaciones de actualización, anomalías y el proceso de normalización hasta la tercera forma normal (3NF). Finaliza con una cobertura exhaustiva de SQL, incluyendo DDL, DML, funciones de agregación, JOIN, subconsultas, vistas y operadores de conjuntos."
        }
      ]
    ],
    [
      [
        "Unidad 1"
      ],
      [
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP1.md",
          "fecha": "No identificada",
          "temas": "Diagrama Entidad-Relación, modelado conceptual de datos, interpretación de DER, ejercicios prácticos",
          "resumen": "Trabajo Práctico 1 de la Unidad 1 de Bases de Datos, compuesto por dos ejercicios de práctica sobre modelado de datos. El primer ejercicio propone cuatro enunciados en lenguaje coloquial que los estudiantes deben transformar en Diagramas de Entidad-Relación (empleados/departamentos, jerarquía de jefes, pedidos/productos/proveedores, médicos/pacientes/consultorios). El segundo ejercicio plantea el proceso inverso: a partir de tres DER dados, los estudiantes deben describir en lenguaje natural la situación modelada e inferir el posible cliente o contexto de negocio que justificaría dicho modelado."
        },
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP2.md",
          "fecha": "No identificada",
          "temas": "Modelado de datos, Diagrama Entidad-Relación, Estudio de casos, Diseño conceptual de bases de datos",
          "resumen": "El trabajo práctico presenta tres estudios de caso para ejercitar el modelado de bases de datos mediante diagramas Entidad-Relación. El primer caso aborda una institución de arte con pintores, cuadros y museos, incluyendo relaciones de coautoría y exposiciones múltiples. El segundo caso modela un sistema de reservas de autos con clientes, vehículos, garages y agencias. El tercer caso, el más complejo, plantea una cadena de farmacias con entidades como farmacias, empleados, medicamentos, monodrogas, laboratorios y acciones terapéuticas, con diversas restricciones de integridad y requerimientos de consulta."
        },
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP3.md",
          "fecha": "No identificada",
          "temas": "Diagrama de Entidad-Relación (DER), Modelo Relacional (MR), claves foráneas (FK), relaciones N:M, entidades y atributos",
          "resumen": "Trabajo práctico de la Unidad 1 con ejercicios de modelado de bases de datos relacionales. El Ejercicio 1 propone cuatro situaciones descriptas en lenguaje coloquial (biblioteca, tienda de ropa, hospital y restaurante) a partir de las cuales se debe construir un DER y su correspondiente Modelo Relacional con atributos relevantes. El Ejercicio 2 presenta una serie de Diagramas Entidad-Relación incompletos o con errores que deben ser completados, corregidos y trasladados a un Modelo Relacional vinculando las tablas mediante claves foráneas."
        },
        {
          "rel_path": "Unidad 1/UGR-BBDD25-U1-TP4.md",
          "fecha": "No identificada",
          "temas": "Modelo Entidad-Relación, Modelo Relacional, diseño de base de datos, estudio de caso",
          "resumen": "Trabajo Práctico 4 de la Unidad I, basado en un estudio de caso de una aplicación de música en línea. Se presenta un enunciado detallado con los requerimientos de información sobre usuarios, canciones, álbumes, artistas y listas de reproducción, incluyendo restricciones y cardinalidades específicas para cada entidad. Se solicita al alumno construir el Diagrama Entidad-Relación (DER) y el Modelo Relacional correspondiente, junto con una justificación textual de las decisiones de diseño tomadas para completar la información faltante o ambigua del enunciado."
        }
      ]
    ]
  ]
}
-->
