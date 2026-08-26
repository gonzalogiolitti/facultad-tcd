## Slide 1
- Internet de las cosas
- ¿Qué es IoT?
- Podemos definir a IoT (Internet of the things) o “internet de las cosas” al conjunto de esfuerzos con criterios técnico/tecnológicos para crear escenarios de monitoreo a control remoto que pueden simular situaciones que pueden ser vividas de forma presencial.
- Esta creación de escenarios utiliza componentes tecnológicos de tipo electrónico (Sensores/Actuadores) que nos permiten acceder a dispositivos (Celulares/tablets/computadoras) en lugares lejanos del entorno.

## Slide 2
- Internet de las cosas
- Estos escenarios, en muchos casos no son supervisados por personas. Sino por dispositivos (Maquinas) que se comunican entre ellos a través de plataformas de modelo suscripción/publicación a través de protocolos M2M (Machine to Machine).

## Slide 3
- Plataformas WEB IoT
- Existen una gran cantidad de plataformas IoT, pero entre las mas destacadas se encuentran
- Amazon Web Service
- https://aws.amazon.com/es/iot/
- Microsoft Azure
- https://azure.microsoft.com/en-us/suites/iot-suite/
- Pero para manejarlas requieren cierta expertes, aún así existen otras mas sencillas que están basadas en las mismas
- Ubidots
- https://ubidots.com/stem
- Thinger
- https://thinger.io/
- Grafana
- https://grafana.com/

## Slide 4
- Internet Industrial de las Cosas (IIoT)
- El (IIoT) es el conjunto de sensores, instrumentos y dispositivos autónomos conectados a través de Internet a aplicaciones industriales. Esta red permite recopilar datos, realizar análisis y optimizar la producción, aumentando la eficiencia y reduciendo los costes del proceso de fabricación y prestación de servicios. Las aplicaciones industriales son ecosistemas tecnológicos completos que conectan dispositivos y a estos con las personas que gestionan los procesos en líneas de montaje, logística o distribución a gran escala.

## Slide 5
- Principios del IIoT
- Es una tecnología  que obtiene una gran cantidad de datos tanto de las personas y la red sensorial, facilitando que las aplicaciones sean inteligentes y actúen en base a parámetros preconfigurados implementando tanto inteligencia artificial y predicción (Machine Learning)
- Comunicación y cooperación: objetos conectados entre si por medio de plataformas
- Detección: Los objetos recopilan información y graban reportes de datos.

## Slide 6
- Principios del IIoT
- Actuación: Los objetos pueden y en muchos casos deberían tener actuadores para manifestarse en su entorno (Luces, señales eléctricas, movimientos)
- Geolocalización: Muchos dispositivos en algunos casos deben identificar su ubicación física
- Interfaces de usuario: Los objetos inteligentes pueden comunicarse de manera adecuada con las personas

## Slide 7
- ¿Por qué tener una plataforma IIoT?
- Las plataformas IIoT nos permiten observar las interacciones entre distintos dispositivos de la infraestructura.
- Podemos desarrollar este tipo de soluciones sin necesidad de integrar  los datos en ninguna plataforma, desarrollar un backend, API, bases de datos, diseño web.

## Slide 8
- ¿Por qué tener una plataforma IIoT?
- Protocolos de integración de datos:
- Con esto evitamos pensar en crear una forma de intercambio propio, y lo sustituimos por uno previamente probado en miles de soluciones previas.
- Almacenamiento de datos:
- Muchas de las plataformas IoT nos permiten almacenar de manera segura, redundante y escalable de los datos recolectables

## Slide 9
- ¿Por qué tener una plataforma IIoT?
- Integración con APIS:
- Mediante en estas interfaces nos permiten recuperar datos desde aplicaciones: Web, móvil, integración con sistemas IT.
- Tratamientos de datos:
- Una vez integrados dentro de la plataforma IoT, nos permiten agregar herramientas analíticas.
- Máximos, mínimos, promedios, totales y demás en una serie de tiempo
- Creación de reportes
- Big Data

## Slide 10
- Gateway IoT
- Series SIMATIC IoT 20xx:
- Proyectos Arduino (Pilotos):
- Proyectos Maquinas Virtual IT

## Slide 11
- Topología IIoT

## Slide 12
- NODE-RED
- Node-Red: Herramienta de desarrollo basada en flujo que permite conectar hardware, APIS y servicios en línea. El editor de flujo está basado en javascript. El editor se usa en navegador web (Google, Mozilla).
- Algunos proyectos en Node-Red son:
- Node-Red: Una herramienta visual para conectar Internet de las cosas (Sensores, PLC´s, SCADA´s, ERPs-Base de datos)
- Node-Red Dashboard: Una interfaz de usuario del panel de control para Node-Red.
- Node generator: Herramienta de línea de comandos para generar módulos nodo Node-RED a partir de varias fuentes, incluido el documento Open API y la fuente del nodo de función.

## Slide 13
- Ejemplos de proyectos Node-Red
- Conexión OPC-UA
- Conexión Base de Datos Oracle
- Conexión Telegram

## Slide 14
- Conexión OPC-UA
- Nodo Opc UA Item
- Nodo Opc UA Client
- Nodos Función

## Slide 15
- Nodo Función
- Una función de JavaScript que se ejecuta en los mensajes que recibe el nodo. Los mensajes se pasan como un objeto JavaScript llamado msg. Por convención tendrá una propiedad msg.payload que contiene el cuerpo del mensaje.

## Slide 16
- Nodo Función
- Contexto: Node Red provee una manera de almacenar y compartir la información o mensaje (Msg) entre distintos nodos, sin usar los mensajes que pasan por el flujo.
- Los contextos pueden ser:
- Nodo: Solo visible dentro del nodo alojado
- Flow: Solo visible a los nodos dentro del flujo
- Global: Visible en todos los nodos
- Var

## Slide 17
- Nodo Función
- En este proyecto el 1er nodo convierte los tópicos en formato string
- El 2do nodo “función” devuelve variables globales.

## Slide 18
- Nodo Opc UA Item
- Nodo Opc UA Item: Buscamos el tópico (TAG) y el nodo opc scout (ns=1;s=t|xxxxxxxxxxx |) y el tipo de dato para configurar el nodo

## Slide 19
- Opc UA Client
- Nodo Opc UA Client: Configuramos la dirección IP de la Red OT o servidor OPC junto con el puerto que ocupa el dispositivo, ajustando las credenciales de ciberseguridad acorde a la política de la misma.
- Dependiendo del tipo de conexión podemos leer o enviar datos al servidor OPC
- Puerto
- IP

## Slide 20
- Conexión telegram
- Uso de nodos que permiten la comunicación entre node red y aplicación de telegram.
- A través de la configuración de reglas y un bot personalizado vamos a suscribirnos a un canal de alertas.
- Nodo sender

## Slide 21
- Conexión telegram
- Suscripción de alertas
- Reportes de producción

## Slide 22
- Proyecto Oracle

## Slide 23
- MongoDB

## Slide 24
- MongoDB
- Base de datos NoSQL de código abierto. Como base de datos no relacional, puede procesar datos estructurados, semi-estructurados y no estructurados.
- Puede guardar estructuras de datos BSON con un esquema dinamico, haciendo mas rápida la integración de datos provenientes de aplicaciones.

## Slide 25
- Registro
- https://www.mongodb.com/es/cloud/atlas/register
- Nos registramos en el siguiente link
- Luego creamos nuestro nombre de organización

## Slide 26
- MongoDB
- Creamos nuestra organización y nuestro servicio será el Mongo DB Atlas
- Luego creamos nuestro proyecto

## Slide 27
- MongoDB
- Luego procedemos a crear nuestro cluster
- Seleccionamos una licencia Free alojada en cualquier proveedor entre azure, Google cloud, AWS

## Slide 28
- MongoDB
- Luego decidimos las credenciales de validación entre un certificado o con usuario y password y configurar una dirección ip

## Slide 29
- MongoDB
- Una vez creado nuestro cluster seleccionamos con que se va a conectar, a fines de nuestro objeto de estudio seleccionamos drivers

## Slide 30
- Proyecto MongoDB
- “Inject”

## Slide 31
- Proyecto MongoDB
- Reemplazamos en URI “Password” por el de nuestra clave de usuario, en Database agregamos el nombre de nuestra cluster y en username y password nuestros agregamos nuestro acceso.

## Slide 32
- Proyecto MongoDB
- En collection, nombramos la sección dentro de nuestra db donde enviamos los datos.
- En operaciones ejecutamos el comando “insertOne” y ejecutamos. A continuación revisamos nuestra base de datos y encontramos nuestro mensaje array name: “ana” age: “1”

## Slide 33
- Proyecto MongoDB

## Slide 34
- InfluxDB
- Es una base de datos no estructurada, diseñada para manejar altas cargas de escritura y consulta, pensada para almacenar y consultar serie de eventos.

## Slide 35
- InfluxDB
- Acceder al siguiente enlace y registrarse en la pagina
- https://www.influxdata.com/
- En la selección del producto con la versión 2.0 será acorde a nuestros objetivos de estudio

## Slide 36
- InfluxDB
- Una vez dado click a influxdb Cloud 2.0 y registrarse con su correo
- Les tiene que aparecer la siguiente imagen

## Slide 37
- InfluxDB
- Configuramos nuestra cuenta primero

## Slide 38
- InfluxDB
- Configuramos nuestra organización luego

## Slide 39
- InfluxDB
- Configuramos nuestra desde el icono “settings”

## Slide 40
- InfluxDB
- Para generar nuestro token vamos a API tokens y vamos a generate API token y buscamos all acces api token. Llenamos una descripción y copiamos el token, CUIDADO de no perderlo.

## Slide 41
- InfluxDB
- En la sección Bucket, creamos nuestro repositorio dentro de la organización

## Slide 42
- Proyecto InfluxDB
- Para utilizar la base de datos en node-red primero descargamos desde el manager pallete.

## Slide 43
- Proyecto Influxdb
- Obtenemos variables de entorno y las capturamos
- Enviamos variables globales a la BD
- Campo
- Valor

## Slide 44
- Proyecto Influxdb
- Configuramos nuestro nodo
- Seleccionamos versión 2.0
- Copiamos la url donde se encuentra nuestra bd y el token

## Slide 45
- En la sección “Data Explorer“ encontraremos nuestro repositorio. Luego completamos los espacios organización y bucket con los nombres correspondientes. A nuestra medición agregamos el nombre “Medida4” que es la sección dentro de la bd que almacenara los datos.

## Slide 46
- InfluxDB
- Luego visualizamos nuestros datos en la siguiente estructura
- Campo/Tag
- Valor
- Campo/tag

## Slide 47
- Siemens Xcelerator
- Ofrezca valor empresarial con datos IoT industrial mediante un control confiable de los activos industriales, mejorando rendimientos y la eficiencia de fabricación, con predicción de la calidad y mucho mas.
- Explore datos conectando sus activos en la nube, recopile y desarrolle de manera estratégica sus capacidades de IoT
- Transforma los negocios, procesos y productos a escala. Cree ventajas competitivas , reduzca costos y mejora de la calidad a través de todo el ciclo de vida del producto y la cadena de suministro

## Slide 48
- Siemens Xcelerator
- Integración de información entre los sistemas de gestión de planificación y los sistemas de supervisión y control de equipos

## Slide 49
- Siemens Xcelerator
- Creación de distintas variables, indicadores, Kpi provenientes de las distintas variables de los distintos niveles de automatización.
- Hacer cruces de distintas variables provenientes de distintos niveles de automatización.
- Acceder a una vista externa por afuera de las redes OT/IT de manera cibersegura (Computadoras portátiles, celulares, Tablet, etcétera)
- Conectar APIS a la plataforma.
- Generar reportes por medio de datos transaccionales e históricos.
- Generar régimen de alertas y/o notificaciones.

## Slide 50
- Insight Hub Monitor
- Monitor: Aplicación básica que permite a los usuarios utilizar funciones de análisis sobre activos, procesos y rendimientos
- Easy Dash: Aplicación que permite crear dashboards personalizados sobre activos industriales.

## Slide 51
- Nodo Mindoconnect
- Permite a los usuarios de node-red conectarse a Insight Hub y enviar archivos, eventos y time series. Este nodo esta escrito en javascript sin dependencias nativas y funciona en series IoT 20xx e incluso raspberry.
- Su instalación esta disponible desde node.js o desde el mismo Node-Red

## Slide 52
- Monitor

## Slide 53
- Monitor
- Con monitor podemos visualizar la distribución de los activos industriales
- Configurar “Reglas de estados”.
- Visualización de variables en formato “Time Series”. Comparación de variables de activos que permite analizar el desempeño de los activos.
- Exportación de datos en formato CSV.

## Slide 54
- Monitor
- Visualización de variables en formato time series. Acceder a la sección “Explore”, sub sección “Assets”, en el caso Ferreyra seleccionar ChaskaSandbox2050 y se desplegaran los aspects y variables dentro del mismo. Podemos seleccionar hasta 10 variables simultaneas.
- En algunos casos en donde la variable sea un formato “toString”, seleccionamos la vista de tabla (“TableView”)