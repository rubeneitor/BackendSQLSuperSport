import User from '../Models/UserModel'

export const getAllUsers = async (req, res) => {
    User.findAll().then(usuarios => {
        res.send(usuarios)
    })
}

//Login
export const  login = async (req, res) => {
    try {
		let user = await UserModel.findOne({
			username: req.body.username
		})
		if (!user) {
			return res.status(400).send({
				message: 'Usuario o contraseña incorrectos'
			})
		}

		// const token = jwt.sign({ _id: user._id }, 'missecretito', {
		// 	expiresIn: '24h'
		// });
		// await UserModel.findOneAndUpdate({ _id: user._id }, {
		// 	$push: {
		// 		tokens: token
		// 	}
		// })
		// const isMatch = await user.comparePassword(req.body.password)
		// if (!isMatch) {

		// 	return res.status(400).send({
		// 		message: 'Usuario o contraseña incorrectos'
		// 	})
		// }
		else {
			res.send({
				message: 'Bienvenido  ' + user.username, user, token
			})
		}

	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
}

//Perfil
export const getUsuario = (req, res) => {
	const username = req.params.username

User.findOne({ where: {username: username} })
		.then(user => res.send(user))
		.catch(error => console.log(error))

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



