const { Order } = require('../models');
const {Product} = require('../models')
const {User} = require('../models');
const {Order_Product} = require('../models');
const Op = require('sequelize').Op;

//Obtiene todos los pedidos
async function getAllOrders(req, res) {
    try {
        const pedidos = await Order.findAll({
            include: ['products']
        });
        
        res.send(pedidos)

    } catch (error) {
        res.send(error)
    }
}

async function getInvoiceByIController(req, res, next) {

    try {
        const orders = await Order.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Product,
                as: 'products'
            }]
        }, );
        res.json(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }

}

async function getInvoiceByProductController(req, res, next) {

    try {
        const productId = req.body.ProductId
        const orders = await Invoice.findAll({
            JOIN: 'order_product',
            ON: {
                ProductId: productId
            }
        });
        res.status(200).send(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);

    }
}

async function orderController(req, res, next) {

    try {
        const body = req.body;

        console.log('body '
        + body)
        
        const products = await Product.findAll({
            where: {
                id: {
                    [Op.in]: body.products
                },
            }
        });
console.log('asdafsdfasdfasdfsad' + products)

        const order = await Order.create({
            UserId: body.UserId,
            status: 'complete',
            totalPrice: req.body.totalPrice,
/*             include: [{
                model: Invoice_Product,
                as: 'invoices',
                Quantity: body.Quantity
            }] */
        });

        await order.addProducts(products);

        // const orderProducts = await Order_Product.findAll({
        //     where: {
        //         productId: {
        //             [Op.in]: Object.keys(body.products.id),
        //         },
        //         orderId: order.id
        //     }
        // });

        // await orderProducts.forEach(function(orderProducts) {
        //     orderProducts.update({
        //         Quantity: body.products[invoiceProduct.ProductId]
        //     })
        // })
    
        
        res.status(200).send(order);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
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
   addOrder,
   getInvoiceByIController,
   getInvoiceByProductController,
   orderController
}
