const express = require('express');
const bodyParser = require('body-parser');
var authRouter = require('./routes/auth');

import { getAllMovie, getUsuarioCarrito } from './Controllers/UserController';
import { getAllProductos } from './Controllers/ProductoController';
import { getAllCarrito } from './Controllers/CarritoController';
import { getAllCategorias } from './Controllers/CategoriaController';
import { getAllUsers } from './Controllers/UserController'
import { login } from './Controllers/UserController'
import { getProductoPorNombre } from './Controllers/ProductoController'
import { getUsuario } from './Controllers/UserController'
import { getProductosCarrito } from './Controllers/ProductoController'


    
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRouter);

//Mostramos usuarios
// app.get('/usuarios', getAllUsers);
// app.get('/usuario/:username', getUsuario)

// app.get('./user', login)

app.get('/productos', getAllProductos);
// app.get('/carrito', getAllCarrito);
// app.get('/carritoUsuario/:id', getUsuarioCarrito)
app.get('/categoria', getAllCategorias)
app.get('/producto/nombre/:nombre', getProductoPorNombre)
// app.get('/productos/idCarrito/:idCarrito', getProductosCarrito)


export default app;