# MATERIA ELECTIVA A - Resumen de contenido
_Última actualización: 30/08/26_

## Grabaciones sincrónicos
**Archivo:** Grabaciones sincrónicos/Clase 7-5 automatización 4.0.txt
**Fecha:** No identificada
**Temas:** Automatización 4.0, ISA-95, pirámide de automatización, gateway industrial, niveles de automatización, OEE, MES/EMIS, ERP, modelos de datos industriales, trabajo práctico de estandarización de variables
**Resumen:** La clase aborda la integración de datos de piso de planta con el modelo de negocio mediante la norma ISA-95 y dispositivos gateway industriales (serie Simatic). Se explican los cinco niveles de la pirámide de automatización (sensores, PLC, SCADA/HMI, MES y ERP) y cómo cada nivel aporta datos al sistema. Se desarrollan conceptos de OEE (disponibilidad, rendimiento y calidad), tipos de procesos productivos (batch, continuo, discreto) y la estructuración jerárquica de variables industriales (firma, planta, área, línea, equipo, tag). Como trabajo práctico, se solicita a los estudiantes armar una planilla estandarizada con al menos tres variables de un horno industrial, identificando firma, planta, sector, equipo, tag y nivel de la pirámide al que pertenece cada variable.

**Archivo:** Grabaciones sincrónicos/GMT20260409-230644_Recording_1686x768.txt
**Fecha:** 09/04/26
**Temas:** Sensores y actuadores, PLC (Controlador Lógico Programable), HMI, Protocolo Modbus, OPC UA, Sistemas SCADA, Redes OT vs IT, Industria 4.0
**Resumen:** La clase aborda los componentes fundamentales de los entornos industriales automatizados, comenzando por sensores, transductores y actuadores, y su rol en la recolección y conversión de señales físicas. Se explican los PLC (controladores lógicos programables), su arquitectura y ejemplos de aplicación industrial, junto con las interfaces HMI. Se introducen los protocolos de comunicación industrial Modbus y OPC UA, destacando las ventajas de este último para estructurar e integrar datos. Se presenta el concepto de sistemas SCADA como software de supervisión y control remoto, y se cierra con una comparación entre redes OT (tecnología operacional, determinista y orientada al control físico) y redes IT (orientadas al procesamiento y transmisión de información), señalando su convergencia en el marco de la Industria 4.0 y el rol del científico de datos en este contexto.

**Archivo:** Grabaciones sincrónicos/video1959193383.txt
**Fecha:** No identificada
**Temas:** Node-RED, MongoDB Atlas, colaboración en grupos, configuración de entorno, trabajo práctico final, InfluxDB
**Resumen:** La clase sincrónica gira en torno a la resolución de dudas y dificultades técnicas que los estudiantes tuvieron para instalar y configurar Node-RED y MongoDB Atlas de forma colaborativa en el trabajo práctico. Se explica paso a paso cómo crear una organización, proyecto y clúster en MongoDB, cómo obtener el token de conexión y vincularlo con Node-RED, y las limitaciones del entorno local frente al trabajo en equipo. También se abordan problemas de acceso al campus virtual, conformación de grupos de trabajo y diferencias entre MongoDB Atlas e InfluxDB para almacenamiento de datos.

**Archivo:** Grabaciones sincrónicos/GMT20260820-230510_Recording_1920x1080.txt
**Fecha:** 20/08/26
**Temas:** Presentación de la materia, Industria 4.0 y 5.0, Digitalización industrial, Datos en la industria, Competitividad, Tecnologías habilitadoras, Mantenimiento predictivo, Gemelos digitales
**Resumen:** Clase inaugural de "Ciencia de Datos en Sistemas Industriales" en la que los docentes presentan la materia, su metodología y programa. Se introducen los conceptos de Industria 4.0 y 5.0, explicando la evolución histórica de las revoluciones industriales y el rol central de los datos para la competitividad. Se describen tecnologías clave como IoT industrial, IA, mantenimiento predictivo, gemelos digitales y la herramienta Node-RED. Se detallan las condiciones de aprobación (trabajo práctico integrador grupal y evaluación individual) y se asigna como primera tarea la grabación de un video de presentación personal.

**Archivo:** Grabaciones sincrónicos/Link para acceder al video con contenidos de la clase 1.txt
**Fecha:** No identificada
**Temas:** Presentación del curso, Industria 4.0 y 5.0, digitalización industrial, datos en la industria, competitividad, tecnologías emergentes, metodología y evaluación
**Resumen:** Clase inaugural de la materia electiva "Ciencia de Datos en Sistemas Industriales", donde los docentes presentan el programa, la metodología de trabajo y el sistema de evaluación (trabajo práctico grupal integrador, evaluación individual y trabajos prácticos). Se introduce el paradigma de la Industria 4.0 y su evolución hacia el 5.0, destacando la centralidad de las personas, la sostenibilidad y la resiliencia. Se presentan conceptos clave como redes OT e IT, IIoT, mantenimiento predictivo, gemelos digitales y modelos de negocio basados en datos. Como primera tarea, se solicita a los estudiantes grabar un video de presentación personal de hasta tres minutos y compartir el enlace.

## Trabajo practico integrador
**Archivo:** Trabajo practico integrador/Clase 5_dictado de TP_I4.0_2025.md
**Fecha:** No identificada
**Temas:** Trabajo Práctico Integrador, NodeRed, bases de datos industriales, historización de variables, indicadores de producción, OEE, Industria 4.0, PMV
**Resumen:** La clase presenta la consigna del Trabajo Práctico Integrador (TPI) de la materia electiva, en el que grupos de hasta 5 personas deben desarrollar un servicio para historizar variables de procesos industriales usando NodeRed y una base de datos a elección. El producto mínimo viable debe incluir un tablero de control, medición de al menos 3 equipos con 5 variables cada uno, generación de indicadores (por hora, turno, día y semana) y análisis de tendencias o detección de anomalías. Se presentan conceptos de eficiencia industrial como las "Seis Grandes Pérdidas" y el indicador OEE, enmarcados en el contexto de Industria 4.0. La fecha de entrega y presentación oral es el 13/11/2025.

**Archivo:** Trabajo practico integrador/Configuración de grafana e influx db.md
**Fecha:** No identificada
**Temas:** Configuración de Grafana Cloud, Configuración de InfluxDB Cloud, Conexión Grafana-InfluxDB, Lenguaje Flux, Dashboards industriales
**Resumen:** El documento es una guía paso a paso para conectar Grafana Cloud con InfluxDB Cloud en el contexto de ciencia de datos en sistemas industriales. Explica cómo agregar InfluxDB como fuente de datos en Grafana, configurando la URL de la organización, el bucket, el token API y el lenguaje de consulta Flux. También detalla cómo crear dashboards con series temporales, escribir queries Flux para filtrar mediciones de activos industriales (como corriente de un motor), y personalizar los paneles con rangos de tiempo, múltiples queries y estilos visuales, incluyendo el uso de herramientas de IA integradas en Grafana.

## Unidad 1
**Archivo:** Unidad 1/Clase 1 _I4.0+I5.0_2026.md
**Fecha:** No identificada
**Temas:** Industria 4.0/5.0, digitalización industrial, IIoT, datos operacionales, mantenimiento predictivo, gemelos digitales, gestión basada en datos
**Resumen:** La clase inaugural presenta el curso centrado en el modelo Industria 4.0/5.0 y el rol de los datos en la competitividad industrial. Se introduce la evolución de los modelos de producción, la integración entre tecnología operativa (OT) y de negocio (IT) mediante arquitecturas IIoT, y el concepto de "única fuente de verdad". Se exploran casos de aplicación como mantenimiento predictivo, gemelos digitales y producto como servicio, destacando cómo los datos habilitan estas capacidades. Se presentan también la metodología del curso, el cronograma 2026 y las primeras tareas para los estudiantes.

**Archivo:** Unidad 1/Clase 1 _I4.0_2024.md
**Fecha:** No identificada
**Temas:** Industria 4.0, digitalización industrial, elementos tecnológicos, innovación abierta, integración IT/OT, estándar ISA 95
**Resumen:** La clase introductoria presenta el paradigma de Industria 4.0/Smart Manufacturing, su origen en Alemania y adopción global, destacando que va más allá del hardware y software para incluir ecosistemas de innovación, personas empoderadas y metodologías ágiles y Lean. Se analizan los principales elementos tecnológicos del modelo y su impacto en la competitividad, nuevos modelos de negocio y optimización de cadenas de valor. Se introduce la distinción entre tecnologías IT (dinámicas) y OT (deterministas) y el estándar ISA 95 como interfaz entre ambas. También se abordan conceptos de innovación abierta con ejemplos concretos como Arduino, OPC UA y herramientas open source aplicadas a la industria.

**Archivo:** Unidad 1/Introducción al concepto de Industria 4.0.md
**Fecha:** No identificada
**Temas:** Industria 4.0, tecnologías 4.0, sistemas ciberfísicos, ecosistema de innovación, empresas de base tecnológica, innovación abierta, economía del conocimiento
**Resumen:** El documento presenta una introducción al paradigma de la Industria 4.0 (I 4.0), abordando sus múltiples dimensiones: tecnológica, social y de modelos de negocio. Describe las principales tecnologías que lo componen (IoT, IA, impresión 3D, blockchain, big data, cloud computing, robótica colaborativa, gemelo digital, entre otras) y sus características centrales como interoperabilidad, virtualización y descentralización. Se analiza el rol de los recursos humanos, las empresas de base tecnológica (EBT) y las startups como agentes de difusión del paradigma. Asimismo, se profundiza en el concepto de Ecosistema de Innovación 4.0, destacando la articulación entre Estado, academia y empresas como condición necesaria para la adopción del modelo, con referencias a los casos de Alemania, Estados Unidos y Europa. El trabajo plantea preguntas de investigación sobre cómo la innovación abierta y los ecosistemas locales pueden facilitar la adopción de la I 4.0 en PyMEs.

**Archivo:** Unidad 1/Presentacion UGR 2.md
**Fecha:** No identificada
**Temas:** Sensores y actuadores, PLC, HMI, OPC-UA, SCADA, Redes OT/IT, IoT, IIoT, Gateway IoT, Node-Red
**Resumen:** La presentación introduce los componentes fundamentales de un entorno IIoT industrial, comenzando por sensores, transductores y actuadores, y su acondicionamiento de señal. Se explican los PLC como dispositivos de control automatizado y su integración con interfaces HMI, ilustrado con un ejemplo de control de temperatura en caldera. Se describe el protocolo OPC-UA para comunicación industrial y el software SCADA para supervisión y adquisición de datos en tiempo real. Finalmente, se distingue entre redes IT y OT, sentando las bases para los temas de IoT, IIoT, Gateway y Node-Red que se desarrollan en el resto de la unidad.

**Archivo:** Unidad 1/video Sobre introducción a la industria 4.0_5.0.txt
**Fecha:** No identificada
**Temas:** Industria 4.0 y 5.0, revoluciones industriales, digitalización industrial, vectores tecnológicos, IoT/IIoT, gemelos digitales, mantenimiento predictivo, nuevos modelos de negocio, sustentabilidad
**Resumen:** La clase introduce el paradigma de la Industria 4.0 y su evolución hacia la 5.0, contextualizando los desafíos actuales de la producción (volatilidad de mercados, eficiencia energética, innovación disruptiva) y las oportunidades que genera la digitalización. Se repasa la evolución histórica de los modelos industriales desde la primera revolución hasta el presente, destacando los vectores tecnológicos clave (IoT, IA, big data, robótica colaborativa, cloud computing, blockchain, gemelos digitales, entre otros). Se enfatiza que la transformación digital no es solo tecnológica, sino que requiere gestión del cambio, cultura organizacional e innovación abierta. Finalmente, se presentan casos concretos como el monitoreo en tiempo real, el mantenimiento predictivo, los gemelos digitales y el modelo "producto como servicio" para ilustrar el impacto práctico de estos conceptos.

### Actividades
**Archivo:** Unidad 1/Actividades/Reinventarse con Inteligencia_ cómo construir la Fábrica 2030.txt
**Fecha:** No identificada
**Temas:** Inteligencia artificial en la industria argentina, Fábrica 2030, adopción de IA en empresas, productividad industrial, Centro de Industria X, estudio nacional sobre IA, barreras de implementación, PyMEs y grandes empresas
**Resumen:** Transcripción de un evento híbrido organizado por Accenture y la Unión Industrial Argentina (UIA) en el Centro de Industria X, donde se presentó el primer informe nacional sobre el uso de inteligencia artificial en la industria argentina. Se expusieron datos del estudio: solo 1 de cada 3 empresas invierte actualmente en IA, con barreras como el desconocimiento, la falta de madurez en infraestructura digital y la escasez de talento especializado. Se analizó el impacto potencial de la IA en la productividad del país (estimado en +1,2 puntos porcentuales sobre la tendencia), y se presentó el concepto de "Fábrica 2030" como modelo de industria más conectada, inteligente y sostenible. El evento también sirvió para presentar la "Ruta X", un programa de acompañamiento a empresas, especialmente PyMEs, en su proceso de transformación digital.

### Bibliografía
**Archivo:** Unidad 1/Bibliografía/Big Data en la industria del acero.md
**Fecha:** No identificada
**Temas:** Big Data, Machine Learning, Industria 4.0, Analítica de procesos, Industria del acero, KDD, Series de tiempo, Modelos predictivos
**Resumen:** El artículo, publicado en junio de 2020 en Iron & Steel Technology, presenta la aplicación de big data y machine learning en la industria siderúrgica como parte de la transformación digital (Industria 4.0). Se describen los distintos tipos de modelos matemáticos utilizados (físicos, basados en reglas y de machine learning), junto con el proceso KDD para el desarrollo de modelos predictivos y el tratamiento de series de tiempo industriales. Se exponen dos casos de uso reales: la predicción de propiedades mecánicas en un laminador en caliente (usando Gradient Boosting) y la predicción del defecto de curvatura frontal ("SKI") en un laminador reversible (usando un meta-modelo que combina redes neuronales, XGBoost, Random Forest y Extra Trees). Los resultados demuestran que la analítica industrial puede generar valor de negocio tangible en términos de calidad, eficiencia operativa y reducción de riesgos.

**Archivo:** Unidad 1/Bibliografía/How Smart_Connected Products ..md
**Fecha:** No identificada
**Temas:** Productos inteligentes y conectados, transformación organizacional, cadena de valor, IoT, datos y analytics, nuevas estructuras funcionales, manufactura digital
**Resumen:** El artículo de Porter y Heppelmann (HBR, octubre 2015) analiza cómo los productos inteligentes y conectados transforman internamente las empresas manufactureras. Examina el impacto en cada función de la cadena de valor: desarrollo de producto, manufactura, logística, marketing, ventas, servicio posventa, seguridad y recursos humanos. Destaca el surgimiento de nuevas capacidades basadas en datos, analytics avanzado y gemelos digitales. Propone nuevas estructuras organizacionales como unidades de datos unificadas, grupos dev-ops y unidades de gestión del éxito del cliente, señalando que la transformación representa la mayor discontinuidad en la organización manufacturera desde la Segunda Revolución Industrial.

**Archivo:** Unidad 1/Bibliografía/IIoT_Combining_IT_OT.md
**Fecha:** No identificada
**Temas:** IIoT, convergencia OT-IT, SCADA, protocolo MQTT, plataforma industrial, Industria 4.0
**Resumen:** El documento es un white paper de Inductive Automation que explora el concepto del Internet Industrial de las Cosas (IIoT) y la necesidad de integrar la Tecnología Operacional (OT) con la Tecnología de la Información (IT). Se analizan las diferencias históricas entre ambos dominios, los beneficios de su alineación (mejor toma de decisiones, reducción de costos, optimización de procesos) y los desafíos que implica, especialmente en materia de seguridad e interoperabilidad. Se argumenta que la implementación del IIoT debe abordarse desde una perspectiva bottom-up (desde el nivel OT hacia arriba), y se presentan el protocolo MQTT y la plataforma Ignition como soluciones tecnológicas clave para lograr esta convergencia.

### Recursos Didácticos
**Archivo:** Unidad 1/Recursos Didácticos/Video charla sobre ISA 95 - Gustavo  Guitera.txt
**Fecha:** No identificada
**Temas:** ISA-95, pirámide de Purdue, MES/MOM, integración IT/OT, modelos de manufactura, lotes y trazabilidad, dominios de producción/mantenimiento/calidad/inventario
**Resumen:** Charla introductoria de Gustavo Vitera (tesorero de ISA Sección Argentina) sobre el estándar ISA-95, que define la integración vertical entre sistemas de control de piso de planta y sistemas ERP. Se explica la pirámide de Purdue, los niveles de automatización (0 al 4), y los cuatro pilares del modelo MOM/MES: producción, mantenimiento, calidad e inventario. Se describe cómo la norma modela recursos (equipos, materiales, personas), órdenes de trabajo, rutas de fabricación, ciclos de vida de lotes y trazabilidad. También se mencionan diferencias con ISA-88 (procesos Batch) e ISA-106 (procesos continuos), y la relación futura con RAMI 4.0 e inteligencia artificial aplicada a manufactura.

## Unidad 2
**Archivo:** Unidad 2/clase 21.05.2026. Lean_starrtup.md
**Fecha:** 21/05/26
**Temas:** Industria 5.0, Inteligencia Artificial y Machine Learning en procesos industriales, metodología Lean Startup, modelos de negocio, IIoT, CRISP-DM, plataformas low-code, casos de aplicación industrial
**Resumen:** La clase aborda cómo democratizar el uso de modelos analíticos basados en IA/ML en empresas industriales para optimizar procesos productivos, con foco en el empoderamiento del operador. Se presenta una propuesta que combina un modelo de negocios con la metodología Lean Startup y plataformas low-code, integradas con arquitecturas IIoT y el estándar ISA 95. Se exponen casos concretos de aplicación en industrias metalúrgica, minera (cobre) y energética, donde se utilizaron modelos predictivos y de optimización. Las conclusiones destacan que la adopción ágil de IA reduce plazos, facilita la co-creación entre expertos industriales y de software, y requiere infraestructura digital madura con datos históricos de calidad.

**Archivo:** Unidad 2/Presentación UGR 2-10-2025.md
**Fecha:** 02/10/25
**Temas:** Automatización 4.0, ISA 95, jerarquía de automatización, Gateway IoT, SIMATIC IoT, obtención de datos de planta, OEE, trabajo práctico
**Resumen:** La clase aborda los conceptos de Automatización 4.0 e ISA 95, explicando la jerarquía de organización industrial (firma, planta, área, línea, equipo) y la identificación de activos y variables mediante TAGs. Se presentan ejemplos concretos de obtención de datos en un proceso de cocción de aceite refinado, incluyendo series temporales de sensores, datos de órdenes de producción y métricas OEE. Se introducen conceptos de integración con protocolos OPC-UA, Node-RED y niveles L2/L3 de la pirámide de automatización. La clase cierra con un trabajo práctico donde los alumnos deben armar una planilla Excel con la jerarquía completa de una planta y sus variables codificadas.

### Actividades
**Archivo:** Unidad 2/Actividades/TP_presentado en 2023.md
**Fecha:** 2023 (fecha exacta no identificada)
**Temas:** Industria 4.0, IIoT, Node-RED, OPC UA, dashboard, KPIs industriales, modelo de negocio Canvas, producto mínimo viable
**Resumen:** Trabajo práctico integrador del Seminario de Introducción al Modelo Industria 4.0 (TUDAI 2023), en el que el Grupo 4 desarrolló un sistema de monitoreo en Node-RED conectado a un servidor OPC UA de una planta industrial (Loma Negra). El sistema captura cinco variables de proceso de un horno rotativo (dosificación de harina, flujos de gas, potencia y velocidad) y las visualiza en un dashboard con gauges y gráficos en tiempo real. Se implementaron cálculos de KPIs como consumo específico de gas por tonelada y costo energético en USD/h, con alertas visuales ante desvíos. El trabajo incluye además un modelo de negocio Canvas orientado a la transformación digital de empresas industriales mediante servicios IIoT.

#### Textos de lectura para clase de 16_10Carpeta
**Archivo:** Unidad 2/Actividades/Textos de lectura para clase de 16_10Carpeta/caso practico de aplicación de ISA 95.md
**Fecha:** 16/10 (año no identificado)
**Temas:** Norma ISA-95, integración empresa-planta, niveles jerárquicos de manufactura, B2MML, OPC UA, MES, planta piloto automatizada
**Resumen:** El documento presenta un caso práctico de aplicación de la norma ISA-95 en una planta piloto construida en la UNGS, que controla lazos de temperatura, caudal, presión y nivel. Se revisan los niveles jerárquicos definidos por el estándar, la terminología asociada (ERP, MES, SCADA, PLC, entre otros) y los mecanismos de integración entre sistemas de gestión y de planta. Se analiza B2MML como implementación XML de ISA-95 para transferencia de información, reconociendo su complejidad para entornos de laboratorio. Como alternativa superadora se propone OPC UA 95, y mientras este estándar madura, se plantea una implementación demostrativa simplificada mediante variables emuladas en el sistema HMI/SCADA.

**Archivo:** Unidad 2/Actividades/Textos de lectura para clase de 16_10Carpeta/texto para leer sobre estrategia de datos.md
**Fecha:** 16/10/24
**Temas:** Estrategia de datos, dark data, dismissed data, gestión de datos, arquitectura tecnológica, legacy systems, APIs, datos no estructurados
**Resumen:** El artículo, publicado en CIO TechWorld (diciembre 2024), utiliza la metáfora de un vaso agrietado para describir los problemas de gestión de datos en organizaciones modernas: sistemas legados, dependencia de APIs como soluciones parche, proliferación de fuentes y fragmentación tecnológica. Introduce los conceptos de "dark data" (datos almacenados pero no utilizados) y "dismissed data" (datos generados pero nunca retenidos), señalando que la mayoría de las organizaciones desperdician una porción enorme de su potencial informacional. Propone combinar un enfoque estratégico (identificar y capturar datos que generen valor real) con uno oportunista (explotar datos ya almacenados mediante IA y machine learning), priorizando impacto sobre cobertura total.

### Bibliografía
**Archivo:** Unidad 2/Bibliografía/nodeRed.DigitalTwin.md
**Fecha:** No identificada
**Temas:** Digital Twin, Node-RED, IoT Industrial, mantenimiento predictivo, Random Forest, MQTT, moldeo por inyección de plástico
**Resumen:** Este artículo científico presenta una implementación de gemelo digital (digital twin) usando Node-RED en el sector manufacturero, tomando como caso de estudio el moldeo por inyección de plástico. Se describe la arquitectura del sistema, que conecta el gemelo digital con su contraparte física mediante el protocolo MQTT. El gemelo digital incorpora un algoritmo de Random Forest para clasificación de calidad de productos, logrando una precisión del 92,76%. Además, incluye un dashboard interactivo para visualización y un sistema de notificaciones por SMS y correo electrónico ante condiciones anómalas, demostrando la viabilidad y flexibilidad de Node-RED para este tipo de aplicaciones IIoT.

### Mongodb Influxdb IIoTCarpeta
**Archivo:** Unidad 2/Mongodb Influxdb IIoTCarpeta/00-IIoT.txt
**Fecha:** No identificada
**Temas:** IoT, IIoT, Node-RED, MongoDB, InfluxDB, sensores y actuadores, protocolos M2M, plataformas IoT industriales
**Resumen:** La clase introduce los conceptos de IoT e IIoT, definiéndolos como conjuntos de dispositivos, sensores y actuadores conectados a Internet para monitoreo, control remoto y optimización de procesos industriales. Se describen principios clave del IIoT como recopilación de datos, geolocalización, actuación y analítica, así como plataformas relevantes (AWS, Azure, Ubidots). Se presenta Node-RED como framework de desarrollo basado en JavaScript para conectar hardware, servicios y protocolos industriales como OPC-UA, destacando sus contextos de almacenamiento de mensajes. Finalmente, se menciona la instalación de bases de datos no estructuradas MongoDB e InfluxDB para su integración con Node-RED, y se orienta sobre cómo instalar el entorno localmente.

**Archivo:** Unidad 2/Mongodb Influxdb IIoTCarpeta/1-Registro MongoDB.txt
**Fecha:** No identificada
**Temas:** MongoDB Atlas, bases de datos NoSQL, IoT, creación de organización y proyecto, configuración de cluster, conexión con Node.js
**Resumen:** La clase muestra paso a paso cómo registrarse y configurar una base de datos NoSQL en MongoDB Atlas para su uso en entornos IoT con Node.js. Se explica cómo crear una organización, un proyecto y un cluster gratuito (512 MB de almacenamiento) dentro de la plataforma. Se detalla la configuración de usuario y contraseña para acceder a la base de datos, y se menciona la selección del driver de Node.js (versión 6.7 en adelante) como método de conexión. El video forma parte de una serie, siendo el siguiente enfocado en la conexión efectiva entre Node.js y MongoDB.

**Archivo:** Unidad 2/Mongodb Influxdb IIoTCarpeta/2-Creación de variable MongoDB.txt
**Fecha:** No identificada
**Temas:** MongoDB, Node-RED, configuración de nodo MongoDB4, inserción de datos, variables globales, IIoT
**Resumen:** La clase muestra cómo integrar MongoDB con Node-RED instalando el nodo MongoDB4 y configurando la conexión con credenciales, nombre de base de datos y colección. Se explican los tipos de operaciones disponibles (Insert, Update, Delete, Aggregate, entre otras), enfocándose en la operación InsertOne para el caso de uso de la cátedra. Se desarrolla un flow demostrativo que genera valores aleatorios cada 30 segundos, simula una variable proveniente de un PLC con protocolo OPC-UA, le agrega un timestamp formateado y almacena los datos en el cluster de MongoDB, verificando finalmente que la información queda correctamente guardada en la base de datos.

**Archivo:** Unidad 2/Mongodb Influxdb IIoTCarpeta/4-Construir varibale en Influxdb.txt
**Fecha:** No identificada
**Temas:** InfluxDB, configuración de nodos input/output, organización y contenedores, métricas y mediciones, tokens de autenticación, Node-RED, IIoT
**Resumen:** La clase explica cómo terminar de configurar los nodos de input/output en InfluxDB para enviar y recibir información desde una base de datos. Se detalla cómo identificar la organización, el contenedor (bucket) y la medición correspondiente (en este caso, vapor) dentro del entorno de trabajo. Se muestra cómo visualizar los datos almacenados mediante gráficos y cómo distinguir entre nodos de entrada (almacenar datos) y salida (extraer datos). Finalmente, se explica cómo regenerar el token de autenticación en caso de errores de autorización.

**Archivo:** Unidad 2/Mongodb Influxdb IIoTCarpeta/Presentacion DB configuraciones.md
**Fecha:** No identificada
**Temas:** IoT, IIoT, Node-RED, MongoDB, InfluxDB, Siemens Xcelerator, bases de datos NoSQL, plataformas industriales
**Resumen:** La presentación introduce los conceptos de IoT e IIoT, sus principios y las ventajas de utilizar plataformas industriales para el monitoreo y control remoto. Se describe Node-RED como herramienta de integración visual, mostrando ejemplos de conexión con OPC-UA, Telegram y Oracle. Se detalla la configuración y uso de MongoDB e InfluxDB como bases de datos NoSQL para almacenamiento de series temporales en proyectos IIoT. Finalmente, se presenta Siemens Xcelerator (Insight Hub) como plataforma industrial avanzada para visualización, análisis de activos y generación de reportes mediante dashboards y KPIs.

### Recursos Didácticos
**Archivo:** Unidad 2/Recursos Didácticos/Video charla ISA 95- Gustavo Guitera.txt
**Fecha:** No identificada
**Temas:** ISA-95, integración IT/OT, pirámide de Purdue, MES/MOM, modelos de manufactura, trazabilidad de lotes, dominios de producción/calidad/mantenimiento/inventario
**Resumen:** La charla, presentada por Gustavo Vitera (tesorero de ISA Sección Argentina), introduce el estándar ISA-95 como marco para la integración vertical entre sistemas de control de piso de planta y sistemas ERP. Se explica la pirámide de Purdue con sus niveles 0 al 4, diferenciando procesos discretos, batch y continuos (ISA-88 e ISA-106), y se presentan los cuatro pilares del MOM/MES: producción, calidad, mantenimiento e inventario. Se abordan conceptos como la modelización de equipos, materiales, lotes, rutas de fabricación y ciclos de vida de objetos, con ejemplos prácticos de definición de segmentos productivos y trazabilidad de lotes. Se destacan los beneficios del estándar para la transformación digital: flexibilidad operativa, control estadístico de procesos, reducción de errores manuales y preparación de datos para modelos de inteligencia artificial.

<!-- ESTADO_RESUMEN
{
  "secciones": [
    [
      [
        "Grabaciones sincrónicos"
      ],
      [
        {
          "rel_path": "Grabaciones sincrónicos/Clase 7-5 automatización 4.0.txt",
          "fecha": "No identificada",
          "temas": "Automatización 4.0, ISA-95, pirámide de automatización, gateway industrial, niveles de automatización, OEE, MES/EMIS, ERP, modelos de datos industriales, trabajo práctico de estandarización de variables",
          "resumen": "La clase aborda la integración de datos de piso de planta con el modelo de negocio mediante la norma ISA-95 y dispositivos gateway industriales (serie Simatic). Se explican los cinco niveles de la pirámide de automatización (sensores, PLC, SCADA/HMI, MES y ERP) y cómo cada nivel aporta datos al sistema. Se desarrollan conceptos de OEE (disponibilidad, rendimiento y calidad), tipos de procesos productivos (batch, continuo, discreto) y la estructuración jerárquica de variables industriales (firma, planta, área, línea, equipo, tag). Como trabajo práctico, se solicita a los estudiantes armar una planilla estandarizada con al menos tres variables de un horno industrial, identificando firma, planta, sector, equipo, tag y nivel de la pirámide al que pertenece cada variable."
        },
        {
          "rel_path": "Grabaciones sincrónicos/GMT20260409-230644_Recording_1686x768.txt",
          "fecha": "09/04/26",
          "temas": "Sensores y actuadores, PLC (Controlador Lógico Programable), HMI, Protocolo Modbus, OPC UA, Sistemas SCADA, Redes OT vs IT, Industria 4.0",
          "resumen": "La clase aborda los componentes fundamentales de los entornos industriales automatizados, comenzando por sensores, transductores y actuadores, y su rol en la recolección y conversión de señales físicas. Se explican los PLC (controladores lógicos programables), su arquitectura y ejemplos de aplicación industrial, junto con las interfaces HMI. Se introducen los protocolos de comunicación industrial Modbus y OPC UA, destacando las ventajas de este último para estructurar e integrar datos. Se presenta el concepto de sistemas SCADA como software de supervisión y control remoto, y se cierra con una comparación entre redes OT (tecnología operacional, determinista y orientada al control físico) y redes IT (orientadas al procesamiento y transmisión de información), señalando su convergencia en el marco de la Industria 4.0 y el rol del científico de datos en este contexto."
        },
        {
          "rel_path": "Grabaciones sincrónicos/video1959193383.txt",
          "fecha": "No identificada",
          "temas": "Node-RED, MongoDB Atlas, colaboración en grupos, configuración de entorno, trabajo práctico final, InfluxDB",
          "resumen": "La clase sincrónica gira en torno a la resolución de dudas y dificultades técnicas que los estudiantes tuvieron para instalar y configurar Node-RED y MongoDB Atlas de forma colaborativa en el trabajo práctico. Se explica paso a paso cómo crear una organización, proyecto y clúster en MongoDB, cómo obtener el token de conexión y vincularlo con Node-RED, y las limitaciones del entorno local frente al trabajo en equipo. También se abordan problemas de acceso al campus virtual, conformación de grupos de trabajo y diferencias entre MongoDB Atlas e InfluxDB para almacenamiento de datos."
        },
        {
          "rel_path": "Grabaciones sincrónicos/GMT20260820-230510_Recording_1920x1080.txt",
          "fecha": "20/08/26",
          "temas": "Presentación de la materia, Industria 4.0 y 5.0, Digitalización industrial, Datos en la industria, Competitividad, Tecnologías habilitadoras, Mantenimiento predictivo, Gemelos digitales",
          "resumen": "Clase inaugural de \"Ciencia de Datos en Sistemas Industriales\" en la que los docentes presentan la materia, su metodología y programa. Se introducen los conceptos de Industria 4.0 y 5.0, explicando la evolución histórica de las revoluciones industriales y el rol central de los datos para la competitividad. Se describen tecnologías clave como IoT industrial, IA, mantenimiento predictivo, gemelos digitales y la herramienta Node-RED. Se detallan las condiciones de aprobación (trabajo práctico integrador grupal y evaluación individual) y se asigna como primera tarea la grabación de un video de presentación personal."
        },
        {
          "rel_path": "Grabaciones sincrónicos/Link para acceder al video con contenidos de la clase 1.txt",
          "fecha": "No identificada",
          "temas": "Presentación del curso, Industria 4.0 y 5.0, digitalización industrial, datos en la industria, competitividad, tecnologías emergentes, metodología y evaluación",
          "resumen": "Clase inaugural de la materia electiva \"Ciencia de Datos en Sistemas Industriales\", donde los docentes presentan el programa, la metodología de trabajo y el sistema de evaluación (trabajo práctico grupal integrador, evaluación individual y trabajos prácticos). Se introduce el paradigma de la Industria 4.0 y su evolución hacia el 5.0, destacando la centralidad de las personas, la sostenibilidad y la resiliencia. Se presentan conceptos clave como redes OT e IT, IIoT, mantenimiento predictivo, gemelos digitales y modelos de negocio basados en datos. Como primera tarea, se solicita a los estudiantes grabar un video de presentación personal de hasta tres minutos y compartir el enlace."
        }
      ]
    ],
    [
      [
        "Trabajo practico integrador"
      ],
      [
        {
          "rel_path": "Trabajo practico integrador/Clase 5_dictado de TP_I4.0_2025.md",
          "fecha": "No identificada",
          "temas": "Trabajo Práctico Integrador, NodeRed, bases de datos industriales, historización de variables, indicadores de producción, OEE, Industria 4.0, PMV",
          "resumen": "La clase presenta la consigna del Trabajo Práctico Integrador (TPI) de la materia electiva, en el que grupos de hasta 5 personas deben desarrollar un servicio para historizar variables de procesos industriales usando NodeRed y una base de datos a elección. El producto mínimo viable debe incluir un tablero de control, medición de al menos 3 equipos con 5 variables cada uno, generación de indicadores (por hora, turno, día y semana) y análisis de tendencias o detección de anomalías. Se presentan conceptos de eficiencia industrial como las \"Seis Grandes Pérdidas\" y el indicador OEE, enmarcados en el contexto de Industria 4.0. La fecha de entrega y presentación oral es el 13/11/2025."
        },
        {
          "rel_path": "Trabajo practico integrador/Configuración de grafana e influx db.md",
          "fecha": "No identificada",
          "temas": "Configuración de Grafana Cloud, Configuración de InfluxDB Cloud, Conexión Grafana-InfluxDB, Lenguaje Flux, Dashboards industriales",
          "resumen": "El documento es una guía paso a paso para conectar Grafana Cloud con InfluxDB Cloud en el contexto de ciencia de datos en sistemas industriales. Explica cómo agregar InfluxDB como fuente de datos en Grafana, configurando la URL de la organización, el bucket, el token API y el lenguaje de consulta Flux. También detalla cómo crear dashboards con series temporales, escribir queries Flux para filtrar mediciones de activos industriales (como corriente de un motor), y personalizar los paneles con rangos de tiempo, múltiples queries y estilos visuales, incluyendo el uso de herramientas de IA integradas en Grafana."
        }
      ]
    ],
    [
      [
        "Unidad 1"
      ],
      [
        {
          "rel_path": "Unidad 1/Clase 1 _I4.0+I5.0_2026.md",
          "fecha": "No identificada",
          "temas": "Industria 4.0/5.0, digitalización industrial, IIoT, datos operacionales, mantenimiento predictivo, gemelos digitales, gestión basada en datos",
          "resumen": "La clase inaugural presenta el curso centrado en el modelo Industria 4.0/5.0 y el rol de los datos en la competitividad industrial. Se introduce la evolución de los modelos de producción, la integración entre tecnología operativa (OT) y de negocio (IT) mediante arquitecturas IIoT, y el concepto de \"única fuente de verdad\". Se exploran casos de aplicación como mantenimiento predictivo, gemelos digitales y producto como servicio, destacando cómo los datos habilitan estas capacidades. Se presentan también la metodología del curso, el cronograma 2026 y las primeras tareas para los estudiantes."
        },
        {
          "rel_path": "Unidad 1/Clase 1 _I4.0_2024.md",
          "fecha": "No identificada",
          "temas": "Industria 4.0, digitalización industrial, elementos tecnológicos, innovación abierta, integración IT/OT, estándar ISA 95",
          "resumen": "La clase introductoria presenta el paradigma de Industria 4.0/Smart Manufacturing, su origen en Alemania y adopción global, destacando que va más allá del hardware y software para incluir ecosistemas de innovación, personas empoderadas y metodologías ágiles y Lean. Se analizan los principales elementos tecnológicos del modelo y su impacto en la competitividad, nuevos modelos de negocio y optimización de cadenas de valor. Se introduce la distinción entre tecnologías IT (dinámicas) y OT (deterministas) y el estándar ISA 95 como interfaz entre ambas. También se abordan conceptos de innovación abierta con ejemplos concretos como Arduino, OPC UA y herramientas open source aplicadas a la industria."
        },
        {
          "rel_path": "Unidad 1/Introducción al concepto de Industria 4.0.md",
          "fecha": "No identificada",
          "temas": "Industria 4.0, tecnologías 4.0, sistemas ciberfísicos, ecosistema de innovación, empresas de base tecnológica, innovación abierta, economía del conocimiento",
          "resumen": "El documento presenta una introducción al paradigma de la Industria 4.0 (I 4.0), abordando sus múltiples dimensiones: tecnológica, social y de modelos de negocio. Describe las principales tecnologías que lo componen (IoT, IA, impresión 3D, blockchain, big data, cloud computing, robótica colaborativa, gemelo digital, entre otras) y sus características centrales como interoperabilidad, virtualización y descentralización. Se analiza el rol de los recursos humanos, las empresas de base tecnológica (EBT) y las startups como agentes de difusión del paradigma. Asimismo, se profundiza en el concepto de Ecosistema de Innovación 4.0, destacando la articulación entre Estado, academia y empresas como condición necesaria para la adopción del modelo, con referencias a los casos de Alemania, Estados Unidos y Europa. El trabajo plantea preguntas de investigación sobre cómo la innovación abierta y los ecosistemas locales pueden facilitar la adopción de la I 4.0 en PyMEs."
        },
        {
          "rel_path": "Unidad 1/Presentacion UGR 2.md",
          "fecha": "No identificada",
          "temas": "Sensores y actuadores, PLC, HMI, OPC-UA, SCADA, Redes OT/IT, IoT, IIoT, Gateway IoT, Node-Red",
          "resumen": "La presentación introduce los componentes fundamentales de un entorno IIoT industrial, comenzando por sensores, transductores y actuadores, y su acondicionamiento de señal. Se explican los PLC como dispositivos de control automatizado y su integración con interfaces HMI, ilustrado con un ejemplo de control de temperatura en caldera. Se describe el protocolo OPC-UA para comunicación industrial y el software SCADA para supervisión y adquisición de datos en tiempo real. Finalmente, se distingue entre redes IT y OT, sentando las bases para los temas de IoT, IIoT, Gateway y Node-Red que se desarrollan en el resto de la unidad."
        },
        {
          "rel_path": "Unidad 1/video Sobre introducción a la industria 4.0_5.0.txt",
          "fecha": "No identificada",
          "temas": "Industria 4.0 y 5.0, revoluciones industriales, digitalización industrial, vectores tecnológicos, IoT/IIoT, gemelos digitales, mantenimiento predictivo, nuevos modelos de negocio, sustentabilidad",
          "resumen": "La clase introduce el paradigma de la Industria 4.0 y su evolución hacia la 5.0, contextualizando los desafíos actuales de la producción (volatilidad de mercados, eficiencia energética, innovación disruptiva) y las oportunidades que genera la digitalización. Se repasa la evolución histórica de los modelos industriales desde la primera revolución hasta el presente, destacando los vectores tecnológicos clave (IoT, IA, big data, robótica colaborativa, cloud computing, blockchain, gemelos digitales, entre otros). Se enfatiza que la transformación digital no es solo tecnológica, sino que requiere gestión del cambio, cultura organizacional e innovación abierta. Finalmente, se presentan casos concretos como el monitoreo en tiempo real, el mantenimiento predictivo, los gemelos digitales y el modelo \"producto como servicio\" para ilustrar el impacto práctico de estos conceptos."
        }
      ]
    ],
    [
      [
        "Unidad 1",
        "Actividades"
      ],
      [
        {
          "rel_path": "Unidad 1/Actividades/Reinventarse con Inteligencia_ cómo construir la Fábrica 2030.txt",
          "fecha": "No identificada",
          "temas": "Inteligencia artificial en la industria argentina, Fábrica 2030, adopción de IA en empresas, productividad industrial, Centro de Industria X, estudio nacional sobre IA, barreras de implementación, PyMEs y grandes empresas",
          "resumen": "Transcripción de un evento híbrido organizado por Accenture y la Unión Industrial Argentina (UIA) en el Centro de Industria X, donde se presentó el primer informe nacional sobre el uso de inteligencia artificial en la industria argentina. Se expusieron datos del estudio: solo 1 de cada 3 empresas invierte actualmente en IA, con barreras como el desconocimiento, la falta de madurez en infraestructura digital y la escasez de talento especializado. Se analizó el impacto potencial de la IA en la productividad del país (estimado en +1,2 puntos porcentuales sobre la tendencia), y se presentó el concepto de \"Fábrica 2030\" como modelo de industria más conectada, inteligente y sostenible. El evento también sirvió para presentar la \"Ruta X\", un programa de acompañamiento a empresas, especialmente PyMEs, en su proceso de transformación digital."
        }
      ]
    ],
    [
      [
        "Unidad 1",
        "Bibliografía"
      ],
      [
        {
          "rel_path": "Unidad 1/Bibliografía/Big Data en la industria del acero.md",
          "fecha": "No identificada",
          "temas": "Big Data, Machine Learning, Industria 4.0, Analítica de procesos, Industria del acero, KDD, Series de tiempo, Modelos predictivos",
          "resumen": "El artículo, publicado en junio de 2020 en Iron & Steel Technology, presenta la aplicación de big data y machine learning en la industria siderúrgica como parte de la transformación digital (Industria 4.0). Se describen los distintos tipos de modelos matemáticos utilizados (físicos, basados en reglas y de machine learning), junto con el proceso KDD para el desarrollo de modelos predictivos y el tratamiento de series de tiempo industriales. Se exponen dos casos de uso reales: la predicción de propiedades mecánicas en un laminador en caliente (usando Gradient Boosting) y la predicción del defecto de curvatura frontal (\"SKI\") en un laminador reversible (usando un meta-modelo que combina redes neuronales, XGBoost, Random Forest y Extra Trees). Los resultados demuestran que la analítica industrial puede generar valor de negocio tangible en términos de calidad, eficiencia operativa y reducción de riesgos."
        },
        {
          "rel_path": "Unidad 1/Bibliografía/How Smart_Connected Products ..md",
          "fecha": "No identificada",
          "temas": "Productos inteligentes y conectados, transformación organizacional, cadena de valor, IoT, datos y analytics, nuevas estructuras funcionales, manufactura digital",
          "resumen": "El artículo de Porter y Heppelmann (HBR, octubre 2015) analiza cómo los productos inteligentes y conectados transforman internamente las empresas manufactureras. Examina el impacto en cada función de la cadena de valor: desarrollo de producto, manufactura, logística, marketing, ventas, servicio posventa, seguridad y recursos humanos. Destaca el surgimiento de nuevas capacidades basadas en datos, analytics avanzado y gemelos digitales. Propone nuevas estructuras organizacionales como unidades de datos unificadas, grupos dev-ops y unidades de gestión del éxito del cliente, señalando que la transformación representa la mayor discontinuidad en la organización manufacturera desde la Segunda Revolución Industrial."
        },
        {
          "rel_path": "Unidad 1/Bibliografía/IIoT_Combining_IT_OT.md",
          "fecha": "No identificada",
          "temas": "IIoT, convergencia OT-IT, SCADA, protocolo MQTT, plataforma industrial, Industria 4.0",
          "resumen": "El documento es un white paper de Inductive Automation que explora el concepto del Internet Industrial de las Cosas (IIoT) y la necesidad de integrar la Tecnología Operacional (OT) con la Tecnología de la Información (IT). Se analizan las diferencias históricas entre ambos dominios, los beneficios de su alineación (mejor toma de decisiones, reducción de costos, optimización de procesos) y los desafíos que implica, especialmente en materia de seguridad e interoperabilidad. Se argumenta que la implementación del IIoT debe abordarse desde una perspectiva bottom-up (desde el nivel OT hacia arriba), y se presentan el protocolo MQTT y la plataforma Ignition como soluciones tecnológicas clave para lograr esta convergencia."
        }
      ]
    ],
    [
      [
        "Unidad 1",
        "Recursos Didácticos"
      ],
      [
        {
          "rel_path": "Unidad 1/Recursos Didácticos/Video charla sobre ISA 95 - Gustavo  Guitera.txt",
          "fecha": "No identificada",
          "temas": "ISA-95, pirámide de Purdue, MES/MOM, integración IT/OT, modelos de manufactura, lotes y trazabilidad, dominios de producción/mantenimiento/calidad/inventario",
          "resumen": "Charla introductoria de Gustavo Vitera (tesorero de ISA Sección Argentina) sobre el estándar ISA-95, que define la integración vertical entre sistemas de control de piso de planta y sistemas ERP. Se explica la pirámide de Purdue, los niveles de automatización (0 al 4), y los cuatro pilares del modelo MOM/MES: producción, mantenimiento, calidad e inventario. Se describe cómo la norma modela recursos (equipos, materiales, personas), órdenes de trabajo, rutas de fabricación, ciclos de vida de lotes y trazabilidad. También se mencionan diferencias con ISA-88 (procesos Batch) e ISA-106 (procesos continuos), y la relación futura con RAMI 4.0 e inteligencia artificial aplicada a manufactura."
        }
      ]
    ],
    [
      [
        "Unidad 2"
      ],
      [
        {
          "rel_path": "Unidad 2/clase 21.05.2026. Lean_starrtup.md",
          "fecha": "21/05/26",
          "temas": "Industria 5.0, Inteligencia Artificial y Machine Learning en procesos industriales, metodología Lean Startup, modelos de negocio, IIoT, CRISP-DM, plataformas low-code, casos de aplicación industrial",
          "resumen": "La clase aborda cómo democratizar el uso de modelos analíticos basados en IA/ML en empresas industriales para optimizar procesos productivos, con foco en el empoderamiento del operador. Se presenta una propuesta que combina un modelo de negocios con la metodología Lean Startup y plataformas low-code, integradas con arquitecturas IIoT y el estándar ISA 95. Se exponen casos concretos de aplicación en industrias metalúrgica, minera (cobre) y energética, donde se utilizaron modelos predictivos y de optimización. Las conclusiones destacan que la adopción ágil de IA reduce plazos, facilita la co-creación entre expertos industriales y de software, y requiere infraestructura digital madura con datos históricos de calidad."
        },
        {
          "rel_path": "Unidad 2/Presentación UGR 2-10-2025.md",
          "fecha": "02/10/25",
          "temas": "Automatización 4.0, ISA 95, jerarquía de automatización, Gateway IoT, SIMATIC IoT, obtención de datos de planta, OEE, trabajo práctico",
          "resumen": "La clase aborda los conceptos de Automatización 4.0 e ISA 95, explicando la jerarquía de organización industrial (firma, planta, área, línea, equipo) y la identificación de activos y variables mediante TAGs. Se presentan ejemplos concretos de obtención de datos en un proceso de cocción de aceite refinado, incluyendo series temporales de sensores, datos de órdenes de producción y métricas OEE. Se introducen conceptos de integración con protocolos OPC-UA, Node-RED y niveles L2/L3 de la pirámide de automatización. La clase cierra con un trabajo práctico donde los alumnos deben armar una planilla Excel con la jerarquía completa de una planta y sus variables codificadas."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Actividades"
      ],
      [
        {
          "rel_path": "Unidad 2/Actividades/TP_presentado en 2023.md",
          "fecha": "2023 (fecha exacta no identificada)",
          "temas": "Industria 4.0, IIoT, Node-RED, OPC UA, dashboard, KPIs industriales, modelo de negocio Canvas, producto mínimo viable",
          "resumen": "Trabajo práctico integrador del Seminario de Introducción al Modelo Industria 4.0 (TUDAI 2023), en el que el Grupo 4 desarrolló un sistema de monitoreo en Node-RED conectado a un servidor OPC UA de una planta industrial (Loma Negra). El sistema captura cinco variables de proceso de un horno rotativo (dosificación de harina, flujos de gas, potencia y velocidad) y las visualiza en un dashboard con gauges y gráficos en tiempo real. Se implementaron cálculos de KPIs como consumo específico de gas por tonelada y costo energético en USD/h, con alertas visuales ante desvíos. El trabajo incluye además un modelo de negocio Canvas orientado a la transformación digital de empresas industriales mediante servicios IIoT."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Actividades",
        "Textos de lectura para clase de 16_10Carpeta"
      ],
      [
        {
          "rel_path": "Unidad 2/Actividades/Textos de lectura para clase de 16_10Carpeta/caso practico de aplicación de ISA 95.md",
          "fecha": "16/10 (año no identificado)",
          "temas": "Norma ISA-95, integración empresa-planta, niveles jerárquicos de manufactura, B2MML, OPC UA, MES, planta piloto automatizada",
          "resumen": "El documento presenta un caso práctico de aplicación de la norma ISA-95 en una planta piloto construida en la UNGS, que controla lazos de temperatura, caudal, presión y nivel. Se revisan los niveles jerárquicos definidos por el estándar, la terminología asociada (ERP, MES, SCADA, PLC, entre otros) y los mecanismos de integración entre sistemas de gestión y de planta. Se analiza B2MML como implementación XML de ISA-95 para transferencia de información, reconociendo su complejidad para entornos de laboratorio. Como alternativa superadora se propone OPC UA 95, y mientras este estándar madura, se plantea una implementación demostrativa simplificada mediante variables emuladas en el sistema HMI/SCADA."
        },
        {
          "rel_path": "Unidad 2/Actividades/Textos de lectura para clase de 16_10Carpeta/texto para leer sobre estrategia de datos.md",
          "fecha": "16/10/24",
          "temas": "Estrategia de datos, dark data, dismissed data, gestión de datos, arquitectura tecnológica, legacy systems, APIs, datos no estructurados",
          "resumen": "El artículo, publicado en CIO TechWorld (diciembre 2024), utiliza la metáfora de un vaso agrietado para describir los problemas de gestión de datos en organizaciones modernas: sistemas legados, dependencia de APIs como soluciones parche, proliferación de fuentes y fragmentación tecnológica. Introduce los conceptos de \"dark data\" (datos almacenados pero no utilizados) y \"dismissed data\" (datos generados pero nunca retenidos), señalando que la mayoría de las organizaciones desperdician una porción enorme de su potencial informacional. Propone combinar un enfoque estratégico (identificar y capturar datos que generen valor real) con uno oportunista (explotar datos ya almacenados mediante IA y machine learning), priorizando impacto sobre cobertura total."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Bibliografía"
      ],
      [
        {
          "rel_path": "Unidad 2/Bibliografía/nodeRed.DigitalTwin.md",
          "fecha": "No identificada",
          "temas": "Digital Twin, Node-RED, IoT Industrial, mantenimiento predictivo, Random Forest, MQTT, moldeo por inyección de plástico",
          "resumen": "Este artículo científico presenta una implementación de gemelo digital (digital twin) usando Node-RED en el sector manufacturero, tomando como caso de estudio el moldeo por inyección de plástico. Se describe la arquitectura del sistema, que conecta el gemelo digital con su contraparte física mediante el protocolo MQTT. El gemelo digital incorpora un algoritmo de Random Forest para clasificación de calidad de productos, logrando una precisión del 92,76%. Además, incluye un dashboard interactivo para visualización y un sistema de notificaciones por SMS y correo electrónico ante condiciones anómalas, demostrando la viabilidad y flexibilidad de Node-RED para este tipo de aplicaciones IIoT."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Mongodb Influxdb IIoTCarpeta"
      ],
      [
        {
          "rel_path": "Unidad 2/Mongodb Influxdb IIoTCarpeta/00-IIoT.txt",
          "fecha": "No identificada",
          "temas": "IoT, IIoT, Node-RED, MongoDB, InfluxDB, sensores y actuadores, protocolos M2M, plataformas IoT industriales",
          "resumen": "La clase introduce los conceptos de IoT e IIoT, definiéndolos como conjuntos de dispositivos, sensores y actuadores conectados a Internet para monitoreo, control remoto y optimización de procesos industriales. Se describen principios clave del IIoT como recopilación de datos, geolocalización, actuación y analítica, así como plataformas relevantes (AWS, Azure, Ubidots). Se presenta Node-RED como framework de desarrollo basado en JavaScript para conectar hardware, servicios y protocolos industriales como OPC-UA, destacando sus contextos de almacenamiento de mensajes. Finalmente, se menciona la instalación de bases de datos no estructuradas MongoDB e InfluxDB para su integración con Node-RED, y se orienta sobre cómo instalar el entorno localmente."
        },
        {
          "rel_path": "Unidad 2/Mongodb Influxdb IIoTCarpeta/1-Registro MongoDB.txt",
          "fecha": "No identificada",
          "temas": "MongoDB Atlas, bases de datos NoSQL, IoT, creación de organización y proyecto, configuración de cluster, conexión con Node.js",
          "resumen": "La clase muestra paso a paso cómo registrarse y configurar una base de datos NoSQL en MongoDB Atlas para su uso en entornos IoT con Node.js. Se explica cómo crear una organización, un proyecto y un cluster gratuito (512 MB de almacenamiento) dentro de la plataforma. Se detalla la configuración de usuario y contraseña para acceder a la base de datos, y se menciona la selección del driver de Node.js (versión 6.7 en adelante) como método de conexión. El video forma parte de una serie, siendo el siguiente enfocado en la conexión efectiva entre Node.js y MongoDB."
        },
        {
          "rel_path": "Unidad 2/Mongodb Influxdb IIoTCarpeta/2-Creación de variable MongoDB.txt",
          "fecha": "No identificada",
          "temas": "MongoDB, Node-RED, configuración de nodo MongoDB4, inserción de datos, variables globales, IIoT",
          "resumen": "La clase muestra cómo integrar MongoDB con Node-RED instalando el nodo MongoDB4 y configurando la conexión con credenciales, nombre de base de datos y colección. Se explican los tipos de operaciones disponibles (Insert, Update, Delete, Aggregate, entre otras), enfocándose en la operación InsertOne para el caso de uso de la cátedra. Se desarrolla un flow demostrativo que genera valores aleatorios cada 30 segundos, simula una variable proveniente de un PLC con protocolo OPC-UA, le agrega un timestamp formateado y almacena los datos en el cluster de MongoDB, verificando finalmente que la información queda correctamente guardada en la base de datos."
        },
        {
          "rel_path": "Unidad 2/Mongodb Influxdb IIoTCarpeta/4-Construir varibale en Influxdb.txt",
          "fecha": "No identificada",
          "temas": "InfluxDB, configuración de nodos input/output, organización y contenedores, métricas y mediciones, tokens de autenticación, Node-RED, IIoT",
          "resumen": "La clase explica cómo terminar de configurar los nodos de input/output en InfluxDB para enviar y recibir información desde una base de datos. Se detalla cómo identificar la organización, el contenedor (bucket) y la medición correspondiente (en este caso, vapor) dentro del entorno de trabajo. Se muestra cómo visualizar los datos almacenados mediante gráficos y cómo distinguir entre nodos de entrada (almacenar datos) y salida (extraer datos). Finalmente, se explica cómo regenerar el token de autenticación en caso de errores de autorización."
        },
        {
          "rel_path": "Unidad 2/Mongodb Influxdb IIoTCarpeta/Presentacion DB configuraciones.md",
          "fecha": "No identificada",
          "temas": "IoT, IIoT, Node-RED, MongoDB, InfluxDB, Siemens Xcelerator, bases de datos NoSQL, plataformas industriales",
          "resumen": "La presentación introduce los conceptos de IoT e IIoT, sus principios y las ventajas de utilizar plataformas industriales para el monitoreo y control remoto. Se describe Node-RED como herramienta de integración visual, mostrando ejemplos de conexión con OPC-UA, Telegram y Oracle. Se detalla la configuración y uso de MongoDB e InfluxDB como bases de datos NoSQL para almacenamiento de series temporales en proyectos IIoT. Finalmente, se presenta Siemens Xcelerator (Insight Hub) como plataforma industrial avanzada para visualización, análisis de activos y generación de reportes mediante dashboards y KPIs."
        }
      ]
    ],
    [
      [
        "Unidad 2",
        "Recursos Didácticos"
      ],
      [
        {
          "rel_path": "Unidad 2/Recursos Didácticos/Video charla ISA 95- Gustavo Guitera.txt",
          "fecha": "No identificada",
          "temas": "ISA-95, integración IT/OT, pirámide de Purdue, MES/MOM, modelos de manufactura, trazabilidad de lotes, dominios de producción/calidad/mantenimiento/inventario",
          "resumen": "La charla, presentada por Gustavo Vitera (tesorero de ISA Sección Argentina), introduce el estándar ISA-95 como marco para la integración vertical entre sistemas de control de piso de planta y sistemas ERP. Se explica la pirámide de Purdue con sus niveles 0 al 4, diferenciando procesos discretos, batch y continuos (ISA-88 e ISA-106), y se presentan los cuatro pilares del MOM/MES: producción, calidad, mantenimiento e inventario. Se abordan conceptos como la modelización de equipos, materiales, lotes, rutas de fabricación y ciclos de vida de objetos, con ejemplos prácticos de definición de segmentos productivos y trazabilidad de lotes. Se destacan los beneficios del estándar para la transformación digital: flexibilidad operativa, control estadístico de procesos, reducción de errores manuales y preparación de datos para modelos de inteligencia artificial."
        }
      ]
    ]
  ]
}
-->
