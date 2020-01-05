const { Category } = require('../models');
const {User} = require('../models');

//Obtener todas las categorias
async function getAllCategories(req, res){
    try {
        const categorias = await Category.findAll()
        res.send(categorias)
    } catch (error) {
        
    }
}

//Añade una nueva categoria
async function addCategory (req, res){
    try {
        const categoria = await Category.create(req.body)
        res.send(categoria)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
   getAllCategories,
   addCategory
}
