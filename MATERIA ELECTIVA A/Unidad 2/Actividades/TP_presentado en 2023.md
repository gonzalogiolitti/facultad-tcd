<!-- página 1 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
1
Trabajo Practico Integrador 
Grupo 4  
Seminario Introducción al Modelo Industria 4.0 
Estudiantes:
Matías García
Rosende Sebastián
Mariano Arrieta
Joaquin Tobal
Profesor: 
Walas Federico

---

<!-- página 2 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
2
Índice
Descripción del producto o servicio. .......................................................................................................3
Modelo de Negocio
Canva ...................................................................................................................4
PMV
Producto mínimo viable...............................................................................................................5
Explicación del desarrollo........................................................................................................................5

---

<!-- página 3 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
3
Descripción del producto o servicio.
Nuestro producto es el desarrollo de un sistema programado un flujo en Node-Red. Este se encarga 
de mostrar un dashboard con los valores obtenidos en el flujo programado, en base a los valores que 
el cliente solicita visualizar. En este caso se obtienen cinco valores en distintos puntos de la Línea 1 de 
ingresado en la línea. 
En el producto final se conecta al servidor OPC de fábrica, el cual obtiene los valores y luego se aplica 
la utilización de Node-Red para ejecutar la lógica con los datos obtenidos y se utilizan nodos de 
visualización (Gauge) para la creación de un dashboard. Este desarrollo se realizó en una VM (Virtual 
Machine) con un sistema operativo Windows Server 2022 donde se instaló Node-Red.
Con autorización y apoyo del equipo de ingeniería, se tomaron cinco variables del proceso para poder 
leer los valores en vivo de los PLC utilizando un servicio OPC con protocolo UA. Los valores a leer son 
los siguientes:
Dosificación Harina de Crudo. Este valor mide las toneladas de material que va a ingresar al 
horno.
Flujo de Gas de Precalentamiento. Este valor mide los metros cúbicos de gas natural que se 
utilizan en la torre de precalentamiento para quitarle la humedad al material que ingresa.
Flujo de Gas Principal. Este valor mide los metros cúbicos de gas natural que se utilizan en el 
quemador principal del horno.
Potencia de Horno Rotativo. El valor mide el consumo de Kv del motor rotativo del horno.
Velocidad de Horno Rotativo. Este valor mide las revoluciones estimativas del horno principal.
El PMV se realizó íntegramente en un VM con Node-red. El acceso a este desarrollo es únicamente en 
implementación.  Se muestra el cálculo de consumo especifico de gas por tonelada de producto 
ingresado, el cálculo de valorización del consumo energético en Us$/h, se establecen límites de 
consumo permitido y un aviso visual en el dashboard ante desvíos. 
Todos estos valores que se visualizan en línea durante la operación, como lo requirió el cliente, se 
utilizan para tomar decisiones de producción en la planta.

---

<!-- página 4 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
4
Modelo de Negocio
Canva
Alianzas
Procesos
Propuesta de 
valor
Relacionamiento
Segmento de 
clientes
Facultad de 
Ingeniería.
Representante
s de Loma 
Negra. 
Proveedores 
tecnológicos
Consultoría en 
RRHH.
Consultoría 
publicitaria.
Actividades 
claves: Análisis 
de la 
infraestructura, 
en base a las 
necesidades del 
cliente. 
Asesoramiento 
técnico.
Análisis de 
mediciones
Acompañar a 
nuestros 
clientes a 
lograr la 
transformación 
tecnológica a 
la industria 
4.0.
Vemos 
oportunidades 
en empresas 
que no 
implementaro
n IIoT.
Asesoría, 
gestión de los 
cambios, 
análisis, 
reingeniería de 
procesos, 
mantenimient
o, monitoreo. 
Personalizamos nuestra 
solución a cada cliente. 
Formar grupos de 
trabajos heterogéneos 
entre nuestros clientes 
y nuestro grupo de 
desarrollo.
Utilizamos las 
metodologías agiles.
Enfocáramos en un 
nicho de mercado 
orientado hacia la 
prestación de 
servicios, atendiendo 
tanto a PyMES, como 
a grandes 
corporaciones, con 
sistemas productivos 
orientados a 
procesos. 
Esto abarcará 
empresas con y sin 
sistemas de 
automatización.
Recursos
Canales de distribución
Capital 
humano, con 
experiencia en 
proceso. 
Instalaciones: 
Laboratorio 
propio.
Redes sociales, 
estrategia publicitaria y 
la recomendación 
personal.
Atención presencial y 
remota.
Costos
Ingresos
Capital humano. 
No contamos costos de 
alquileres.
Costo de operación del 
hardware y software. 
Derivados de nuestra propuesta de valor. A partir del cobro de 
horas de servicio.

---

<!-- página 5 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
5
PMV
Producto mínimo viable
Explicación del desarrollo
Definición de Variables:
KPI:
1- Dosificación de harina crudo: Ingreso de harina al horno
2- Flujo de Gas Precalc: precalentamiento de la harina, antes de ingresar al horno.
3- Flujo de Gas Ppal En: quemador principal, finaliza la cocción de la harina.
Operativas: 
4- Horno Rotativo Potencia Actual: potencia de giro del tubo del horno.
5- Horno Rotativo Velocidad Actual: Velocidad de giro del tubo.

---

<!-- página 6 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
6
Set V1-5: factor para alterar los datos reales.
Set Variables: son variables fijas de Flujo (no son globales)-> 
KCal (Kilocalorías): 8300 kcal del gas.
CostoGas: 20 dólares por GigaCaloría.
El valor del gas obtenido por la variable es en metro cubico, pero el cobro por el consumo es en Kcal. 
Por tal motivo, hay que hacer la conversión y estimar el costo.

---

<!-- página 7 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
7
Subscribe: permite la conexión con el servidor OPC. Acá se obtienen los valores reales cada 1 seg.
Switch: con el BrowseName obtenemos cada uno de los valores y lo sacamos por una salida distinta.

---

<!-- página 8 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
8
Nodos Función: en este parte modificamos los valores reales de cada variable.
Por ejemplo, para la Dosificación de harina de Crudo->
V1: tomo el dato de la variable declarada en el inicio.
El mensaje que recibo lo formateo a flotante con dos decimales.
Multiplico el mensaje recibido/valor por V1.

---

<!-- página 9 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
9
Creación de Dashboard (Gauge abc - chart)
Se genera un grupo para estructurar los gráficos.
Variables operativas KPI

---

<!-- página 10 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
10
Potencia del motor, tiene un gradiente que se administra según el rango dado:
Superior a 730: Rojo
Entre 700-730: Amarillo
Menos de 700: Verde
Finalmente se visualiza en pantalla:

---

<!-- página 11 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
11
Nodo Smooth: para suavizar los datos y obtener un promedio para visualizar mejor la curva y su 
análisis. Evita los picos o datos extremos.
Cada 120 valores, calcula el valor medio y lo devuelve.
Se crea dos Tópicos para posteriormente hacer el grafico:
Curva Azul: real
Curva Blanca: suavizada

---

<!-- página 12 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
12
Nodo función Suma Gas/h
Sumo las variables GAS_PPAL más GAS_PRECA para obtener el GAS_TOTAL.
Luego lo graficamos en el Gauge-> arriba las dos variables, abajo el total:

---

<!-- página 13 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
13
Nodo función Consumo Especifico
KPI key performance indicator (indicador clave de rendimiento): 
Obtengo las variables, las divido y se la asigno a una nueva variable CONS_ESP
Finalmente, lo gráfico:
Consumo especifico Estándar metro cubico/hora/tonelada

---

<!-- página 14 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
14
Nodo Hysteresis
Se estable un rango para ver como varia el KPI.
Nodo Función GCal/h:

---

<!-- página 15 -->

Seminario Introducción al Modelo Industria 4.0
TUDAI 2023
15
Nodo Función Costo/hora:
Gráfico completo
Conclusión
Fue un trabajo que nos permitió el aprendizaje de nuevas tecnologías, y protocolos de 
comunicación, adquirir nuevos conocimientos de la IIot, aunque no pudimos profundizar demasiado 
en los temas nos abrió a un nuevo mundo. 
Por otro lado, tuvimos la oportunidad de aprender de nuestros compañeros de equipo, cada uno 
aportó desde su experiencia para lograr este trabajo.