const  {Product}  = require('../models');


//Obtiene todos los productos
async function getAllProducts(req, res) {
try {
	const producto = await Product.findAll();
	res.send(producto)
	
} catch (error) {
	console.log(error)
}
}

//Obtiene productos por nombre
async function getProductPorNombre(req, res) {
	try {
		const nombre = req.params.nombre;
		Product.findAll({ where: { nombre: nombre } }).then(productos => {
			res.send(productos)
		})
	} catch (error) {
		res.send(error)
	}
}

//Obtiene productos por categoria
async function getProductsByCategory(req, res){
	try {
		const productos = await Product.findAll({where: {nombreCategoria: req.params.nombreCategoria}})
		res.send(productos)
	} catch (error) {
		res.send(error)
	}
}

//Busqueda de producto
async function busquedaProducto(req, res) {

    try {
        const products = await Product.findAll({

            where: {
                [Op.or]: [{
					nombre: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    },
                    
                    {
                        nombreCategoria: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    },
                    {
                        descripcion: {
                            [Op.like]: `%${req.params.input}%`
                        }
                    }
                ]
            }
        });

        res.status(200).send(products);
    } catch (err) {
        console.log(err);

    }

}

//Añade un nuevo producto
async function nuevoProducto(req, res){
	try {
		
		const producto = await Product.create(req.body)
		
		res.send(producto)
		
		
		
	} catch (error) {
		res.send(error)
	}
}

//Actualiza un nuevo producto
async function updateProduct (req, res) {
	try {
	
		const producto = await Product.update(req.body, {where: {id: req.params.id}})
		
		res.send(producto)
	} catch (error) {
		res.send(error)
	}
}

module.exports = {
	getAllProducts,
	getProductPorNombre,
	getProductsByCategory,
	busquedaProducto,
	nuevoProducto,
	updateProduct
}
