# BASES DE DATOS - Resumen de contenido
_Última actualización: 02/09/26_

## General
**Archivo:** General/ProgramaBBDD-TUCD_v00.md
**Fecha:** No identificada
**Temas:** Programa de la asignatura, fundamentos de bases de datos, modelo entidad-relación, SQL, transacciones ACID, NoSQL, ORM, evaluación y metodología
**Resumen:** Documento oficial del programa de la asignatura Bases de Datos correspondiente a 3° año del 1° cuatrimestre de la Tecnicatura Universitaria en Ciencias de Datos (UGR, 2025). Presenta seis unidades temáticas que abarcan desde introducción a los SGBD, modelo entidad-relación y SQL, hasta transacciones, bases de datos NoSQL y mapeo objeto-relacional (ORM). Detalla la metodología de trabajo teórico-práctica con modalidad virtual, bibliografía obligatoria y complementaria, y un sistema de evaluación basado en hitos evaluables y un Trabajo Práctico Integrador (TPI), con tres vías posibles: promoción con examen diferenciado, examen regular y examen libre.

**Archivo:** General/En este espacio deberán ser publicados_- Programa ....txt
**Fecha:** No identificada
**Temas:** Presentación de la materia, estructura del curso, bloques temáticos, sistemas de gestión de bases de datos, bases de datos relacionales, bases de datos no relacionales
**Resumen:** El docente Brian Gauhna da la bienvenida a la asignatura Bases de Datos, correspondiente al tercer año (primer cuatrimestre) de la Tecnicatura Universitaria en Ciencia de Datos de la UGR. Presenta la estructura general del curso, dividida en tres bloques: introducción a los sistemas de gestión de bases de datos, esquema lógico de bases de datos relacionales y lenguaje SQL, y bases de datos no relacionales. Menciona que la materia es cuatrimestral e invita a los estudiantes a revisar el programa y la planificación disponibles en el aula virtual.

## Grabaciones sincrónicos
**Archivo:** Grabaciones sincrónicos/Clase 01 - Presentación de la Asignatura.txt
**Fecha:** No identificada
**Temas:** Presentación del docente, modalidad de cursado, programa de la asignatura, sistema de evaluación, hitos evaluables, trabajo práctico integrador, herramientas a utilizar (MariaDB, notación de Chen)
**Resumen:** El docente Brian Gauna presenta la asignatura Bases de Datos, explicando la dinámica de trabajo: clases semanales con entregas cada dos semanas (siete hitos evaluables en total). Describe el programa, que abarca desde introducción a sistemas de bases de datos, modelos relacionales, normalización, SQL (DDL, DML, transacciones, triggers) hasta una introducción a bases NoSQL. Detalla el sistema de promoción basado en la entrega en tiempo y forma de los hitos y la defensa oral de un trabajo práctico integrador. Se mencionan las herramientas principales (MariaDB, DBeaver, notación de Chen) y el uso de rúbricas para la corrección de actividades.

**Archivo:** Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia).txt
**Fecha:** No identificada
**Temas:** Introducción a bases de datos, sistemas de gestión de bases de datos (SGBD), modelos de datos, arquitectura cliente-servidor, historia de las bases de datos, SQL como estándar, instalación de MariaDB y DBeaver, herramienta NotebookLM
**Resumen:** La clase inaugural de Bases de Datos presenta los conceptos fundamentales del área: qué es una base de datos, qué es un SGBD y qué problemas resuelve (redundancia, integridad, concurrencia, seguridad). Se recorre la evolución histórica desde las cintas magnéticas hasta los sistemas distribuidos modernos, explicando cómo surgió SQL como estándar ante la fragmentación de lenguajes propietarios. Se describen los modelos de datos (relacional, entidad-relación, orientado a objetos, jerárquico) y las arquitecturas de dos y tres capas. Finalmente, se indica a los estudiantes instalar MariaDB y DBeaver, y se presenta NotebookLM como herramienta de estudio asistida por IA para generar preguntas, respuestas e infografías a partir del material de la materia.

**Archivo:** Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD.txt
**Fecha:** No identificada
**Temas:** Modelo Entidad-Relación, entidades fuertes y débiles, atributos, relaciones binarias y unarias, cardinalidad, diagramas ER, notación de Chen
**Resumen:** La clase introduce el modelo Entidad-Relación (ER) como base del modelado lógico de bases de datos. Se explican los conceptos de entidades fuertes y débiles, sus atributos (únicos, no únicos, compuestos, multivaluados, opcionales y derivados) y las relaciones entre entidades (binarias, unarias e identitarias). Se detalla la cardinalidad mínima y máxima (uno a uno, uno a muchos, muchos a muchos) y su representación gráfica con la notación de Chen. Se menciona el uso del software draw.io (gred plus) para construir diagramas ER, y se anticipa que en la próxima clase se realizarán ejercicios prácticos de modelado.

**Archivo:** Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia) (copia) (copia).txt
**Fecha:** No identificada
**Temas:** Diagrama Entidad-Relación, entidades, atributos, cardinalidades, relaciones unarias, relaciones muchos a muchos, conversión a esquema relacional
**Resumen:** La clase (tercera de la materia) introduce el modelado con diagramas Entidad-Relación utilizando una herramienta de software específica. Se trabajan conceptos como entidades fuertes y débiles, tipos de atributos (únicos, multivaluados, opcionales, compuestos y derivados), y cardinalidades. Se desarrollan ejercicios prácticos: un modelo departamento-empleado, una relación unaria de jefes-empleados, y un modelo de pedidos-productos-proveedores. Se hace especial énfasis en que las relaciones de muchos a muchos no deben romperse y pueden contener atributos propios, y se muestra cómo el diagrama puede convertirse automáticamente en un esquema relacional y código SQL.

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

**Archivo:** Unidad 1/Construcción de DER - Ejemplos Prácticos (sencillos).txt
**Fecha:** No identificada
**Temas:** Diagrama Entidad-Relación (DER), entidades y atributos, cardinalidades, claves primarias y candidatas, relaciones entre entidades
**Resumen:** La clase presenta la resolución práctica de dos ejercicios de construcción de Diagramas de Entidad-Relación (DER). El primer caso modela una empresa de ventas con entidades Cliente, Producto y Proveedor, identificando atributos, claves primarias (DNI, código de producto, NIF) y cardinalidades (M:N entre cliente y producto; 1:N entre proveedor y producto). El segundo caso modela una empresa de transportes con entidades Camionero, Paquete, Ciudad y Camión, estableciendo sus respectivas cardinalidades (1:N entre ciudad y paquete, 1:N entre camionero y paquete, M:N entre camionero y camión). Se hace énfasis en cómo identificar entidades a partir de sustantivos, relaciones a partir de verbos, y en la correcta selección de claves primarias según unicidad y estabilidad del atributo.

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
        },
        {
          "rel_path": "General/En este espacio deberán ser publicados_- Programa ....txt",
          "fecha": "No identificada",
          "temas": "Presentación de la materia, estructura del curso, bloques temáticos, sistemas de gestión de bases de datos, bases de datos relacionales, bases de datos no relacionales",
          "resumen": "El docente Brian Gauhna da la bienvenida a la asignatura Bases de Datos, correspondiente al tercer año (primer cuatrimestre) de la Tecnicatura Universitaria en Ciencia de Datos de la UGR. Presenta la estructura general del curso, dividida en tres bloques: introducción a los sistemas de gestión de bases de datos, esquema lógico de bases de datos relacionales y lenguaje SQL, y bases de datos no relacionales. Menciona que la materia es cuatrimestral e invita a los estudiantes a revisar el programa y la planificación disponibles en el aula virtual."
        }
      ]
    ],
    [
      [
        "Grabaciones sincrónicos"
      ],
      [
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Presentación de la Asignatura.txt",
          "fecha": "No identificada",
          "temas": "Presentación del docente, modalidad de cursado, programa de la asignatura, sistema de evaluación, hitos evaluables, trabajo práctico integrador, herramientas a utilizar (MariaDB, notación de Chen)",
          "resumen": "El docente Brian Gauna presenta la asignatura Bases de Datos, explicando la dinámica de trabajo: clases semanales con entregas cada dos semanas (siete hitos evaluables en total). Describe el programa, que abarca desde introducción a sistemas de bases de datos, modelos relacionales, normalización, SQL (DDL, DML, transacciones, triggers) hasta una introducción a bases NoSQL. Detalla el sistema de promoción basado en la entrega en tiempo y forma de los hitos y la defensa oral de un trabajo práctico integrador. Se mencionan las herramientas principales (MariaDB, DBeaver, notación de Chen) y el uso de rúbricas para la corrección de actividades."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia).txt",
          "fecha": "No identificada",
          "temas": "Introducción a bases de datos, sistemas de gestión de bases de datos (SGBD), modelos de datos, arquitectura cliente-servidor, historia de las bases de datos, SQL como estándar, instalación de MariaDB y DBeaver, herramienta NotebookLM",
          "resumen": "La clase inaugural de Bases de Datos presenta los conceptos fundamentales del área: qué es una base de datos, qué es un SGBD y qué problemas resuelve (redundancia, integridad, concurrencia, seguridad). Se recorre la evolución histórica desde las cintas magnéticas hasta los sistemas distribuidos modernos, explicando cómo surgió SQL como estándar ante la fragmentación de lenguajes propietarios. Se describen los modelos de datos (relacional, entidad-relación, orientado a objetos, jerárquico) y las arquitecturas de dos y tres capas. Finalmente, se indica a los estudiantes instalar MariaDB y DBeaver, y se presenta NotebookLM como herramienta de estudio asistida por IA para generar preguntas, respuestas e infografías a partir del material de la materia."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD.txt",
          "fecha": "No identificada",
          "temas": "Modelo Entidad-Relación, entidades fuertes y débiles, atributos, relaciones binarias y unarias, cardinalidad, diagramas ER, notación de Chen",
          "resumen": "La clase introduce el modelo Entidad-Relación (ER) como base del modelado lógico de bases de datos. Se explican los conceptos de entidades fuertes y débiles, sus atributos (únicos, no únicos, compuestos, multivaluados, opcionales y derivados) y las relaciones entre entidades (binarias, unarias e identitarias). Se detalla la cardinalidad mínima y máxima (uno a uno, uno a muchos, muchos a muchos) y su representación gráfica con la notación de Chen. Se menciona el uso del software draw.io (gred plus) para construir diagramas ER, y se anticipa que en la próxima clase se realizarán ejercicios prácticos de modelado."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Clase 01 - Introducción a las BBDD (copia) (copia) (copia).txt",
          "fecha": "No identificada",
          "temas": "Diagrama Entidad-Relación, entidades, atributos, cardinalidades, relaciones unarias, relaciones muchos a muchos, conversión a esquema relacional",
          "resumen": "La clase (tercera de la materia) introduce el modelado con diagramas Entidad-Relación utilizando una herramienta de software específica. Se trabajan conceptos como entidades fuertes y débiles, tipos de atributos (únicos, multivaluados, opcionales, compuestos y derivados), y cardinalidades. Se desarrollan ejercicios prácticos: un modelo departamento-empleado, una relación unaria de jefes-empleados, y un modelo de pedidos-productos-proveedores. Se hace especial énfasis en que las relaciones de muchos a muchos no deben romperse y pueden contener atributos propios, y se muestra cómo el diagrama puede convertirse automáticamente en un esquema relacional y código SQL."
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
        },
        {
          "rel_path": "Unidad 1/Construcción de DER - Ejemplos Prácticos (sencillos).txt",
          "fecha": "No identificada",
          "temas": "Diagrama Entidad-Relación (DER), entidades y atributos, cardinalidades, claves primarias y candidatas, relaciones entre entidades",
          "resumen": "La clase presenta la resolución práctica de dos ejercicios de construcción de Diagramas de Entidad-Relación (DER). El primer caso modela una empresa de ventas con entidades Cliente, Producto y Proveedor, identificando atributos, claves primarias (DNI, código de producto, NIF) y cardinalidades (M:N entre cliente y producto; 1:N entre proveedor y producto). El segundo caso modela una empresa de transportes con entidades Camionero, Paquete, Ciudad y Camión, estableciendo sus respectivas cardinalidades (1:N entre ciudad y paquete, 1:N entre camionero y paquete, M:N entre camionero y camión). Se hace énfasis en cómo identificar entidades a partir de sustantivos, relaciones a partir de verbos, y en la correcta selección de claves primarias según unicidad y estabilidad del atributo."
        }
      ]
    ]
  ]
}
-->
