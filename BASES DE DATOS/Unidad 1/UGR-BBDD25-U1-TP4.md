<!-- página 1 -->

Unidad I – Trabajo Práctico 4 
Estudio de Caso: Aplicación de Música 
Ante la necesidad de desarrollar una aplicación de música que permita a los usuarios 
buscar y reproducir canciones de una biblioteca musical en línea, necesitamos 
modelar lo siguiente: 
 Contar con información de los usuarios de la aplicación, incluyendo su 
información personal como nombre, correo electrónico, fecha de nacimiento, 
así como algún identificador único. También puede incluir información sobre 
su actividad en la aplicación, como un historial de canciones que han 
escuchado. 
 La aplicación debe gestionar las canciones disponibles en la biblioteca, 
incluyendo información directa o indirecta sobre el título de la canción, el 
artista que la creo, el álbum al que pertenece, el género, la duración y su 
ISRC (International Standard Recording Code). A su vez, las canciones están 
organizadas o contenidas en álbumes, estos incluyen información sobre el 
título del álbum, el artista que lo lanzó, la fecha de lanzamiento, y la duración 
total del álbum, además de contar con un identificador único dentro del 
sistema. 
 Además, el usuario debe ser capaz de hallar canciones según el artista y no 
solo mediante el nombre de la canción, por lo que el sistema debe contar con 
información de los artistas tales como su nombre, su género musical y su 
biografía. Los usuarios también pueden crear sus propias listas de 
reproducción a voluntad, éstas pueden contener cualquier combinación de 
canciones en la biblioteca. 
La aplicación debe cumplir con las siguientes consideraciones: 
 Un usuario puede crear múltiples listas de reproducción, poseer listas vacías 
o carecer completamente de ellas. También debe poder ordenarlas por 
nombre o por fecha de creación, pero no puede tener listas del mismo nombre 
o repetidas en su colección ni tampoco compartirlas con otros usuarios. 
 Una canción puede existir como un sencillo sin álbum o pertenecer a uno o 
varios álbumes. Aunque una canción pueda incluirse en álbumes de otros 
artistas, solamente tendrá un único autor. 
 Un álbum puede contener múltiples canciones, pero no puede estar vacío, 
estos solamente serán lanzados en caso de haber una o más canciones para 
ser incluidas en él. Además, existen álbumes que incluyen canciones de 
varios artistas. 
 Un artista puede tener múltiples canciones y álbumes en la biblioteca musical 
en línea. Sin embargo, aunque pueda no tener álbumes lanzados, debe 
poseer al menos una canción de su autoría para pertenecer a la biblioteca.

---

<!-- página 2 -->

Construya el Diagrama Entidad-Relación y el Modelo Relacional asociado con esta 
información. Además, agregue (de manera textual) las consideraciones que 
necesitó realizar para completar la información faltante.