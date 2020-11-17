## Ejercicios Tema 3: Contenedores y cómo usarlos

- [Ejercicios Tema 3: Contenedores y cómo usarlos](#ejercicios-tema-3-contenedores-y-cómo-usarlos)
    - [Ejercicio 1: Buscar alguna demo interesante de Docker y ejecutarla localmente, o en su defecto, ejecutar la imagen anterior y ver cómo funciona y los procesos que se llevan a cabo la primera vez que se ejecuta y las siguientes ocasiones.](#ejercicio-1-buscar-alguna-demo-interesante-de-docker-y-ejecutarla-localmente-o-en-su-defecto-ejecutar-la-imagen-anterior-y-ver-cómo-funciona-y-los-procesos-que-se-llevan-a-cabo-la-primera-vez-que-se-ejecuta-y-las-siguientes-ocasiones)
    - [Ejercicio 2: Tomar algún programa simple, “Hola mundo” impreso desde el intérprete de línea de órdenes, y comparar el tamaño de las imágenes de diferentes sistemas operativos base, Fedora, CentOS y Alpine, por ejemplo.](#ejercicio-2-tomar-algún-programa-simple-hola-mundo-impreso-desde-el-intérprete-de-línea-de-órdenes-y-comparar-el-tamaño-de-las-imágenes-de-diferentes-sistemas-operativos-base-fedora-centos-y-alpine-por-ejemplo)
    - [Ejercicio 3: Crear a partir del contenedor anterior una imagen persistente con commit.](#ejercicio-3-crear-a-partir-del-contenedor-anterior-una-imagen-persistente-con-commit)
    - [Ejercicio 4 Examinar la estructura de capas que se forma al crear imágenes nuevas a partir de contenedores que se hayan estado ejecutando.](#ejercicio-4-examinar-la-estructura-de-capas-que-se-forma-al-crear-imágenes-nuevas-a-partir-de-contenedores-que-se-hayan-estado-ejecutando)
    - [Ejercicio 5: Crear un volumen y usarlo, por ejemplo, para escribir la salida de un programa determinado.](#ejercicio-5-crear-un-volumen-y-usarlo-por-ejemplo-para-escribir-la-salida-de-un-programa-determinado)
    - [Ejercicio 6: Usar un miniframework REST para crear un servicio web y introducirlo en un contenedor, y componerlo con un cliente REST que sea el que finalmente se ejecuta y sirve como “frontend”.](#ejercicio-6-usar-un-miniframework-rest-para-crear-un-servicio-web-y-introducirlo-en-un-contenedor-y-componerlo-con-un-cliente-rest-que-sea-el-que-finalmente-se-ejecuta-y-sirve-como-frontend)
    - [Ejercicio 7: Reproducir los contenedores creados anteriormente usando un Dockerfile.](#ejercicio-7-reproducir-los-contenedores-creados-anteriormente-usando-un-dockerfile)
    - [Ejercicio 8: Crear con docker-machine una máquina virtual local que permita desplegar contenedores y ejecutar en él contenedores creados con antelación.](#ejercicio-8-crear-con-docker-machine-una-máquina-virtual-local-que-permita-desplegar-contenedores-y-ejecutar-en-él-contenedores-creados-con-antelación)

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

Para este ejercicio se ha creado un programa muy simple en python que imprime por consola el mensaje "Hola Mundo", se puede encontrar este programa en el siguiente [fichero](src/Tema3/Ej2/holaMundo.py).

Posteriormente se ha creado un fichero [Dockerfile](src/Tema3/Ej2/Dockerfile), a partir del cual se han creado tres imágenes, una con Fedora, otra con Centos y otra con Alpine.

La creación y ejecución del contenedor con la imagen de Fedora, se puede ver a continuación:

![Creación de la imagen Fedora](img/Tema3/Ej2_1.png "Creación de la imagen Fedora")

La creación y ejecución del contenedor con la imagen de Centos, se puede ver a continuación:

![Creación de la imagen Fedora](img/Tema3/Ej2_2.png "Creación de la imagen Fedora")

La creación y ejecución del contenedor con la imagen de Alpine, se puede ver a continuación:

![Creación de la imagen Fedora](img/Tema3/Ej2_3.png "Creación de la imagen Fedora")

Finalmente, en la siguiente imagen podemos comprobar las imágenes que se han creado, así como sus tamaños.

![Imágenes creadas](img/Tema3/Ej2_4.png "Imágenes creadas")

Como se puede comprobar, la imagen que ha ocupado menos espacio ha sido la imagen que usa Alpine como sistema de base.

---
#### Ejercicio 3: Crear a partir del contenedor anterior una imagen persistente con commit.

Para este ejercicio lo primero será comprobar si tenemos algún contenedor ejecutandose, de no se así podemos ejecutar uno. en mi caso, he vuelto a ejecutar el contenedor que tenía como sistema base Alpine.

Seguidamente, comprobamos que el contenedor se está ejecutando con el siguiente comando:

`docker ps -l `

Copiamos el `CONTAINER ID` y posteriormente ejecutamos el siguiente comando:

`docker commit d3705337d7b4 alpine_holamundo_commit`

Esto efectivamente nos habrá creado una nueva imagen a partir del contenedor cuya id hemos indicado y le asigna el nombre que le hayamos indicado posteriormente.

Podemos ver el proceso completo en la siguiente captura:

![Crear una imagen persistenete](img/Tema3/Ej3_1.png "Crear una imagen persistente")

---
#### Ejercicio 4 Examinar la estructura de capas que se forma al crear imágenes nuevas a partir de contenedores que se hayan estado ejecutando.

En mi caso para poder ver la estructura de capas que se forma al crear una nueva imagen y partiendo de la imagen que creamos en el ejercicio anterior, debemos hacer lo siguiente:

![Abrir fichero con las capas](img/Tema3/Ej4_1.png "Abrir fichero con las capas")

![Capas de la imagen alpine_holamundo](img/Tema3/Ej4_2.png "Capas de la imagen alpine_holamundo")

Como se puede ver hemos tenido que mostrar el contenido de un fichero en formato JSON. 

Concretamente en el apartado "diff_ids" podemos ver las nuevas capas, si comparamos por ejemplo, con las capas de la imagen Alpine de base que podemos ver en la siguiente captura:

![Capas de la imagen Alpine base](img/Tema3/Ej4_3.png "Capas de la imagen Alpine base")


---
#### Ejercicio 5: Crear un volumen y usarlo, por ejemplo, para escribir la salida de un programa determinado.

Para crear un nuevo volumen lo que debemos hacer es ejecutar el siguiente comando indicando el nombre que queremos dar al nuevo volumen:

* `docker volume create <Volumen>` 

Para este ejercicio vamos a crear un nuevo volumen llamado "nuevoVolumenEj5":

* `docker volume create nuevoVolumenEj5` 

El siguiente paso es modificar el [programa](src/Tema3/Ej5/holaMundoEj5.py) en python que utilizamos para el segundo ejercicio, haciendo que en este caso, además de escribir por consola "hola mundo" lo haga en un fichero que crearemos dentro de un directorio.

```
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Hola Mundo para el ejercicio 5 de Contenedores.
@author: Ángel Valera Motos
"""

mensaje = "¡Hola mundo!"

print("¡Hola mundo!")

f = open ('./salida/holamundo.txt','w')
f.write(mensaje)
f.close()
```

Lo siguiente, es escribir el fichero [Dockerfile](src/Tema3/Ej5/Dockerfile):

```
#Imagen con Alpine
FROM alpine:latest

# Establecemos el directorio de trabajo.
WORKDIR /home/Ej5/app

# Instalamos Python 3
RUN apk update && apk add python3

# Copiamos el fichero fuente al directorio de trabajo.
COPY ./holaMundoEj5.py ./

# Ejecutamos el programa
CMD ["python3", "./holaMundoEj5.py"]
```
Una vez escrito el Dockerfile, construimos la imagen:

* `docker build --no-cache -t alpineholamundoej5 -f Dockerfile .`

Montada la imagen ejecutamos el contenedor, indicándole el nombre del volumen que acabamos de crear y le indicamos la ruta del directorio interno del contenedor donde se guardará el fichero con la salida de la ejecución del programa escrito en python.

* `docker run -it --rm  -v nuevoVolumenEj5:/home/Ej5/app/salida  alpineholamundoej5`

El resultado se puede ver en la siguiente captura:

![Ejecución del docker](img/Tema3/Ej5_1.png "Ejecución del docker")

Si accedemos al interior del contenedor al directorio `/home/Ej5/app/salida`, podemos contemplar que efectivamente se ha creado un fichero con la salida del programa:

![Interior del docker](img/Tema3/Ej5_2.png "Interior del docker")

Si inspeccionamos el volumen podemos ver la ruta donde se ha almacenado:

* `docker inspect nuevoVolumenEj5`
  
![Inpección del volumen](img/Tema3/Ej5_3.png "Inspección del volumen")

Ahora podemos desde fuera del contenedor ver el contenido del volumen y comprobar que efectivamente se encuentra el fichero con la salida del programa que ejecutamos dentro del contenedor:

![Contenido del volumen desde fuera del contenedor](img/Tema3/Ej5_4.png "Contenido del volumen desde fuera del contenedor")



---
#### Ejercicio 6: Usar un miniframework REST para crear un servicio web y introducirlo en un contenedor, y componerlo con un cliente REST que sea el que finalmente se ejecuta y sirve como “frontend”.

---
#### Ejercicio 7: Reproducir los contenedores creados anteriormente usando un Dockerfile.

---
#### Ejercicio 8: Crear con docker-machine una máquina virtual local que permita desplegar contenedores y ejecutar en él contenedores creados con antelación.

---