<!-- página 1 -->

-1- 
Integración didáctica de celda de manufactura con gestión 
industrial aplicando la norma ISA 95.  
Acosta, Esteban, Modai, Enrique*, Malco, Jorge, Bressan, Horacio, Rages, 
Fernando, Ogasawara, Guillermo, Tcatch, Alexis
Instituto de Industria, Universidad Nacional de General Sarmiento,
Juan M. Gutiérrez 1150 (B1613GSX) Los Polvorines. Provincia de Buenos Aires, Argentina.
{ eacosta; emodai, jmalco, frages, atcatch }@ungs.edu.ar , hbressan@icontrol.com.ar,
ogasawaraguillermo@gmail.com
RESUMEN
En la actualidad la integración de la información de todos los niveles de la organización pasó a ser un 
objetivo estratégico, ya que permite monitorear la correcta ejecución del proceso productivo y mejorar 
la toma de decisiones. Para dicha integración es necesario unificar criterios de comunicación, 
nomenclaturas y lenguajes que permitan vincular los datos adquiridos en los niveles propios del piso 
de planta hasta aquellos relacionados con la gestión empresarial. La normativa  ISA 95 
(ANSI/ISO/IEC 62264) hace posible  crear  un  modelo de  interfaz con la planta que cubre esta 
necesidad [2]. En el presente trabajo se realiza una revisión bibliográfica de los avances actuales de 
la normativa ISA 95, con el objetivo realizar un modelo funcional para el uso de la enseñanza de las 
asignaturas Sistemas e Informática Industrial e Informática Industrial para las carrera de Ingeniería 
Industrial e Ingeniería Electromecánica del Instituto de industria de  la Universidad Nacional de 
General Sarmiento. Para ello se ha construido una  planta  piloto  automatizada de  control  de  nivel 
de tanques, caudal,  temperatura  y  presión  de  agua. Sobre esta planta se  desarrollará  la  
aplicación  del  modelo  trabajando sobre  las  distintas  interfaces de automatización e intermedias 
necesarias  para  disponer de la  información  y ejecutar los procesos a los  distintos  niveles.
El resultado final será lograr que una simple herramienta didáctica del nivel de control de piso de 
planta pase a formar parte de la ejecución de sistemas industriales de gestión de nivel superior, para 
demostrar así la integración de los distintos niveles de acuerdo con el modelo normalizado.
Palabras Claves: ISA 95, piso de planta, celda de manufactura, informática industrial
ABSTRACT 
Today, information integration at all levels of the organization became a strategic goal because it 
allows monitoring the proper execution of the production process and improve decision-making.
For such integration it is necessary to unify communication criteria, nomenclatures and languages to 
allow linking the data acquired at the shop floor levels to those related to business management. ISA 
95 (ANSI / ISO / IEC 62264) standards, makes possible to create a plant interface model that meets 
this need. In this paper a literature review of the ISA 95 standards current developments is performed, 
in order to make a functional model to be used on Systems and Industrial Computing, and Industrial 
Computing, both courses from Industrial and Electromechanical Engineering Degrees in the Industry 
Institute of the National University of General Sarmiento. For this we have built an automated pilot 
plant that controls tank levels, flow, temperature and water pressure. Over this plant we will developed 
an application by working on the different automation and intermediate necessary interfaces to 
dispose the information and execute processes at various levels. The ultimate result will be to achieve 
that a simple teaching shop floor level control tool turns to become part of the execution of higher 
level industrial management systems, in order to demonstrate the different level integration, according 
to the standard model.
Key words: ISA 95, shop floor, manufacturing cell, industrial computing

---

<!-- página 2 -->

-2- 
1 INTRODUCCIÓN
La norma ISA-95 fue desarrollada en la década de 1990, y ve la luz en su primera versión borrador 
como ISA-dS9500..01, Enterprise-Control System Integration, Part 1: Models and Terminology. 
Desde ese entonces se han logrado versiones definitivas y varias partes abordando distintos temas 
específicos:
- 
ANSI/ISA95.01 “Integración entre los Sistemas de la Empresa y de Control - Parte 1: Modelos y 
Terminología” (También estándar internacional IEC/ISO 62264-1) [12]
- 
ANSI/ISA95.02  “Integración entre los Sistemas de la Empresa y de Control - Parte 2: 
Estructuras de datos y atributos” (También estándar internacional IEC/ISO 62264-2) [13]
- 
ANSI/ISA 95.03 “Parte 3: Modelos de actividad de operaciones de fabricación” (También 
estándar internacional IEC/ISO 62264-3) [14]
- 
ANSI/ISA 95.04 “Parte 4: Estructuras de datos de operaciones de fabricación” (En desarrollo)
- 
ANSI/ISA 95.05 “Parte 5: Transacciones de la Gestión a la Fabricación” (También borrador de 
estándar internacional IEC/ISO 62264-5)
- 
ANSI/ISA 95.06 “Parte 6: Transacciones de Operaciones de Fabricación” (Aún no comenzado)
En su introducción la parte 1 de la normativa dice que los modelos y terminología definidos en la 
misma [3]
- 
Enfatizan las buenas prácticas de integración de los sistemas de control con los sistemas de la 
empresa durante el ciclo de vida completo de los mismos
- 
Pueden ser usados para mejorar capacidades existentes de integración entre dichos sistemas
- 
Pueden ser aplicados independientemente del grado de automatización alcanzado
En sentido más específico, explica que los beneficios producidos por la integración de estos sistemas 
permitirán
- 
reducir los tiempos de los usuarios en alcanzar niveles de producción plena para nuevos 
productos [5]
- 
A los proveedores de sistemas desarrollar herramientas adecuadas para integrar los sistemas 
de control a los sistemas de gestión empresaria
- 
A los usuarios identificar mejor sus necesidades [15]
- 
Reducir los costos de automatización de los procesos de fábrica
- 
Optimizar las cadenas de suministro
- 
Reducir los esfuerzos de ingeniería del ciclo de vida [11]
Sin embargo, aclara que no es intención del  estándar
- 
Sugerir que hay un solo modo de integrar los sistemas de control con los de gestión
- 
Forzar a los usuarios a abandonar o cambiar sus métodos actuales de integración de sistemas
- 
Restringir los desarrollos de integración de sistemas de control con gestión. [12]
A partir de la primera publicación de este estándar, las principales empresas proveedoras de 
tecnología de control del mercado internacional comenzaron a virar su oferta para incluir este modelo 
en sus líneas de productos superiores, ya que por un lado, el mismo ofrecía un ordenamiento 
bastante claro respecto de las áreas y los procesos involucrados, y por el otro aparecía como un 
principio de unificación de criterios para el tratamiento de las interfaces.
El Propósito del estándar ISA 95 es el de mejorar la integración de los procesos de fabricación a 
través de las comunicaciones definiendo una terminología común y un consistente conjunto de 
modelos [6]. Además promueve buenas prácticas para la integración de los sistemas de control con 
los otros sistemas de la empresa y destaca la construcción de un modelo común para comparar y 
especificar sistemas de administración de operaciones de fabricación. [4, 9]
Una presentación general de las posibles relaciones entre los sistemas de planta sería la que se 
presenta a continuación

---

<!-- página 3 -->

-3- 
Figura 1: Modelo de relación de módulos
Cada una de las nubes representa una zona amplia de información, representada por sus acrónimos 
característicos [21], a saber:
CRM: Administración de las Relaciones con los clientes
HR: Recursos Humanos
ERP: Planificación de Recursos de la Compañía (en este caso, divididos en Financieros y Logísticos)
SCM: Administración de la Cadena de Suministro
PLM: Administración del Ciclo de Vida de los Productos
MES: Sistemas de Ejecución de Manufactura
LIMS: Sistemas de Administración de la Información de Laboratorio (Control de Calidad)
CMM: Modelo de Capacidad y Madurez
WES: Sistema de Almacenes
OCS: Sistema de Control Abierto
DCS: Sistema de Control Distribuido
PLC: Controlador Lógico Programable
SCADA: Control Supervisor y Adquisición de Datos
La norma se extiende con mucho más detalle en diversas nomenclaturas y define 4 niveles 
jerárquicos básicos en los cuales define funciones generales y particulares:
Figura 2: Representación de niveles

---

<!-- página 4 -->

-4- 
Los niveles 0,  1 y 2 definen las funciones de supervisión, de operación y de control de procesos al 
nivel de celda o línea. Hay unos cuantos modelos diferentes para las funciones de estos niveles, 
basadas en la estrategia real de producción usada. [12]
El  nivel 4 comprende las siguientes actividades
Recolectar y mantener  datos de materias primas y repuestos, incluyendo stock de los 
mismos
Proveer datos de provisión de materias primas y repuestos
Recolectar y mantener datos de uso general y disponibilidad de energía, proveyendo 
información para la compra de la misma
Recolectar y mantener información de productos en proceso y registros de stock de 
producción.
Recolectar y mantener registros de control de calidad, porque dependen de requerimientos 
de los clientes
Recolectar y mantener registros históricos de utilización y vida, necesarios para la 
planificación de mantenimiento preventivo y predictivo
Recolectar y mantener información de mano de obra empleada para reportar al 
departamento de personal y administración
Establecer la programación básica de la producción de la planta
Modificar la programación básica de la producción de la planta para ´recepción de órdenes, 
basadas en cambios en la disponibilidad de recursos, disponibilidad de fuentes de energía, y 
requerimientos de mantenimiento.
Desarrollar la optimización del mantenimiento preventivo y el cronograma de renovación de 
equipamiento en coordinación con la programación básica de la producción de la planta
Optimizar los niveles de stock de materias primas, fuentes de energía, repuestos y bienes 
intermedios en cada punto de almacenaje. Estas funciones incluyen también al Plan de 
Requerimiento de Materiales (MRP) y la provisión de repuestos
Modificar la programación básica de la producción de la planta cuando sea necesario, 
cuando sucedan interrupciones de producción importantes.
Planear la capacidad, en función de todas las actividades anteriores.
Entre las actividades del nivel 3, se incluyen
Reportar sobre cada área de producción, incluyendo  los costos variables de fabricación
Recolectar y mantener información de producción, stock, mano de obra, materias primas, 
repuestos y utilización de la energía de cada área
Suministrar la recolección de datos y el post análisis requeridos por las funciones de 
ingeniería. Esto puede incluir el análisis estadístico de la calidad y funciones relacionadas 
con el control
Proveer  las funciones necesarias del personal, como estadísticas del período de trabajo 
(tiempo, tarea), cronograma de vacaciones, programación de la fuerza de trabajo, línea de 
progresión unificada,  y entrenamiento interno y calificación del personal.
Establecer el programa detallado inmediato de producción para cada área, incluyendo 
mantenimiento, transporte y otras necesidades relacionadas.
Optimizar localmente los costos para cada área de producción mientras se siguen los 
lineamientos establecidos por la programación de la producción por las funciones del nivel 4
Modificar los cronogramas de producción para compensar las interrupciones de producción 
de planta que puedan ocurrir en su área de responsabilidad.
El modelo jerárquico en el cual aparecen todas estas funciones proviene de un esquema general de 
modelos determinados por la norma, cada uno de ellos con un propósito diferente.

---

<!-- página 5 -->

-5- 
A título de ejemplo se presentan algunos de estos esquemas
Figura 3: Esquemas de presentación de la información
No se va a profundizar en este estado de la tecnología acerca de todos los gráficos y todas las 
definiciones, que corresponden directamente a la primera parte de la investigación.
La normativa es un punto interesante de partida para poder estudiar las vinculaciones entre los 
distintos sistemas y sus posibles interdependencias. Hay mucha más información relacionada con los 
sistemas de manufactura. El estudio puede derivar finalmente en la utilización de otras tecnologías 
más específicas que puedan incluirse dentro del modelo. En este sentido, la posibilidad de realizar un 
estudio de caso sobre una aplicación existente, y la de profundizar sobre las soluciones que ofrecen 
las principales empresas de automatización alrededor de este modelo, resultan complementarias y 
agregarán la visión real de la aplicabilidad de la norma, además de proporcionar una idea más clara 
del nivel de complejidad y de las restricciones que presenta una implementación completa (o lo más 
completa que se pueda) del modelo propuesto. [12]
2.1 B2MML
La norma ISA-95 ha definido y perfeccionado una serie de mecanismos transaccionales para poder 
transferir información entre los sistemas de gestión y los sistemas de planta. B2MML son las siglas 
de Business To Manufacturing Markup Language1[1] , y es una implementación de XML2 (Extensible 
Markup Language) especialmente diseñada para la norma ISA 95, y consiste de un conjunto de 
esquemas XML escritos mediante el uso del Lenguaje de esquematización XML del World Wide Web 
Consortium que permiten implementar los modelos de datos de la ISA 95 [16]. El lenguaje B2MML 
constituye un formato común de datos para vincular los ERPs3 y los sistemas de administración de la
cadena de suministro con sistemas de planta como los sistemas de control o los MES4. [20]
La cobertura funcional de estos esquemas incluye:
Equipamiento: clases de equipamiento, equipamiento y pruebas de capacidad que pueden 
ser intercambiados entre los sistemas de administración y los de operación de planta.
Mantenimiento: requerimientos de mantenimiento, ordenes de trabajo y respuestas de 
mantenimiento que pueden intercambiar los sistemas de administración y de planta.
1 Lenguaje de marcado de la administración a la fabricación
2 Lenguaje de marcado extensible
3 Enterprise Resource Planning: Sistema de Planificación de Recursos (de una Empresa o 
Corporación)
4 Manufacturing Execution Systems. Sistemas de Ejecución de Manufactura o fabricación

---

<!-- página 6 -->

-6- 
Materiales:
definiciones de materiales, clases, lotes, sublotes, y pruebas de QA 
(Aseguramiento de la Calidad) que pueden intercambiar los sistemas de administración y de 
planta.
Personal: Personas, clasificación de personas y pruebas de calificación que pueden 
intercambiar los sistemas de administración y de planta.
Segmento de Proceso: un agrupamiento lógico de recursos (personal, equipamiento y 
materiales) requeridos para llevar a cabo un paso de producción que pueden intercambiar los 
sistemas de administración y de planta.
Definición de Producto: incluye referencias de las reglas de producción de producto, Lista 
de materiales y de recursos que pueden intercambiar los sistemas de administración y de 
planta.
Capacidad Productiva: información de capacidad por recurso y por segmento de proceso 
que pueden intercambiar los sistemas de administración y de planta.
Rendimiento Productivo: se realiza un reporte de rendimiento productivo, a partir de 
respuestas de producción además de información de contexto, como ser, tiempo de inicio, 
finalización, localización y fecha de producción
3 OBJETIVOS
El objetivo principal del trabajo es el de diseñar un modelo simplificado de la normativa, para poder 
explicar sus beneficios, representando algunas transacciones con una instalación en tiempo real, 
desde una modelización de gestión hacia una planta piloto, utilizando las nomenclaturas y los 
diseños propuestos por  ISA95 [8].
3.1 Objetivos Específicos
Correlacionar una planta piloto diseñada para regular lazos de temperatura, caudal, presión y nivel, 
con sistemas superiores que establezcan las rutinas a realizar. Hacer una implementación reducida 
del lenguaje B2MML propuesto sobre XML para bajar y subir las rutinas desde un sistema de gestión. 
Mostrar la configuración del sistema supervisor y las comunicaciones hacia el dispositivo de control.
4 MODELOS 
4.1 Modelo de Planta
La planta piloto construida en el laboratorio de ingeniería de la UNGS es, básicamente un dispositivo 
de ensayo de lazos de control, automatizado mediante un Controlador Lógico Programable (PLC) 
vinculado físicamente a una red Ethernet con computadoras y aplicaciones de software. Está    
Figura 4: Esquemas de presentación de la información

---

<!-- página 7 -->

-7- 
compuesta por dos recipientes, dos bombas centrífugas, una resistencia calefactora trifásica, un 
ventilador enfriador, como se muestra en la Figura 4, simulando una torre de enfriamiento, válvulas, 
dos termo vainas de tipo PT 100, un caudalimetro inteligente, un medidor de nivel por presión 
diferencial, y dos variadores de velocidad uno de ellos regulando una de las bombas y el otro el 
ventilador. [7]
Figura 4: Vista de la planta piloto
Si bien la planta en sí misma no constituye una celda productiva, permite simular procesos que 
pueden ser iniciados y terminados a partir de parámetros u órdenes definidas desde distintos niveles.
En trabajos anteriores hemos planteado el diseño y la posterior construcción de la misma, que ya se 
encuentra operativa a los fines didácticos y de investigación de las distintas asignaturas de Ingeniería 
electromecánica y la Tecnicatura superior en automatización y control. A los efectos técnicos, la 
planta está preparada para ejecutar lazos de control de temperatura, presión, caudal y nivel. En este 
caso será necesario incorporar alguna tarea completa que será mencionada desde alguna de las 
funciones posibles de transferencia disponibles entre la batería de parámetros enunciados 
anteriormente. La figura muestra la vista frontal de la planta piloto. en el lateral izquierdo puede verse 
un par de gabinetes, en los cuales se ha realizado la instalación de los automatismos, los contactores 
que controlan los motores y otros dispositivos estáticos como la resistencia calefactora, y el PLC con 
sus cableados de entradas y salidas hacia bornes intermedios, que permiten conectarse con todos 
los sensores y actuadores disponibles, así como con los instrumentos de medición instalados, que se 
muestran en la Figura 5.
Figura 5: Tableros de comando y de control de motores
El PLC se constituye en una estación esclava para un maestro que estará corriendo en una de las 
PCs conectadas a la red local. El modelo no es restrictivo a una sola estación, pudiendo ser varias 
las que interroguen al esclavo en cuestión.

---

<!-- página 8 -->

-8- 
En la computadora que oficia de maestro, hay un par de aplicaciones definidas que deben estar 
corriendo para que la comunicación de base pueda plasmarse. Estas aplicaciones pueden no ser 
necesarias si se montase un servidor web en la Unidad Central de Procesamiento (CPU) del PLC, 
pero en este caso en la misma debería correr una aplicación completa que permita sustentar la 
operación con todas sus características.
En nuestro caso, se han montado un servidor de comunicaciones y un sistema de supervisión. El 
primero de ellos permite dialogar en forma directa con la CPU del PLC a través de una comunicación 
Ethernet, en el protocolo que el mismo se puede comunicar. En esta aplicación se definen los 
parámetros que se van a intercambiar con el mismo, y que constituyen datos que de alguna manera 
el programa que está corriendo en el mismo está procesando, sean estos entradas, salidas, o 
memorias intermedias de lógicas y cálculos. Esta aplicación se denomina Servidor OPC, y ha sido 
diseñada mediante un estándar de la Fundación OPC5.
Un servidor OPC permite utilizar los datos en tablas que se encuentran disponibles para otras 
aplicaciones denominadas clientes, que pueden leer los mismos en forma transparente desde el 
mismo entorno de la computadora, o bien desde otras posiciones vinculadas a una intranet e 
inclusive la internet.
La aplicación de base que administra y ordena la información de planta es un HMI/SCADA, 
configurada como sistema de supervisión. Esta aplicación es cliente OPC, y de esta manera, puede 
comunicarse con el PLC, interactuando con las variables del programa que se encuentra corriendo 
en el mismo. En esta aplicación se pueden configurar distintos tipos de esquemas de control y 
comando, tales como arrancar y para secuencias pre configuradas, cuyos valores pueden haber sido 
generados en aplicaciones externas. Los datos generados por estas aplicaciones externas pueden 
ser de lo más variados, y todas la rutinas pueden ser configuradas en los distintos niveles de 
software, a través de las herramientas de apoyo de los distintos paquetes de software [10].
Lo que ISA 95 contribuye a estas aplicaciones es la normalización de las estructuras de las 
interfaces, así como la terminología a emplear en todas las transacciones.
Por otro lado B2MML constituye un conjunto de rutinas XML que cumplen la especificación ISA, y 
que pueden ser administradas desde las distintas aplicaciones, si es que poseen habilidad para 
manejar estas rutinas. XML es un lenguaje de uso común en programación de páginas web, y que 
puede ser utilizado en las extensiones que dichas aplicaciones ofrecen para las comunicaciones 
externas.
4.1 Modelo Transaccional
Se generará una rutina externa escrita en lenguaje XML, con contenidos específicos B2MML, que 
constituya un paquete de información bidireccional cerrado, que en este caso recibirá la aplicación 
HMI/SCADA, transformándola en una receta, a fin de predisponer los datos sobre las variables ya 
definidas en este sistema. Esta receta puede contener un estado de disparo automático o bien éste 
puede ser determinado a pedido de un operador.
Una receta es un conjunto de datos predeterminados, que pueden descargarse sobre variables ya 
definidas, a efectos de realizar una tarea en particular, totalmente configurada por los parámetros 
transferidos en ella.
La definición de un esquema, en este caso un procedimiento XML definido en la versión 6.0 de los 
esquemas B2MML, aparece como sigue:
<xsd:element name = "OpPersonnelSpecification"  type = " 
OpPersonnelSpecificationType"/> 
<xsd:complexType name = "OpPersonnelSpecificationType"> 
<xsd:sequence> 
<xsd:element name = "PersonnelClassID" type = "PersonnelClassIDType"  
                                                
5 OPC Foundation: www.opcfoundation.org

---

<!-- página 9 -->

-9- 
MinOccurs = "0" /> 
…
</xsd:complexType> 
Así queda definida una rutina XML dentro de una aplicación. El llamado a la rutina puede hacerse 
desde cualquiera de las aplicaciones involucradas [22]. Esta rutina en particular invoca a una página 
XML especificada en B2MML. A modo de ejemplo se muestra una porción de esta página levantada 
desde Microsoft Excel [18]
Figura 6: Extracto del set de definición de operaciones según B2MML 6.0
Esta es una parte de la definición B2MML únicamente para la definición de operaciones [23]. El set 
de trabajo es, de por sí, por demás complejo para establecer rutinas sencillas con respecto a un 
desarrollo de laboratorio. Esta implementación requiere de muchas horas de ingeniería para poder 
realizar la demostración de un resultado, conectado a una simulación de aplicación de MRP.
Existen en la versión 6 de B2MML al menos 35 de estas definiciones de rutinas para aplicar en 
distintas situaciones transaccionales [20].
En consecuencia, resulta demasiado engorroso establecer relaciones de esta manera, para un 
modelo de laboratorio, ya que el mismo se aplicaría para desarrollar productos completos. Asimismo, 
tampoco han prosperado implementaciones siguiendo este modelo desde los mismos productos, ya 
que cada vez más las aplicaciones se concentran en resolver su problema específico, dejando que 
otras aplicaciones resuelvan las cuestiones periféricas, como es el caso de las comunicaciones.
4.3 Modelo OPC UA 95
Está probado entonces que el modelo ISA 95, plasmado en B2MML, resulta engorroso y además 
posee algunas otras contraindicaciones. MESA6 creó el lenguaje B2MML, pero reconoce que, si bien 
da el marco de referencia informático al estándar, resulta bastante complicado general interfaces 
para resolver todas las cuestiones transaccionales a través de estos métodos. En este sentido, la 
organización viene trabajando desde hace algunos años con la OPC Foundation para que se puedan 
desarrollar aplicaciones que sirvan de puente entre los sistemas de planta y los de gestión, de 
acuerdo con la normativa. [16]
6 Manufacturing Enterprise Solutions Association (Asociación de Soluciones para Empresas 
Manufactureras)

---

<!-- página 10 -->

-10- 
OPC UA7 tuvo su lanzamiento en 2009 y en 2010 se transformó en el estándar IEC 62541. Sus 
características principales se presentan a continuación:
Protocolos estándar basados en Internet e IP.
Implementación independiente de la plataforma
Características de seguridad incorporadas
Publicador – Suscriptor / Interrogación – Respuesta
Rápido intercambio de la información
Soporte de informaciones complejas
Huella de pequeño servidor
Camino de migración desde el OPC clásico
El modelo clásico de OPC permitía que sólo ciertas aplicaciones de Windows pudieran intercambiar 
información. UA permite hacerlo a todos los niveles, sin importar de qué plataforma o sistema 
operativo se trate. Para esto, el acuerdo entre organizaciones prevé un enfoque como el siguiente, 
habiendo ya iniciativas privadas trabajando sobre este modelo. 
Figura 7: aplicación del estándar OPC UA sobre el modelo ISA-95
De esta manera, B2MML pasaría a ser una interfaz controlada por un servidor OPC UA, con la 
ventaja de ser directamente aplicable dentro de cualquier cliente OPC, seleccionable entonces desde 
un árbol de carpetas, utilizando sólo aquellas instancias y variables que se requieran para la 
complejidad de la aplicación. Los mensajes OPC UA están sincronizados, conectados, permitiendo 
un acoplamiento más estrecho de los flujos de trabajo. [19]
4.4 Modelo planteado a utilizar
Dado que OPC UA 95 es una interfaz que, si bien resolverá todos los problemas, se encuentra en
estado de desarrollo, para nuestra implementación de laboratorio utilizaremos OPC clásico, o bien 
OPC UA, sobre la base de la interacción con variables de proceso encadenadas con variables 
desarrolladas especialmente dentro de la aplicación HMI/SCADA, emulando las condiciones de 
7 Unified Architecture (Arquitectura Unificada)

---

<!-- página 11 -->

-11- 
arranque de una orden de trabajo, lote, asignación de materiales, o cualquiera de las transacciones 
simples que se planteen desde el modelo de MRP.
De esta manera, se intentará poner en términos de una “transacción” completa definida según la 
norma, un subconjunto de variables que representen una porción de los datos que tiene la definición 
completa del segmento. Las variables se mencionarán de la misma manera, y la aplicación las 
recibirá como tales, ejecutando la orden de acuerdo a lo esperado. Un ejemplo de cómo se verían las 
variables definidas dentro del sistema se ve a continuación [17]. 
Figura 8: Expresión de un segmento en el conjunto de datos del HMI
En este caso se han creado un juego de variables para la especificación del segmento de propiedad 
del equipamiento. De la misma manera se pueden realizar el resto de las variables, de acuerdo con 
las bases de definición de las mismas. El conjunto de datos a llenar en estas variables provendrá, en 
este caso, de una planilla de receta residente en una base de datos o bien, en una planilla Excel. El 
conjunto emulará una situación determinada, correspondiente a una definición parcial de una orden. 
EL sistema SCADA entonces pre configurará la operación con estos datos, arrancará la rutina 
correspondiente a esta configuración, para finalmente guardar los datos del procedimiento realizado 
en las variables, para cerrar la transacción.
Como una orden de trabajo involucraría demasiadas definiciones formales, se utilizará un segmento 
para dar arranque a un lazo de temperatura, enviando a través de la variable cantidad, la temperatura 
a la cual el lazo se debe estabilizar. Esta definición provendrá del sistema superior, mientras que el 
sistema HMI/SCADA transferirá la definición al lazo configurado en el PLC, dando arranque al mismo.
Una vez alcanzada la temperatura y estabilizada la medición, el sistema devolverá el tiempo en que 
se alcanzó dicha temperatura, escribiéndolo sobre la planilla origen, o bien sobre una planilla de 
resultados.
5 CONCLUSIONES
Se ha estudiado la normativa y se ha visto que las definiciones de la misma corresponden al 
establecimiento de relaciones entre sistemas verdaderamente complejos. Por lo general, la mayoría 
de las transacciones posibles de los sistemas no utilizan la cantidad de variables que presenta el 
modelo de datos B2MML. Sin embargo, para una correcta estandarización, los modelos deben ser 
respetados en forma completa, de manera de garantizar la interoperabilidad. 
A los efectos de un esquema de laboratorio, la solución planteada es de por sí, demasiado compleja 
para ser utilizada en un esquema de laboratorio, escribiendo muchas páginas de código para ser 
representadas en un esquema no productivo. En este sentido, la incorporación futura de una interfaz 
OPC UA 95 permitirá utilizar sólo una muestra de todas las rutinas desarrolladas, pero las mismas 
estarán completas para que, en cualquier momento se puedan incorporar nuevas rutinas sin 
necesidad de modificar la interfaz.
A la espera del desarrollo de esta interfaz, el modelo de laboratorio se implementará sólo en forma 
demostrativa, a través de un pequeño grupo de variables emuladas en el sistema supervisor. A 
futuro, se cambiará este emulador, por un servidor OPC UA 95.

---

<!-- página 12 -->

-12- 
6 REFERENCIAS
[1] Cox III, James F., Blackstone Jr, John H., APICS Dictionary Ninth Edition, APICS – Falls 
Church VA, ISBN 1-55822-162-X 
[2] The MOM Chronicles: ISA-95 Best Practices Book 3.0
[3] The Hitchhiker's Guide to Manufacturing Operations Management: ISA-95 Best Practices 
Book 1.0
[4] ISA 95 Implementation Experiences  - WBF - Momentum Press, 2011 - 278 páginas
[5] ISA 88 and ISA 95 in the Life Science Industries – WBF - Momentum Press, 2011 - 335 
Páginas
[6] The Road to Integration: A Guide to Applying the ISA-95 Standard in Manufacturing - Bianca 
Scholten - ISA, 2007 - 235 páginas
[7] Collaboration between industrial computing and the final integration project courses of a 
degree in electromechanical engineer with specialty in industrial automation, to gain 
competences in hmi/scada systemas (RE462OC). Modai, Vitali, Jiménez Placer, Zambrano. 
Publicación en el Simposio Internacional IREPS 2011 (Integrating Research, Education, and 
Problem Solving), en el contexto de la Conferencia Internacional DeMset 2011 (Design and 
Modeling in Science, Education, and Technology – Orlando – USA - Noviembre 29 a 
Diciembre 2 del 2011.
[8] Insufficiently Defined Business Cases and Application Strategies Are Holding Back the Value 
of MES – Gartner’s anual MES Survey – 2014
[9] MESA White Paper #44: Defining an Operations Systems Architecture – White Paper - Abril 
2013
[10]MESA White Paper #42: The Role of Semantic Models in Smarter Industrial Operations –
White Paper - Abril 2014
[11]MESA Product Lifecycle Management (PLM) Strategic Initiative Guidebook – junio 2010
[12]IEC 62264-1:2013 - Enterprise-control system integration -- Part 1: Models and terminology
[13]IEC 62264-2:2004 Enterprise-control system integration -- Part 2: Model object attributes
[14]EC 62264-3:2007 Enterprise-control system integration -- Part 3: Activity models of 
manufacturing operations management
[15]ISO 22400-2:2014 - Automation systems and integration -- Key performance indicators (KPIs) 
for manufacturing operations management -- Part 2: Definitions and descriptions
[16]ISA Publications › InTech Magazine - Factory Automation: New integration architectures for 
federated systems -2016 / Mar-Apr
[17]An ISA-95 companion standard for OPC UA White paper Jean Vieille, ISA France, Control 
Chain Group - 04/02/2010
[18]Business To Manufacturing Markup Language - Process Segment - Version 6.0 B2MML-
ProcessSegment – MESA International - March 2013
[19]OPC UA – ISA 95 Support – Dennis Brandl (BR&L Consulting), Gopal Krishnan (OSI Soft) 24, 
2014
[20]SAP Integration with B2MML – JUNOT Systems – Bellaire TX  USA – 2010
[21]ISA-95: A Foundation Model For Business Intelligence for Manufacturing – White paper-
John Theron, VP Product Management Incuity Software, July 2008.
[22]Integrating ISA-88 and ISA-95 – Bianca Scholten - Presented at ISA EXPO 2007, 2-4 October 
2007, Reliant Center, Houston, Texas
[23]ISA 95 Implementation Best Practices Workflow Descriptions using B2MML - Costantino 
Pipero, Kishen Manjunath - Presented at the WBF North American Conference, Atlanta, GA
March 5-8, 2006

---

<!-- página 13 -->

-13-