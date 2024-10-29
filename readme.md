# Servidor de peliculas y favoritos

Este servidor sirve para administrar la conexión con la base de datos `mongodb` y la obtención del listado de peliculas para una página de peliculas.

#### Dependencias:
Las dependencias usadas en este proyecto son las siguientes:
- **express**: Usada para crear la funcionalidad principal del servidor de forma sencilla.
- **cors**: Usada para especificar el middleware cors del servidor para permitir la llegada de peticiones y la gestión de permisos de uso.
- **morgan**: Sirve para mostrar en consola las peticiones y respuestas realizadas al servidor.
- **dotenv**: Nos permite utilizar archivos .env para la implementación de variables de entorno seguras en nuestro proyecto.
- **mongoose**: Permite crear modelos y conexiones con bases de datos mongodb y administrarlas de forma mas sencilla.
- **node-fetch**: Utilizada para gestionar las conexiones y obtención de datos de la API TMDB.
- **nodemon**: Dependencia de desarrollo que permite reiniciar el servidor cada vez que se realiza un cambio y se guarda.

#### Estructura
El archivo cuenta con diferentes carpetas colocadas dentro de una principal llamada `src` las cuales son las siguientes:
- **assets**: Contiene el diagrama de la base de datos. 
- **controllers**: Contiene los controladores de las rutas y la forma en la que se gestionan las respuestas.
- **database**: Contiene el archivo de la conexión principal con mongodb
- **models**: Tiene el modelo de la base de datos de favoritos llamada favs.
- **routes**: Enrutadores de nuestro servidor

Dentro de la misma carpeta `src` también nos encontramos los archivos:
- **app** => se encarga de crear el servidor con express, inicializar dotenv, incluir en nuestro servidor algunos servicios como cors, morgan y la conversion de datos en json y tambien de incluir los routers en nuestra aplicación.
- **cors** => Inicializa los cors de nuestra aplicación.
- **index** => archivo principal que obtiene el servidor de app.js y lo ejecuta en el puerto 3000. Tambien se encarga de inicializar la conexión con mongodb.

Cabe destacar que nuestro proyecto esta basado en la arquitectura **MVC** (modelo - vista - controlador) para dar mantenibilidad extra al mismo.