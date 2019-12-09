import User from '../Models/UserModel'

export const getAllMovie = async (req, res) => {
    User.findAll().then(movies => {
        res.send(movies)
    })
}

export const getMovieById = (req, res) => {
    const id = req.params.id

    Movie.findOne({where: {id: id} }).then(movie => {
        res.send(movie)
    })
}

export const getMovieByGenre = (req, res) => {
    const genre = req.params.genre;

    Movie.findAll({where: {genre: genre} }).then(movie => {
        res.send(movie)
    })
}

export const getUsuarioCarrito = (req, res) => {
    const idCarrito = req.params.id;

    User.findAll({where: {idCarrito: idCarrito} }).then(usuario => {
        res.send(usuario)
    })
}

export const setNewMovie = (req, res) => {
    const movie = req.body

    // Movie.create({
    //     title: movie.title,
    //     genre: movie.genre,
    //     price: movie.price
    // }).then(msg => res.send(msg.dataValues))
    // .catch(err => console.log(err))

}



