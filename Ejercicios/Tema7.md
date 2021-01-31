## Ejercicios Tema 7: Composición de servicios

<!-- 
[enlace](https://docs.docker.com/engine/install/ubuntu/).

![Ejecución del contenedor de prueba usando Docker por primera vez](img/Tema3/Ej1_1.png "Ejecución del contenedor de prueba usando Docker por primera vez")
 -->

- [Ejercicios Tema 7: Composición de servicios](#ejercicios-tema-7-composición-de-servicios)
    - [Ejercicio 1: Crear un pod con dos o más contenedores, de forma que se pueda usar uno desde el otro. Uno de los contenedores contendrá la aplicación que queramos desplegar.](#ejercicio-1-crear-un-pod-con-dos-o-más-contenedores-de-forma-que-se-pueda-usar-uno-desde-el-otro-uno-de-los-contenedores-contendrá-la-aplicación-que-queramos-desplegar)
    - [Ejercicio 2: Usar un miniframework REST para crear un servicio web y introducirlo en un contenedor, y componerlo con un cliente REST que sea el que finalmente se ejecuta y sirve como “frontend”.](#ejercicio-2-usar-un-miniframework-rest-para-crear-un-servicio-web-y-introducirlo-en-un-contenedor-y-componerlo-con-un-cliente-rest-que-sea-el-que-finalmente-se-ejecuta-y-sirve-como-frontend)

---
#### Ejercicio 1: Crear un pod con dos o más contenedores, de forma que se pueda usar uno desde el otro. Uno de los contenedores contendrá la aplicación que queramos desplegar.
 
En primer lugar lo que debemos hacer es instalar [Podman](https://podman.io/getting-started/installation). En mi caso al instalarlo sobre una distribución de Linux, he tenido que usar los siguiente comandos:

```shell
# Ubuntu 20.10 and newer
sudo apt-get -y update
sudo apt-get -y install podman
```
Una vez instalado comprobamos que efectivamente, se ha instalado correctamente:

![Comprobación de la instalación de Podman](img/Tema7/Ej1_1.png "Comprobación de la instalación de Podman")

A continuación, vamos a seguir el ejemplo que se indica en el siguiente [enlace](https://www.redhat.com/sysadmin/compose-podman-pods). En este ejemplo, se hace uso de dos contenedores, uno contiene MariaDB y el otro contiene Wordpress. Posteriormente, lo que hacemos es componer ambos contenedores para que puedan trabajar juntos.

Lo primero que debemos hacer es crear un pod, indicándo que el puerto externo 8080, será el puerto 80 interno que podman usará.

```shell
sudo podman pod create --name my-pod -p 8080:80
```
![Definimos el pod de podman](img/Tema7/Ej1_2.png "Definimos el pod de podman")

El siguiente paso es crear un contenedor dentro del pod que acabamos de crear, para ello usamos `podman run`. 

Según lo anterior, vamos a crear el contenedor de MariaDB.

```shell
sudo podman run \
-d --restart=always --pod=my-pod \
-e MYSQL_ROOT_PASSWORD="myrootpass" \
-e MYSQL_DATABASE="wp" \
-e MYSQL_USER="wordpress" \
-e MYSQL_PASSWORD="w0rdpr3ss" \
--name=wptest-db mariadb
```
![Creamos el contenedor con MariaDB dentro del pod](img/Tema7/Ej1_3.png "Creamos el contenedor con MariaDB dentro del pod")

Una vez que tenemos el contenedor con la base de datos, vamos a crear el contenedor con Wordpress, que a su vez hará uso de la base de datos definida anteriormente.

```shell
sudo podman run \
-d --restart=always --pod=my-pod \
-e WORDPRESS_DB_NAME="wp" \
-e WORDPRESS_DB_USER="wordpress" \
-e WORDPRESS_DB_PASSWORD="w0rdpr3ss" \
-e WORDPRESS_DB_HOST="127.0.0.1" \
--name wptest-web wordpress
```
![Creamos el contenedor dentro del pod](img/Tema7/Ej1_4.png "Creamos el contenedor dentro del pod")

Una vez que tenemos creados ambos contenedores dentro del pod, podemos comprobar el contenido de éste:

```shell
sudo podman pod ls
```
![Contenido del pod](img/Tema7/Ej1_5.png "Contenido del pod")

También podemos ver los contenedores que se están ejecutando:

```shell
sudo podman ps
```
![Contenido del pod](img/Tema7/Ej1_6.png "Contenido del pod")

Llegados a este punto, si desde el navegador, accedemos a la dirección http://localhost:8080, deberíamos poder observar la web de instalación de wordpress:

![Ejecución del pod](img/Tema7/Ej1_7.png "Ejecución del pod")


---
#### Ejercicio 2: Usar un miniframework REST para crear un servicio web y introducirlo en un contenedor, y componerlo con un cliente REST que sea el que finalmente se ejecuta y sirve como “frontend”.
