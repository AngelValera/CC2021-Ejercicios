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