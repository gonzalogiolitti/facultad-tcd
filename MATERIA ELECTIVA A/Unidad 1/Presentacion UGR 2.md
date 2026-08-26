## Slide 1
- Presentación
- Ingeniero Industrial Joel Joaquín Acosta
- Ingeniero de procesos en Chaska Analytics
- Docente Universitario en la UNAJ
- Miembro de ISA Argentina.
- Linkedin
- www.linkedin.com/in/joel-joaquín-ホエル-ホアキン-acosta-アコスタ-94a39a123

## Slide 2
- Temario
- Sensores D. 4
- PLC D.10
- SCADA D. 15
- Internet de las Cosas (IoT) D. 19
- Internet Industrial de las Cosas (IoT) D. 22
- Gateway IoT D.28
- Node-Red D.30

## Slide 3
- Sensores
- Para crear nuestro entorno IIoT, debemos utilizar dispositivos que nos permitan interactuar con el entorno mas próximo, ya sea para recolectar información o modificar y adaptar ese entorno a nuestras necesidades.

## Slide 4
- Sensores
- Transductores: Son aquellos dispositivos que reciben una magnitud física (Presión, Humedad, Temperatura, Lux, etcétera) y la transforman en una magnitud distinta. En nuestro caso es necesario que transforma las magnitudes en una señal eléctrica para poder utilizar en nuestra unidad de control.
- Actuador: Es un transductor de salida que convierte una señal eléctrica que generamos por medios electrónicos, en una señal de otros medios físicos (Motores CC, Led, LDC, relé etcétera.)
- Sensor: transductor de entrada, que convierte una magnitud física en una señal eléctrica (Termistores, termopares, Celdas fotovoltaicas, etcétera)

## Slide 5
- Sensores
- Hay muchos sensores y actuadores inteligentes en la actualidad, es decir que la información ya se encuentra digitalizada y es necesario para acceder a ella instalar las librerías en las unidades de control.
- En otros casos la información se encuentra en medios analógicos y tenemos que hacer un proceso de acondicionamiento para acceder a ellas a través de la unidad de control.

## Slide 6
- Sensores
- En resumen, si queremos utilizar sensores, debemos contar con técnicas de:
- Acondicionamiento de señales:
- Adquisición de datos:
- Procesado digital de señales:
- Reconstrucción de señales.

## Slide 7
- Sensores
- Aplicaciones

## Slide 8
- Sensores
- Termocupla Sensor De Temperatura K Rosca 1/2 Bsp Con Cabezal
- Caudalímetro electromagnético PLC/SCADA

## Slide 9
- PLC (Controlador Lógico Programable)
- Es un dispositivo de control computarizado que cumple la función de realizar procesos automatizados en la industria. Se sustenta en la ingeniería automática y está elaborado para ejecutar E/S (Entradas y Salidas) de manera segura y rápida.
- Las partes principales son una CPU, modulos de memorias, modulo de E/S, Fuente de alimentación y la unidad de alimentación.
- EL PLC detecta diversos tipos de señales de los procesos y elabora y envía acciones acorde a lo que se ha programado ejemplo, encender y apagar bombas acorde al nivel de agua, encender y apagar motores de grupos electrógenos ante un corte eléctrico.

## Slide 10
- PLC
- Algunos PLC cuentan con dispositivos programables HMI (Human Machine Interface, “Interface Maquina Humano”), es una interfaz grafica que combinado con el PLC permite optimizar la programación y uso de la maquina, reduciendo el cableado de los dispositivos y los muestra en una pantalla grafica.

## Slide 11
- Diagrama de un PLC

## Slide 12
- Ejemplo de caso
- Se programará para que, cada 30 segundos, recoja las señales de diferentes sensores de temperatura y controlen que la temperatura se encuentre en el rango de 150°C a 50°C.
- En función de los sensores, se activarán los dispositivos de entrada y salida: semáforo, avisos luminosos, regulación válvulas de gas. Además, al tener acceso remoto, los operadores pueden acceder a la interfaz de la máquina y visualizar el estado del proceso, además de modificarlo en caso necesario.

## Slide 13
- Ejemplo de PLC
- Caldera
- Horno de cocción
- TermoparJ
- Termocuplas
- PLC
- HMI
- Señales Led

## Slide 14
- OPC-UA
- Protocolo de comunicación y arquitectura orientada a servicios independiente de la plataforma que integra toda la funcionalidad de las especificaciones OPC Classic individuales en un marco extensible. Permite el intercambio de información y datos en dispositivos dentro de máquinas, entre máquinas y desde máquinas a sistemas. La OPC UA cierra la brecha entre la tecnología de la información y la tecnología operativa.
- Este enfoque de múltiples capas logra los objetivos de especificación de diseño original de:
- Equivalencia funcional: todas las especificaciones OPC Classic están asignadas a UA
- Independencia de plataforma: de un microcontrolador integrado a una infraestructura basada en la nube
- Seguro: cifrado, autenticación y auditoría
- Extensible: capacidad de agregar nuevas funciones sin afectar las aplicaciones existentes
- Modelado de información integral: para definir información compleja

## Slide 15
- OPC-UA
- Descubrimiento: Se encuentra la disponibilidad de Servidores OPC en PC y/o redes locales
- Espacio de direcciones: todos los datos se representan jerárquicamente (por ejemplo, archivos y carpetas), lo que permite que los clientes OPC descubran y utilicen estructuras simples y complejas.
- Bajo demanda: leer y escribir datos/información según los permisos de acceso
- Suscripciones: monitorear datos/información e informar por excepción cuando los valores cambian según los criterios de un cliente
- Eventos: notificar información importante según criterio del cliente
- Métodos: los clientes pueden ejecutar programas, etc. según los métodos definidos en el servidor.

## Slide 16
- SCADA (Supervisory Control and Data Acquisition)
- SCADA (Supervisión, Control y Adquisición de Datos), no lo pensemos como una tecnología concreta en si, sino como un tipo de aplicación. Es un software para ordenadores que nos permiten controlar y supervisar  procesos a distancia. Facilita retroalimentación en tiempo real con los dispositivos de campo y controla los procesos de forma automática.
- El SCADA funciona por medio de los sensores que toman medidas, los plcs que recopilan y envían a un HMI para que un operador SCADA las vea, analice y actúe en consecuencia
- El software SCADA reúne los datos transmitidos por los PLC y los traduce en mapas de producción y visualizaciones de datos para los operarios. Los sistemas SCADA más pequeños pueden tener un software localizado en un único HMI / PC, mientras que las redes SCADA más grandes pueden tener una estación maestra con un software que se conecta a múltiples HMI y servidores

## Slide 17
- SCADA
- Proyecto SCADA

## Slide 18
- SCADA
- Ejemplo de datos relevantes de un SCADA
- Dirección IP del servidor 192.111.132
- Tag variable: CC_TCC11702A.Val_PV
- Descriptivo: Tº salida de caldera_PV
- Tipo de dato: Float
- Dirección ip de la variable: 10.2.04

## Slide 19
- Redes OT
- EL concepto de OT se refiere a Operational Technology (Tecnología operacional), son tecnologías de la gestión de procesos de producción, es decir ofrecen la integración del software y hardware para poder controlar, comunicar y supervisar los dispositivos dentro de las redes industriales
- Se refiere a dispositivos de computación y software que están interconectados entre si, diseñados para procesar, almacenar y transmitir datos e información.
- Red IT

## Slide 20
- Red IT/OT