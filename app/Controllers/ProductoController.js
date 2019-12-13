import Producto from '../Models/ProductoModel'

export const getAllProductos = async (req, res) => {
    Producto.findAll().then(productos => {
        res.send(productos)
    })
}

export const getProductoPorNombre = async (req, res) => {
    const nombre = req.params.nombre

    Producto.findAll({ where: { nombre: nombre } }).then(producto => {
        res.send(producto)
    })

}

export const getProductosCarrito = async (req, res) => {
    const idCarrito = req.params.idCarrito

    Producto.findAll({ where: { idCarrito: idCarrito } }).then(productoCarrito => {
        res.send(productoCarrito)
    })
}

//Operaciones Administrador

export const añadirProducto = async (req, res) => {
    const product = await Producto.create(req.body)
    res.send(product)
    
}

