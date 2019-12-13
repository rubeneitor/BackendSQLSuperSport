import Order from '../Models/OrderModel'

export const getOrderPorUser = async (req, res) => {
    const idUser = req.params.idUser

    Order.findAll({where: {user_id: idUser}}).then(ordersUser => {
        res.send(ordersUser)
    })
}