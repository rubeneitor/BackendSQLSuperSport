var express = require('express');
var router = express.Router();

const {
  getAllProducts,
  getProductPorNombre,
  busquedaProducto,
  nuevoProducto,
  getProductsByCategory,
  updateProduct,
} = require('../controllers/products.js');

/* GET products listing. */
router.get('/', getAllProducts);
router.get('/nombre/:nombre', getProductPorNombre);
router.get('/productos/:nombreCategoria', getProductsByCategory);
router.get('/busquedaProducto:nombre', busquedaProducto);
router.post('/nuevoProducto', nuevoProducto);
router.put('/modificar/:id', updateProduct)

module.exports = router;
