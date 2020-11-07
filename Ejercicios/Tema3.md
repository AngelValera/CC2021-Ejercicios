## Ejercicios Tema 3: Contenedores y cómo usarlos


#### Ejercicio 1: Buscar alguna demo interesante de Docker y ejecutarla localmente, o en su defecto, ejecutar la imagen anterior y ver cómo funciona y los procesos que se llevan a cabo la primera vez que se ejecuta y las siguientes ocasiones.

En primer lugar lo que se ha hecho ha sido instalar Docker, siguiendo el proceso de instalación para Ubuntu, que aparece en web, y al que se puede acceder directamente desde este [enlace](https://docs.docker.com/engine/install/ubuntu/).

Para realizar este primer ejercicio, se ha utilizado este [contenedor](https://hub.docker.com/r/jjmerelo/docker-daleksay/) de ejemplo.

Para ello se ha ejecutado el siguiente comando:

`docker run --rm jjmerelo/docker-daleksay -f smiling-octopus Uso argumentos, ea`

Podemos ver en la siguiente captura el resultado:

![Ejecución del contenedor de prueba usando Docker por primera vez](img/Tema3/Ej1_1.png "Ejecución del contenedor de prueba usando Docker por primera vez")


Como se puede apreciar en la captura anterior, en primer lugar, revisa si ya existe la imagen en local y al no encontrarla, entonces la busca en el repositorio remoto y una vez encontrada, entonces, se descarga la última versión.

De aquí en adelante, mientras no eliminemos la imagen de nuestro repositorio local, cuando ejecutemos el contenedor, no se volverá a descargar la imagen desde el remoto.

![Ejecución del contenedor de prueba usando Docker por segunda vez](img/Tema3/Ej1_2.png "Ejecución del contenedor de prueba usando Docker por segunda vez")



---
#### Ejercicio 2: Tomar algún programa simple, “Hola mundo” impreso desde el intérprete de línea de órdenes, y comparar el tamaño de las imágenes de diferentes sistemas operativos base, Fedora, CentOS y Alpine, por ejemplo.

---
#### Ejercicio 3: Crear a partir del contenedor anterior una imagen persistente con commit.

---
#### Ejercicio 4 Examinar la estructura de capas que se forma al crear imágenes nuevas a partir de contenedores que se hayan estado ejecutando.

---
#### Ejercicio 5: rear un volumen y usarlo, por ejemplo, para escribir la salida de un programa determinado.

---
#### Ejercicio 6: Usar un miniframework REST para crear un servicio web y introducirlo en un contenedor, y componerlo con un cliente REST que sea el que finalmente se ejecuta y sirve como “frontend”.

---
#### Ejercicio 7: Reproducir los contenedores creados anteriormente usando un Dockerfile.

---
#### Ejercicio 8: Crear con docker-machine una máquina virtual local que permita desplegar contenedores y ejecutar en él contenedores creados con antelación.

---