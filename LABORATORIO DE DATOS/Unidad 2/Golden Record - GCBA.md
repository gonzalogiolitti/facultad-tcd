<!-- página 1 -->

IF-2023-46902722-GCABA-SECITD
Página 1 de 122

---

<!-- página 2 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Índice
Introducción
2
Misión y Visión
2
Organigrama
3
¿Cómo trabaja la Dirección?
4
Proyectos
6
Plataforma Inteligente de Buenos Aires (PIBA)
6
Data Warehouse
27
Maestro de Establecimientos
34
Portal de Oportunidades
49
Broker de ciudadanos
65
Expresión BA
83
Automatización del Monitoreo de la Operación
90
BA Data
101
COVID-19 en Datos
108
1
IF-2023-46902722-GCABA-SECITD
Página 2 de 122

---

<!-- página 3 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Introducción
La elaboración del presente documento tiene como objetivo publicitar el
informe
de
gestión
de
esta
Dirección
General
de
Arquitectura
de Datos,
dependiente de la Subsecretaría de Políticas Públicas Basadas en Evidencia, de la
Secretaría de Innovación y Transformación Digital del Gobierno de la Ciudad
Autónoma de Buenos Aires.
Misión y Visión
La Dirección General de Arquitectura de Datos fue creada en diciembre de
2019 como parte de la estrategia del Gobierno de la Ciudad Autónoma de Buenos
Aires de promover la toma de decisiones basadas en evidencia. A continuación, se
exponen las responsabilidades primarias y acciones vigentes a la fecha según
consta en el Decreto 463/2019.
●
Definir estándares para asegurar la calidad e interoperabilidad de datos.
●
Establecer los criterios para niveles de acceso y seguridad de los datos, en
coordinación con la Secretaría Legal y Técnica.
●
Implementar y administrar el Inventario de Metadatos del Gobierno de la
Ciudad Autónoma de Buenos Aires.
●
Mantener y administrar el portal de datos de la Ciudad Autónoma de
Buenos Aires, en coordinación con la Secretaría General y Relaciones
Internacionales.
●
Realizar el procesamiento y control de los datasets, disponiblizándolos para
su publicación en el portal de datos abiertos, y proveer asesoramiento a las
áreas del Gobierno de la Ciudad Autónoma de Buenos Aires para mejorar la
calidad de la información, en coordinación con la Secretaría General y
Relaciones Internacionales.
●
Definir el lineamiento y el mantenimiento de las entidades interoperables.
●
Definir e implementar la infraestructura tecnológica de la Oficina Central
de Datos.
●
Coordina la provisión de la infraestructura necesaria con la Agencia de
Sistemas de la Información.
●
Desarrollar y mantener el repositorio de datos del Gobierno de la Ciudad
Autónoma de Buenos Aires.
2
IF-2023-46902722-GCABA-SECITD
Página 3 de 122

---

<!-- página 4 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
●
Asistir a las áreas de Gobierno, en la incorporación de herramientas
informáticas de análisis y administración de datos, que permitan generar
información para el seguimiento, control y análisis de sus actividades, la
creación de modelos predictivos y la toma de decisiones.
De esta Dirección General, dependen las siguientes Gerencias Operativas, con sus
correspondientes funciones:
●
Gerencia Operativa de Estandarización e Interoperabilidad de Datos
(GOEID): se encarga
de disponibilizar los datos del Gobierno y de
entidades externas específicas, a través de servicios y herramientas que
fomenten
la
vinculación
entre
áreas;
facilitando
de
esta manera, la
colaboración y el intercambio de información.
●
Gerencia
Operativa
de
Inventario
de
Metadatos
(GOIM):
gestiona,
actualiza
y
brinda
asesoramiento
sobre
el
Inventario
de
Metadatos,
administra el portal de datos abiertos y colabora en el mantenimiento de la
Infraestructura de Datos Espaciales, así como en el procesamiento y control
de datasets para su publicación.
●
Gerencia Operativa de Ingeniería de Datos (GOID): difunde y actualiza
directrices para el diseño de la arquitectura de aplicaciones y bases de
datos.
Desarrolla
procesos
automáticos
para
integración
de
datos,
definición
de
herramientas
y
disponibilización
de soluciones para la
recolección de datos en campo. Además, diseño y mantenimiento de
herramientas geográficas basadas en el mapa interactivo de la Ciudad.
Colaboración en la implementación y mantenimiento de la infraestructura
tecnológica de la Subsecretaría.
Organigrama
A Diciembre de 2023, se presenta el organigrama que detalla las áreas que
integran la Subsecretaría y el rol de cada uno de los integrantes del equipo:
3
IF-2023-46902722-GCABA-SECITD
Página 4 de 122

---

<!-- página 5 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
4
IF-2023-46902722-GCABA-SECITD
Página 5 de 122

---

<!-- página 6 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Cómo trabaja la Dirección?
Aproximación ontológica al problema: Este abordaje resultó fundamental
para evitar replicar lógicas de silo. Construir una representación ontológica
implica desarrollar un marco formal que define cómo se estructuran y relacionan
los datos. Este proceso se enfoca en capturar la semántica, o el significado, de los
datos dentro de un contexto específico, en nuestro caso, el de la Ciudad de
Buenos Aires.
Construir esta representación a alto nivel de la Ciudad, nos permitió
identificar los conceptos clave, las entidades relevantes y las relaciones entre estas
entidades.
Modelo ontológico de la Ciudad diseñado por la SSPPBE
Caso de uso como lógica de trabajo con las áreas de Gobierno: abordar
los productos o servicios de datos desde esta lógica garantizar que entendemos
mejor las necesidades de los usuarios y cómo interactúan con el producto o
servicio. Nos aseguramos de estar al servicio de la necesidad o dolor que tiene el
área y de no poner a la herramienta por encima de esa necesidad.
En cuanto a la implementación de la metodología agile: hemos adoptado
un enfoque iterativo y flexible para el desarrollo de proyectos. De esta manera,
fomentamos
la
colaboración
constante
entre
equipos
multidisciplinarios
y
stakeholders, entrenando la capacidad de adaptación rápida a los cambios.
Por último, es importante tener un proceso de trabajo estructurado a la
hora de diseñar e implementar un producto o servicio de datos. Un proceso
5
IF-2023-46902722-GCABA-SECITD
Página 6 de 122

---

<!-- página 7 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
estructurado establece una hoja de ruta clara, definiendo las etapas, tareas y
responsabilidades. También garantiza que todos los aspectos del producto se
desarrollen de manera coherente y se mantengan altos estándares de calidad.
A continuación se ilustra, de manera resumida, el proceso que utiliza la
Dirección:
Proceso estructurado de desarrollo de productos y servicios de la DGARD
Proyectos
A continuación, detallaremos minuciosamente cada uno de los proyectos
desarrollados por esta Dirección General, describiendo su naturaleza, el problema
identificado que se pretendía solucionar, cómo se abordó este desafío, los
destacados logros alcanzados hasta la fecha y los próximos pasos delineados en
nuestra continua búsqueda por mejorar y optimizar nuestra gestión basada en
datos.
JE 1. GOBERNAR
Plataforma Inteligente de Buenos Aires (PIBA)
La Plataforma Inteligente de Buenos Aires (PIBA) es un repositorio único de
información que integra datos de todo el Gobierno de la Ciudad de Buenos Aires,
transformándose en una herramienta de inteligencia aumentada.
Desde un
punto de vista más técnico, es un Data Lake en la nube que permite la gestión de
datos híbridos y macrodatos en tiempo real.
PIBA busca integrar y disponibilizar los datos de todo el Gobierno de la
6
IF-2023-46902722-GCABA-SECITD
Página 7 de 122

---

<!-- página 8 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Ciudad de Buenos Aires a los fines de democratizar el acceso a datos de alta
calidad para la toma de decisiones basadas en evidencia para todas las áreas de
gobierno.
Fecha de inicio
Julio de 2021
Stakeholders involucrados
●
Dirección General de Arquitectura de Datos, Subsecretaría de
Políticas Públicas Basadas en Evidencia.
●
Agencia de Sistemas de Información (ASI).
●
Amazon Web Service (AWS): Fueron los
encargados del
soporte consultivo de tercer nivel relacionado a los servicios y usos en la
plataforma de AWS. A su vez, llevaron adelante las pruebas de concepto y
evaluación de oportunidades de mejora basadas en el marco de la buena
arquitectura de AWS para cada uno de sus pilares (seguridad, costo
eficiencia,
performance,
confiabilidad,
excelencia
operativa
y
sustentabilidad).
●
The Black Puma (TBP): Fueron los encargados de realizar las
reuniones con las áreas de datos, requeridas para la creación de los casos
de usos definidos por la Subsecretaría. Se dedicaron al análisis ontológico,
los diagramas de entidad-relación, aplicar transformaciones y técnicas para
mejorar la calidad de los datos, evaluar la información requerida para la
correcta
implementación
del
caso
de
uso,
documentar
dichas
transformaciones y capacitar al equipo del Gobierno de la Ciudad de
Buenos Aires para poder operar y continuar con estas tareas.
●
Netrix (anteriormente conocido como Edrans): Fue el equipo
técnico encargado de crear, desarrollar y mantener el código requerido
para todos los usos de datos que involucraron al Data Lake. También
realizaron las capacitaciones correspondientes al equipo del Gobierno de la
Ciudad de Buenos Aires para que pueda continuar con la operatoria y
construir sus propios casos de usos alineados a las buenas prácticas.
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
Con frecuencia, las grandes organizaciones como el Gobierno de la Ciudad
de Buenos Aires se encuentran con problemas para el uso de los datos: grandes
volúmenes, muchos actores, inconsistencias en las bases de datos y falta de
7
IF-2023-46902722-GCABA-SECITD
Página 8 de 122

---

<!-- página 9 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
integración.
Concretamente, en el uso diario de los datos, las distintas áreas y personas
que trabajan con información encuentran problemas en el origen de los datos: no
conocen fehacientemente el origen de los mismos, o dado que existen varias
fuentes de información no saben cuál es la correcta.
En organizaciones grandes, muchas veces se presenta el escenario en el
que las personas están trabajando con información que está almacenada en otras
áreas y el acceso a la misma depende de referentes de esas áreas remotas,
asimismo, no existe un repositorio único de información.
Otro escenario recurrente es el que se da cuando se conocen los orígenes y
se tiene acceso a los datos, pero muchas veces no tienen calidad: no son
consistentes,
están
incompletos,
hay
campos
vacíos,
desactualizados
o
directamente son erróneos. Sin entrar en detalles en cuanto a la estandarización
así como estar en el desconocimiento si se está frente a datos sensibles o no y por
ende, si se puede trabajar con ellos de manera segura.
Tener datos no implica poder sacar conclusiones acertadas de ellos, incluso
muchas veces se dificulta interpretarlos correctamente.
¿Qué problemas nos encontramos al utilizar datos?
8
IF-2023-46902722-GCABA-SECITD
Página 9 de 122

---

<!-- página 10 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
PIBA es un Data Lake en la nube que permite la gestión de datos híbridos y
macrodatos en tiempo real, donde buscamos ingestar diferentes bases de datos
pertenecientes a las distintas áreas de gobierno, con el fin de integrarlos y romper
los silos de información para obtener vistas 360° de la información de Gobierno,
realizando análisis entre áreas que sumen valor.
Su
infraestructura
altamente
escalable
permite
ingestar datos en su
formato original desde una amplia variedad de fuentes.
La implementación del Data Lake en el gobierno de la Ciudad de Buenos
Aires permite resolver el acceso no democrático a los datos. Las diferentes áreas
tienen la posibilidad de acceder a una fuente común de información, mejorando
la eficiencia en la prestación de servicios y la toma de decisiones.
Un ejemplo concreto de utilización del Data Lake es la creación de tableros
de control (reportes, tableros y diversa analítica) que proporcionan información
actualizada sobre diversos áreas de interés para la gestión de la Ciudad, a saber:
●
Información sobre habilitaciones e inspecciones
●
Trazabilidad de cursos y capacitaciones de ciudadanos
●
Tratamiento de reseñas de los ciudadanos sobre sitios de gobierno
Con estas herramientas, los tomadores de decisión tienen más y mejor
información para monitorear tendencias, identificar problemas, tomar medidas y
desarrollar políticas públicas basadas en evidencia en tiempo real.
La democratización de los datos a través de la implementación del Data
Lake en el Gobierno de la Ciudad de Buenos Aires es esencial para el futuro de la
administración pública. Facilita la gobernanza de datos, la toma de decisiones
fundamentadas
en
datos,
con
un
enfoque
en
la
confianza,
calidad
y
la
federalización de datos. El uso efectivo de un Data Lake dentro del gobierno de la
Ciudad de Buenos Aires es el catalizador para un gobierno más eficiente y
orientado en los datos.
Desde la Dirección General de Arquitectura de Datos entendemos que usar
un Data Lake para gestionar datos tiene múltiples beneficios.
Por un lado, dado que la infraestructura de una Data Lake es escalable y
flexible, podemos crecer a la par que crecen los casos de uso y pagar sólo por lo
que se usa: PIBA permite incrementar la eficiencia en tiempo y costo en el
9
IF-2023-46902722-GCABA-SECITD
Página 10 de 122

---

<!-- página 11 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
procesamiento de datos, a la vez que reduce tiempos de ingesta y transformación
de datos.
Por otro lado, PIBA permite tener mejores datos para basar el diseño de las
políticas públicas en evidencia ya que permite diseñar modelos de integración de
datos que facilita la relación entre las bases, promueve el enriquecimiento de los
datos y permite hacer análisis más robustos facilitando el cruce de datos con
información de muchas áreas de gobierno. Podemos, así, realizar modelos
analíticos y con inteligencia artificial más sofisticados entre bases de datos y en
tiempo real.
Por último, y no menos importante, PIBA permite la implementación de
políticas de gobernanza de datos: identificamos datos sensibles y otorgamos
diferentes niveles de acceso y restricción según roles y jerarquías.
Solución de almacenamiento heredada y la propuesta
Proceso de despliegue del Data Lake en el Gobierno de la Ciudad de Buenos
Aires.
El Data Lake a nivel proyecto inició en julio de 2021 e implicó la ejecución de
muchas
tareas
que
fueron
conducidas
en
diferentes
líneas
de
trabajo:
infraestructura, seguridad, data, operación y capacitación. A finales de diciembre
del mismo año se implementó, y en febrero de 2022 se dió el primer caso de uso.
10
IF-2023-46902722-GCABA-SECITD
Página 11 de 122

---

<!-- página 12 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Roadmap del Despliegue de la Plataforma Inteligente de Buenos Aires
Infraestructura
Se llevaron a cabo distintas reuniones para analizar y definir los acuerdos de
arquitectura, lo cuales implican la creación de las cuentas y entornos del Data
Lake:
○Sandbox
○Data Lake Desarrollo
○Data Lake Producción
○Apps Desarrollo
○Apps Homologación
○Apps Producción
Por otro lado también se definieron roles y permisos, federados con Azure
AD, por medio de la ASI, para usuarios consumidores de PIBA, para los equipos de
la Subsecretaría de Políticas Públicas Basadas en Evidencia encargados de la
gestión, administración, mantenimiento del Data Lake, como así también en el
tratamiento y disponibilización de los datos.
El
siguiente
diagrama
muestra
la
infraestructura
implementada
y
desplegada en el Data Lake, trabajado en conjunto con AWS.
11
IF-2023-46902722-GCABA-SECITD
Página 12 de 122

---

<!-- página 13 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Diseño de la arquitectura de PIBA
Seguridad
Se llevaron a cabo tareas de homologación de criterios de seguridad
ASI-AWS y
políticas de logueo centralizado. A su vez, se implementaron roles
basados en lineamientos de gobernanza de datos, con federación con Azure AD
para los administradores, modeladores y consumidores de PIBA.
También se generaron repositorio de Logs y Auditoría para el control
interno. Todo el despliegue y las tareas que se requirieron a tal fin, fue basado en
el marco de las buenas prácticas de AWS.
Data
Para
este
eje
se
llevó
adelante
la
construcción
de
metodología
de
priorización de casos de uso y bases de datos para orientar el avance de los
distintos proyectos.
Por otro lado, se realizaron relevamientos técnicos de bases de datos y
solicitudes de accesos a las mismas para avanzar en la ingesta y tratamiento de
los datos, según el caso de uso.
Con dichos accesos y habiendo priorizado las bases y casos de uso, se
avanzó en tareas de relevamiento funcional de las fuentes, procesos de ETL
(extract, transform y load), validación de datos, relevamientos funcionales para el
diseño y la construcción de APIs que permiten disponibilizar la información, y
según el caso de uso, se realizaron procesos de anonimización de datos.
12
IF-2023-46902722-GCABA-SECITD
Página 13 de 122

---

<!-- página 14 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Capacitación
En el caso de la línea de capacitación, se implementaron metodologías
ágiles para el desarrollo y seguimiento de la implementación del Data Lake y
desarrollo de los distintos casos de uso.
Por otro lado, se realizaron distintas capacitaciones a los equipos en
Infraestructura, Data, Operaciones, ML/IA y Data Analytics en AWS.
También, a medida que avanzó el proceso de despliegue del Data Lake se
fue documentando la misma en los distintos ejes: documentación Infraestructura,
Data,
Operaciones,
Runbook
y
se
realizaron
reuniones
de
traspaso
de
conocimiento (KT) entre el equipo de AWS, al equipo interno de gobierno en lo
referente a las operaciones.
Operación
Para llevar adelante la operación se realizó el armado de equipo interno de
la Dirección General de Arquitectura de Datos y se incorporó al director del área,
para poder realizar la transición de la operación y mantenimiento
desde los
partner que trabajaron en la implementación al equipo del Gobierno de la Ciudad
de Buenos Aires.
Se realizó, también, un Framework de operaciones, monitoreo y alarmas, y
documentó el modelo operativo Data Lake para darle continuidad a la operación.
Casos de Uso desarrollados en PIBA.
Broker de Identidad
El proyecto de Broker de Identidad, es el módulo de PIBA que busca
entender al ciudadano de manera unívoca en todas sus dimensiones y mejorar la
calidad de datos e información con la que contamos de cada ciudadano que haya
interactuado con algún servicio de gobierno.
Con registros históricos, se centralizan, integran y normalizan datos de
diferentes fuentes de información para identificar unívocamente del vecino, traer
la mejor información disponible para agregar valor y diseñar servicios adaptados a
sus verdaderas necesidades.
Es una llave que permite crear una capa semántica (grafo de conocimiento)
con significado compartido entre áreas del Gobierno de la Ciudad de Buenos
Aires.
13
IF-2023-46902722-GCABA-SECITD
Página 14 de 122

---

<!-- página 15 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Actualmente
en
el
Broker
se
puede
encontrar
información
de
los
ciudadanos de las siguientes dimensiones:
●
Identificación de Ciudadano
●
Contacto
●
Biometría
Adicionalmente, se integraron nuevas entidades que complementan la
información del ciudadano en nuevas dimensiones:
●
Educación
●
Empleabilidad
●
Supervivencia
●
Programas Sociales
●
Hogar
●
Familia
●
Vínculos
El Broker permite integrar distintas bases de datos para identificar
al ciudadano en sus múltiples dimensiones
Formularios Inteligentes
Este caso de uso identifica la identidad del vecino, valiéndose del Broker de
Identidad y trae la mejor información disponible en múltiples fuentes de datos
para autocompletar formularios. Es decir, disponibiliza los datos del Broker de
Identidad y da la opción de guardarlo mediante una API. Este caso de uso se
trabajó principalmente integrando formularios de subsidios en el Sistema de
Administración de Documentos Electrónicos (SADE).
14
IF-2023-46902722-GCABA-SECITD
Página 15 de 122

---

<!-- página 16 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Ha logrado mejorar el desempeño de los formularios de ingreso de datos
del Gobierno de la Ciudad de Buenos Aires y la eficiencia de los procesos, a bajo
costo y mejora los tiempos de respuesta de los sistemas en un 140%, registrando
un promedio de 4400 llamadas a la API por mes.
Optimización de Subsidios
Este proyecto tiene como objetivo garantizar que los subsidios del Gobierno
de la Ciudad se liquiden por medio del sistema de Planes Sociales y Subsidios
(PSOCS), garantizando la trazabilidad de los pagos y centralizando la información
disponible
sobre
beneficiarios,
generando
indicadores
adecuados
a
nivel
Gobierno para tomar decisiones de políticas públicas asociadas a programas
sociales basadas en evidencia.
A continuación los atributos que se incorporan al modelo:
id_plan
Es el identificador único del beneficio
fecha_alta_plan
Corresponde a la fecha de alta del beneficio (id_plan)
categorizacion_plan
Indica el tipo relevado de subsidio (id_plan)
descripcion
Es el nombre del subsidio (id_plan)
abreviatura
Es la abreviatura asignada al subsidio (id_plan)
periodicidad_dias_plan
Muestra la periodicidad de pago relevada del subsidio
expresada en días
incompatibilidad_nominal
Refiere a las Incompatibilidades relevadas entre distintos
subsidios
es_transferencia_directa
Indica si el subsidio es una transferencia directa (1) o no (0).
Maestro de Establecimientos
El proyecto busca comprender la composición actual del mapa de los
establecimientos que existen en la Ciudad de Buenos Aires para así identificar
unívocamente al comercio en sus múltiples dimensiones y generar coordinación y
visibilidad entre las áreas que realizan las inspecciones en el Gobierno de la
Ciudad.
Con
el
objetivo
de
generar
previsibilidad
y
evitar
superposición
y
repeticiones
en
las
inspecciones,
se
busca
crear
un
repositorio
único
de
información sobre los establecimientos de la Ciudad, que posibilite redefinir y
optimizar los procesos de planificación de inspecciones de las distintas áreas.
Portal de Oportunidades
El
proyecto
busca
centralizar
la
oferta
de
cursos,
capacitación
e
15
IF-2023-46902722-GCABA-SECITD
Página 16 de 122

---

<!-- página 17 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
intermediación laboral del Gobierno de la Ciudad de Buenos Aires en una
plataforma única. De cara al ciudadano, se busca proveer, de manera práctica,
fácil e intuitiva, una oferta formativa y de intermediación laboral unificada, acorde
a la demanda del mercado, como así también un sistema de recomendación en
función de su historia educativa y laboral. Así mismo, de cara al gobierno, se busca
generar una herramienta interna de monitoreo y gestión de los beneficiarios, para
reforzar la eficiencia al momento de diseñar y monitorear los programas y
políticas públicas.
Expresión BA
Disponibilización de la información recabada a partir de las reseñas de
Google mediante un motor de IA: mediante el desarrollo de distintos modelos IA
de datos, a partir de las características de las reseñas extraídas de los sitios
públicos de Google, la plataforma puede reconocer la temática y el sentimiento
del vecino para con el reclamo. A su vez es posible distinguir de manera
automática aquellos comentarios en los que hay una propuesta de mejora del
sitio.
BOTI
Se ha trabajado en torno al análisis constante de las métricas del chatbot,
así como su análisis frente a la estrategia de implementación del nuevo modelo
de machine learning.
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
Considerando que la implementación de la nube representaba la mejor
opción en contexto, se optó por desarrollar PIBA (Plataforma Inteligente de
Buenos Aires Ciudad), un Data Lake que integra y pone a disposición datos de
todo
el
Gobierno
de
la
Ciudad
de
Buenos
Aires,
convirtiéndose
en
una
herramienta de analítica avanzada.
En el proceso de construcción de este Data Lake, se enfrentó el desafío
significativo al lidiar con interpretaciones legalistas que cuestionaban el uso de la
nube. Estas interpretaciones se basan en temores legales derivados de una ley
poco clara. A pesar de contar con la disponibilidad tecnológica y la voluntad de
colaboración
por
parte
de
nuestros
partners,
nos
vimos
obstaculizados
inicialmente por temores arraigados en la estructura organizativa.
Los
resguardos
tecnológicos
que
tomamos
para
diseñar
PIBA
están
basados en la legislación argentina.
16
IF-2023-46902722-GCABA-SECITD
Página 17 de 122

---

<!-- página 18 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
En primer lugar, tomamos todos los parámetros de la ley 1.845 sobre
protección de datos personales del Gobierno de la Ciudad de Buenos Aires y su
normativa reglamentaria, que nos aplica por ser un organismo público de la
Ciudad.
En segundo lugar, nos basamos en lineamientos dispuestos por la Agencia
de Sistemas de Información (ASI), como así también nos apoyamos en la ley
25.326 sobre protección de datos de la Nación y su normativa reglamentaria y
complementaria, en cuanto a la parte que corresponde.
Por último, nos guiamos por las Medidas de Seguridad-Tratamiento y
Conservación de los Datos Personales en medios informatizados, dispuestas en la
Resolución 47/2018 de la Agencia de Acceso a la Información Pública.
Los componentes técnicos de infraestructura que tomamos para resguardar
la información en la nube están basados en el Marco de Buena Arquitectura (AWS
WAF), un framework que desarrolló Amazon Web Services que puede aplicarse en
cualquier arquitectura y tiene que ver con mejoras y buenos patrones de
implementación
en
relación
a
seguridad,
costoeficiencia,
escalabilidad,
performance y excelencia operativa.
Este marco contempla las distintas verticales que abarcan la seguridad de
acceso a los datos, utilizando roles con permisos granulares (IAM Roles), federados
con validación contra el Azure AD gestionado por ASI. Sabemos exactamente a
qué información accede cada persona y qué puede compartir.
Asimismo, abarca el cifrado de los datos en tránsito, es decir, desde que
salen de las bases de datos del Gobierno de la Ciudad de Buenos Aires hasta
cuando viajan por la VPN entre ASI y AWS; y el encriptado en reposo, cuando los
datos ya están almacenados en AWS S3 dentro del Data Lake en la nube.
Todos los procesos, como el string de conexión, la creación de usuarios y
contraseñas, etc., son invocados utilizando el servicio AWS Parameter Store,
evitando que estén en texto plano en el código de CDK, y están cifrados con llaves
privadas y ensobradas con los servicios Secret Manager y KMS.
Continuando
con
los
desafíos,
inicialmente
la
Subsecretaría
estuvo
compuesta por equipos tradicionales que no comprendían el funcionamiento de
esta tecnología, lo que prolongó el proceso de transición. Por lo tanto, fue
necesario dedicar tiempo a capacitarlos. De esta manera, el Data Lake no solo
representó una transformación tecnológica, sino también cultural, ya que obligó a
adquirir conocimientos en áreas previamente desconocidas.
La creación de esta plataforma marcó un paso fundamental para abordar la
creciente complejidad presente en todos nuestros proyectos. En particular,
permitió afrontar el desafío transversal de obtener datos de calidad provenientes
de diversas áreas gubernamentales.
17
IF-2023-46902722-GCABA-SECITD
Página 18 de 122

---

<!-- página 19 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Cuáles son los logros destacados en el trayecto del proyecto?
El Data Lake habilita a que otros proyectos puedan adquirir información
relevante y confiable de forma inmediata, se puedan integrar datos de distintas
fuentes de información, puedan correrse modelos de inteligencia artificial y se
disponibilicen de manera segura todos estos datos.
Todo esto agrega valor a cada uno de los casos de uso que se desarrollan.
Desde la puesta en marcha de PIBA se logró:
●Ingesta de 64 bases de datos de distintos orígenes y magnitud.
●Desarrollo de 12 casos de uso.
●Desarrollo de 4 modelos de datos integrados (Broker de Identidad,
Optimización de Subsidios, Portal de Oportunidades, Maestro de
Establecimientos).
●12 áreas del Gobierno de la Ciudad de Buenos Aires que consumen
datos del Data Lake.
●31 áreas del Gobierno de la Ciudad de Buenos Aires que aportan datos
al Data Lake.
●6 APIS desarrolladas:
○PIBA (Broker de Identidad)
○Trayectoria Educativa (Portal de Oportunidades)
○Recomendador de cursos (Portal de Oportunidades)
○Recomendador de empleo (Portal de Oportunidades)
○APIME Establecimientos (Maestro de Establecimientos)
○APIME Inspecciones (Maestro de Establecimientos)
●4 Modelos con IA:
○Algoritmos recomendación de cursos (Portal de Oportunidades)
○Algoritmo
de
recomendación
de
empleos
(Portal
de
Oportunidades)
○Visión Vecino (Expresión BA)
○BOTI más inteligente (BOTI)
Eficiencia y mejora continua: Marco de Buena Arquitectura
Desde la Subsecretaría de Políticas Públicas Basadas en Evidencia hemos
recorrido un largo camino en la obtención de valor a través de la implementación
del Data Lake.
A medida que el uso de esta plataforma se ha extendido a partir del
desarrollo de los distintos casos de uso, se ha identificado un aumento en los
costos asociados al consumo de servicios, como era de esperarse.
18
IF-2023-46902722-GCABA-SECITD
Página 19 de 122

---

<!-- página 20 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Conscientes de la importancia de mantener la eficiencia y la optimización
de recursos, se ha llevado a cabo un análisis preliminar exhaustivo que ha
permitido identificar un conjunto de mejoras aplicables a la implementación de
servicios utilizados en el Data Lake.
El
Marco
de
Buena
Arquitectura (AWS WAF), es un framework que
desarrolló Amazon Web Services y que puede aplicarse en cualquier arquitectura.
Tiene que ver con mejoras y buenos patrones de implementación en relación a
seguridad, costoeficiencia, escalabilidad, performance y excelencia operativa.
El análisis detallado a partir de aplicar las buenas prácticas de la WAF ha
brindado una oportunidad para optimizar el uso de recursos y, como resultado,
logró una reducción significativa en los costos operativos.
El
equipo
encargado
de
la
gestión
del
Data
Lake
se
encuentra
comprometido en implementar estas mejoras de manera cuidadosa y eficiente,
asegurándose
de
mantener
la
funcionalidad
y
calidad
del
servicio
sin
comprometer la seguridad y la integridad de los datos.
La
optimización
continua
de
los
recursos
tecnológicos
respalda
la
capacidad de la Subsecretaría de Políticas Públicas Basadas en Evidencia para
seguir impulsando iniciativas innovadoras y brindando servicios de calidad a los
ciudadanos.
Los 6 pilares del Marco de Buena Arquitectura
(WAF: Well-Architected Framework AWS)
Estructura de la solución
La estructura de la solución busca garantizar una gestión eficiente y efectiva
19
IF-2023-46902722-GCABA-SECITD
Página 20 de 122

---

<!-- página 21 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
de los recursos en el Data Lake, asegurando que se logren los objetivos de
reducción de costos sin comprometer la calidad y funcionalidad del servicio.
La colaboración entre los diferentes equipos y la implementación de
prácticas sólidas fueron fundamentales para el éxito de la iniciativa.
WAF - Estructura para la solución
La solución para la optimización de costos se estructuró en dos etapas
distintas: una etapa de discovery que proporciona la base para identificar
oportunidades y establecer objetivos, y una etapa de implementación que se
enfoca en la ejecución de acciones concretas para lograr la reducción de costos y
la eficiencia en el uso de recursos.
1. Etapa de Discovery: en esta primera fase, el equipo se enfocó en obtener
una comprensión completa y detallada del entorno del Data Lake y los factores
que influyen en los costos actuales.
Durante esta etapa, se llevaron a cabo diversas actividades:
●
Análisis y Evaluación Inicial: Se realizó un análisis exhaustivo de
los costos actuales, identificando los proyectos, áreas y servicios que están
generando mayores consumos. También se evaluaron las prácticas actuales
de gestión de recursos y los procesos utilizados en el Data Lake.
●
Identificación de Consumos y Patrones: se identificaron los
patrones de consumo por proyecto o área, permitiendo entender cómo y
dónde se están asignando los recursos en el Data Lake. Esto proporciona
una visión detallada de los costos generados por cada componente del
sistema.
●
Análisis de Eficiencia y Oportunidades: Se identificaron áreas
de mejora y oportunidades para optimizar el uso de recursos y reducir
20
IF-2023-46902722-GCABA-SECITD
Página 21 de 122

---

<!-- página 22 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
costos. Esto incluyó la identificación de recursos subutilizados, la revisión de
configuraciones.
●
Establecimiento de Objetivos: Con base en el análisis realizado,
se definieron objetivos claros y medibles para la optimización de costos en
el Data Lake. Estos objetivos ayudan a guiar las acciones en la etapa de
implementación.
●
Planificación Estratégica: Se desarrolló un plan estratégico para
la implementación de mejoras, definiendo las acciones específicas a tomar,
los responsables de cada tarea y los plazos para la ejecución.
2. Etapa de Implementación de Mejoras: una vez finalizada la etapa de
discovery, se procede a la implementación de las mejoras identificadas en la fase
anterior.
Esta etapa incluye las siguientes acciones:
●
Diseño
de Estrategias de Optimización: Con base en las
oportunidades
identificadas, se diseñaron estrategias específicas para
abordar cada aspecto relevante de la optimización de costos.
●
Implementación de Acciones: Se llevaron a cabo las acciones
definidas en el plan estratégico, que incluyen ajustes en la infraestructura,
modificaciones en la configuración de los servicios, establecimiento de
políticas de retención de datos, entre otros.
●
Monitoreo
y
Seguimiento
Continuo:
Durante
la
implementación, se realizó un seguimiento constante para evaluar el
progreso hacia los objetivos establecidos y ajustar las estrategias si fuera
necesario. El monitoreo continuo fue y es fundamental para asegurar que
las mejoras están generando el impacto esperado en la reducción de
costos.
●
Comunicación y Capacitación: Se informó a todas las partes
interesadas sobre el progreso de la optimización de costos y los resultados
obtenidos. Además, se brindó una capacitación sobre las mejores prácticas
y políticas de uso responsable de recursos.
●
Revisión y Mejora Continua: Después de la implementación, se
llevaron a cabo revisiones periódicas para evaluar el impacto de las
acciones
realizadas
y
buscar
nuevas
oportunidades
de
mejora.
La
optimización de costos es un proceso continuo que requiere adaptabilidad
y mejora constante.
●
Documentación y Reportes: Se realizó una documentación
21
IF-2023-46902722-GCABA-SECITD
Página 22 de 122

---

<!-- página 23 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
detallada
de
todas las actividades realizadas, resultados obtenidos y
lecciones aprendidas. También se generaron informes periódicos para
informar sobre el progreso y los logros alcanzados.
De la etapa de Discovery, y luego de llevar a cabo un análisis exhaustivo de
los reportes de costos del Data Lake se ha identificado un aspecto crucial para la
optimización: un faltante de taggeo adecuado por proyecto y tipo de proceso.
Si bien se logró detectar los recursos que generan mayores consumos, la
tarea de identificar el motivo de los aumentos en dichos consumos se ha vuelto
compleja debido al gran crecimiento continuo del Data Lake.
La ausencia de una etiquetación o taggeo adecuado dificulta la trazabilidad
y la asignación de costos a proyectos y áreas específicas dentro del Data Lake. Sin
esta información detallada, se hace complicado entender qué proyectos están
generando los mayores gastos y qué actividades específicas están contribuyendo
al aumento en los costos.
Es importante destacar que esta tarea de etiquetado y análisis continuo es
una labor en evolución, ya que el Data Lake seguirá creciendo y evolucionando
con el tiempo. Por lo tanto, se requiere un enfoque iterativo y una revisión
periódica de las estrategias implementadas para garantizar su efectividad y
ajustarlas según sea necesario.
Para garantizar una administración efectiva de los recursos, se estableció
una estrategia de etiquetado coherente en todos los componentes del entorno
del Data Lake. Para ello, se emplearán las siguientes etiquetas:
●
Parent Org: Identificación de la organización principal.
●
Department: Identificación del departamento o área responsable del
recurso.
●
App: Nombre de la aplicación relacionada con el recurso.
●
Versión: Versión del recurso.
●
ProcessType: Tipo de proceso asociado al recurso.
●
Project: Nombre del proyecto relacionado con el recurso.
Detalle por Proyecto y proceso
22
IF-2023-46902722-GCABA-SECITD
Página 23 de 122

---

<!-- página 24 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Por otro lado, y luego de revisar detalladamente los reportes de los
consumos mensuales del Data Lake, se identificó que la cuenta Productiva es la
de mayor consumo. Además, se determinó que algunos servicios específicos
representan los mayores gastos económicos en esta cuenta, lo que permitió
elaborar un ranking de consumos.
En la cima del ranking se encuentra el servicio GLUE, que presenta un alto
nivel de consumo y representa una oportunidad clave para realizar mejoras y
optimizaciones. La identificación de patrones específicos en el uso de GLUE es
crucial para corregir comportamientos ineficientes y reducir los costos asociados
con este servicio.
A continuación en el ranking, se encuentran los servicios de CloudWatch,
EC2, DynamoDB, S3 y Sagemaker, todos ellos con un impacto significativo en los
gastos económicos del Data Lake.
Estos servicios también han sido objeto de análisis detallado, y se han
identificado áreas específicas para implementar mejoras y optimizaciones.
Por último, y luego de un análisis profundo de la eficiencia en el uso de
recursos
y
se
han
identificado
oportunidades
para
reducir
los
costos.
La
identificación de estas oportunidades de mejora es un primer paso fundamental
en el proceso de optimización de costos.
Servicio
Oportunidades para reducir
costos
Solución implementada
GLUE
Se detectaron patrones de ETL
(Extract, Transform, Load)
ineficientes
Los jobs de AWS Glue se
optimizaron en términos de
recursos asignados y
planificación de ejecuciones.
Esto se logró a través de la
revisión y ajuste de las
capacidades de procesamiento y
memoria, lo que contribuirá a una
ejecución óptima y eficiente de las
tareas de ETL.
También se trabajaron con Job’s
de alto consumo, que difieren de
la configuración general.
Por otra parte, se procedió a la
eliminación de los jobs de
"raw_to_consume" que no sean
23
IF-2023-46902722-GCABA-SECITD
Página 24 de 122

---

<!-- página 25 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
necesarios en el entorno de
producción, lo que contribuyó a la
reducción de costos asociados a la
ejecución de estos trabajos.
CloudWatch
Se revisaron las configuraciones
de monitoreo y los registros,
identificando oportunidades para
eliminar datos innecesarios y
ajustar los niveles de detalle.
Se implementó un enfoque de
administración de métricas en
AWS Glue en las etapas de
desarrollo y producción:
●Desactivación de métricas en
Glue en desarrollo
●Desactivación de métricas en
Glue en producción
●Proceso de paso a producción:
Se seguirá un proceso de
pruebas en desarrollo con
métricas habilitadas para
ajustar y optimizar. Luego, se
pasará a producción
manteniendo las métricas
habilitadas durante un período
para ajustes finos y
optimización. Se configurará
un FLAG en los proyectos de
CDK para habilitar o
deshabilitar las métricas de
Glue.
EC2
Se analizó la utilización de
instancias y se identificaron
oportunidades para ajustar el
tamaño y tipo de instancias
según las cargas de trabajo,
evitando así recursos
infrautilizados o subutilizados.
Para optimizar las instancias EC2
utilizadas por PowerBI Gateways:
●
Se redujo el número de
gateways a 1 para cada
cliente, sin comprometer la
seguridad.
●
Se seleccionará un gateway
con poco uso o del mismo
cliente para minimizar el
impacto.
DynamoDB
Se evaluó el diseño de tablas y las
operaciones de lectura/escritura
para optimizar la eficiencia en el
acceso a los datos y reducir los
costos asociados.
Para mejorar el proceso de
volcado a DynamoDB, se
implementará una estrategia de
carga incremental: en lugar de un
volcado completo diario, se
almacenará una versión del día
24
IF-2023-46902722-GCABA-SECITD
Página 25 de 122

---

<!-- página 26 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
anterior y se comparará para
enviar solo los cambios a
DynamoDB.
S3
Se identificó la necesidad de
implementar políticas de
retención de datos adecuadas
para eliminar o archivar datos
obsoletos, reduciendo así los
costos de almacenamiento a
largo plazo.
Se identificaron y eliminaron los
objetos en los buckets de Amazon
S3 que ya no son necesarios. Esto
ayudó a liberar espacio y
mantener una estructura
organizada, evitando la
acumulación de datos obsoletos.
Sagemaker
Se analizaron los modelos de
aprendizaje automático,
encontrando oportunidades para
optimizarlos y reducir el tiempo
de entrenamiento y los recursos
requeridos
Para optimizar el uso de
SageMaker, se migró el proceso
actualmente ejecutado en un
Endpoint de SageMaker 24/7 a
SageMaker Serverless. Esto
permitió un uso más eficiente de
los recursos y reducirá los costos.
Optimización y ahorro de Buckets S3
25
IF-2023-46902722-GCABA-SECITD
Página 26 de 122

---

<!-- página 27 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Optimización y ahorro de Instancias de EC2 para Gateway
La implementación de la WAF se tradujo en un ahorro económico directo,
reduciendo el consumo en la cuenta de desarrollo en un 48% y un 36% en la
cuenta de producción.
Para
mantener
las
buenas
prácticas,
mensualmente
se
realiza
un
seguimiento y monitoreo detallado de los consumos por entorno y servicio. Este
proceso nos permite garantizar que las estrategias aplicadas estén funcionando
según lo previsto, identificar posibles áreas de mejora, facilitar la adaptación a
nuevas
circunstancias
y
necesidades
a
medida
que
evolucionan
los
requerimientos
y mantener un alto nivel de eficiencia en el entorno del Data
Lake.
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
Se contempla continuar con el evolutivo de los casos de usos actuales y el
desarrollo de nuevos casos de uso que agreguen valor a los análisis realizados por
las distintas áreas de gobierno y puedan basar sus decisiones en datos.
Así mismo se prevé añadir nuevas áreas que puedan beneficiarse del
consumo del Data Lake y el valor que aporta.
Por otro lado, a partir del monitoreo mensual de los consumos por entorno
y servicio se pretende mantener el Data Lake optimizado, según el Marco de
Buena
Arquitectura
(WAF-AWS)
aplicando
las
mejores
prácticas
desde
su
arquitectura e implementación.
26
IF-2023-46902722-GCABA-SECITD
Página 27 de 122

---

<!-- página 28 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Data Warehouse
El Data Warehouse es una herramienta clave en el Gobierno de la Ciudad
de Buenos Aires, ya que permite disponibilizar los activos de datos a través de una
variedad de servicios, herramientas y protocolos que promueven la interrelación.
Su función es impulsar la colaboración y el intercambio de información no solo
dentro del sector público, sino también entre el sector privado, la academia y las
organizaciones de la sociedad civil.
Este sistema tiene la capacidad de almacenar grandes cantidades de datos
en
una
base
centralizada
y
en
un
formato
estándar,
lo
que
facilita
significativamente
el
manejo
de
la
información.
Además,
integra
datos
procedentes de diferentes fuentes y los estandariza, simplificando así el análisis y
la elaboración de reportes. Una de sus características más relevantes es su
capacidad de conservar registros históricos, almacenando meses o incluso años
de datos, lo que resulta fundamental para la toma de decisiones a largo plazo y el
seguimiento de tendencias.
A
diferencia
del
Data
Lake,
el
Data
Warehouse
almacena
datos
estructurados y procesados. Estos datos suelen provenir de diferentes sistemas de
uso interno del Gobierno de la Ciudad de Buenos Aires. Además, tiene una
estructura
más
rígida
con
un
esquema
definido
en
la
carga
de
datos
(schema-on-write). Esto es una limitante para su flexibilidad, pero asegura una
alta
calidad
y
consistencia
de
los
datos,
un
objetivo
fundamental
de
la
Subsecretaría.
Fecha de inicio
El Data Warehouse fue implementado por la Subsecretaría de Sistemas y
Procesos durante la gestión que abarcó los periodos de 2016 a 2019.
La Subsecretaría de Políticas Públicas Basadas en Evidencia heredó el activo
cuando fue creada en Diciembre de 2019 y absorbió parte de las funciones, las
cuales se describen a continuación en las siguientes secciones.
27
IF-2023-46902722-GCABA-SECITD
Página 28 de 122

---

<!-- página 29 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Stakeholders involucrados
●
Subsecretaría de Políticas Públicas Basadas en Evidencia
●
Agencia de Sistemas de Información (ASI)
●
SAS Institute Arg
●
Principales áreas consumidoras de servicios:
○
SubSecretaría de Gestión Urbana
○
Cultura
○
Registro Civil
○
Dirección General de Eficiencia Administrativa
○
Dirección General de Empleo
○
AGIP
○
Ministerio de Justicia y Seguridad
○
Dirección General de Seguimiento y Control y Acceso a la
Información
○
Dirección Genera de Monitoreo y Evaluación
○
PIA - PSOC
○
Consejo de los Derechos de Niñas, Niños y Adolescentes
○
SS de Gestión de RRHH (Min Hacienda y Finanzas)
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
El desafío fundamental que enfrentamos fue asegurar la continuidad de los
servicios de Data Warehouse, los cuales fueron iniciados en el año 2016 por la
Subsecretaría
de
Sistemas
y Procesos. Esto implicó no solo mantener las
operaciones existentes, sino también ampliar y mejorar nuestros servicios para
satisfacer las crecientes necesidades de datos.
En
este
contexto,
surgen
varios
desafíos
específicos.
El
primero
es
identificar
las
necesidades
de
datos
de
los
usuarios,
tanto
dentro
de
la
Subsecretaría de Políticas Públicas Basadas en Evidencia como fuera de ella.
Comprender estas necesidades es crucial para garantizar que nuestro servicio de
Data Warehouse sea relevante y útil.
El segundo desafío involucra el diseño, desarrollo e implementación de
soluciones de datos que cubran estas necesidades identificadas. Esto requiere un
enfoque centrado en el usuario para crear soluciones efectivas que se integren
bien con nuestras operaciones actuales y futuras.
28
IF-2023-46902722-GCABA-SECITD
Página 29 de 122

---

<!-- página 30 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Finalmente, es esencial realizar un seguimiento continuo de las tareas de
continuidad operacional. Esto incluye mantener la actualización de los datos de
manera oportuna y adecuada, así como proporcionar soporte en los niveles 1, 2 y
3.
Este seguimiento garantiza que nuestros servicios no solo sean constantes
y confiables, sino que también evolucionen y se adapten a las necesidades
cambiantes de nuestros usuarios.
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
La
Subsecretaría
de
Políticas
Públicas
Basadas
en
Evidencia brinda
servicios de integración de los datos dentro de un modelo de Data Warehouse
convencional
de
dos
capas
de
explotación,
definiendo
y
construyendo
la
arquitectura aplicativa y funcional de la solución.
La Subsecretaría cuenta con proveedores que dan servicios profesionales de
desarrollo y de mantenimiento de infraestructura aplicativa:
●
SAS
Institute
Arg:
El
equipo
SAS
se
encarga
de
la
Administración, gestión y operación de la suite de herramientas SAS Data
Integration e IBM, informan incidentes relacionados con problemas de
accesos, recursos, datos, aplicativos. Además, solucionan problemas que
involucran modificación del código, y que serán resueltos dentro del
proceso de desarrollo.
●
ASI Infraestructura / Seguridad Informática: Se encarga de la
administración y gestión de las bases de datos y de la gestión de usuarios a
nivel del dominio @buenosaires.gob.ar
A continuación se observa el cuadro que indica la vinculación de diferentes
activos (SADE, BA Data) con las dos principales soluciones de almacenamiento de
la Subsecretaría de Políticas Públicas Basadas en Evidencia: el Data Warehouse y
el Data Lake.
29
IF-2023-46902722-GCABA-SECITD
Página 30 de 122

---

<!-- página 31 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Estrategia general de vinculación de activos
En el siguiente gráfico, se presenta la distribución de la información almacenada
en el Data Warehouse, para su consecuente explotación. Como el gráfico indica, la
moyor parte está explicada por la base de SADE, siendo el restante 13% fuentes
menores complementarias.
Distribución de Orígenes de Datos en el Data Warehouse
El mapa de arquitectura general del Data Warehouse puede entenderse de
la siguiente manera:
●
Storage DB: Lugar de almacenamiento del procesado de nivel Staging y
nivel Dimensional (consumo)
30
IF-2023-46902722-GCABA-SECITD
Página 31 de 122

---

<!-- página 32 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
●
Integración de Datos: SAS DI. Herramienta de diseño visual que permite
consolidar y gestionar datos de la organización desde una variedad de
sistemas, aplicaciones y tecnologías de origen.
●
File Delivery: Sistema de transferencia de archivos post procesados para el
consumo de los distintos clientes.
●
NOC:
Herramienta
de
gestión
de
la
demanda
de requerimientos o
incidentes.
Función
Herramienta
Magnitud
Storage DB
Oracle Exadata
7 TB
1.392 Tablas de staging
1.568 Tablas dimensionales
1.031 Vistas dimensionales
Integración de Datos
SAS Data Integration
Procesos en R / Python
2.630 Procesos
File Delivery
SAS / DI - Linux FTP
500 Archivos
Gestión de Demanda
NOC / Spreadsheet
25 Requerimientos mensuales
Tecnología que se utiliza para atender requerimientos de acuerdo a su función
El equipo trabaja sobre la base de procesos destinados a organizar el trabajo
diario:
Gestión de la demanda: Los requerimientos de los usuarios llegan al
equipo vía NOC. Quincenalmente el líder hace la propuesta de sprint al equipo de
PMs en función de las prioridades y la capacidad. El equipo de PMs revisa la
propuesta y se acuerda el alcance del sprint.
Proceso de desarrollo: En cada sprint se realizan las tareas de análisis y
diseño. Se documenta la especificación del requerimiento y se deriva a desarrollo,
ya sea al proveedor o a los recursos propios.
Algunos proyectos requieren además de la intervención de los analistas
funcionales y técnicos responsables de las fuentes de datos.
Proceso de implementación: Luego de realizado el desarrollo, los analistas
ejecutan pruebas de aseguramiento de la calidad y se corrigen eventuales
desvíos. La solución se entrega a los usuarios para que la prueben y emitan su
conformidad para implementar en el ambiente productivo.
El pasaje a producción se realiza a través de órdenes de trabajo de NOC: ASI
implementa los objetos de DW, y SAS implementa los objetos de la herramienta
de integración.
Proceso de continuidad operacional: El equipo debe asegurar la correcta
31
IF-2023-46902722-GCABA-SECITD
Página 32 de 122

---

<!-- página 33 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
actualización de los datos. La ejecución de los procesos de integración se planifica
y ejecuta utilizando el scheduler IBM Process Manager, licenciado junto a la suite
de productos SAS.
Diariamente, antes de las 10 hs, el equipo de soporte SAS envía un reporte
de incidentes ocurridos desde el reporte anterior.
Proceso de gestión de incidentes: Los incidentes se gestionan en niveles
según la capacidad de resolución:
○
Nivel 1: incidentes relacionados con problemas conocidos (accesos,
recursos, datos, aplicativos).Los resuelve el equipo de SAS y los
informa en el reporte diario.
○
Nivel 2: un analista de GOEI (Gerencia Operativa de Estandarización e
Interoperabilidad) está asignado a analizar y resolver los incidentes
no resueltos en el nivel 1. En el caso que se requiera intervención en
el
código
de
los
jobs,
lo
transfiere
al
analista
de
desarrollo
correspondiente.
○
Nivel 3: soluciona problemas que involucran modificación del código,
y que serán resueltos dentro del proceso de desarrollo. En el caso de
necesidad de intervención sobre las herramientas de SAS, el nivel 3
está dentro del contrato de mantenimiento y lo gestiona SAS con su
servicio internacional.
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
La implementación y mantenimiento del Data Warehouse resulta ser
significativamente costoso, dado que contempla costos de hardware, software, y
equipos técnicos especializados.
La dependencia de recursos técnicos, como operar y mantener el Data
Warehouse requiere de equipos con habilidades técnicas especializadas, lo que
resulta en un gran desafío para el Gobierno de la Ciudad de Buenos Aires.
Asimismo, otro de los desafíos que atraviesa la Ciudad es la obsolescencia
tecnológica, las necesidades evolucionan rápidamente, y existe el riesgo de que la
inversión hecha se vuelva obsoleta si no se actualiza en forma constante.
La escalabilidad, vinculada a las crecientes necesidades de datos en el
Gobierno de la Ciudad de Buenos Aires, hace necesario escalar en el Data
Warehouse para manejar mayores volúmenes de datos puede ser desafiantes y
costosos.
Por otra parte, la integración de datos en tiempo real, hacen que el Data
Warehouse tradicional pueda tener limitaciones para manejar datos en tiempo
32
IF-2023-46902722-GCABA-SECITD
Página 33 de 122

---

<!-- página 34 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
real, lo que es cada vez más importante en el mundo actual en la implementación
de políticas públicas de forma ágil y basadas en datos.
Por tal motivo, y a raíz de los obstáculos que se expresaron anteriormente es
que sugerimos la migración del Data Warehouse. El equipo de la Dirección
General de Arquitectura de Datos ha realizado un análisis preliminar de las
implicancias y los pasos a seguir en caso de avanzar en este sentido.
¿Cuáles son los logros destacados en el trayecto del proyecto?
Se logró optimizar el Data Warehouse detectando procesos deprecados
(eliminandolos),
optimizando
los
job’s,
cadenas
y
vistas,
mejorando
la
performance de las mismas hasta en un 50% de mejoras en tiempos de ejecución.
Se estabilizaron las corridas de los procesos internos en tiempos adecuados
para el correcto servicio a los clientes.
Se mejoró sustancialmente el proceso interno de trabajo, utilizando NOC
como herramienta de entrada de requerimientos, JIRA como tablero interno de
seguimientos, unificando los tiempos de los sprint’s con el resto de las áreas de la
Dirección logrando una mejor coordinación entre los equipos internos y externos.
Se logró una mejor interacción con el cliente, generando reuniones ad hoc
para solucionar cuestiones complejas o urgentes.
Se bajaron drásticamente los tiempos de respuesta de los tickets, logrando
un SLA promedio de respuesta de 72 horas.
Se continúa trabajando en mejorar aún más la performance de las cadenas
núcleo de la operatoria diaria del Data Warehouse, tanto SADE como RCE. En
SADE debido a la multiplicidad de actores, se atacan las mejoras de manera
modular, en tanto en RCE, se está trabajando mancomunadamente con el equipo
del Registro para optimizar los procesos. (duplicidad de job’s, mejora de vistas, etc)
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
Los hitos pendientes de este proyectos son:
Continuar con el mantenimiento del ecosistema (SADE, RCE), con el fin de
bajar los tiempos de ejecución de la cadena, analizando cuales son los Jobs que
son necesarios para el proceso.
Asimismo, poder cumplir con tiempo y forma con los requerimientos de las
diferentes áreas y documentando todos los procesos que conllevan a la resolución
de los mismos.
33
IF-2023-46902722-GCABA-SECITD
Página 34 de 122

---

<!-- página 35 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Por
los
obstáculos
anteriormente
mencionados,
se
optó
por
la
implementación
de
PIBA
(Data
Lake)
y se dejará planteado un roadmap
incipiente para migrar SAS (Data Warehouse) a un ambiente cloud.
Maestro de Establecimientos
El Maestro de Establecimientos es un modelo de alta complejidad que
provee datos confiables para tomar decisiones con respecto al universo de
establecimientos (comerciales y no comerciales) que operan en la Ciudad de
Buenos Aires y su fin es elaborar un modelo que los identifique unívocamente,
por medio de una llave única que es fácilmente actualizable, de manera que se
convierte en la fuente de datos fidedigna del estado del establecimiento y de las
inspecciones realizadas.
Fecha de inicio
Julio de 2021
Stakeholders involucrados
●
Sponsors: Jefatura de Gabinete y UPESP (Unidad de Proyecto
Especial de Simplificación Productiva)
●
Coordinación
y
desarrollo
de
la
solución
de
datos:
Subsecretaría de Políticas Públicas Basadas en Evidencia
●
Áreas Inspectivas:
○
Agencia Gubernamental de Control (AGC)
○
Agencia de Protección Ambiental (APRA)
○
Gerencia
Operativa
de
Control
de
Higiene
Urbana
(GOCHU), Subsecretaría de Higiene Urbana (SSHU)
○
Defensa del Consumidor (DECO),
○
Dirección General de Protección del Trabajo (DGPT)
Para sumar esfuerzos, se inició un proceso de licitación pública (2051-0252-LPU23)
que nos permitió sumar al equipo de trabajo, perfiles con experiencia
○
The Black Puma: perfiles de modeladores de datos
34
IF-2023-46902722-GCABA-SECITD
Página 35 de 122

---

<!-- página 36 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
○
Netrix: perfiles de devops
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
La problemática que enfrentan los comerciantes de la ciudad y las áreas
gubernamentales
que
los
inspeccionan
es
multifacética
y
compleja.
Esta
situación se puede resumir en cuatro puntos de dolor:
Identificación ambigua de establecimientos: La falta de un sistema
unívoco
para
identificar
establecimientos
comerciales
genera
confusión
y
desorden.
Diferentes
áreas
del
gobierno
utilizan
criterios
de identificación
distintos
y
ambiguos,
lo
que
lleva
a
inconsistencias
y
dificultades
en
el
seguimiento y control de los establecimientos.
Superposición de inspecciones: Existe una notable superposición en las
inspecciones realizadas por diferentes áreas del gobierno. Esta redundancia no
solo resulta en una pérdida de tiempo y recursos, sino que también impone una
carga innecesaria sobre los comerciantes, quienes deben someterse a múltiples
inspecciones y pedidos de documentación que, a menudo, evalúan los mismos
criterios
Ineficiencia en el uso de recursos y falta de articulación: La falta de un
modelo único e integrado que permita la articulación entre diferentes áreas
gubernamentales conduce a una duplicación innecesaria de tareas y a una
ineficiente
utilización
de
recursos.
Esto
incluye
no
solo
el tiempo de los
inspectores, sino también el tiempo general dedicado a la gestión y coordinación
de las inspecciones.
Dependencia de herramientas inadecuadas: Las áreas de inspección
dependen
de
herramientas
no
especializadas como Excel, Google Drive y
formularios en la nube. Estas herramientas, aunque útiles, no están diseñadas
específicamente para gestionar las complejidades y especificidades de las tareas
de inspección, lo que lleva a una gestión ineficiente y a veces errónea de los datos.
35
IF-2023-46902722-GCABA-SECITD
Página 36 de 122

---

<!-- página 37 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
La problemática que enfrentan los comerciantes de la ciudad y las áreas
gubernamentales que los inspeccionan
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
Una solución para abordar estas problemáticas es el establecimiento de un
modelo de datos integrado. Esto facilita la sinergia entre las distintas áreas,
permitiendo una identificación clara y consistente de los establecimientos. En
consecuencia, genera la posibilidad de reducir la redundancia en las inspecciones,
optimizar el uso de herramientas tecnológicas adecuadas y mejorar la eficiencia
general en el uso de recursos. Este enfoque no solo es beneficioso para las áreas
gubernamentales en términos de eficiencia y efectividad, sino que también tiene
el potencial de aliviar la carga sobre los comerciantes, promoviendo un entorno
más favorable para la actividad comercial en la ciudad.
El modelo también permite al Gobierno de la Ciudad de Buenos Aires
comprender la composición actual del mapa de los establecimientos que existen
en la Ciudad de Buenos Aires y generar diferentes indicadores que permitan
tomar decisiones acerca de cómo mejorar la actividad inspectiva que el gobierno
ejerce sobre los comercios.
36
IF-2023-46902722-GCABA-SECITD
Página 37 de 122

---

<!-- página 38 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Desafío para el Gobierno de la Ciudad de Buenos Aires: pasar de información
fragmentada (foto en banco y negro) del establecimiento a información integrada que
permita ver la película completa
Etapas del proyecto
El proceso llevado a cabo para llegar a los diferentes productos de datos se
puede observar en el siguiente diagrama:
Diagrama del proceso de la construcción del producto de datos
Conceptualmente, y de manera de abordar ordenadamente un desafío de
gran magnitud como este, se dividieron los objetivos a alcanzar en dos grandes
grupos:
1. Establecer la llave de identificación unívoca de establecimientos
2. Incorporar al modelo la información de las inspecciones conducidas
por cada área inspectiva
37
IF-2023-46902722-GCABA-SECITD
Página 38 de 122

---

<!-- página 39 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
La solución integral de datos trabajó en diferentes productos de datos los
cuales pueden esquematizarse de la siguiente manera:
●Desarrollo de un modelo integral de datos
●Tablero de indicadores
●APIs
○Establecimiento: esta API permite realizar consultas por ubicación y/o
CUIT para identificar un establecimiento y que devuelva información
completa del mismo referente a la ubicación del establecimiento, los
datos de su/s habilitación/es, Actividad que desarrolla, Datos de la
Persona física o jurídica responsable.
○Inspecciones:
esta
API
permite
realizar
consultas
a
partir
de
la
identificación
de un establecimiento (API Establecimiento)
y que
devuelva
información completa de todas las inspecciones que las
distintas áreas realizaron sobre los mismos, la fecha en que fueron
realizadas, y el resultado que arrojaron las mismas.
Modelo de datos
Dada la magnitud y complejidad, considerando la cantidad de variables a
incorporar así como también la heterogeneidad de usos y formatos en las fuentes
de origen, el proceso de modelado de datos ha sido planteado para abordarse en
dos Etapas, tal como se mencionó en el apartado anterior.
De esta forma, se desarrolló un modelo de datos integrando 8 bases de
datos con información de los 5 áreas inspectivas participantes.
En primer lugar se llevó adelante la etapa de Discovery en donde se trabajó
en el relevamiento de la identificación de los establecimientos y de los procesos
inspectivos que llevan adelante las diferentes áreas a incluir dentro del universo
de Maestro de Establecimientos, las bases de datos con los registros de cada uno
de ellos. A partir de lo anterior se trabajó en un Diccionario que asegurara la
transversal comprensión de los términos y alcance del mismo así como también
en el desarrollo de las definiciones ontológicas del diagrama de entidad-relación
que serviría como insumo de los pasos posteriores del proyecto.
A partir del Diccionario y los supuestos, se trabajó desde la Subsecretaría en
una primera versión del diagrama de entidad-relación (DER) con las definiciones
ontológicas que serviría como insumo de los pasos posteriores del proyecto. Las
entidades allí identificadas fueron clave en la selección de variables a ser
ingestadas en el Data Lake.
38
IF-2023-46902722-GCABA-SECITD
Página 39 de 122

---

<!-- página 40 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Luego, y dado que entendemos que la calidad de las decisiones basadas en
datos dependen de contar con información confiable de calidad, se llevó adelante
el análisis de calidad de las bases de datos que serían integradas en el modelo a
fin de contar con indicadores que permitan medir tanto la exactitud como la
completitud y el nivel de representatividad de los datos aportados por cada
programa. Para hacerlo nos basamos en los criterios mínimos del Framework de
análisis de calidad de datos diseñado por la Subsecretaría de Políticas Públicas
Basadas en Evidencia.
El framework contiene tres grandes estándares respecto a la calificación de
calidad: criterios mínimos, criterios básicos y criterios óptimos. A su vez, estos
criterios se subdividen en criterios de calidad específicos, los cuales contienen una
definición conceptual y operativa.
Framework de Calidad de Datos
Dada
la
cantidad
de
orígenes
de
datos en el proyecto Maestro de
Establecimientos, resultó indispensable aplicar los criterios mínimos de este
framework para evaluar la calidad de las variables a utilizar.
El proceso de análisis de calidad no ha sido lineal sino que ha ido
evolucionando conforme se fue profundizando el entendimiento del proyecto y el
modelado de datos, motivo por el cual aún no se ha finalizado con la presentación
de recomendaciones para todas las bases.
Las ingestas requirieron de reuniones técnicas para acordar los diferentes
métodos para las distintas bases, las cuales se fueron abordando acorde a la
prioridad definida para cada una de ellas. El proceso de obtención de credenciales
para las ingestas no ha sido sencillo requiriendo muchas veces de varias
reuniones incluso del envío de comunicaciones oficiales u otros medios de
funcionarios de jerarquía.
39
IF-2023-46902722-GCABA-SECITD
Página 40 de 122

---

<!-- página 41 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Las bases de datos que se ingestaron fueron las siguientes:
Finalmente, con los datos ingestados en el data lake y con los análisis de
calidad realizados, se modelaron los datos.
El siguiente diagrama representa una vista simplificada del DER, elaborado
con fines explicativos.
Vista simplificada del Diagrama de Entidad Relación (DER) para fines explicativos
40
Área
Base de datos
Agencia Gubernamental de Control
Establecimientos:
●
Habilitaciones Oracle
●
SGI
●
Inspecciones:
●
Liza
●
Bender
Agencia de Protección Ambiental
Notificaciones
Subsecretaría de Higiene Urbana
SAP-APPSAP-4157
Dirección General de Protección del Trabajo
Matriz de Riesgo
Defensa del Consumidor
Consorcios: Pectra
IF-2023-46902722-GCABA-SECITD
Página 41 de 122

---

<!-- página 42 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Tablero de Indicadores
El
producto
“Tablero
de
indicadores”
es
un
tablero
interactivo
que
monitorea distintos indicadores clave para realizar el seguimiento general de los
establecimientos y sus inspecciones.
El desarrollo mismo implicó 2 etapas:
1. Definir los indicadores
2. Diseñar un tablero interactivo que contiene 3 solapas referentes a
establecimientos, inspecciones y detalle de un establecimiento.
A la fecha se sigue iterando el tablero para poder refinar el mismo con los
indicadores necesarios y relevantes para las áreas involucradas.
El tablero monitorea los indicadores y permite realizar el seguimiento
general de los establecimientos y sus inspecciones.
Al ser un tablero interactivo, el usuario puede realizar distintos filtros de
datos, para poder orientar el análisis.
Portada del tablero interactivo del Maestro de Establecimientos
El
apartado Establecimientos contiene información descriptiva de los
establecimientos de la ciudad, la cantidad de establecimientos operativos a lo
largo de los años, la ubicación georreferenciada de cada uno de ellos y el estado
de su habilitación. En el mismo se puede profundizar para un análisis más
detallado sobre los rubros y barrios con mayor concentración de establecimientos.
41
IF-2023-46902722-GCABA-SECITD
Página 42 de 122

---

<!-- página 43 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Información detallada de establecimientos
El apartado Inspecciones contiene información descriptiva agregada de las
inspecciones realizadas en los establecimientos de la ciudad, por área inspectiva y
respecto de rubros y barrios con mayor volumen de inspecciones. En el mismo se
puede profundizar para un análisis más detallado sobre las inspecciones con
irregularidades y clausuras realizadas.
42
IF-2023-46902722-GCABA-SECITD
Página 43 de 122

---

<!-- página 44 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Información detallada de las inspecciones efectuadas
Por
último,
el apartado Detalle de Establecimientos muestra lo que
llamamos
la
“historia
clínica
del
establecimiento”,
esto
es,
información
nominalizada con todos los datos históricos del establecimiento seleccionado: sus
habilitaciones, los rubros y actividades donde fue habilitado, la persona física o
jurídica responsable, el estado de la habilitación, las inspecciones que cada área
realizó sobre el mismo, la fecha, motivo y resultado de la inspección.
43
IF-2023-46902722-GCABA-SECITD
Página 44 de 122

---

<!-- página 45 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Detalle histórico de cada establecimiento
API’s
El modelo de datos diseñado durante el proyecto integrando las 8 fuentes
de información de las distintas áreas se disponibiliza a través de la API de
Establecimientos.
El servicio web para consulta de habilitaciones se diseñó para que puedan
realizarse distintos tipos de búsqueda y devuelva información completa del
establecimiento, tal como se detalla a continuación:
Request
Búsqueda A
1. CUIT asociado al
establecimiento (obligatorio)
2. Domicilio
○Calle (obligatorio)
○Nro (obligatorio)
○Piso (opcional)
○Departamento/Local
(opcional)
3. También se contempla la
combinación: Cuit + Domicilio
Búsqueda B
1. Rubro (obligatorio)
2. Comuna (obligatorio)
3. Barrio (obligatorio)
También se contemplan las
combinaciones:
4. Rubro/barrio
5. Rubro/comuna
44
IF-2023-46902722-GCABA-SECITD
Página 45 de 122

---

<!-- página 46 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Response
●
Datos
de
la
ubicación
del
establecimiento: id del establecimiento •
Denominación: (Razón social) • Nombre del Titular Responsible • Rubro •
Calle
•
Número
•
Piso
•
Departamento/Local
•
Estado
•
Fecha
de
Habilitación • Coordenada x • Coordenada y • Comuna • Barrio
●
Datos de la habilitación del establecimiento:
Número de Habilitación •
Fecha de Habilitación • Número de Disposición • Fecha de Inicio • Fecha de
Cierre • Estado
●
Datos de la Actividad que desarrolla: Rubro • Actividad CLANAE • Rubro
CLANAE
●
Datos de la Persona responsable: Denominación: Razón social (J) o
Nombre y Apellido(F) • Tipo de Persona • Tipo de Documento • Número de
Documento / CUIT
Por otro lado, se diseñó la API de Inspecciones, permite realizar consultas a
partir de la identificación de un establecimiento (API Establecimiento) y devuelve
información completa de todas las inspecciones que las distintas áreas realizaron
sobre los mismos, la fecha en que fueron realizadas, y el resultado que arrojaron
las mismas. Esta información permite, por ejemplo, al inspector conocer la historia
del establecimiento cuando se presenta en el mismo a realizar una inspección.
Request
1.
id_establecimiento_locacion
2.
CUIT asociado al establecimiento (obligatorio)
3.
Domicilio
○
Calle (obligatorio)
○
Nro (obligatorio)
○
Piso (opcional)
○
Departamento/Local (opcional)
4.
También se contempla la combinación: Cuit + Domicilio
Response
1.
id_establecimiento_locacion
2.
Cuit o Dirección del establecimiento
La dirección estará compuesta por los siguientes campos:
a.
Calle (obligatorio)
b.
Altura(obligatorio)
c.
Piso (opcional)
d.
Departamento (opcional)
3.
Cuit y Dirección del establecimiento
45
IF-2023-46902722-GCABA-SECITD
Página 46 de 122

---

<!-- página 47 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
La heterogeneidad de los usos y formatos en las fuentes de datos producto
de la diversidad de actores con diferentes grados de predisposición y verticalidad
para compartir información fue uno de los principales obstáculos encontrados ya
que requirió de un intenso trabajo para el modelado de datos que permitiera la
identificación unívoca de los establecimientos y la unión de las distintas fuentes
en un único repositorio.
El discovery en sí mismo de los programas y las bases de datos así como el
acceso a las mismas y los trabajos de ingesta de las fuentes también ha requerido
en algunos casos de muchas idas y vueltas con las áreas. Algunas fuentes de alta
relevancia para la incorporación al modelo, como la Dirección General de
Fiscalización Urbana (DGFU) han tenido que ser descartadas del modelado por no
encontrarse aún sistematizadas.
La generación de una definición en común entre todas las áreas para la
identificación de “establecimiento” fueron también uno de los desafíos más
importantes de la etapa.
Otro obstáculo que se presentó durante el proceso de modelado, fue lograr
incorporar las definiciones ontológicas desde las bases de origen, considerando
que algunos atributos de las mismas contaban con una baja completitud de
datos y no existen criterios de uniformidad entre áreas inspectivas al momento de
realizar
la carga de información relevante. Desde la función de análisis y
modelado,
se
intentó
suplir
mediante
transformaciones
de datos, algunos
problemas de exactitud de los campos, sin embargo, representó un gran punto
de dolor la cantidad de atributos de texto libre, no permitiendo parametrizar la
información a modelar de manera eficiente.
Por último, y no menos importante, los problemas para la integración de
datos dentro de una misma área que cuenta con más de una base de datos
referente a los establecimientos y sus inspecciones requirió un gran trabajo de
modelado, no pudiendo ser resulta la integración en todos los casos.
¿Cuáles son los logros destacados en el trayecto del proyecto?
Los logros más destacados para este proyecto han sido:
●
Modelo de datos integrado, con 8 fuentes de datos que contempla
todos los establecimientos comerciales y/o productivos de la ciudad
y las inspecciones que se realizan en los mismos por 5 áreas
distintas.
46
IF-2023-46902722-GCABA-SECITD
Página 47 de 122

---

<!-- página 48 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
●
Tablero de gestión para el monitoreo de indicadores
●
Dos APIs para disponibilizar la información de establecimientos e
inspecciones
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
Los hitos pendientes para consolidar el éxito del proyecto y en cuales se
debe seguir trabajando son los siguientes:
Disponibilizar las API, a todas las áreas inspectivas, para que puedan
consumir la información del Maestro consolidado, y potencialmente integrar sus
sistemas, servicios, aplicaciones, formularios, etc; a esta API.
Incorporar Modelos de IA basados en riesgo que permita a las áreas
planificar las inspecciones priorizando los establecimientos, sus actividades y/o
rubros a fiscalizar, teniendo en cuenta las distintas ponderaciones aplicables al
modelo y eficientizar la operación.
Ampliar
el
alcance
del
modelo
incluyendo
las
áreas
de
Salud
(Establecimientos sanitarios), Educación (Establecimientos educativos), Seguridad
(comisarías,
establecimientos
penitenciarios)
y
Dirección
General
de
Administración de Infracciones (DGAI) quien es el área que hace el seguimiento y
procesos de clausura de los establecimientos.
Trabajar con las áreas involucradas para que implementen mejoras en sus
procesos de generación de datos para elevar la calidad de los mismos en origen.
Se identificaron las siguientes acciones para trabajar con cada una de las áreas:
●
AGC
○
Trabajar
sobre
la
relación
entre
sus
inspecciones
y
habilitaciones, dado que las mismas se registran en distintas
fuentes de datos y es compleja la integración. Los caminos
propuestos por AGC no llevan a la relación entre las bases, a
pesar de que hace un año y medio incluyeron en ambas bases
un campo identificador para poder asociarlas.
○
Cargar en la base de datos el campo “origen de la inspección”.
○
Completar el domicilio en todos sus campos cuando éste
refiere
a
unidades
funcionales
o
locales
en
galerías
/
shoppings, no solamente la calle y altura.
47
IF-2023-46902722-GCABA-SECITD
Página 48 de 122

---

<!-- página 49 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
○
Completar la carga en habilitaciones caídas o de baja, así
mantener con el dato más actual de la habilitación y no
queden varios establecimientos con más de una habilitación
activa.
○
Completar la carga de fechas de clausura (alta o baja)
○
Trabajar sobre la trazabilidad de los datos, particularmente
dado que a la fecha cuentan con dos fuentes de información
respecto de los datos de las habilitaciones y algunas aún no
están digitalizadas.
●
APRA
○
Trabajar sobre la tipificación respecto a la resolución de una
inspección ya que a la fecha en todos los casos el resultado es
informado como “sin resultado”.
○
Reportar las clausuras
●
DGPT
○
Trabajar sobre la tipificación respecto de los resultados de las
inspecciones.
○
Completar los campos de rubros.
○
Disponibilizar
la
Información
sobre
clausuras
y
sobre
responsables físicos o jurídicos para incorporar al modelo.
●
SSHU
○
Trabajar sobre la estandarización de los rubros, y su carga
desde una tipología unificada.
○
Completar la carga del campo inspector,
○
Disponibilizar la Información sobre responsables físicos o
jurídicos para incorporar al modelo.
48
IF-2023-46902722-GCABA-SECITD
Página 49 de 122

---

<!-- página 50 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Portal de Oportunidades
El proyecto surgió de la necesidad de gestionar y ofrecer en forma más
eficiente la multiplicidad de programas destinados a mejorar la empleabilidad en
el Gobierno de la Ciudad de Buenos Aires. En forma conjunta los Ministerio de
Educación (ME), Ministerio de Desarrollo Humano y Hábitat (MDHyH) y el
Ministerio
de
Desarrollo
Económico
y
Producción
(MDEyP)
solicitaron
intervención a la Secretaría de Innovación y Transformación Digital para trabajar
en el desafío de centralizar la oferta de programas para la mejora de la
empleabilidad con dos objetivos:
1.
De
cara
al
Gobierno
de
la
Ciudad
de Buenos Aires: Generar
indicadores
de
gestión
que
permitan
la
trazabilidad
de
los
beneficiarios
de
programas
y
la
medición
del impacto en su
situación laboral.
2.
De cara al vecino: Desarrollar una plataforma web que unifique la
oferta de cursos y empleos y a su vez, les permita a los vecinos ver
toda su trayectoria en un único sitio y obtener recomendaciones de
cursos para hacer y empleos donde aplicar
Fecha de inicio
Fines de 2020.
Stakeholders involucrados
Las áreas de trabajo y stakeholders involucrados en el proyecto han sido:
●
Ministerio de Educación (ME)
●
Ministerio de Desarrollo Humano y Hábitat (MDHyH)
●
Ministerio de Desarrollo Económico y Producción (MDEyP)
●
Secretaría de Innovación y Transformación Digital (SECITD)
○
Subsecretaría de Experiencia Digital (SSED)
○
Agencia de Sistemas de Información (ASI)
Para
sumar
esfuerzos,
se
inició
un
proceso
de
licitación
pública
(2051-0252-LPU23) que nos permitió sumar al equipo de trabajo, perfiles con
experiencia
●
The Black Puma: perfiles de modeler
●
Netrix: perfiles de devops
49
IF-2023-46902722-GCABA-SECITD
Página 50 de 122

---

<!-- página 51 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
La
fragmentación
en
la
que
se
encontraba
la
oferta de programas
destinados a mejorar la empleabilidad a lo largo del Gobierno de la Ciudad de
Buenos Aires fue el principal problema que dio origen al proyecto.
Hallazgos de fundamentos del proyecto
Internamente se identificaron como puntos de dolor las ofertas duplicadas
y las áreas de vacancia, el desconocimiento del impacto de los programas, la falta
de vinculación entre la oferta y demanda del mercado laboral, procesos no
homogéneos en la gestión de los programas, y pérdida de trazabilidad sobre la
trayectoria del beneficiario.
50
IF-2023-46902722-GCABA-SECITD
Página 51 de 122

---

<!-- página 52 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Oferta duplicada y desarticulada de programas de formación antes de que existiera el
Portal de Oportunidades
Por su parte, centrándose en los ciudadanos se identificaron como puntos
de dolor la baja adopción de herramientas digitales, la imposibilidad de certificar
habilidades,
el
desconocimiento
de
cómo
armar
un
curriculum,
el
desconocimiento de la oferta destinada a su perfil, la baja terminalidad de cursos
y la poca oferta laboral disponible.
En
resumen,
partimos
de
una
situación
de
desarticulación
y
descoordinación entre las áreas y quisimos ir hacia un modelo de integración.
Punto de partida y objetivo perseguido por el proyecto
En
este
contexto
la
Subsecretaría
de
Políticas
Públicas
Basadas
en
Evidencia asumió la responsabilidad de la integración de los datos provenientes
de las diferentes fuentes de cada Ministerio y su disponibilidad a través de una
API, el cálculo y seguimiento de los indicadores definidos así como el desarrollo
de un sistema de recomendación de capacitaciones y empleos.
51
IF-2023-46902722-GCABA-SECITD
Página 52 de 122

---

<!-- página 53 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
Flujograma de trabajo aplicado en proyecto
La solución integral de datos trabajó en diferentes productos de datos, los
cuales pueden esquematizarse de la siguiente manera:
●
Desarrollo de un modelo integral de datos.
●
Tablero de indicadores.
●
Análisis específicos ad-hoc.
●
Algoritmos de recomendación de: Cursos y Empleos.
●
APIs: Trayectoria, Recomendación cursos y Recomendación Empleo.
Modelo de Datos.
A partir de las reuniones realizadas el universo de programas y bases de
datos se ha ido modificando, tanto por la incorporación de nuevos programas
como también de la baja a partir de la identificación de programas que no
tendrían continuidad como por no corresponder al paraguas del programa. Así de
42 programas relevados originalmente se definió un universo de 26 de los cuales
sólo 14 se encontraban en condiciones de ser integrados por verse reflejados en
bases de datos sistematizadas. El resto de los programas actualmente se
gestionan a través de planillas de cálculo u otros formatos o está en vías de
sistematización.
52
IF-2023-46902722-GCABA-SECITD
Página 53 de 122

---

<!-- página 54 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Funnel de programas mapeados
Se desarrolló un modelo de datos integrando 12 bases de datos con
información de los 3 ministerios participantes y oferentes de cursos y empleos, y
datos transversales (SINTyS1 y Relación de Dependencia AGIP-AFIP).
Base de Datos
Programa
Ministerio
Catálogo de Cursos
Transversal
ASI
Relación de dependencia AFIP-AGIP
Transversal
MDEyP
Sintys
Transversal
Nación
SIENFO
Educación No Formal (ENOF)
MEGC
GOET
Formación Profesional (CFP)
MEGC
MOODLE
Codo a Codo 4.0. Habilidades para
la empleabilidad
MEGC
Formulario de Preinscripción CAC
Codo a Codo 4.0
MEGC
SIU Guaraní
Formación Técnica Superior (IFTS)
MEGC
Inscripción en Línea (IEL)
Histórico Centro de Formación
MEGC
1 Inicialmente SINTyS había sido seleccionada para ser utilizada con el fin de validar identidad de los
vecinos, pero considerando que en el Data Lake se venía trabajando en paralelo con el proyecto de Broker
de Identidad con el mismo objetivo (el cual a su vez utiliza SINTyS como fuente de información), en una
etapa posterior a misma se desestimó como fuente directa y se realizó la integración de los modelos.
53
IF-2023-46902722-GCABA-SECITD
Página 54 de 122

---

<!-- página 55 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Profesional (CFP) y Formación
Técnico Superior (IFTS)
CRM Empleo
Ferias Barriales, Programas de
incentivo de Inserción Laboral,
Expo Empleo Jóven, Prácticas
Formativas
MDEyP
Portal Empleo
Portal de Empleo
MDEyP
CRM Sociolaboral
Activa tu potencial laboral
MDHyH
Luego, se llevó adelante la etapa de Discovery en donde se trabajó en el
relevamiento de las bases de datos con los registros de cada uno de los
programas a incluir así como también en la construcción junto los ministerios y
Jefatura de Gabinete de los indicadores relevantes a construir. A partir de lo
anterior se trabajó en un Diccionario compartido del proyecto que asegurará la
transversal comprensión de los términos y alcance del mismo así como también
en el desarrollo de las definiciones ontológicas del diagrama de entidad-relación
que serviría como insumo de los pasos posteriores del proyecto.
Posteriormente, y dado que entendemos que la calidad de las decisiones
basadas en datos dependen de contar con información confiable de calidad, se
llevó adelante el análisis de calidad de las bases de datos que serían integradas en
el modelo a fin de contar con indicadores que permitan medir tanto la exactitud
como la completitud y el nivel de representatividad de los datos aportados por
cada
programa.
Para
hacerlo
nos
basamos
en
los
criterios
mínimos
del
Framework de análisis de calidad de datos diseñado por la Subsecretaría de
Políticas Públicas Basadas en Evidencia.
El framework contiene tres grandes estándares respecto a la calificación de
calidad: criterios mínimos, criterios básicos y criterios óptimos. A su vez, estos
criterios se subdividen en criterios de calidad específicos, los cuales contienen una
definición conceptual y operativa.
54
IF-2023-46902722-GCABA-SECITD
Página 55 de 122

---

<!-- página 56 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Framework de Calidad de Datos diseñado por la SSPPBE
Con el fin de aportar a la mejora continua de la calidad de los datos, los
hallazgos
encontrados
a
partir
del
análisis
de
calidad,
se
realizaron
recomendaciones para su mejora, los cuales se consolidaron en un documento
que se presentaron a los responsables de los diferentes programas y sus
respectivas bases de datos con la expectativa que las mismas ayuden a elevar la
calidad de sus datos y por consiguiente la confiabilidad de la información
aportada en cada uno de los indicadores. Se espera que a partir de las
recomendaciones las áreas puedan elaborar un Plan de Acción con un plan de
trabajo consensuado con Jefatura para implementar las mejoras acordadas.
Dada
la
cantidad
de
orígenes
de
datos
en
el
proyecto
Portal
de
Oportunidades,
resultó
indispensable
aplicar
los
criterios mínimos de este
framework para evaluar la calidad de las variables a utilizar. Parte importante del
proceso de mejora continúa es la presentación a los responsables de los
diferentes
programas
y
sus
bases
respectivas
datos
de
recomendaciones
generales y específicas, a fin de que puedan implementar mejoras que ayuden a
elevar la calidad de sus datos y por consiguiente la confiabilidad de la información
aportada en cada uno de los indicadores.
Ejemplo de recomendaciones generales realizadas a las áreas
55
IF-2023-46902722-GCABA-SECITD
Página 56 de 122

---

<!-- página 57 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Ejemplo de recomendaciones específicas realizadas a las áreas
El proceso de análisis de calidad no ha sido lineal sino que ha ido
evolucionando conforme se fue profundizando el entendimiento del proyecto y el
modelado de datos, motivo por el cual aún no se ha finalizado con la presentación
de recomendaciones para todas las bases.
Paralelamente al discovery y entendimiento técnico y funcional de las bases
de datos se diseñó el Diagrama Entidad Relación (DER) ontológico que resuelva el
modelo, se identificaron las variables necesarias para construirlo y se ingestaron
los datos en PIBA, el Data Lake del Gobierno de la Ciudad de Buenos Aires, donde
se desarrolló el modelo.
Finalmente, se modelaron los datos. Dada la magnitud y complejidad,
considerando
la
cantidad
de
variables
a
incorporar
así
como
también
la
heterogeneidad de usos y formatos en las fuentes de origen,
el proceso de
modelado de datos ha sido planteado para abordarse en distintas etapas
acompañando a su vez al desarrollo del front del Portal de Oportunidades:
Etapas del Proyecto
56
IF-2023-46902722-GCABA-SECITD
Página 57 de 122

---

<!-- página 58 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
En la primera etapa se aborda el modelado de la Oferta Educativa, esto es,
todos aquellos programas de capacitación, cursos y talleres que dicta el Gobierno
de la Ciudad de Buenos Aires.
La segunda etapa se centró en el análisis y modelado de las Oportunidades
laborales que son ofertadas a través del Portal de Empleo, el programas “Activa tu
potencial laboral” de MDHyH. Si bien en el Diagrama de Entidad Relación (DER)
Ontológico se consideraba la existencia de la Intermediación laboral, durante la
exploración para esta etapa la misma se descartó ya que no se encontraron
registros de este tipo en ninguna de las bases de datos sistematizada, sino en
registros de excel.
Por último, el modelado de la etapa del Perfil del Vecino se realizó en
paralelo al desarrollo tanto del algoritmo de recomendación laboral como de la
sección “Mi Perfil” correspondiente dentro del front del Portal de Oportunidades a
fin de considerar e incluir toda la información y campos relevantes para el mismo.
El Perfil del Vecino refiere al conjunto de habilidades, intereses y experiencias
tanto laborales como formativas por las que ha transitado un vecino
Si bien el modelo es sumamente complejo, a continuación se presenta una
versión
simplificada
del
Diagrama
Entidad
Relación
que
esquematiza
su
contenido:
Diagrama de entidad relación (DER)
Tablero de Indicadores.
El producto “Tablero de indicadores” implicó 2 etapas:
57
IF-2023-46902722-GCABA-SECITD
Página 58 de 122

---

<!-- página 59 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
1. Definir los indicadores, en conjunto con el equipo de Dirección General de
Monitoreo y Evaluación (DGMEV), y luego validarlos en la mesa de trabajo
semanal del Portal de Oportunidades. En una primera instancia se habían
definido 16 indicadores pero luego de explorar las bases y conocer mejor el
negocio, se redefinieron en 15 indicadores con 8 aperturas.
2. Diseñar un tablero interactivo que contiene 3 solapas referentes a
capacitaciones, empleo y género. En una primera instancia se diseñó un mockup
que consume datos del Data Warehouse. Sin embargo, en cuanto todos los datos
estén modelados en el Data Lake, el tablero cambiará su conexión hacia este
nuevo origen.
Tablero del Portal de Oportunidades
Si bien los mismos reúnen el universo ideal de indicadores que al Gobierno
de la Ciudad de Buenos Aires le sería relevante medir, actualmente no todos
pueden ser calculados:
●
KPI
2
Tasa
de
Trabajadores
cuentapropistas
formales:
Al
momento no se cuenta con información suficiente para poder generar los
cálculos2.
●
KPI 4 Tasa de cobertura: A la fecha no existe una fuente
fidedigna de la oferta de vacantes para poder realizar los cálculos.
●
KPI 9 Tasa de ausentismo: Al momento no se registran las
faltas digitalmente.
2 La información actualmente disponible es la base de datos publicada por AFIP de monotributistas
pero la misma no cuenta con información suficiente.
https://www.afip.gob.ar/genericos/cInscripcion/archivoCompleto.asp
58
IF-2023-46902722-GCABA-SECITD
Página 59 de 122

---

<!-- página 60 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
●
KPI
11
Tasa
de
terminalidad
de
receptores
de becas: Al
momento los programas de “Becas Grierson” y “Becas para estudios de
educación superior” no poseen información sistematizada.
●
KPI 15 Variación porcentual de los ingresos percibidos por los
participantes: Al momento no se cuenta con información confiable para el
cálculo de ingresos para el indicador.
Indicadores del tablero del Portal de Oportunidades
Análisis Específicos Ad-Hoc.
Dado que para obtener información de los programas del Portal de
Oportunidades es necesario un extenso trabajo previo que incluye relevamiento
de bases, análisis de calidad, ingesta al data lake, y modelado de datos, se trabajó
en diferentes análisis específicos a pedido de las áreas involucradas a medida que
hubo acceso a la información “cruda”. De esta forma, las áreas pueden ir
conociendo parcialmente el impacto de sus programas sin esperar al final del
proyecto. Concretamente, se desarrollaron 2 análisis:
1. MDEyP: Análisis de cuántos asistentes a las diferentes ediciones de las
Expo Empleo realizadas consiguieron trabajo luego.
2.
ME:
Análisis
de
cuántos
egresados
del
Programa
Codo
a
Codo
consiguieron trabajo luego.
Cabe destacar que, esta información también le sirvió de insumo a la
DGMEV para desarrollar sus evaluaciones de impacto.
59
IF-2023-46902722-GCABA-SECITD
Página 60 de 122

---

<!-- página 61 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Algoritmos de Recomendación.
Junto a los productos de datos orientados al cumplimiento de los objetivos
de
cara
al
gobierno
de
mejorar
la
gobernabilidad
de
los
programas
de
empleabilidad, la Subsecretaría estuvo comprometida en el desarrollo de 2
algoritmos de recomendación a implementarse en el Portal de Oportunidades, la
plataforma única de cara al vecino.
De esta forma, se mejora la experiencia de los usuarios que acceden a
sugerencias según sus perfiles e intereses, evitando navegar por todas las
opciones existentes.
En primer lugar se trabajó en el algoritmo de recomendación de cursos.
Este algoritmo, utilizando como base la identificación del usuario, toma dos tipos
de insumos: por un lado, la trayectoria educativa del usuario, es decir, los cursos
que ya ha realizado; y por otro, las categorías de su interés, según lo declarado en
el portal. Como resultado de este análisis, el algoritmo genera y ofrece al usuario
una lista personalizada de cursos recomendados a los cuales podría inscribirse.
Diagrama del del proceso del recomendador
Para ofrecer esta lista, el algoritmo utiliza una combinación de los cursos
más populares (con mayor número de usuarios) dentro de la categoría (intereses),
y por el otro, su historial de cursos en el perfil a fin de detectar aquellos con mayor
similitud.
Como resultado de la combinación de ambos criterios se genera un ranking
de recomendaciones el cual se presenta en la interfaz del usuario enviado al
Portal de Oportunidades vía API.
60
IF-2023-46902722-GCABA-SECITD
Página 61 de 122

---

<!-- página 62 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Flujograma del proceso del recomendador
En segundo lugar se desarrolló de un algoritmo de recomendación de
empleo basado la comparación semántica y de campos entre el perfil del vecino y
la oferta laboral a partir del cual se genera una recomendación de las primeras
nueve oportunidades laborales ordenadas por el valor de la similitud con el
curriculum vitae de la persona.
Comparación e curriculum con oferta laboral del Recomendador laboral
API’s.
El modelo de datos diseñado durante el proyecto integrando las 13 fuentes
de
información
de
los
distintos
ministerios
junto con las transversales se
disponibiliza a través de la API de Trayectoria Educativa. La misma alimenta al
Front del Portal del Ciudadano.
61
IF-2023-46902722-GCABA-SECITD
Página 62 de 122

---

<!-- página 63 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
Portal de Backoffice del Portal de Vocación
El servicio web consulta la trayectoria educativa de los ciudadanos en base a
los
programas
educativos
del
Gobierno
de
la
Ciudad
de
Buenos
Aires
contemplados en el modelo. A su vez, la información de los vecinos cuenta con la
calidad de datos, la actualización y la completitud de la información ofrecida por
el Broker de Identificación Unívoca.
A efectos de la experiencia de usuario, un vecino, al loguearse con su
usuario de Mi Buenos Aires (MIBA) dentro del Portal de Oportunidades, puede
consultar su trayectoria educativa.
A su vez, el modelo del recomendador de cursos se alimenta a través de la
API de Trayectoria educativa y luego de correr disponibiliza los resultados del
recomendador para cada vecino a través de la API de Recomendación de Cursos
la cual alimenta al Front del Portal del Ciudadano.
Por su parte, la API de Recomendación de empleo disponibiliza tanto el
perfil
del
vecino cargado en el Currículum Vitae del Front del Portal de
Oportunidades como de las oportunidades cargadas en el Portal de Empleo al
modelo de recomendación de empleo. Los resultados que arroja el modelo con el
matcheo de las oportunidades laborales son a su vez disponibilizados al Front del
Portal del Ciudadano a través de dicha API.
62
IF-2023-46902722-GCABA-SECITD
Página 63 de 122

---

<!-- página 64 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
La heterogeneidad de los usos y formatos en las fuentes de datos producto
de la diversidad de actores y fragmentación de la oferta fue uno de los principales
obstáculos encontrados ya que requirió de un intenso trabajo para el modelado
de datos que permitiera la identificación unívoca de los beneficiarios y la unión de
las distintas fuentes en un único repositorio.
El discovery en sí mismo de los programas y las bases de datos así como el
acceso a las mismas y los trabajos de ingesta de las fuentes también ha requerido
en algunos casos de muchas idas y vueltas con las áreas. Algunas fuentes de alta
relevancia para la generación de indicadores han tenido que ser descartadas del
modelado por no encontrarse sistematizadas.
Por su parte, la calidad de los datos resultó ser un inconveniente al
momento del cálculo de los KPIs ya que en varias de las fuentes muchas veces las
variables se encontraban faltantes (es decir, no se registraban) o los scores
obtenidos no permitían considerarlas como fuentes válidas (por ejemplo, muchos
registros con campos incompletos o información no válida). El proceso en sí del
análisis de calidad también fue desafiante ya que implicó poner en práctica por
primera vez el modelo teórico desarrollado y por tanto tener que operacionalizar
algunas de sus definiciones. Sin embargo en este sentido fue una curva de
aprendizaje positiva que nutrió a la subsecretaría de una metodología robusta
para el análisis de calidad de los datos.
La generación del catálogo en común entre todas las áreas así como el
modelado de algunas entidades particulares (como las “carreras” o el “estado del
beneficiario” que variaba su definición según la fuente) fueron también alguno de
los desafíos más importantes de la etapa.
¿Cuáles son los logros destacados en el trayecto del proyecto?
El proyecto logró desarrollar un modelo de datos integrado, con 13 fuentes
de datos que contempla toda la oferta educativa contenida en los distintos
programas y cursos, la oferta de trabajo publicada, perfil del vecino según su
Currículum.
A
partir
del
desarrollo
del
modelo
se
logró
realizar los tableros de
indicadores con los KPI definidos con DGMEv - Jefatura de Gabinete y su
consiguiente tablero de gestión para el monitoreo de indicadores.
A su vez, pusimos en producción algoritmos de recomendación de cursos y
empleo que permiten a los usuarios del Portal de Oportunidades tener una mejor
experiencia a la hora de seleccionar los cursos que potencien su empleabilidad y
63
IF-2023-46902722-GCABA-SECITD
Página 64 de 122

---

<!-- página 65 -->

Informe cierre de gestión | 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Digital
empleos orientados a su perfil.
Por último, disponibilizamos toda esta información mediante APIs (de
trayectoria educativa y recomendaciones de cursos y empleo) de consulta, que
permitió integrar el modelo de datos con el front del Portal de Oportunidades.
El proyecto completo en tanto los desarrollos del Front y Back End del
“Portal de Oportunidades” que desarrolló la ASI, donde se disponibiliza los datos
del modelo desarrollado por la Subsecretaría de Políticas Públicas Basadas en
Evidencia y los algoritmos de recomendación contempla 6 etapas finalizadas:
1.
Etapa 1: Buscador avanzado
2.
Etapa 2: Perfil personalizado
3.
Etapa 3: Oferta de capacitación
4. Etapa 4: Oferta de trabajo
5.
Etapa 5: Perfil vocacional
6.
Etapa 6: Herramientas para la empleabilidad
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
A continuación se detallan los oportunidades de mejoras detectadas para
incorporar al proyecto:
●
Incorporar nuevas fuentes de información que subsanen las deficiencias de
la utilizada actualmente (Relación de dependencia AGIP-AFIP) para la
medición de impacto de los programas del Portal de Oportunidades
a
través del nivel de empleabilidad de los beneficiarios
●
Retomar la incorporación en el modelado de la fuente de datos de “Inglés
para el trabajo”, “Gestión de Adultos”, “CRM Único”.
●
Integrar el modelo de datos de Portal de Oportunidades con el de
subsidios para poder obtener información referente a los programas de
becas para subsanar al menos transitoriamente la falta de información
sistematizada para los programas de “Becas Grierson” y “Becas para
estudios de educación superior”.
●
Ajustar las visualizaciones y KPIs del tablero de a partir del nuevo origen y
de los nuevos indicadores y sus aperturas.
●
Continuar
y
mejorar el monitoreo de métricas de efectividad en la
recomendación de cursos y empleos.
●
Plantear y generar nuevos análisis de datos que agreguen valor al proyecto.
64
IF-2023-46902722-GCABA-SECITD
Página 65 de 122

---

<!-- página 66 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Broker de ciudadanos
En el marco de una creciente transformación digital de la sociedad y del
gobierno de la Ciudad, donde distintas áreas y reparticiones abordan sus
estrategias de registro y gestión de la información de los ciudadanos con distintos
criterios según sus objetivos específicos, contar con una única fuente fidedigna de
validación de información se vuelve indispensable.
El Broker del ciudadano es el módulo de la Plataforma Inteligente de
Buenos Aires (PIBA) desarrollada por la Subsecretaría de Políticas Públicas
Basadas en Evidencia que busca entender al ciudadano de manera unívoca en
múltiples dimensiones y mejorar la calidad de datos e información con la que
contamos de cada ciudadano que haya interactuado con algún servicio de
gobierno.
Con registros históricos, se centralizan, integran y normalizan datos de
diferentes fuentes de información para identificar unívocamente al vecino y traer
la mejor información disponible.
Es
una
llave
que
permite
crear
una
capa
semántica
(un
grafo
de
conocimiento) con significado compartido entre áreas del Gobierno de la Ciudad
de Buenos Aires.
Fecha de inicio
Octubre de 2021
Stakeholders involucrados
Dirección General de Arquitectura de Datos, Subsecretaría de Políticas Públicas
Basadas en Evidencia.
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
Broker del ciudadano es una iniciativa que surge de la necesidad de
conocer al ciudadano en todas sus dimensiones y de una forma histórica e
integral para poder ofrecerle mejores servicios: más ágiles y personalizados.
El Broker busca resolver un problema que durante los últimos años ha
crecido al ritmo de la digitalización y creación de aplicaciones y sistemas del
65
IF-2023-46902722-GCABA-SECITD
Página 66 de 122

---

<!-- página 67 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Gobierno de la Ciudad de Buenos Aires: los registros provenientes de distintas
fuentes y aplicaciones carecían de procesos de validación de información lo cual
provoca duplicación de la información y sin relación directa con cada ciudadano
volviendolos muchas veces falaces, incorrectos y/o inexactos.
Es decir, el Gobierno de la Ciudad de Buenos Aires contaba con información
fragmentada del ciudadano, pues cada área que interactúa con el vecino usa
lógicas diferentes para identificarlo y generar registro de sus transacciones, en las
dimensiones que le compete, lo que no nos permite tener una visión 360° de
quién es el ciudadano.
Recopilar la información de los ciudadanos que interactúan con los servicios
del Gobierno de la Ciudad de Buenos Aires y brindar a los ciudadanos y
ciudadanas una gestión centralizada y transparente sobre los datos que se posee
sobre ellos, permite identificar unívocamente el vecino y reducir las instancias de
pedidos de información ante cada demanda de servicios y trámites; y diseñar
servicios adaptados a sus verdaderas necesidades.
Desafío para el Gobierno de la Ciudad de Buenos Aires: pasar de información
fragmentada del ciudadano a información integrada
Este
proyecto está basado en el concepto de "Golden Record". Este
concepto se refiere a la creación y mantenimiento de un registro único y definitivo
que representa la versión más precisa, completa y actualizada de los datos de un
cliente, producto, o cualquier otra entidad en el ámbito de la gestión de datos.
Este registro consolida información de múltiples fuentes y sistemas, resolviendo
inconsistencias, duplicados y errores para ofrecer una vista unificada y confiable
de la entidad.
66
IF-2023-46902722-GCABA-SECITD
Página 67 de 122

---

<!-- página 68 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
El Golden Record es crucial en entornos donde se manejan grandes
volúmenes de datos provenientes de diversas fuentes. Su objetivo es proporcionar
una base sólida para la toma de decisiones, análisis de datos, cumplimiento
normativo,
garantizando
que
todos
los departamentos y sistemas de una
organización trabajen con la misma y más precisa información disponible.
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
El proceso por el cual fuimos construyendo el Broker del Ciudadano
comienza con un alianza estratégica con los stakeholders de enriquecimiento de
datos: es necesario entender y ponernos de acuerdo en qué se quiere resolver y
cómo el usuario va a consumir los datos, para diseñar juntos los casos de uso.
Una vez definido los casos de uso, avanzamos en la identificación y
discovery de las bases de datos: es necesario que entendamos la relación que
existe entre las bases de datos y los procesos del negocio que alimentan dichas
bases.
Luego, analizamos la calidad de los datos para ingestarlos en PIBA,
limpiarlos y normalizarlos.
Con los datos limpios y estandarizados, creamos el "Golden Record" del
Broker
de
registros
y
comenzamos
a
enriquecerlo
sumando
distintas
dimensiones que permitan complementar los análisis.
Finalmente, los disponibilizamos en aplicaciones, por ejemplo formularios
inteligentes.
En
paralelo,
a
partir
del
análisis
de
calidad
de
datos,
detectamos
oportunidades de mejora, y trabajamos junto con nuestros stakeholders en la
gobernanza de los datos.
Flujograma de cómo se trabajó en el proyecto
67
IF-2023-46902722-GCABA-SECITD
Página 68 de 122

---

<!-- página 69 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
La principal dificultad del proyecto consiste en identificar unívocamente al
vecino a lo largo de las distintas bases de datos y, en el caso de contar con más de
una información tener algún criterio sólido para discernir qué información es más
confiable.
Es por esto que la primera parte del proyecto estuvo centrada en el
desarrollo de una metodología para la selección y ponderación de fuentes:
Esta metodología garantiza:
• Identificar y priorizar fácilmente las bases de datos que aportan
mayor valor para la toma de decisiones en el Gobierno de la Ciudad de
Buenos Aires.
• Optimizar
los
recursos
(económicos
y
técnicos)
pues
nos
enfocamos en obtener resultados de alto impacto.
Metodología aplicada por etapas
• Obtener resultados cuantificables en el mediano plazo.
⬤Etapa 1: Ponderador.
El ponderador es el criterio a partir del cual se define cuáles son las bases de
datos que se van a integrar.
Consiste de un análisis estratégico de las diferentes fuentes de información,
definiendo la pertinencia de cada una de ellas y de un análisis técnico el cual
68
IF-2023-46902722-GCABA-SECITD
Página 69 de 122

---

<!-- página 70 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
define la viabilidad de las mismas.
Funnel PIBA
Análisis Estratégico
Durante el análisis estratégico se verifica:
●
Alcance: implica la cantidad de áreas y ministerios que usan la base de
datos para la toma de decisiones.
●
Alienación con el Gobierno de la Ciudad de Buenos Aires: bases de datos
asociadas
a
ministerios
y
proyectos definidos como prioritarios para
Gobierno de la Ciudad de Buenos Aires.
Por ejemplo, a modo ilustrativo, dada una serie de bases de datos se analiza
la cantidad de áreas que las utilizan:
Cantidad de áreas y ministerios que utilizan bases de datos
Luego se analiza la relevancia para el Gobierno de la Ciudad de Buenos
Aires:
69
IF-2023-46902722-GCABA-SECITD
Página 70 de 122

---

<!-- página 71 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Proyectos claves para Gobierno de la Ciudad de Buenos Aires
De esta forma, el Ponderador Estratégico otorga un puntaje final por base:
Proyectos claves para Jefatura de Gabinete
Análisis Técnico
El mismo define la viabilidad del uso de las bases de datos en función de:
●
Casos de uso3: Que las bases de datos estén asociadas a casos de uso los
cuales orientan las acciones y resultados tangibles.
●
Accesibilidad: Disponibilidad inmediata a la base de datos.
●
Calidad: Bases de datos que por su alta calidad permiten verificar la
veracidad de los datos de identificación de los ciudadanos.
●
Continuando con el ejemplo, a modo ilustrativo:
Primero se realiza un análisis para definir la prioridad de los casos de uso a
través de una matriz de transaccionalidad e impacto:
3 Un caso de uso se define a través de la metodología user story en donde se deben responder tres preguntas: 1)
quién es el usuario 2) qué necesita 3) para qué lo necesita. La definición de casos de uso permite comprender
con mayor precisión la necesidad y construir a partir de ella la mejor solución posible haciendo más claro y
enfocado el desarrollo posterior.
70
IF-2023-46902722-GCABA-SECITD
Página 71 de 122

---

<!-- página 72 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Matriz de priorización de casos de usos
Luego
se otorga un puntaje en función de la los resultados de la
accesibilidad:
Puntajes de acuerdo a resultados de accesibilidad
Por
último
se
suman
los
puntajes
obtenidos
en
los
ponderadores
estratégicos y cada sección del ponderador técnico y se obtiene la ponderación
final:
71
IF-2023-46902722-GCABA-SECITD
Página 72 de 122

---

<!-- página 73 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Ponderadores con puntajes obtenidos
⬤Etapa 2: Priorizador
El priorizador es el que establece el orden a partir del cual las bases de datos
serán integradas, ordenando la prioridad de las bases en función del puntaje
obtenido con el ponderador estratégico.
Modelo del ponderador y priorizador
⬤Etapa 3: Comando
La etapa comando es la instancia de verificación y actúa como órgano que
alerta sobre potenciales obstáculos y recomienda soluciones. Ese órgano el único
con la potestad para solicitar la re-ponderización y repriorización del orden de
ingesta de las BBDD.
Previo a la ingesta, el comando verifica:
72
IF-2023-46902722-GCABA-SECITD
Página 73 de 122

---

<!-- página 74 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Comando es la instancia de verificación
⬤Etapa 4: Integración
Esta etapa incluye los procesos de discovery, ingesta y modelado de datos.
En primer lugar, se trabajó en definir una llave única que permita construir
el “golden record” y así unificar los registros de identificación del ciudadano. Se
analizaron
y definieron los campos que componen esta llave primaria de
identificación unívoca, los cuales son:
Golden record de identificación
●
Tipo de Documento
●
Número de Documento
●
Género
●
País de Emisión del Documento
En segundo lugar, se definieron las fuentes de datos más adecuadas para
nutrir cada campo de la llave, según la metodología de priorización de Bases de
Datos detallada en el apartado anterior.
Una vez identificadas las bases de datos, se procedió a realizar el “discovery”:
se realizó un relevamiento sobre cada una de ellas para identificar en las mismas
las tablas, variables y relaciones necesarias para desarrollar la llave y las distintas
dimensiones a incluir.
73
IF-2023-46902722-GCABA-SECITD
Página 74 de 122

---

<!-- página 75 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Como resultado de este ejercicio, se determinó en una planilla de pre
modelado el origen de los datos a modelar, es decir, qué campo (o resultado de
relaciones de varios campos) de qué tabla en cada base de datos refiere a qué
campo de las entidades del nuevo modelo, para ingestar sólo aquellos campos
que aportaron los datos necesarios para resolver el caso de uso.
Finalmente se ingestaron esas bases en el Data Lake.
Las ingestas requirieron de reuniones técnicas para acordar los diferentes
métodos para las distintas bases.
Una vez ingestadas las bases se procedió a la limpieza de los datos, de
duplicación y análisis de calidad y completitud de los mismos.
Seguidamente corrimos un proceso de validación de identidad: buscamos
validar contra el Sistema de Identificación Nacional Tributario y Social (SINTyS) la
identidad de todas los ciudadanos contenidos en nuestro Broker.
Para ello
utilizamos el servicio de Intercambio masivo de información: la Ventanilla de
Integración Automática y Seguimiento (VIAS). Dicho intercambio se hace bajo la
privacidad y confidencialidad necesaria de acuerdo a lo establecido por la
normativa de Protección de Datos Personales.
Este proceso que corrimos para poder realizar dicha validación es un
proceso semiautomático:
En primer lugar generamos un proceso de generación de lotes, esto es:
armamos un script para seleccionar los datos de las fuentes prioritarias y traernos
la info necesaria para armar el lote con los registros a validar a partir de una llave
de identificación: tipo de documento, número de documento, apellido, nombre y
cuit. Con el lote generado, encriptamos los datos en archivos .txt y los subimos
manualmente al sistema de VIAS por el cual se procesan los datos y nos devuelve
la identidad validada, además de nueva información que enriquezca al modelo
(como por ej los programas sociales).
Bajamos y desencriptamos los datos del sistema de VIAS y los guardamos
en el Data Lake en un bucket de S3 encriptado, para mantener la seguridad en los
datos, que en este caso son sensibles. A partir de allí, corremos un proceso de
ingesta que automatizamos para que integre los datos cada vez que encuentre
un
archivo
nuevo.
Dicho
proceso
compara
la
nueva
información
con
la
información contenida en el Broker del ciudadano, y en caso que encuentre
información actualizada, ingesta la misma dejando tablas listas para utilizar en la
capa staging del Data Lake, y guarda el histórico en una capa cruda (Raw)
En
el
caso
que
encuentre
registros
de
personas
que
no
teníamos
anteriormente, los agrega.
74
IF-2023-46902722-GCABA-SECITD
Página 75 de 122

---

<!-- página 76 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Es importante mencionar que sólo se utilizan registros con grado de
confiabilidad mayor o igual al 80%.
Diagrama con el proceso de validación de identidad
Con los datos validados pasamos a modelar la llave de identificación y las
distintas entidades que se integran a partir de ella.
Se construyó una tabla para definir dinámicamente la prioridad que tiene
cada base de datos en la selección del campo para incluir en las distintas
dimensiones.
La prioridad definida por entidad es la siguiente:
prioridad
base_origen
origen_broker
1
LOGIN2
2
RIB
3
RCE
4
BUKEALA
domicilio
1
LOGIN2
2
SINTYS - RENAPER
3
SINTYS - AFIP
4
SINTYS - OTRAS FUENTES - BNA
5
SINTYS - OTRAS FUENTES - BC
6
SINTYS - ELECTORAL
7
SINTYS - ENARGAS
8
SINTYS - ENRE
75
IF-2023-46902722-GCABA-SECITD
Página 76 de 122

---

<!-- página 77 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
9
RIB
10
PADRON_IGJ
11
CIUDADANOS_RENAPER
12
BUKEALA
99
OTROS
teléfono
1
LOGIN2
2
TYP
3
BUKEALA
99
OTROS
email
1
LOGIN2
2
RIB
3
TYP
4
BUKEALA
99
OTROS
El
siguiente
Diagrama
de
Entidad
Relación
(DER)
muestra
conceptualmente cómo se vinculan las distintas entidades contenida en el
Broker:
76
IF-2023-46902722-GCABA-SECITD
Página 77 de 122

---

<!-- página 78 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Diagrama de Entidad Relación del Broker de Ciudadanos
Actualmente
en
el
Broker
se
puede
encontrar
información
de
los
ciudadanos de las siguientes dimensiones:
●
Broker General: Entidad que reúne la identificación unívoca del ciudadano
(DNI, género, nombres, apellidos), sus datos de contacto (domicilio, email,
teléfono) y biometría (Login BAID).
Vale aclarar que con los datos de contacto de todas las bases de datos,
incluidos los datos que devuelve SINTyS se generan maestros de domicilios,
teléfonos y email. Sólo se lleva el dato único de contacto al Broker general
según el análisis de priorización anteriormente mencionado.
Adicionalmente, se modelaron nuevas entidades que complementan la
información del ciudadano en nuevas dimensiones:
●
Educación: Entidad que identifica el máximo nivel educativo obtenido de la
persona.
●
Empleabilidad: Entidades que identifican las distintas situaciones de
Empleo
(empleo
dependiente,
empleo
independiente,
desempleo,
jubilación y pensión).
77
IF-2023-46902722-GCABA-SECITD
Página 78 de 122

---

<!-- página 79 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
●
Supervivencia:
Entidad
que
identifica
personas
humanas
fallecidas
informadas por Sintys.
●
Programas
Sociales:
Entidad
que
identifica
personas
humanas
beneficiarias de subsidios económicos nacionales.
●
Hogar: Entidad que busca determinar la cantidad de personas que habitan
el mismo espacio físico. A partir de las direcciones normalizadas, podremos
construir la entidad hogar, generando un cluster según dicha dirección
normalizada y la fecha de actualización de la misma. Es importante
recordar que la dirección es la que el ciudadano declara al interactuar con
los distintos sistemas “fuente” del modelo (Login2, RIB, RCE, Bukeala).
●
Familia: Entidad que busca clusterizar y armar relaciones entre ciudadanos
según su relación de parentesco. El hogar se define como persona o grupo
de personas que viven bajo un mismo techo." (es la misma definición que
tiene
INDEC,
pero
sin
el
criterio
de
que
compartan
los gastos de
alimentación).
●
Vínculos: Entidad que identifica las relaciones de parentesco biológicas y
civiles obtenidas a partir de los datos del Registro Civil.
Diagrama conceptual de cómo se integra el Broker de Identidad con otras bases de
datos o proyectos a través de PIBA
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
La heterogeneidad de los usos y formatos en las fuentes de datos producto
de la diversidad de actores con diferentes lógicas al momento de identificar al
ciudadano fue uno de los principales obstáculos encontrados ya que requirió de
un intenso trabajo para el modelado de datos que permitiera la identificación
unívoca y la unión de las distintas fuentes en un único repositorio.
78
IF-2023-46902722-GCABA-SECITD
Página 79 de 122

---

<!-- página 80 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
La creación del golden record en sí mismo implicó mucho análisis y
reuniones para definir cuáles eran los campos óptimos para realizar la llave
primaria de identificación, para que sea unívoca y completa
Modelo de desambiguación en el Broker del Ciudadano
Para el proceso de validación de identidad que implicó el trabajo en
conjunto con SINTyS y por añadidura todos los organismos con los que se
relaciona, se llevaron a cabo numerosos intercambios para dar marco formal y
legal
al
intercambio
de
información.
La sensibilidad de los datos que se
comparten e integran requerían una coordinación cuidadosa entre Ciudad y
Nación ya que los diferentes orígenes de datos con los que cruza SINTyS requerían
gestiones específicas que permitieran tener trazabilidad, transparencia y calidad
de
la
información
unificada.
La
generación
de
estándares
y
procesos
documentados de intercambio de información nos permiten hoy tener plena
confianza en la identificación de los ciudadanos que componen el Broker del
Ciudadano.
Respecto a la Limpieza y Normalización de campos, el trabajo consistió en
generar los mecanismos adecuados para generar confianza en las bases que se
utilizaron. Es decir, buscamos que la información modelada sea precisa, completa,
consistente y confiable, sin importar cuánto tiempo se almacene o con qué
frecuencia se acceda a ella. Por ello el desafío era lograr que todos los datos sean
consistentes con los tipos de datos definidos y esperados. Es decir, que si se
espera que el tipo de campo haga referencia a una fecha determinada, el dato
refleje una fecha y no otra información. Así con cada tipo de dato y cada dato
almacenado en los millones de registros componentes del Broker del Ciudadano.
Por último, el análisis de calidad de Datos implicó observar cada uno de
esos orígenes señalados de manera exhaustiva y establecer estándares mínimos
de calidad con los que trabajar en la unificación de individuos y la identificación
fehaciente de los ciudadanos. Este trabajo implicó seguir guías explícitas
79
IF-2023-46902722-GCABA-SECITD
Página 80 de 122

---

<!-- página 81 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
¿Cuáles son los logros destacados en el trayecto del proyecto?
El desarrollo del modelo integrado permite identificar unívocamente al
ciudadano (tanto vecinos de la Ciudad de Buenos Aires, como residentes de otras
ciudades) y distintas dimensiones que agregan valor a la identificación del
mismo.
Al cierre de este informe se encuentran integrados al modelo los datos de
más de 9 millones de registros de vecinos.
Entre los beneficios esperados del modelo se destaca la posibilidad de:
●
Obtener Información integrada y actualizada.
●
Conocer
mejor
a
los
ciudadanos
y
sus
necesidades y minimizar la
necesidad de pedirles datos duplicados.
●
Evitar duplicidad de contactos con el vecino.
●
Actuar proactivamente sobre las necesidades del ciudadano y poder
personalizar la comunicación.
●
Targetear mejor la gestión y generar políticas públicas orientadas a
necesidades y perfiles diferentes, lo cual permite la optimización de los
recursos del Estado.
Por otro lado, el desarrollo de “PIBA” permite disponibilizar la información
del ciudadano e integrarla a otros proyectos, como es el caso de los Formularios
Inteligentes.
Lo que buscamos con PIBA es disponibilizar mediante una API rest, una
manera fácil para que todas las áreas de gobierno que requieran consultar
información
fehaciente,
normalizada,
validada,
consistente,
actualizada
e
integrable con sus aplicaciones actuales, puedan utilizar los datos del Broker del
ciudadano, de una manera ágil, centralizada, transparente y sin impacto en su
adopción o utilización.
PIBA permite consultar los datos del Broker a partir de la consulta de la llave
del Broker: Tipo de documento, número de documento, Género y País de Emisión
del documento.
Los Formularios Inteligentes, se implementaron a partir de PIBA como una
herramienta de inteligencia aumentada para el ingreso de datos a los sistemas
del Gobierno de la Ciudad de Buenos Aires.
80
IF-2023-46902722-GCABA-SECITD
Página 81 de 122

---

<!-- página 82 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Diagrama de interacción entre PIBA y los Formularios de autocompletado de SADE
De esta forma, ponemos a disposición el conocimiento generado por las
áreas del Gobierno para ser compartido desde un mismo lugar y mejoramos el
desempeño de los formularios de ingreso de datos del Gobierno de la Ciudad de
Buenos Aires y la eficiencia de los procesos, a bajo costo y tiempos mínimos de
respuesta para los sistemas
El
caso
de
aplicación
actual
es
sobre
los
formularios
de
SADE.
Datos autocompletados en el alta de registro
81
IF-2023-46902722-GCABA-SECITD
Página 82 de 122

---

<!-- página 83 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
A medida que se tenga la necesidad de ampliar el conocimiento sobre el
ciudadano, se puede escalar el modelo e incorporar datos de distintas fuentes
que completen nuevas dimensiones, sujeto al presupuesto y definiciones de
Jefatura.
Poder contar con datos de fuentes nacionales complementa la información
de ciudadanos que interactúan son los sistemas del gobierno de la ciudad, pero
que no son vecinos de la misma y sumará gran valor al proyecto.
Sumar nuevos clientes que consuman los datos expuestos por PIBA.
Continuar la integración del modelo Broker Ciudadano con otros modelos
internos y externos a la Secretaría (Subsidios, BOTI, Maestro de Establecimientos,
Portal de Oportunidades).
Mejora continua en la fiabilidad de los datos, ampliando el universo de
fuentes confiables para tal fin.
82
IF-2023-46902722-GCABA-SECITD
Página 83 de 122

---

<!-- página 84 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Expresión BA
El
proyecto
surge
como
iniciativa
conjunta
de
la
Subsecretaría
de
Experiencia Digital (SSED) y la Subsecretaría de Políticas Públicas Basadas en
Evidencia (SSPPBE) con el propósito de desarrollar una herramienta de escucha
activa, que tome los aportes de los vecinos para la toma de decisiones, y la mejora
de los servicios que ya ofrecía “Ciudad On Demand” el Gobierno de la Ciudad de
Buenos Aires.
Identificamos que hay una oportunidad para ejercitar mejor la escucha
activa ¿Cómo? Incorporando las valoraciones que hacen los ciudadanos de los
servicios públicos en plataformas que no han sido diseñadas por el propio
gobierno. Esta es información valiosa sobre la cual luego podemos aplicar
Inteligencia Artificial y analítica para mejorar esos servicios.
Ciclo de la estrategia digital de escucha activa
Fecha de inicio
Primer semestre de 2021.
83
IF-2023-46902722-GCABA-SECITD
Página 84 de 122

---

<!-- página 85 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Stakeholders involucrados
●
Subsecretaría de Políticas Públicas Basadas en Evidencia.
●
Dirección General de Ciencias de la Información(DGCINFO)
●
Dirección General de Arquitectura de Datos (DGARD)
●
Subsecretaría de Experiencia Digital.
●
Dirección General de Sistemas de Atención Ciudadana
●
Áreas que consumen la información procesada:
○
Ministerio de Salud
○
Ministerio de Desarrollo Humano y Hábitat (MDHyH)
○
Espacio Público e Higiene Urbana (MEPHU)
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
Si bien hasta el momento en que nace el del proyecto del Gobierno de la
Ciudad de Buenos Aires contaba con múltiples canales de comunicación y
feedback con el vecino (como la app 147 o Gestión Colaborativa), los mismos
constituían un espacio minoritario en el universo de plataformas de expresión
ciudadana y, con frecuencia, los comentarios recibidos a través de dichos canales
suelen tener un sesgo negativo.
Expresión BA antes llamado “Ciudad On Demand”, tiene por objetivo
analizar
diferentes
canales
(no
oficiales)
de
relevamiento
de
reclamos
y
participación ciudadana, distintos a los tradicionales, donde se busca incorporar la
participación ciudadana, donde los vecinos dejan en forma espontánea sus
comentarios y opiniones de los diferentes sitios públicos de la Ciudad Autónoma
de Buenos Aires y de los servicios que ofrece el Gobierno de la Ciudad de Buenos
Aires allí.
Expresión BA es una nueva manera de incorporar las opiniones e involucrar
a los vecinos de Buenos Aires en la toma de decisiones que transforman la ciudad.
Google Maps ha sido elegida como la primera plataforma del proyecto
como fuente de información para analizar experiencias, detectar solicitudes y
descubrir propuestas.
84
IF-2023-46902722-GCABA-SECITD
Página 85 de 122

---

<!-- página 86 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Gráfica de las etapas del proceso y de la estategia
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
El primer paso, y uno de los más importantes, fue la creación de un vínculo
con Google, puntualmente con el equipo de Google My Business. Esto fue
fundamental para allanar el camino de acceder a la API que disponibiliza los
comentarios.
El segundo paso fue definir los elementos del espacio público sobre los
cuales reclamar la propiedad de parte del Gobierno de la Ciudad de Buenos Aires
en
la
plataforma.
Ejemplos:
bibliotecas,
cementerios,
centros
culturales,
comisarías, plazas y parques, etc.
Alcance del proyecto de acuerdo a las consultas
85
IF-2023-46902722-GCABA-SECITD
Página 86 de 122

---

<!-- página 87 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
El tercer paso fue crear los ETLs necesarios para ingestar en el Data Lake los
datos.
La
Subsecretaría
de
Políticas
Públicas
Basadas
en
Evidencia
es la
responsable del proceso de ingesta y anonimización de los comentarios así como
su
correspondiente
disponibilización
y
el
desarrollo
de
modelos
para
la
interpretación de su contenido.
La
siguiente
imagen
resume
todas
las
tareas
ejecutadas
por
la
Subsecretaría de Políticas Públicas Basadas en Evidencia en el proyecto:
Mapa conceptual end to end del alcance del proceso
Desde la Dirección General de Arquitectura de Datos se diseñó y automatizó
el proceso de ingesta diaria de todos los comentarios/reseñas nuevas que cada
ciudadano realiza sobre los sitios.
A partir de los datos almacenados en el Data Lake, desde la Dirección
General de Ciencias de la Información se implementó el desarrollo de diferentes
algoritmos
de
Procesamiento
del
Lenguaje
Natural
(NLP)
que
analizan
automáticamente los mensajes (reviews) y los categorizan, ya sea por temática o
por sentimiento.
Flujo de Funcionamiento de los Algoritmos.
Primero, se segmentan los comentarios en oraciones, usando “Stanza". Cada
oración pasa después por tres procesos, para determinar su temática, si es o no
una propuesta y su sentimiento.
Temática:
se
hace una limpieza del texto usando “Regex”, se sacan
stopwords y se lematiza. El texto limpio resultante pasa por un clasificador que le
asigna una categoría de temática o ‘ninguno’.
86
IF-2023-46902722-GCABA-SECITD
Página 87 de 122

---

<!-- página 88 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Propuestas: se hace un análisis morfológico de las oraciones. Las
que
contienen un verbo condicional o alguna frase de una lista predefinida se marcan
como propuestas.
Sentimiento: las oraciones pasan por dos modelos de clasificación de
sentimiento y además se infiere un valor de sentimiento a partir de las estrellas
asociadas al comentario. El valor final de sentimiento se define por una votación
entre estos tres resultados.
Flujograma de datos con el motor de Inteligencia Artificial
Por otro lado, la Subsecretaría de Experiencia Digital es la encargada de
administrar los sitios y utilizar la información disponibilizada por la Subsecretaría
de Políticas Públicas Basadas en Evidencia para desarrollar el producto final: un
tablero interactivo que se comparte con las diferentes áreas del Gobierno de la
Ciudad de Buenos Aires para que tomen mejores decisiones en base a los sitios
que gestiona cada una.
Cabe destacar que, al trabajar con datos de vecinos, desde la Subsecretaría
de
Políticas
Públicas
Basadas
en
Evidencia
se
diseñó
un
proceso
de
anonimización que evita que se pueda conocer quién escribió la reseña. El
proceso implicó transformar todos los nombres de usuarios en diferentes “hash”
aleatorios que no permiten identificarlos.
87
IF-2023-46902722-GCABA-SECITD
Página 88 de 122

---

<!-- página 89 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Road map con los actores involucrados y sus responsabilidades en el proyecto
Recientemente se trabajó, por un lado, en una cuarta iteración del modelo
(Detección de propuestas 2.0) cuyo foco a pedido de la Subsecretaría de
Experiencia
Digital
ha
sido
en
los
sitios
de
‘Atención
Ciudadana’
(sedes
comunales, cementerios, parques y plazas). Para ello se ha trabajado en el
etiquetado de un set direccionado para incluir temáticas relevantes con poca
representación en los sets previos.
Por otro lado, se trabajó en una nueva versión del modelo de Detección de
solicitudes que permite reconocer con mayor especificidad la prestación de
Gestión Colaborativa a la que la demanda corresponde.
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
Uno de los obstáculos ha sido la falta de un buen dataset de datos de
calidad etiquetados para poder entrenar
los algoritmos. Es un desafío que se
tomó por parte del equipo de la Dirección General de Ciencia de Datos para que
este conjunto de datos sean de la calidad requerida. Para esto se representó un
conjunto completo de datos, incluyendo las tablas que contienen, ordenan y
restringen los datos, así como las relaciones entre las tablas, logrando así superar
este desafío.
Por otro lado, la API de google fue problemática a la hora de ingesta de
datos pero se siguió mejorando sin cambiar de API. El principal obstáculo fue la
poca precisión y la falta de actualización en la documentación de la API de parte
de Google por lo cual se prosiguió con el desarrollo y posterior implementación
88
IF-2023-46902722-GCABA-SECITD
Página 89 de 122

---

<!-- página 90 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
de una nueva API proporcionada por la Dirección General de Arquitectura de
Datos.
¿Cuáles son los logros destacados en el trayecto del proyecto?
Logros del año 2022:
●
1 algoritmo de limpieza
●
3 modelos de datos aplicados (tópicos, sentimiento, propuesta)
●
MVP disponibilizado a las áreas
Logros del año 2023:
●
6/6 áreas utilizando la plataforma.
●
El entrenamiento de un clasificador de solicitudes en sitios de
atención ciudadana.
●
12/10 nuevas funcionalidades de relevancia.
●
5177 sitios en propiedad de la SECITD
●
Incorporación
API
métricas
(permite
obtener
el
dato
de
visualizaciones de nuestros sitios. 191 millones de visualizaciones)
●
Pruebas de usabilidad con distintas áreas, mejora de la interfaz del
tablero.
Vista actual del tablero con sus indicadores de valoraciones y emociones
89
IF-2023-46902722-GCABA-SECITD
Página 90 de 122

---

<!-- página 91 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
Detector de oportunidades
Ya se completó recientemente el entrenamiento de un clasificador para
detectar oportunidades de mejora en sitios de la categoría “Atención Ciudadana”
y está próximo a finalizarse otro para los sitios de la categoría “Salud”. Está
pendiente un tercer clasificador, para la categoría “Educación”.
●
La confección de un dataset etiquetado para poder desarrollar
y entrenar un clasificador de solicitudes
●
Se está trabajando en terminar el desarrollo de un clasificador
de solicitudes en prestaciones de gestión colaborativa para su distribución
a todas las áreas involucradas en forma automática.
Automatización del Monitoreo de la Operación
El objetivo principal del proyecto de automatización es permitir que la
generación de indicadores a través de los cuales se monitorea la performance de
los
principales
servicios
que
ofrece
la Ciudad de Buenos Aires se realice
directamente desde la fuente de datos.
Esto tiene implicancias significativas para la gestión de la Ciudad porque
permite
un
seguimiento
más
eficiente,
ágil
y
preciso
de
los indicadores.
Asimismo, la automatización de esta tarea, deja más espacio para que los
tomadores de decisiones se enfoquen en discutir no ya la fuente o la construcción
del indicador, sino lo que realmente importa: qué acciones debemos tomar como
organización para mejorar esos indicadores.
En tal sentido, el proyecto prevé incorporar los datos necesarios para el
cálculo de los indicadores provenientes de las distintas fuentes de información
sistematizadas al Data Lake del Gobierno de la Ciudad de Buenos Aires a partir de
procesos de ingesta, para luego modelar los indicadores que actualmente se
reportan de forma manual para enriquecer el sistema de monitoreo.
Fecha de inicio
Agosto 2022
90
IF-2023-46902722-GCABA-SECITD
Página 91 de 122

---

<!-- página 92 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Stakeholders involucrados
●
Dirección
General
de
Evaluación
y
Monitoreo
-
Secretaría
de
Planificación, Evaluación y Coordinación de Gestión
●
Áreas que generan y reportan los indicadores:
○
Subsecretaria de Servicios al Ciudadano, DG Atención ciudadana
○
Subsecretaria de Justicia, DG Admin. de Infracciones
○
Subsecretaría
Gestión
Operativa,
DG
Unidad
Informática
de
Administración
○
Subsecretaría Gestión Operativa, DG Gestión de la Flota Automotor
○
Subsecretaría
Gestión
Operativa,
DG
Unidad
Informática
de
Administración
○
Subsecretaría de Hacienda, DG de tesorería
○
Subsecretaría de Ciudad Inteligente, DG Canales Digitales
○
Subsecretaría de Ciudad Inteligente, DG Ciudadanía Digital
○
Secretaría de Innovación y Transformación Digital, DG Eficiencia
Administrativa
○
Subsecretaría Experiencia Digital, DG Experiencia Digital
○
Agencia de Sistemas de la Información, Coordinación General de
Servicios
○
Subsecretaría Planif. Sanitaria y Gestión de Red, DG Sistemas de
Información Sanitaria
○
Subsecretaría de Gestión de la Movilidad, DG Gestion de la Movilidad
○
SS Seguridad Ciudadana y Orden Público, Dirección General Orden
Público y Coordinación de Agentes
○
Subsecretaría Convivencia y Orden Público, DG Orden Público y
Coord. de Agentes
○
Subsecretaría Gestión Comunal, DG Arbolado y Espacios Verdes
○
Subsecretaría de Higiene Urbana, DG Limpieza
○
Secretaría de Inclusión Social y Atención Inmediata
○
Autopistas Urbanas SA
○
Min. de Desarrollo Económico y Producción
○
Consejo de los Derechos de Niñas, Niños y Adolescentes, DG
Servicios de Atención Permanente
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
En
la
actualidad,
el
sistema
de
monitoreo
recopila
indicadores
de
numerosas fuentes de información, los cuales son calculados manualmente por
cada jurisdicción y luego informados mensualmente a la Dirección General de
Monitoreo y Evaluación (DGMEV) de la Jefatura de Gabinete. Además, cada
91
IF-2023-46902722-GCABA-SECITD
Página 92 de 122

---

<!-- página 93 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
responsable de área presenta y explica la evolución de esos indicadores con
regularidad en las Reuniones de Seguimiento que coordina la Secretaría de
Planificación, Evaluación y Coordinación de Gestión.
El siguiente tablero ejecutivo muestra a modo de ejemplo cómo se expone
en las reuniones de seguimiento con Jefatura de Gabinete el resultado del
monitoreo de la gestión que se realiza a partir del seguimiento de indicadores.
Tablero ejecutivo del Monitoreo de la Operación de las áreas
del Gobierno de la Ciudad de Buenos Aires
Reuniones de seguimiento de proyectos con la Secretaría de
Planificación, Evaluación y Coordinación de Gestión
92
IF-2023-46902722-GCABA-SECITD
Página 93 de 122

---

<!-- página 94 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Como se mencionó previamente, existe una oportunidad muy clara para
automatizar la construcción y el informe de indicadores provenientes de fuentes
que ya se encuentran sistematizadas.
Este proceso conlleva numerosos beneficios:
●
Libera a las jurisdicciones de tareas operativas, lo que resulta en una
mayor eficiencia.
●
Garantiza la consistencia a lo largo del tiempo, lo cual aumenta la
rigurosidad de los informes.
●
Posibilita
una
velocidad
de
reporte
mayor
en
situaciones
y
momentos en los que sea necesario mejorar la operación de la
gestión en general.
En resumen, las áreas gubernamentales ya no tienen que calcular y reportar
mensualmente los indicadores de gestión, sino que simplemente se validan los
indicadores calculados automáticamente. Por su parte, la DGMEV contará con
información en tiempo real y sin intermediarios, lo que facilitará el seguimiento de
los indicadores y la detección temprana de alertas que puedan surgir en la
gestión, permitiendo tomar medidas adecuadas en consecuencia.
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
La solución de datos contempla la incorporación de los datos necesarios
para el cálculo de los indicadores provenientes de diversas fuentes de información
sistematizadas en PIBA, el Data Lake gestionado por la Subsecretaría de Políticas
Públicas Basadas en Evidencia, quien actúa como brazo técnico del proyecto.
En este caso, buscamos integrar las diferentes bases de datos de las
distintas
áreas
gubernamentales
para
obtener
una
visión
integral
de
la
información, lo que nos permitirá realizar análisis de valor agregado.
Para esto, el desarrollo del proyecto se dividió en 5 etapas:
Etapas del proyecto de Automatización del Monitoreo de la Operación
93
IF-2023-46902722-GCABA-SECITD
Página 94 de 122

---

<!-- página 95 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
1.
Acuerdo político (DGMEV)
2.
Premodelado de datos (DGARD - GOID)
3.
Ingestas de fuentes de datos (DGARD - GOEID)
4.
Modelado de los datos (DGMEV)
5.
Disponibilización de los datos (DGARD - GOEID)
Etapa 1: Acuerdo Político.
El primer paso de este proyecto consiste en acordar con las áreas los
indicadores que pueden ser automatizables sobre la base de qué indicadores se
construyen a partir de una base de datos sistematizada.
Para ello, se realiza una reunión de “Kick off” del proyecto con los referentes
de la jurisdicción: se presentan los objetivos y alcances del mismo y se releva los
indicadores sobre los cuales trabajar y las bases de datos que los contienen, así
como también se definen los pasos a seguir y la metodología de trabajo. En esta
reunión es sumamente importante poder definir los accesos a los datos, ya sea
con una conexión directa a la base de datos, o alternativamente mediante una
API o archivos que depositen en un ftps.
Luego, es necesario gestionar los datos de conexión y las credenciales para
que un usuario genérico pueda acceder a la base de datos de origen y usuarios
nominales para que el equipo que realiza el análisis funcional inicial pueda
determinar cuáles son las tablas a ingestar. Estos datos, una vez procesados y
transformados, se convierten en indicadores.
Por
último,
y
en
paralelo,
se
realiza
una
revisión
de
definiciones,
metodología, scripts y fórmulas sobre los indicadores a automatizar. Esto es
necesario para luego modelar el cálculo de los indicadores seleccionados.
Validación de fuentes, referentes e indicadores: Para validar la viabilidad
técnica del proyecto, se solicita al área que revise y complete dos documentos,
una ficha técnica y una ficha de validación de indicadores.
Por otro lado, se les solicita que definan un referente por técnico y otro de
indicadores.
○
Referente Técnico: Será responsable técnico de brindar los accesos
correspondientes
y
evacuar
consultas
sobre
las
fuentes
de
información.
94
IF-2023-46902722-GCABA-SECITD
Página 95 de 122

---

<!-- página 96 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Fuentes
de
información:
Ficha
técnica.
Dicho
documento
releva
las
características principales de la BD fuente, para obtener la información mínima
para dimensionar la arquitectura necesaria para realizar la ingesta en el Data Lake.
○
Referente
de
Indicadores: Es responsable funcional de brindar
conocimientos y evacuar consultas sobre las construcción de los
indicadores de monitoreo que realizan actualmente.
Indicadores: El alcance del proyecto está dado por los indicadores que
actualmente se producen a partir de las fuentes de información. El referente de
indicadores revisa y completa la ficha de validación de indicadores
para validar
el alcance del proyecto y realizar el análisis funcional para comenzar el proceso de
ingesta de las fuentes.
Por cada uno de los indicadores mapeados se van a
completar las siguientes variables
●ID_Indicador: Hace referencia al id interno de la DGMEV sobre ese indicador.
●Eje temático: Programa o Servicio al que hace referencia el indicador, este es el
que se muestra en los tableros ejecutivos.
●Fuente del Indicador: Desde donde proviene el indicador, fuente, base, etc.
●Indicador: Nombre específico que declara al indicador.
●Detalle: Aclaración y explicación de lo que representa y cómo se calcula el
indicador
●Forma de cálculo de indicador: Representa el lenguaje de programación o de
visualización en donde se calcula la fórmula del indicador.
●Script del indicador: Detalle de cómo se calcula con su lógica correspondiente.
●Tabla Referencia: De qué tabla proviene el dato, para poder identificar para
futuras relaciones.
●Palabras Clave: En caso de que haya una búsqueda de palabras para identificar
al indicador, colocar las palabras claves. Ej: "seguridad".
●Responsable Técnico Jurisdicción: Detallar el/los responsables.
●Mail del Responsable Jurisdicción: Detallar mail para contactos futuros.
●Indicador Validado Jurisdicción: Validar cuando consideren que el indicador es
correcto para su análisis.
●Indicador Validado Jefatura: Validar cuando consideren que el indicador es
correcto para su análisis.
La fecha límite para enviar la documentación se establece que es 48 horas
antes de la reunión de Kick Off, a fin que el equipo lo pueda analizar.
Etapa 2: Premoldeado - Entendimiento del Modelo de Datos.
95
IF-2023-46902722-GCABA-SECITD
Página 96 de 122

---

<!-- página 97 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Una vez que se han seleccionado las tablas relevantes, se documenta el
proceso de “Premodelado”, lo que implica la creación de diversos documentos
técnicos, como un diccionario de datos para identificar los datos con los que se
está trabajando, un diagrama entidad-relación para comprender las relaciones del
modelo de datos y una verificación de calidad para identificar campos que no
cumplen con los estándares mínimos.
Con credenciales y accesos a la base de datos, se comienza a realizar un
discovery sobre la base de datos, esto es, el análisis, comprensión y entendimiento
del negocio, para poder identificar las tablas donde se alojan los datos que van a
permitir calcular los indicadores. Identificadas las tablas, se listan para pasar al
equipo de GOEID para realizar la ingesta de las mismas.
Por último, se realiza un check de calidad de datos, para validar las
dimensiones de completitud y exactitud
La experiencia demostró que se requiere una comunicación fluida con los
referentes técnicos y de indicadores, para establecer e identificar los sistemas,
tablas y datos representativos a ser medidos.
Etapa 3: Ingesta.
Una vez definidas las tablas a ingestar se procede a la etapa de "Ingesta",
donde se configuran los procesos de extracción de información según los días y
horarios definidos para cada caso de uso. Los datos procesados, validados por el
data owner y ajustados a los lineamientos de gobernanza de datos en términos
de privacidad, secreto fiscal, anonimización de campos sensibles, entre otros, se
ponen a disposición en el Data Lake.
Etapa 4: Modelado.
Después de los procesos de extracción, transformación y carga en el Data
Lake,
los
modeladores
del
equipo
pueden
construir
las
transformaciones
necesarias para calcular los indicadores mencionados. Estas transformaciones se
realizan en el Data Lake utilizando servicios como Glue y Athena.
4.1 Cálculo indicadores
En esta etapa el desafío a priori es desarrollar, elaborar y definir por medio
de consultas a las tablas los Query’s, y generar cada uno de los indicadores que
componen la fuente de alimentación del tablero ejecutivo de la DGMEV. Dicho
proceso requiere un análisis, entendimiento, modelos de los datos para elaborar
reglas o condiciones, que el proceso del servicio y su operación aplica en el día a
día de los indicadores.
96
IF-2023-46902722-GCABA-SECITD
Página 97 de 122

---

<!-- página 98 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
4.2 Validación de indicadores
Una
vez
definido
los
parámetros,
reglas
y lógica de los indicadores
calculados estos son comparados contra los valores reportados en los tableros
ejecutivos validando por monitoreo y el área. Muchas veces esta etapa demanda
un nuevo proceso, redefiniciones y reajuste a los criterios adoptados. También en
su definición surgen eventos y diferencias particulares de los servicios, que se
trabaja con las principales áreas involucradas, para identificar por qué tales deltas
en los meses de análisis.
Luego de finalizado ese proceso ya no es necesaria la carga de los
indicadores de forma manual.
Etapa 5: Disponibilización de Indicadores.
Una vez verificados los indicadores y sus valores en un periodo de un año de
información contra los tableros ejecutivos, se instrumenta la automatización de
los mismos para su ejecución y carga histórica en las tablas, como así también
implementar un cronología de ejecución mensual
y carga en los tableros
ejecutivos.
Los indicadores calculados automáticamente se disponen en una capa de
consumo que se conecta a un panel de control que permite realizar un
seguimiento de los mismos y enriquecer el sistema de monitoreo.
Roadmap: Tiempos del Proyecto.
El proyecto se planificó con un esquema de “olas”, esto es, se plantea una
serie de ejes temáticos, referentes a un set de indicadores a automatizar en
determinadas fuentes de datos de entre 4 y 8 fuentes.
Se planificó y se aspiró a completar el ciclo entero de automatización, que
comprende cinco etapas, en un período de entre 2 y 3 meses, abarcando así el
proceso
completo
de
automatización
en
un
marco
temporal
definido
y
concentrado:
●
En el caso de acceder a bases de datos crudas, sin
procesamiento previo de indicadores, la necesidad de realizar un
discovery completo prevé 98 días del ciclo end to end.
●
Si por el contrario se accede a datos modelados /
indicadores ya calculados / vistas de los datos, la necesidad de
realizar un discovery se reduce, y se prevé 56 días de ciclo end to end
97
IF-2023-46902722-GCABA-SECITD
Página 98 de 122

---

<!-- página 99 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Roadmap del ciclo end to end
La experiencia nos demostró que los tiempos de ciclo no siempre se dieron
como
se
planificaron,
para
las
etapas
de
Acuerdo
Político
y
Modelado,
fundamentalmente.
Los tiempos de las áreas para disponibilizar las bases de datos, la resistencia
a la apertura total de las mismas, y la gestión de las mismas en manos de
proveedores externos, dilataron los tiempos de acuerdo político, entendido como
la etapa de alineación entre las áreas hasta la entrega de credenciales para
acceder a los datos.
La necesidad de conocer en profundidad el negocio, para interpretar los
datos de las bases a fin de calcular los indicadores, de la misma manera que lo
realizan los equipos de las áreas owner, requirió numerosas reuniones con las
áreas, y contactos de ida y vuelta relevando funcionalmente las bases, solicitando
validación de querys y definición de criterios. Estos ida y vuelta redundaron en
dilataciones al momento de modelar los datos.
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
Romper con la lógica de silos. En ocasiones nos encontramos con falta de
coordinación en el entendimiento técnico-funcional: quien reporta el indicador y
conoce el negocio, no conoce la base de datos y quien conoce la base de datos, no
conoce el negocio por detrás. Esto hace que no se socialice la forma en calcular
los indicadores y unas pocas personas dentro del área generen el cálculo y
reporten los indicadores en los tableros ejecutivos, muchas veces de forma
manual.
98
IF-2023-46902722-GCABA-SECITD
Página 99 de 122

---

<!-- página 100 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Para atravesar este desafío, reunimos en una misma mesa a quienes
conocen las bases de datos con quienes conocen el negocio y quienes modelan
los indicadores para el proyecto.
Baja
gobernanza
de
los
datos.
Las
áreas
de gobierno no siempre
gobiernan sus datos. Cuentan con proveedores que administran y gestionan sus
bases
de
datos,
y
muchas
veces
encontramos
dificultades
para
acceder
directamente a las bases de datos. Es por esto que trabajamos en línea con las
áreas para ajustar esta situación y encontrar la solución óptima para que el
proveedor disponibilice los datos propios del área, sin interferir en la seguridad de
sus sistemas. Decidimos desarrollar APIs o vistas puntuales con los indicadores ya
modelados por parte del proveedor en conjunto con la referencia técnica y
funcional del área.
Llegar a los responsables de los productos y conocerlos. La construcción
de los indicadores no requiere únicamente el conocimiento técnico de los
lenguajes
que
nos
permiten
trabajar
con
datos,
sino
también
tener
un
entendimiento funcional de los procesos de negocio que se desarrollan por detrás
de los mismos. El desafío consiste en participar activamente y desde una etapa
temprana en el entendimiento del negocio, relevando los procesos que corren por
detrás de los servicios que brinda el área y
articulando con los sistemas y las
estructuras de datos. Entender el negocio nos permite comprender cómo
relacionar los datos para llegar al cálculo del indicador a automatizar. La
experiencia nos demostró que se requiere un flujo continuo de diálogo, re
pregunta y consenso, para establecer e identificar los sistemas, tablas y datos
representativos a ser medidos, como así las particularidades propias del negocio
detrás de cada indicador.
Aquello que no está sistematizado, no se puede automatizar. El proceso
que llevó comprender los procesos y entender las tablas y los datos nos permitió
identificar que existen un porcentaje de indicadores no se pueden automatizar.
Esto es en parte producto a que las áreas realizan tareas operativas, fuera de datos
sistematizados y luego son reportados a los tableros ejecutivos. Ello afecta a la
automatización, y requiere mapear dichas operaciones o actividades a los flujos
del proceso. Otro motivo de causa es el compromiso de que las operaciones en la
carga de los sistemas sean eficientes y sin duplicidad de eventos o registros (sean
cartas, tratas etc.)
Para estos procesos, nuestro principal desafío fue comprometer a las áreas
operativas con los objetivos establecidos. Lograr acceder a los datos de las áreas
en una primera instancia, no fue tarea fácil.
En la planificación inicial proyectamos contar con datos de conexión y
credenciales de acceso en un sprint. Sin embargo, la negociación con las distintas
áreas para el acceso a los mismos llevó más tiempo del estimado.
99
IF-2023-46902722-GCABA-SECITD
Página 100 de 122

---

<!-- página 101 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Al final del recorrido, esta experiencia nos permitió enriquecer la manera de
abordar y generar lazos de confianza con las distintas áreas.
¿Cuáles son los logros destacados en el trayecto del proyecto?
Al cierre de este informe el estatus se han automatizado 307 indicadores
correspondientes a 17 bases de datos:
Etapa
Cantidad de
Base de Datos
Cantidad de
Indicadores
Acuerdo Político + Kick Off
12
en validación
Pre-modelado
5
142
Ingesta
0
0
Modelado
7
281
Disponibilización
17
307
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
Se estima finalizar en diciembre de 2023 la automatización del acceso y
generación de los indicadores a partir de 17 fuentes de datos, quedando
pendiente para los primeros meses de 2024 otras 17 bases que al momento están
en proceso de premoldeado, ingesta, modelado o disponibilización.
100
IF-2023-46902722-GCABA-SECITD
Página 101 de 122

---

<!-- página 102 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
BA Data
El portal BA Data https://data.buenosaires.gob.ar/dataset/ surge como parte
integral de la iniciativa de “Gobierno abierto y transparente” con el propósito de
divulgar datos de la Ciudad de Buenos Aires, promoviendo su reutilización, la
participación activa de la ciudadanía y el estímulo a la innovación. Esta iniciativa
se fundamenta en la apertura al público y a la automatización de bases de datos
de relevancia general en diversas áreas de gobierno de la Ciudad de Buenos Aires.
Fecha de inicio
La Ciudad abrió sus datos por primera vez en 2012, siendo la primera ciudad
de latinoamérica en formar parte de Open Government Partnership, una Alianza
para el Gobierno Abierto como iniciativa multilateral que intenta asegurar
compromisos concretos de gobiernos nacionales y subnacionales para promover
el gobierno abierto, dar más poder a los ciudadanos, luchar contra la corrupción y
utilizar las nuevas tecnologías para fortalecer la gobernanza.
La Subsecretaría de Políticas Públicas Basadas en Evidencia incorpora en
Diciembre 2019 las misiones y funciones en relación a la política de apertura de
datos lo relacionado a la gestión de portal de BA Data, es un rol que comparte con
la Subsecretaría de Gobierno Abierto y Rendición de Cuentas de la Secretaría
General y de Relaciones Internacionales que cuenta entre sus misiones y
funciones la relación y articulación con el ecosistema.
Stakeholders involucrados
●
Ministerio de Gobierno, Subsecretaría de Asuntos Políticos, Dirección
General de Seguimiento de Organismos de Control y Acceso a la
Información (Transparencia Activa)
●
Secretaría General y de Relaciones Internacionales, Subsecretaría de
Gobierno Abierto y Rendición de Cuentas, Dirección General Calidad
Institucional y Gobierno Abierto
Además participan 33 áreas que abren sus datos, algunas de ellas son:
○
Ministerio de Salud
○
Secretaría de Transporte y Obras Públicas
○
Ministerio de Hacienda y Finanzas
○
Ministerio de Justicia y Seguridad
○
Ministerio de Gobierno
○
Agencia Gubernamental de Control (AGC)
101
IF-2023-46902722-GCABA-SECITD
Página 102 de 122

---

<!-- página 103 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
Motivó la intervención en este proyecto por parte de la Subsecretaría de
Políticas Públicas Basadas en Evidencia, la necesidad de mantener actualizados
los datasets, gestionando de manera transversal con todas las áreas de gobierno
para garantizar la exposición de datos abiertos a la ciudadanía. Esto involucra la
actualización de los 430 datasets existentes en la actualidad, los cuales tienen
diferentes periodicidad de actualización: algunos se actualizan en forma diaria y
otros se actualizan en forma semanal, mensual, trimestral, semestral, anual o
eventual. El 70% de los datasets tienen actualización eventual, es decir, cuando se
producen cambios significativos o se solicita información actualizada por parte de
los usuarios.
Durante el año 2022, se segmentaron los datasets en 3 bloques, para
concentrar mejor los esfuerzos no sólo del equipo de la Subsecretaría de Políticas
Públicas Basadas en Evidencia sino de las áreas responsables de la generación del
dato
en
origen.
En 2023 se reagrupan los bloques identificando los más
prioritarios para trabajar en su actualización y automatización.
Se pueden resumir en cuatro ejes los desafíos que implica la gestión del
portal:
●
Escasa de automatización de datasets desde la fuente.
●
Deficiente
estandarización
desde
la generación de datos,
incluyendo obstáculos que influyen en la calidad de datos.
●
Áreas
y
enlaces
de
datos
poco
comprometidos
con
la
generación de nuevos datasets, como así también en la actualización de los
existentes.
●
Se ha observado que la mayoría de los conjuntos de datos no
experimentan un uso significativo. Siguiendo el principio de Pareto, se
destaca que aproximadamente el 20% de los datasets explican el 80% del
consumo. Este análisis revela una oportunidad valiosa para ampliar la
disponibilidad de datasets que no solo representen un mayor atractivo, sino
que también respondan de manera más efectiva a las demandas y
necesidades de la comunidad.
102
IF-2023-46902722-GCABA-SECITD
Página 103 de 122

---

<!-- página 104 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
Se implementaron una serie de medidas que impactaron de modo positivo
en la infraestructura y disponibilidad de los datos de cara a los usuarios:
●
Migración de servidor: Se amplió la capacidad del servidor en el que
estaba alojada la aplicación y se la incluyó en el ecosistema de monitoreo
de aplicaciones de la Gerencia Operativa de Infraestructura de Datos. Esto
permitió mejorar los tiempos de respuesta al usuario así como tener un
control 24x7 de las incidencias presentadas.
●
Automatización: Se integró la operación del portal al Data Warehouse de
la Ciudad, lo cual permitió automatizar algunos de los procesos de
actualización de dataset impactando en una sustancial mejora de los
tiempos así como de la calidad de los datos.
●
Priorización: Se realizó la priorización de gestión de los datasets de BA
Data, en función a diversas variables como el grado de utilización de los
mismos por parte del Ecosistema de Datos Abiertos, la participación en el
Índice OKFN y los requerimientos de información recibidos por los
equipos de Transparencia Activa (Ley 104) y Gobierno Abierto.
●
Diálogo con el Ecosistema de Datos Abiertos: Se llevaron adelante
reuniones y mesas de trabajo, generando un canal de comunicación
permanente
con
aquellos
stakeholders
que
utilizan
los
datasets y
aquellos que pueden beneficiarse y/o generar valor a partir de la apertura
de nuevos datos.
●
Performance: En 2023 se trabajó en el relevamiento del Software y la
Infraestructura existente con el objetivo de identificar mejoras a realizar
en la performance de la aplicación que tenía problemas de timeout
recurrentes.
●
Mejora en el proceso de actualización de los datasets: Mediante trabajo
en conjunto con distintas áreas, se identificaron los referentes de los
datasets para avanzar en el proceso de actualización y automatización de
los mismos. Se trabajó en la redefinición de las frecuencias de acuerdo a
la prioridad asignada a los datasets.
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
Hasta antes de llegar a la Subsecretaría de Políticas Públicas Basadas en
Evidencia el proceso de actualización era completamente manual para casi la
totalidad de los datasets.
103
IF-2023-46902722-GCABA-SECITD
Página 104 de 122

---

<!-- página 105 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
La
actualización
manual de los datasets conlleva una alta carga de
coordinación con las áreas. Ocasionalmente se reportaban picos de timeout del
servidor por períodos prolongados. La carencia de monitoreo detallado dificulta la
identificación de la causa de los tiempos de respuesta dilatados, por lo cual se
trabajará con ASI (Agencia de Sistemas de Información dependiente de la misma
Secretaría) en la implementación de monitoreo de las variables relevantes que
permitan detectar y corregir la causa raíz.
Algunos de los obstáculos encontrados responden directa o indirectamente
a:
●
Rotación de referentes en las diversas áreas que administran el origen de
los datos, para realizar el seguimiento, actualización de los datasets,
resolución de consultas, dificultando la gestión de dichas tareas en el
tiempo esperado y/o la frecuencia definida.
●
Datos de origen con falta de normalización/estandarización que dificulta
el análisis de los usuarios que utilizan la plataforma, al no poder integrar
fácilmente la información de los distintos datasets disponibles en el
Portal, dado que no cuentan con un mismo formato.
¿Cuáles son los logros destacados en el trayecto del proyecto?
Durante la última gestión se han llevado a cabo diferentes acciones.
En mayo de 2021 se implementó la versión actual del portal basada en
CKAN. La solución está basada en tecnologías de código abierto, y el código de la
nueva versión de BA Data se publicó en el repositorio GIT público de Gobierno de
la Ciudad de Buenos Aires, con el fin de ponerlo disponible para uso de otras
ciudades y organismos. Más allá de eso, un aspecto que está en proceso de
resolución es que la tecnología en la que se basa el sitio no ha pasado por el
proceso de homologación de la Agencia de Sistemas de Información (ASI).
104
IF-2023-46902722-GCABA-SECITD
Página 105 de 122

---

<!-- página 106 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Página de BA Data de acceso libre a los ciudadanos.
Por otro lado, se continuó poniendo en valor la plataforma, se actualizaron
las frecuencias de acuerdo a la prioridad definida y se actualizaron los contactos
referentes
de
las
áreas
responsables
para
la
gestión,
actualización
y
automatización de Datasets. Esto permitió que la Ciudad vuelva a obtener el
primer puesto en el ranking de la Fundación Conocimiento Abierto de Ciudades
Argentinas de Datos Abiertos de 2022 y 2023.
Ranking de la Fundación Conocimiento Abierto de Ciudades Argentinas 2022 y
2023
En relación al mantenimiento de la plataforma, se logró la estabilización del
funcionamiento del Portal que tenía timeouts recurrentes de la web (promedio
de 80.000 visitas y 110.000 descargas mensuales en 2023). Asimismo, se realizó un
Assessment de Seguridad, lo cual generó una serie de recomendaciones que se
fueron aplicando a la aplicación y en las cuales se sigue trabajando para
implementar en una versión próxima.
105
IF-2023-46902722-GCABA-SECITD
Página 106 de 122

---

<!-- página 107 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Cantidad de vistas por periodo
En cuanto a la actualización de la información, el 60% de datasets
prioritarios
están
automatizados
y
el
95%
de
los
datasets
prioritarios
se
encuentran actualizados.
También se trabajó con el ecosistema público y privado para fortalecer
nuestra política de datos abiertos y generar una apertura de datos por propósito.
A
continuación
mencionamos
algunos
de
ellos:
Alphacast,
Fundación
Conocimiento Abierto, Open Government Partnership, 7 Puentes S.A., Afluenta,
Andreani
Logistica
Sa,
BBVA,
Banco
Itaú,
Beat,
Cámara
Argentina De La
Construcción, Correo Oficial de la Rep. Argentina S.A., DiDi, Dymaxion Labs,
Equifax, Eryx, FISERV, HIT Cowork, Mercadolibre, Nubimetrics, PedidosYa, Rappi,
Riva SAIICFA, Setierra, Banco Supervielle, UBA. Virtual Estate, Wenance, Moovit,
Ualabee, Transit y Google.
Mesas sectoriales de apertura de datos por propósito. Desde 2011, el
Gobierno de la Ciudad de Buenos Aires ha sido pionera en la implementación de
políticas de apertura de datos, participando activamente en foros regionales e
internacionales.
A
lo
largo
de
los
años,
ha
liderado
la
promoción
de
la
transparencia, el uso de datos en políticas públicas y el desarrollo del sector
privado mediante la apertura de datos.
La Subsecretaría de Políticas Públicas basadas en evidencia ha perseguido
el objetivo de desarrollar un rol de Consultoría, con el fin de brindar apoyo al
Gobierno de la Ciudad de Buenos Aires en la creación de una estrategia destinada
a fortalecer el desarrollo de ecosistemas público-privados para la reutilización de
datos. Esto implicó la identificación de sectores clave y actores pertinentes, así
como la validación de estos descubrimientos a través de mesas de diálogo
sectoriales.
Para llevar a cabo las mesas sectoriales de apertura de datos fue necesario
aplicar metodología, identificando a los sectores claves. La metodología abarcó
investigación
y
el desarrollo de enfoques para el mapeo continuo de los
ecosistemas de datos. Se determinaron tres sectores clave para desarrollar mesas:
106
IF-2023-46902722-GCABA-SECITD
Página 107 de 122

---

<!-- página 108 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Fintech e innovación financiera, Logística (con énfasis en la última milla) y
Proptech.
Se lograron como resultados la ejecución de tres mesas sectoriales que
contaron con la participación de más de 45 asistentes, integrando actores
significativos tanto de la industria como del sector público en cada uno de los
sectores
identificados.
Estas
sesiones
no
sólo
posibilitaron
la
validación
y
ampliación de los mapeos previos, sino que también facilitaron la identificación y
priorización de acciones para fomentar el intercambio de datos, alineando así los
objetivos sectoriales con las políticas de datos abiertos.
¿Cuáles son los hitos pendientes para consolidar el éxito del proyecto?
Una
necesidad
prioritaria
para
la
correcta
gestión
de
los
proyectos
abordados en la política de apertura de datos abiertos es definir un área que
unifique todas las competencias, misiones y funciones en relación la apertura de
datos, considerando los diferentes productos como la articulación interna y
externa con el ecosistema.
En el marco del Plan 2024 de la Subsecretaría, se prevé avanzar en múltiples
frentes. Esto incluye la actualización de la estrategia para la apertura de nuevos
conjuntos de datos por propósito, mediante la realización de reuniones con
usuarios y actores clave del ecosistema, con el objetivo de identificar necesidades
y recibir sugerencias. Se llevará a cabo un seguimiento de compromisos con las
áreas
responsables
de
actualizar
los
conjuntos
de
datos.
Además,
se
implementarán procesos de automatización para la actualización de los datasets
prioritarios en colaboración con las áreas pertinentes.
Simultáneamente,
se
prevé
la
puesta
en
marcha
de
procesos
de
estandarización y mejora de la calidad de los datos publicados, en colaboración
con las áreas responsables.
Por último, es importante evaluar herramientas que permitan generar
visualizaciones y nuevas funcionalidades basadas en los conjuntos de datos del
portal. Asimismo, para el fortalecimiento de la eficiencia y la efectividad, la
implementación de una herramienta de monitoreo del portal. Estas acciones se
alinean con el compromiso de la Subsecretaría de avanzar hacia un enfoque más
eficiente y centrado en las necesidades de los usuarios y del ecosistema en
general.
107
IF-2023-46902722-GCABA-SECITD
Página 108 de 122

---

<!-- página 109 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
COVID-19 en Datos
El Gobierno de la Ciudad de Buenos Aires implementó una estrategia de
tres pilares fundamentales frente al COVID-19: el fortalecimiento del sistema de
salud y los testeos, el plan de vacunación y la responsabilidad individual. En
palabras del Jefe de Gabinete de la Ciudad, Felipe Miguel “Una de las primeras
tareas que asumimos en esta pandemia fue la de fortalecer el sistema de salud
porque, aun sin saber qué iba a pasar, sabíamos que necesitábamos contar con
un sistema más sólido y más robusto que nunca, preparado para cualquier
escenario”
Desde que comenzó la pandemia se sumaron más de 2.000 camas y se
incorporaron más de 5.300 personas que cumplieron tareas en la atención
sanitaria como médicos, enfermeros, kinesiólogos, técnicos y administrativos.
Además se trabajó en conjunto con el sistema de salud privado, que pasó de tener
644 camas disponibles para COVID a 1.222. También, el Gobierno porteño contó
con una red de apoyo con hoteles para pacientes leves o casos sospechosos y que
sirvió también para los que vienen del exterior y den positivo.
Para la Ciudad de Buenos Aires, la estrategia de testeos fue una prioridad
desde el inicio de la pandemia. Se crearon 71 centros de testeo: 27 dispositivos
Detectar, 20 Unidades Febriles, centros específicos para docentes y centros de
testeo
exclusivos
para
contactos
estrechos,
personal
estratégico,
turistas y
estudiantes. Además, en 2021 comenzaron a funcionar 15 unidades de testeo
móvil para personas que están en contacto con gente de riesgo. Cada vecino que
necesitara testearse en la Ciudad podía hacerlo a no más de 20 cuadras de su
casa.
El Gobierno porteño siguió un plan por etapas desde que ingresó la
primera vacuna. Para el Gobierno porteño la vacunación es un derecho. Y también
es un derecho que todos los vecinos puedan acceder a la información detallada
del avance de la estrategia de respuesta frente al COVID-19.
La apertura de datos durante la pandemia de COVID-19 ha sido un aspecto
crítico en la gestión global de la crisis sanitaria. La transparencia y el acceso a
datos fiables jugaron un papel fundamental en varios frentes.
La disponibilidad de datos abiertos permitió a los gobiernos, investigadores
y equipos de salud tomar decisiones informadas y rápidas en respuesta a la
evolución de la pandemia. El análisis de estos datos facilitó la identificación de
brotes, la evaluación de la efectividad de las medidas de confinamiento y el
seguimiento de la propagación del virus.
108
IF-2023-46902722-GCABA-SECITD
Página 109 de 122

---

<!-- página 110 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
La publicación de datos sobre casos, muertes, y tasas de recuperación
ayudó a mantener informado al público, fomentando una mayor comprensión y
conciencia sobre la gravedad de la pandemia. Esto fue crucial para obtener la
confianza y la cooperación del público en la implementación de medidas de salud
pública.
Fecha de inicio
Marzo de 2020.
Stakeholders involucrados
COVID-19 en Datos requirió del trabajo colaborativo de 15 áreas de gestión
del gobierno de la Ciudad de Buenos Aires.
Se trató de un proceso escalonado, iniciado en la Jefatura de Gobierno con
el diseño de una mesa interministerial exclusiva para abordar la situación de crisis
sanitaria desatada por el COVID-19, en el que los actores principales acordaron la
necesidad de mantener a los vecinos informados mediante un reporte de
actualización diario.
Una vez definidas las áreas y contenidos de información que debería tener
el reporte, se elaboraron tableros de gestión interna que sirvieron de soporte para
mapear los datos existentes por área de gobierno y el formato y calidad que
presentaban.
El paso siguiente consistió en el diseño de una propuesta para cada uno de
los actores, explicando el circuito y proceso de intercambio de datos con la
Subsecretaría
de
Políticas
Públicas
que
centralizó
el
proceso,
y
que
fue
responsable del desarrollo del proceso de ETL y del armado de la página web con
los componentes embebidos.
Detalle de actores y responsabilidades en el armado del portal COVID-19 en
Datos:
●Ideación y contenidos: Subsecretaría de Políticas Públicas basadas en
Evidencia, Secretaría de Innovación y Transformación Digital, Subsecretaría de
Gobierno Abierto y Rendición de Cuentas.
●Desarrollo de la web: Subsecretaría de Políticas Públicas basadas en
Evidencia y Subsecretaría de Experiencia Digital, ambas dependientes de la
Secretaría de Innovación y Transformación Digital. Subsecretaría de Gobierno
109
IF-2023-46902722-GCABA-SECITD
Página 110 de 122

---

<!-- página 111 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Abierto y Rendición de Cuentas, dependiente de Secretaría General y Relaciones
Internacionales.
●Visualizaciones, componentes y ETL: Subsecretaría de Políticas Públicas
basadas en Evidencia, Secretaría de Innovación y Transformación Digital.
●Provisión de datos: Ministerios de Salud, Hacienda, Espacio Público e
Higiene Urbana, Desarrollo Humano y Hábitat, Cultura, Educación, Desarrollo
Económico, Justicia y Seguridad, Gobierno y Secretarías de Transporte y Obra
pública, Medios, Comunicación, General y Atención Ciudadana.
¿Cuáles fueron los desafíos que motivaron la implementación de este
proyecto?
La página web buenosaires.gob.ar/coronavirus/datos fue creada con el
propósito de informar sobre la evolución del COVID-19 en la Ciudad y las acciones
del Gobierno para abordar la pandemia. Esta plataforma facilita el acceso a datos
en cinco áreas clave: situación epidemiológica, gestión sanitaria y territorial,
movilidad y espacio público, tests y vacunación.
El objetivo principal de esta iniciativa fue optimizar la toma de decisiones
en la Administración Pública, apoyándose en un manejo eficaz y estructurado de
la información. Esto no solo mejora la coordinación interna entre diferentes
organismos, sino que también refuerza la comunicación interna.
Un objetivo fundamental de la web fue fomentar la transparencia y la
rendición de cuentas, ofreciendo a los ciudadanos y a las organizaciones de la
sociedad civil herramientas para comprender mejor, supervisar y evaluar la
gestión pública.
Además,
la
plataforma
promueve
la
creación
de nuevos servicios y
aplicaciones. La disponibilidad de datos abiertos y reutilizables abre posibilidades
para
desarrollar
proyectos
innovadores
y
servicios
públicos
mejorados,
contribuyendo así a una gestión más eficiente.
¿Qué estrategia y tácticas se implementaron para desarrollar el proyecto?
COVID-19 en Datos se encontró disponible durante la pandemia en el sitio
https://www.buenosaires.gob.ar/coronavirus/datos.
Se
trató
de
más
de
100
indicadores que se actualizaron diariamente de modo automático y reflejaron el
estado de situación de la pandemia en la Ciudad.
El
sitio
incluía
información
sobre
los
casos
reportados
del
día,
los
acumulados, los confirmados según fecha de hisopado, confirmados según grupo
etario, y tasa de letalidad. Asimismo, indicaba la ocupación de camas en el
110
IF-2023-46902722-GCABA-SECITD
Página 111 de 122

---

<!-- página 112 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
sistema de salud público, los testeos y la búsqueda activa de casos sospechosos
por barrio, en el marco del operativo DetectAR, una iniciativa destinada a rastrear
e identificar de manera temprana a los ‘contactos estrechos’ de las personas
recientemente confirmadas con COVID-19 que se lleva a cabo junto con el
Gobierno Nacional.
En materia de gestión sanitaria y territorial, la plataforma también reunió
información referida al fortalecimiento del sistema de salud e indicadores de
acciones de prevención, detección, y cuidado de la ciudadanía. Cabe mencionar
que, durante el año 2020 y 2021, el Gobierno de la Ciudad incrementó su
capacidad de atención al vecino mediante el despliegue de una serie de canales
de atención telefónica -virtual y presencial- que brindó orientación sobre la
identificación de posibles síntomas y los protocolos a seguir en cada caso
particular. En este marco, en el portal podía accederse a visualizaciones e
indicadores sobre las consultas recibidas mediante el chatbot BOTI, los llamados a
las líneas telefónicas 147 de atención ciudadana, y la línea 107 de emergencia del
SAME -el sistema de emergencias médicas de la Ciudad-, como a los datos de
atención de las 21 Unidades Febriles de Urgencia (UFUs) ubicadas en espacios
anexos a los hospitales y diseñadas específicamente para que los pacientes
sospechosos de Covid permanezcan separados de quienes necesitaban atención
por las guardias hospitalarias.
Asimismo,
este
apartado
también
reunió
información
referida
a
los
aislamientos extrahospitalarios en los más de 50 hoteles que desplegó la Ciudad
para
atención
a
repatriados,
casos
positivos
leves
asintomáticos
y
casos
sospechosos que no pueden aislarse en sus hogares, como así también sobre la
logística de traslados de pacientes entre establecimientos y los recursos humanos
involucrados en el proceso.
En materia de movilidad y espacio público, el sitio ofreció información
referida a las medidas que se implementaron para disminuir la circulación en el
transporte y promover el distanciamiento social. Por un lado, el Gobierno Nacional
y el Gobierno de la Ciudad restringieron el uso del transporte público de trenes,
subtes y colectivos destinados exclusivamente a personal esencial con permiso de
circulación. Para garantizar, se realizaron controles dinámicos y rotativos a
usuarios/as de transporte público en los distintos centros de trasbordo, corredores
de Metrobús, ingresos al subte y sobre las líneas de colectivo que circulan dentro
de la Ciudad.
Por el otro, se mejoraron las frecuencias de desinfección y limpieza, se
tomaron diversas medidas de protocolización (uso obligatorio de tapabocas,
demarcación de distancia social en paradas, obligación de que los/as pasajeros/as
viajen sentados, entre otros) y se desplegó un conjunto de medidas para mejorar
los controles y prevenir contagios (permisos de circulación vía web, control de
permisos vía app, cámaras en patrulleros y cámaras febriles en centros de
trasbordo).
En
la
plataforma
se
encontraban
disponibles
las
métricas
e
111
IF-2023-46902722-GCABA-SECITD
Página 112 de 122

---

<!-- página 113 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
indicadores sobre la cantidad diaria de viajes en transporte público -colectivos,
trenes y subtes- y privado en la Ciudad, y su evolución en relación a los valores
previos al aislamiento.
En
cuanto
al
espacio
público,
el
Gobierno
de
la
Ciudad
realizó
intervenciones en 100.000 m2 de avenidas, calles y veredas para garantizar el
distanciamiento social, evitar aglomeraciones e incentivar el comercio de escala
barrial. Entre otras acciones, se transformaron unas 100 calles de la Ciudad que se
caracterizaban por concentrar grandes cantidades de locales comerciales a través
de distintos tipos de intervenciones: en ejes comerciales se tomaron carriles de la
calzada para ampliar la superficie destinada a los peatones; se formalizaron
centros comerciales barriales en la vía pública mediante el cierre parcial o total de
calles linderas a los centros comerciales; sobre veredas se intervinieron 22 ejes de
alto tránsito peatonal con demarcación; y las Ferias de Abastecimiento Barrial
fueron
protocolizadas
para
que
volvieran
a
su normal funcionamiento. La
geolocalización
y
mapeo
de todas estas intervenciones podía verse en la
plataforma.
Marco normativo
COVID-19 en Datos abre información conforme a la ley de Acceso a la
Información Pública (Ley No 104), ley de Protección de datos personales (Ley No
25326), y siguiendo los mismos lineamientos y estructura de datos que utiliza el
Gobierno Nacional argentino, con pleno respeto de los derechos humanos, su
confidencialidad y anonimización.
Al igual que sucede con todos los datos abiertos de la Ciudad, los 27
datasets siguen las recomendaciones y buenas prácticas de la organización
internacional
Alianza
para
el
Gobierno
Abierto
(OGP
-Open
Government
Partnership-, por sus siglas en inglés) y los principios y buenas prácticas de la
Carta Internacional de Datos Abiertos a la que suscriben más de 100 países y
organizaciones internacionales.
Como portal de datos abiertos, Covid-19 en datos también sigue las
premisas propuestas por la Alianza Global de Ciudades Inteligentes del G20, la
cual fue creada en junio de 2019, y reúne a gobiernos municipales, regionales y
nacionales, a los socios del sector privado y a referentes de más de 35 países en
torno a un conjunto compartido de principios para el uso responsable y ético de
las tecnologías de las ciudades inteligentes.
Estos
principios
deben
considerarse
como
los
primeros
pasos
fundamentales que apoyan las metas específicas de una política de datos
abiertos, así como aquellos que soportan los alcances más amplios de una ciudad
y su ecosistema que multiplican los beneficios de los datos abiertos y pueden ser
sintetizadas en:
112
IF-2023-46902722-GCABA-SECITD
Página 113 de 122

---

<!-- página 114 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
1. Las ciudades deben abrir los datos por defecto, y hacerlo a través de su
propio Portal de Datos Abiertos. Para las ciudades más pequeñas, las plataformas
regionales
podrían
proporcionar
una
ruta
rentable
con
el
fin de abrir la
publicación de datos.
2. Estos datos deben ser oportunos, completos y los procesos que los
generan deben estar claramente documentados: los datos abiertos son relevantes
si y sólo si añaden valor y son legibles para el usuario de la información.
3. Los datos abiertos deben publicarse en formato legible.
4. Las barreras al uso deben reducirse al mínimo y la facilidad de uso debe
maximizarse. Los conjuntos de datos del Portal de Datos Abiertos deben estar
disponibles de forma gratuita, sin requisitos de registro y licencia, y estar libres de
restricciones de su uso (es decir, bajo licencia de datos abiertos).
5. Al planificar o modificar sistemas o proyectos de recopilación de datos, o
al implementar nuevas tecnologías digitales (por ejemplo, IoT), los departamentos
o secretarías de la ciudad, en colaboración con la Oficina de Datos de la ciudad,
deben
considerar qué conjuntos de datos y metadatos asociados pueden
publicarse como datos abiertos.
6.
Esto
aplica
igualmente
a
los
sistemas,
proyectos
y
tecnologías
proporcionados
por
terceros
que
actúan
en
nombre
de
las
autoridades
municipales o son encargados por ellas.
7. Todas las partes que proporcionen al público cualquiera de los datos
abiertos de la ciudad, o que proporcionen una aplicación que utilice los datos
abiertos de la ciudad, deben identificar explícitamente la fuente y la versión de los
datos, y una descripción de cualquier modificación realizada.
Desarrollo de la Plataforma
La arquitectura de funcionamiento de COVID-19 en Datos se basa en la
transferencia de datos desde una fuente de extracción a los componentes de
visualización del sitio web. Para eso, se desarrollaron siete tipos de componentes
con tecnología de código abierto para la visualización de información:
●
Tarjetas con evolución (con y sin acumulado)
●
Tarjetas con dato único (con y sin porcentaje)
●
Gráfico combinado (barras + líneas)
●
Gráfico de barras
●
Gráfico de líneas (con 1 o más series)
●
Mapas embebidos
●
Gráfico de Dona (proporción)
113
IF-2023-46902722-GCABA-SECITD
Página 114 de 122

---

<!-- página 115 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Evolutivo de altas diarias, acumuladas y fallecidos
Gráfico combinado de consultas por fecha (barras + líneas)
Gráfico combinado de consultas por fecha (barras + líneas)
114
IF-2023-46902722-GCABA-SECITD
Página 115 de 122

---

<!-- página 116 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Cada dataset contó con información adicional sobre el área que lo genera, la
frecuencia de actualización, el tipo de dato y una descripción para facilitar su
acceso y descubrimiento. Asimismo, todos los datos se encontraban accesibles a
través de una API o “interfaz de programación de aplicaciones” lo que facilitó su
integración y reutilización.
Mapas disponibilizados
El contenido en su conjunto podía ser consumido y compartido desde el
teléfono celular en un formato simple y rápido a través del chatbot de la Ciudad al
cual se encuentra integrado.
En cuanto a los recursos tecnológicos necesarios para su desarrollo, la
actualización automática de los 27 datasets y su carga en el portal se efectuaba
mediante proceso de ETL (Extract, Transform, Load por sus siglas en inglés) de
manera diaria, La plataforma fue elaborada con tecnologías de código abierto
(Django y Chart.js)
Contenidos
En cuanto a su estructura, Covid-19 en datos se organizó en tres ejes
principales:
115
IF-2023-46902722-GCABA-SECITD
Página 116 de 122

---

<!-- página 117 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Ejes disponibilizados
Eje Situación epidemiológica
Bajo esta categoría se agrupan datasets que contienen información de
actualización diaria sobre la evolución del COVID-19 en la Ciudad e incluyen
visualizaciones de:
●Casos
Casos diarios: cantidad de positivos, altas y defunciones registradas por
COVID-19 según lo reportado por el Sistema Integrado de Información Sanitaria
Argentino. Asimismo, presenta el desglose de casos diarios de residentes y no
residentes.
Casos acumulados: cantidad acumulada de positivos, altas y defunciones
registrados por Covid-19 desde el 03 de marzo del 2020, según lo reportado por el
Sistema Integrado de Información Sanitaria Argentino.
Confirmados según fecha de hisopado: casos confirmados de COVID-19 por
día, según fecha de realización del hisopado.
Promedio de edad de fallecidos: promedio de edad de fallecidos por
COVID-19.
Letalidad: proporción de fallecidos por COVID-19 sobre el total de casos
confirmados.
Fallecidos: visible en dos indicadores, promedio de edad de fallecidos por
COVID-19, y proporción de los fallecidos cuya edad es mayor a 60 años.
Casos positivos por rango etario y tasa de letalidad: cantidad de positivos
COVID-19 por rangos de edad y el porcentaje de letalidad asociada.
116
IF-2023-46902722-GCABA-SECITD
Página 117 de 122

---

<!-- página 118 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Casos
positivos
y
fallecidos según sexo: proporción de fallecidos por
COVID-19 según sean hombres o mujeres.
Cantidad y porcentaje de camas ocupadas en el sistema de salud público:
cantidad
y
porcentaje
de
camas
ocupadas
por
pacientes
con
COVID-19
desagregadas por pacientes graves, moderados y leves.
●Testeos
Indica el resultado de una estrategia compuesta por distintas iniciativas
llevadas a cabo por el Gobierno de la Ciudad de Buenos Aires en materia de test
rápidos y técnicas de PCR (hisopado): el trabajo en las 21 Unidades Febriles (UFUs),
el Operativo detectAR y el Plan detectAR móvil. Estos se resumen en los
siguientes indicadores:
Hisopados diarios: cantidad de hisopados realizados por COVID-19 para
residentes en la Ciudad Autónoma de Buenos Aires.
Positivos diarios: proporción de hisopados con resultado COVID-19 positivo
para residentes de la Ciudad Autónoma de Buenos Aires.
Hisopados acumulados: cantidad de hisopados realizados por COVID-19
para residentes en la Ciudad Autónoma de Buenos Aires.
Hisopados - Tasa por habitante: cantidad total de hisopados realizados cada
100 mil habitantes.
También se incluyen indicadores sobre testeos en personal en centros de
salud de la Ciudad y el trabajo de detección de casos en geriátricos.
Testeos a personal de salud: cantidad de tests rápidos y PCRs (hisopados)
realizados al personal de centros de salud.
Geriátricos: cantidad de test rápidos y PCRs (hisopados) realizados en
geriátricos; cantidad total de test rápidos realizados en geriátricos con resultado
positivo.
●Búsqueda activa de casos sospechosos
En este apartado, pueden visualizarse los datos que se obtienen en cada
una de las 15 comunas de la ciudad. Los indicadores se desglosan en:
Casos por comuna: muestra la cantidad de casos COVID-19 positivos
acumulados distribuidos geográficamente según la comuna.
Cantidad de hisopados por comuna: cantidad de testeos PCR realizados
mediante las iniciativas de Unidades Febriles, Operativo detectAR y Plan detectAR
móvil en el barrio.
117
IF-2023-46902722-GCABA-SECITD
Página 118 de 122

---

<!-- página 119 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Casos reportados del día en barrios populares: incluye casos diarios de
positivos, altas institucionales y fallecidos por Covid-19 en barrios populares, según
el Sistema Integrado de Información Sanitaria Argentino.
Eje Gestión sanitaria y territorial
Bajo esta categoría se agrupan datasets que contienen información referida
a acciones de fortalecimiento del sistema de salud, detección, prevención y
cuidado de la ciudadanía.
Sub-eje Gestión sanitaria
●Indicadores de detección
Detección de casos a través de BOTI: agrupa la cantidad de personas que
hicieron
el
triage
médico
a
través
del
chatbot
de
la
Ciudad, BOTI. Esta
herramienta se usa para canalizar las dudas de los vecinos sobre el COVID-19
todos los días, las 24 hs. como así también para difundir información oficial,
programas de gobierno y medidas de cuidado y prevención. El chatbot funciona a
partir de una serie de preguntas que ayudan a identificar posibles síntomas,
informa sobre las medidas a tomar en cada caso y deriva a la UFU más cercana.
BOTI puede contestar hasta 50 mensajes por segundo siendo la Ciudad de
Buenos
Aires
la
primera
ciudad
del
mundo
en
utilizar
este
canal
para
comunicarse con los vecinos en materia de Covid-19.
Detección de casos a través de línea 147 y línea 107: cantidad de llamados a
la línea de atención ciudadana y a la línea de emergencia, respectivamente.
Personas atendidas en las Unidades Febriles de Urgencia (UFUs): cantidad
de personas por día que reciben atención en las unidades febriles de urgencia.
●Indicadores de aislamiento
Este apartado refiere a indicadores sobre los aislamientos extrahospitalarios
en los más de 50 hoteles que desplegó la Ciudad para atención a repatriados,
como así también para casos positivos leves asintomáticos y casos sospechosos
que no pueden aislarse en sus hogares.
Aislamiento de repatriados: refiere a índices sobre la cantidad de personas
aisladas por país de origen (en el que se encontraba previo a la llegada a
Argentina).
Aislados en hoteles: cantidad total de personas aisladas en hoteles -
ingresos, hospedados y egresos semanales.
●Recursos Humanos
118
IF-2023-46902722-GCABA-SECITD
Página 119 de 122

---

<!-- página 120 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
Cantidades totales de personal designado: refiere a métricas sobre la
cantidad de personal de salud -enfermeros, médicos, kinesiólogos, bioquímicos,
técnicos de la salud-, personal de atención ciudadana, y relevadores DetectAR
abocados a cada una de las distintas áreas de trabajo.
●Logística
El gobierno de la ciudad dispuso de una logística para realizar traslados de
pacientes positivos de COVID-19 en la que se aplican estrictos protocolos y
medidas de higiene para el traslado seguro de pacientes con Coronavirus. En este
apartado puede verse el número de operativos de traslados realizados entre los
Centros de Salud (CeSACs) a UFUs, y de UFUs a Hoteles.
Sub-eje Gestión territorial:
El apartado sobre gestión territorial contiene datos sobre las acciones
realizadas por el gobierno de la Ciudad en tres ejes clave: los barrios populares,
con personas en situación de calle y con adultos mayores. Incluye información
sobre medidas de prevención implementadas como la campaña de vacunación a
personas de riesgo y el programa Mayores Cuidados, a través del cual se brinda
acompañamiento con voluntarios a los mayores de 70 años.
Eje Movilidad y espacio público
Bajo esta categoría se agrupan datasets referidos a los viajes en transporte
público y privado en la Ciudad, de actualización diaria. En lo que refiere a
transporte público, se utilizan los datos aportados por la tarjeta SUBE para
mostrar los movimientos en trenes, subtes y colectivos, mientras que en el caso
de los vehículos particulares, la información es aportada por los sensores internos
de la Ciudad colocados en avenidas, las pasadas que registran los peajes de AUSA
y el Anillo Digital. Esta sección contiene indicadores sobre:
Porcentaje
de
viajes
realizados
en
subte,
colectivo
y
tren:
variación
porcentual de viajes en cada uno de los transportes públicos en comparación a la
semana pre cuarentena.
Cantidad de viajes por fecha: cantidad de viajes diarios realizados en subte,
colectivo y tren.
Porcentaje
de
vehículos:
variación
porcentual
de
ingresos,
egresos y
circulación interna de vehículos particulares en comparación a la semana pre
cuarentena.
Cantidad de viajes para ingreso y egreso de la Ciudad y circulación interna:
cantidad de ingresos, egresos y circulación interna de vehículos en la ciudad.
En
el
apartado
Espacio
Público
podía
verse
mapeado
las
distintas
intervenciones realizadas en la Ciudad a partir de readecuaciones con calles
119
IF-2023-46902722-GCABA-SECITD
Página 120 de 122

---

<!-- página 121 -->

Informe cierre de gestión | 2020 - 2023
Dirección General de Arquitectura de Datos
Subsecretaría de Políticas Públicas Basadas en Evidencia
Secretaría de Innovación y Transformación Dig
peatonalizadas,
veredas
ampliadas
y
zonas
delimitadas
para
garantizar
el
distanciamiento social, mediante el favorecimiento de la movilidad peatonal y el
uso de bicicletas.
Por último, a medida que el Gobierno de la Ciudad de Buenos Aires
desplegó el plan de vacunación, que contó con distintas etapas definidas en base
a criterios epidemiológicos específicos, como la exposición al virus o el riesgo a
enfermedad grave a causa del mismo, el portal reflejó el avance de dicho plan.
¿Qué obstáculos se presentaron durante la ejecución del proyecto?
Al momento de implementar la apertura de datos, el proyecto encontró diversos
obstáculos, como:
●
La
falta
de
criterios
unificados
para
la
generación,
gestión
y
almacenamiento de los datos.
●
Generación
de
los
datos
en
distintos
formatos
que
dificultaron
la
integración con otros datos para análisis más complejos.
●
Almacenamientos de diversas formas que dificultaban la automatización
de los procesos de actualización de los datasets (Ejemplo: Excel),
●
Datos de baja calidad (por ej. incompletos).
¿Cuáles son los logros destacados en el trayecto del proyecto?
Covid 19 en datos implicó el trabajo coordinado de 15 áreas de gobierno, lo
que representó un desafío de coordinación y de articulación en la integración de
información de cada área.
Se trató de un proceso evolutivo, que requirió de paciencia y del aprendizaje
de las distintas áreas para la normalización de las distintas bases de datos y la
flexibilidad en adaptarse a nuevos procesos de trabajo.
Como estrategia de abordaje, fue de gran ayuda involucrar a distintos
niveles de la estructura de gobierno en la importancia de la apertura de los datos,
más allá de las distintas complicaciones que surgieron según los actor.es o
proveedores intermediarios de información. Al tiempo que resultó fundamental
en el desarrollo del portal, dedicarle tiempo a la planificación y creación de cada
uno de los componentes visuales, asociados cada uno de ellos a las diferentes
fuentes de datos.
120
IF-2023-46902722-GCABA-SECITD
Página 121 de 122

---

<!-- página 122 -->

IF-2023-46902722-GCABA-SECITD
Página 122 de 122

---

<!-- página 123 -->

G O B I E R N O DE LA C I U D A D DE B U E N O S A I R E S
"1983-2023. 40 Años de Democracia"
 
Hoja Adicional de Firmas
Informe gráfico
 
Número: 
Buenos Aires, 
 
Referencia: S/ Informe Final de Cierre de Gestion - Juan Bochicchio - EX-2023-46892399- -GCABA-SECITD
 
El documento fue importado por el sistema GEDO con un total de 122 pagina/s.
 
Jueves 21 de Diciembre de 2023
IF-2023-46902722-GCABA-SECITD
Digitally signed by Comunicaciones Oficiales 
Date: 2023.12.21 17:19:38 -03:00 
 
Diego Fernandez
Secretario
SECRETARIA INNOVACION Y TRANSFORMACION DIGITAL
MINISTERIO JEFATURA DE GABINETE
Digitally signed by Comunicaciones Oficiales 
Date: 2023.12.21 17:19:40 -03:00