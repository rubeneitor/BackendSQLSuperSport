const express = require('express');
const bodyParser = require('body-parser');

import { getAllMovie, getUsuarioCarrito } from './Controllers/UserController';
import { getAllMovieP } from './Controllers/ProductoController';
import { getAllCarrito } from './Controllers/CarritoController';
import { getAllCategorias } from './Controllers/CategoriaController';


    
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/productos', getAllMovieP);
app.get('/carrito', getAllCarrito);
app.get('/carritoUsuario/:id', getUsuarioCarrito)
app.get('/categoria', getAllCategorias)


export default app;