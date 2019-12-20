const  {Product}  = require('../models');


//Obtiene todos los productos
// async function getAllProducts(req, res) {
// 	try {
// 		const productos = await Products.findAll();
// 		console.log('yepaaa')
// 		res.send(productos)
	
// 	} catch (error) {
// 		res.send(error)
// 	}
// }

async function getAllProducts(req, res) {
try {
	

	
	const producto = await Product.findAll();
	console.log(producto)
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

//Añade un nuevo producto
async function nuevoProducto(req, res){
	try {
		
		const producto = await Product.create(req.body)
		
		res.send(producto)
		
		
		
	} catch (error) {
		res.send(error)
	}
}

async function updateProduct (req, res) {
	try {
		
		
		const producto = await Product.update(req.body, {where: {id: req.params.id}})
		console.log(producto);
		
		res.send(producto)
	} catch (error) {
		res.send(error)
	}
}

module.exports = {
	getAllProducts,
	getProductPorNombre,
	getProductsByCategory,
	nuevoProducto,
	updateProduct
}
