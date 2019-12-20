const { Order } = require('../models');
const {Product} = require('../models')
const {User} = require('../models');

//Obtiene todos los pedidos
async function getAllOrders(req, res) {
    try {
        const pedidos = await Order.findAll();
        res.send(pedidos)

    } catch (error) {
        res.send(error)
    }
}

//Obtiene pedidos por usuario
async function getOrdersByUser(req, res){
    try {
        const pedidos = await Order.findAll({where: {UserId: req.params.UserId}})
        res.send(pedidos)
    } catch (error) {
        res.send(error)
    }
}

//Añadir un pedido
async function addOrder(req, res){
    try {
        // const producto = await Product.create(req.body.productos)
        const pedido = await Order.create(req.body)
        pedido.addProducts(req.body.productos)
        res.send(pedido)
        
    } catch (error) {
        console.log(error)
        res.send(error)
       
    }
}

module.exports = {
   getAllOrders,
   getOrdersByUser,
   addOrder
}
