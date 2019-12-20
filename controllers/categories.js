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

module.exports = {
   getAllCategories
}
