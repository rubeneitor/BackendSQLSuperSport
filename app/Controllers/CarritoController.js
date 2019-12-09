import Carrito from '../Models/CarritoModel'

export const getAllCarrito = async (req, res) => {
    Carrito.findAll().then(carrito => {
        res.send(carrito)
    })
}