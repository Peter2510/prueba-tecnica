# API REST con Express y Sequelize

Este proyecto es una API REST construida con **Node.js**, **Express** y **Sequelize** como ORM para interactuar con una base de datos. También se utilizan variables de entorno para la configuración.

## Características

- API RESTful con Express
- Conexión a base de datos mediante Sequelize
- Uso de variables de entorno con `dotenv`
- Scripts de desarrollo con `nodemon`

## Requisitos

- Node.js >= 14
- Base de datos  MySQL

## Ejecucion

1. Crear la base de datos
Utilizar el archivo que se encuentra en la carpeta src/DB/database.sql y ejecutarlo en un entorno de base de datos MySQL.

2. Actualizar el archivo .env
Cambiar los datos el usuario de la base de datos del usuario y la contraseña de la base de datos,  ya que al ser de desarrollo utilice credenciales locales de mi entorno.  

3. Ejecutar
```bash
npm install
npm run dev