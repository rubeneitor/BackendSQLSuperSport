import Producto from '../Models/ProductoModel'

export const getAllProductos = async (req, res) => {
    Producto.findAll().then(productos => {
        res.send(productos)
    })
}

export const getProductoPorNombre = async (req, res) => {
    const nombre = req.params.nombre

    Producto.findAll({where: {nombre: nombre} }).then(producto => {
        res.send(producto)
    })

}

export const getProductosCarrito = async (req, res) => {
    const idCarrito = req.params.idCarrito

    Producto.findAll({where: {idCarrito: idCarrito}}).then(productoCarrito => {
        res.send(productoCarrito)
    })
}

//Añade un nuevo producto
async function nuevoProducto(req, res, next) {
	try {
		const producto = await User.create(req.body);
		res.status(200).json({
			message: 'producto creado',
            producto: producto,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'producto no creado',
			error: error,
		});
	}
}


