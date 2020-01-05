var express = require('express');
var router = express.Router();

const {
  getAllOrders,
  getOrdersByUser,
  addOrder,
  orderController
} = require('../controllers/orders.js');

/* GET orders listing. */
router.get('/pedidos', getAllOrders);
router.get('/pedido/:UserId', getOrdersByUser)
// router.post('/addOrder', addOrder)
router.post('/order', orderController)

module.exports = router;
