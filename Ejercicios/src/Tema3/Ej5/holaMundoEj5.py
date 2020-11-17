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