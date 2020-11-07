# Imagen con Fedora
#FROM fedora
# Imagen con Centos
#FROM centos
#Imagen con Alpine
FROM alpine:latest

# Establecemos el directorio de trabajo.
WORKDIR /home/Ej2/app

# Instalamos Python 3
# para Centos
#RUN dnf -y install python3
# Para Alpine
RUN apk update && apk add python3

# Copiamos el fichero fuente al directorio de trabajo.
COPY ./holaMundo.py ./

# Ejecutamos el programa
CMD ["python3", "./holaMundo.py"]