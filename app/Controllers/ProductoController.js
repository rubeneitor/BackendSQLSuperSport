import Producto from '../Models/ProductoModel'

export const getAllMovieP = async (req, res) => {
    Producto.findAll().then(movies => {
        res.send(movies)
    })
}


