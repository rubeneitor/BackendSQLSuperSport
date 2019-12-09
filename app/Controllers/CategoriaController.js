import Categoria from '../Models/CategoriaModel'

export const getAllCategorias = async (req, res) => {
    Categoria.findAll().then(carrito => {
        res.send(carrito)
    })
}