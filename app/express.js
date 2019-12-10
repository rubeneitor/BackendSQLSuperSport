const express = require('express');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Mostramos usuarios
app.get('/usuarios', getAllUsers);
app.get('/usuario/:username', getUsuario)

app.get('./user', login)

app.get('/productos', getAllProductos);
app.get('/carrito', getAllCarrito);
app.get('/carritoUsuario/:id', getUsuarioCarrito)
app.get('/categoria', getAllCategorias)
app.get('/producto/nombre/:nombre', getProductoPorNombre)
app.get('/productos/idCarrito/:idCarrito', getProductosCarrito)


export default app;