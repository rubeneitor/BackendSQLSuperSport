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

//Añade un nuevo producto
export const nuevoProducto = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
    res.status(200).json({
        message: 'producto creado',
        producto: producto,
    });

    
    
    
    } catch (error) {
        res.status(500).json({
        message: 'producto no creado',
        error: error,
    });
    }

}

// module.exports = { nuevoProducto }
