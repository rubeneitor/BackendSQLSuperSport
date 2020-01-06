# Backend SuperSport
Este es el backend del proyecto E-commerce

## Pasos ejecutar
1- Para ejecutar el back, primero hay que iniciar el servidor, en este caso, se ha utilizado Xampp.
2- Una vez abierto el servidor se escribe el comando 'npm start'
3- Automaticamente se ejecutaran los metodos del back junto con la base de datos

## Pasos para realizar pruebas
1- En el archivo index.js de models, hay que introducir en la linea 37. db.sequelize.sync({force:true})
2- Importar los datos en el gestor de base de datos, en este caso se ha utilizado PhpMyAdmin
3- Mediante el programa Postman, se pueden realizar pruebas para mas tarde cosultar si ha funcionado en el gestor de base de datos



