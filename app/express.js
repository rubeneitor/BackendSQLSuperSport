const express = require('express');
const bodyParser = require('body-parser');
var authRouter = require('./routes/auth');

import { getAllMovie, getUsuarioCarrito } from './Controllers/UserController';
import { getAllProductos } from './Controllers/ProductoController';
import { getAllCategorias } from './Controllers/CategoriaController';
import { getAllUsers } from './Controllers/UserController'
import { login } from './Controllers/UserController'
import { getProductoPorNombre } from './Controllers/ProductoController'
import { getUsuario } from './Controllers/UserController'
import { getProductosCarrito } from './Controllers/ProductoController'
import { getOrderPorUser } from './Controllers/OrderController'
import { añadirProducto } from './Controllers/ProductoController'


    
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
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
app.get('/orders/user/:idUser', getOrderPorUser)
app.post('/addProduct', añadirProducto)


export default app;