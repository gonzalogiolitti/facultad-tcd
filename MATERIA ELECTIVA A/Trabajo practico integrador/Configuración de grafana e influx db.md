<!-- página 1 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
 
Configuración de grafana con influxdb en la nube. 
1ero 
Ingresar a https://grafana.com/ e iniciar sesión 
2do 
Ingresar a grafana cloud por medio del launch. 
 
3ro 
En la barra lateral, ir hacia el desplegable de connections o conexiones, desplegar la 
barra y dar click en “Add new connections” o “nueva conexión”

---

<!-- página 2 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
 
4to 
Seleccionamos influxdb

---

<!-- página 3 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
5to 
Seleccionamos InfluxDB Data Source 
 
 
Seleccionamos luego Add new data source

---

<!-- página 4 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
6to 
Aparece la siguiente Ventana a configurar de la siguiente manera 
 
 
6.1 
URL: obtener la URL de la organización de nuestra INFLUXDB CLOUD

---

<!-- página 5 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
Vamos hacia nuestra organización 
 
Damos click derecho y seleccionamos settings 
 
 
Buscamos la URL de nuestra organización

---

<!-- página 6 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
Copiamos la URL y vamos a nuestra ventana de grafana 
 
6.2 
En producto seleccionamos “InfluxDB cloud services” y query languages seleccionamos 
“Flux”

---

<!-- página 7 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
6.3 
En la ventana organización llenamos los datos de la siguiente manera 
 
En organization completamos el nombre de nuestra organización

---

<!-- página 8 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
En el “bucket” o cajon agregamos nuestro bucket de datos, desde el desplegable de 
nuestra influxdb cloud en el siguiente icono de la imagen. 
 
 
Seleccionamos la sección buckets y encontramos nuestro deposito 
 
 
Luego vamos a la creación de token desde nuestro desplegable del siguiente icono

---

<!-- página 9 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
Damos click a Generate API Token y lo guardamos en un archivo de texto para no 
perderlo 
 
**AVISO IMPORTANTE** 
El token api debe ser el mismo tanto para node-red como para influxdb, en caso de 
cambiarlo en alguno de ellos, también debe hacerse en el otro. 
**AVISO IMPORTANTE** 
 
6.4 
Una vez terminado damos click en save y test y default conection.

---

<!-- página 10 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
 
 
7 
Una vez terminado de configurar nuestra conexión chequear la conectividad en la 
sección de data sources

---

<!-- página 11 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
 
Si nuestra conexión esta ok se vera de la siguiente manera 
 
 
Caso contrario aparecerá la leyenda failed 
 
 
8

---

<!-- página 12 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
Crear un dashboard buscando el icono de mas en la esquina superior 
 
 
 
 
Seleccionamos un time series y configuramos el dashboard 
 
 
10 
Para configurar nuestro dashboard copiamos el siguiente código 
from(bucket: "UGRJOEL") 
  |> range(start: -15m) 
  |> filter(fn: (r) => r["_measurement"] == "motor_cinta") 
  |> filter(fn: (r) => r["_field"] == "corriente") 
  |> filter(fn: (r) => exists r["_value"] and r["_value"] != "") 
 
El bucket va a corresponder al deposito de variables nuestros, en este caso UGRJOEL, 
dentro de doble comilla “UGRJOEL”

---

<!-- página 13 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
Range: Va a corresponder en símbolo negativo el tiempo que nos interesa ver, en este 
ejemplo -15m que corresponde a menos 15 minutos desde que se hace la consulta. 
Measurement va a corresponder a la sección donde están guardados nuestras 
variables, es decir nuestros activos industriales. 
Field va a corresponder a las variables de nuestros activos industriales 
El ultimo filtro va a corresponder para eliminar los nulos y vacíos. 
 
 
 
 
La siguiente imagen muestra la estructura de influxdb y los campos a utilizar para 
grafana.

---

<!-- página 14 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
 
 
11 
Customizaciones de grafana 
 
 
 
 
 
 
Mediciones del activo 
industrial 
Variables de activo

---

<!-- página 15 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
Esta sección permite ajustar el rango de tiempo de nuestro grafico. 
 
 
 
 
En caso de agregar mas variables en distintos querys seleccionamos add query y 
copiamos el mismo código de lectura

---

<!-- página 16 -->

Configuración de 
influxdb cluster y 
grafana 
Profesor: Joel Acosta 
 
CIENCIA DE 
DATOS EN LOS 
SISTEMAS 
INDUSTRIALES 
 
 
Permite generar mas consultas de fields. 
 
En la barra lateral Add field override, permite alterar el nombre de la variable o 
promedios o alguna función personalizada de colores que queramos para nuestro 
tablero 
 
 
Tambien se encuentra disponible la herramienta de IA de grafana que permite avanzar 
en la configuración de nuestros tableros y optimizar el código