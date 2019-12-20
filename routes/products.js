var express = require('express');
var router = express.Router();

const {
  getAllProducts,
  getProductPorNombre,
  nuevoProducto,
  getProductsByCategory,
} = require('../controllers/products.js');

/* GET users listing. */
router.get('/productos', getAllProducts);
router.get('/nombre/:nombre', getProductPorNombre);
router.get('/productos/:nombreCategoria', getProductsByCategory)
router.post('/nuevoProducto', nuevoProducto);

module.exports = router;
