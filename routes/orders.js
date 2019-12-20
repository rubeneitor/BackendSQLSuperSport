var express = require('express');
var router = express.Router();

const {
  getAllOrders,
  getOrdersByUser,
  addOrder,
} = require('../controllers/orders.js');

/* GET users listing. */
router.get('/pedidos', getAllOrders);
router.get('/pedido/:UserId', getOrdersByUser)
router.post('/addOrder', addOrder)

module.exports = router;
