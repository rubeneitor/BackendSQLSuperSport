import User from '../Models/UserModel';
const { isValidPassword } = require('../services/validations');
const {
	hashPassword,
	comparePassword,
	createJWT
} = require('../services/authorization');

// export const getAllUsers = async (req, res) => {
//     User.findAll().then(usuarios => {
//         res.send(usuarios)
//     })
// }

//Muestra todos los usuarios
async function getAllUsers(req, res) {
	try {
		User.findAll().then(usuarios => {
			res.send(usuarios)
		})
	} catch (error) {

	}
}

//Muestra el perfil de un usuario
async function getUsuario(req, res) {
	try {
		const username = req.params.username

		User.findOne({ where: { username: username } })
			.then(user => res.send(user))
			.catch(error => console.log(error))

	} catch (error) {

	}
}

//Register
async function registerController(req, res, next) {
	try {
		isValidPassword(req.body.password);
		req.body.password = await hashPassword(req.body.password);
		const user = await User.create(req.body);
		res.status(200).json({
			message: 'register done',
			user: user,
		});
	} catch (error) {
		console.log(error);

		if (error.message === 'invalidPasswordError') {
			return res.status(400).json({
				message: 'invalid password',
				error: error,
			});
		}
		if (error.name === 'SequelizeUniqueConstraintError') {
			return res.status(400).json({
				message: 'register invalid',
				error: error.errors[0].message,
			});
		}
		if (error.name === 'SequelizeValidationError') {
			return res.status(400).json({
				message: 'register invalid',
				error: error.errors[0].message,
			});
		}
		res.status(500).json({
			message: 'register not done',
			error: error,
		});
	}
}


//Login
async function loginController(req, res, next) {
	try {
	  const user = await User.findOne({
		where: { email: req.body.email },
	  });
	  if (!user) throw new Error('no user');
	  const isValidPassword = await comparePassword(
		req.body.password,
		user.password,
	  );
	  if (!isValidPassword) throw new Error('no valid password');
  
	  const data = {
		username: user.username,
		email: user.email,
		id: user.id,
	  };
	  user.token = await createJWT(data);
	  await  user.save();
  
  
	  res.json({
		message: 'valid login',
		user: data,
		token: user.token
	  });
	} catch (error) {
		console.error(error);
  
	  res.status(401).json({
		message: 'login invalid',
	  });
	}
  }

//Perfil
// export const getUsuario = (req, res) => {
// 	const username = req.params.username

// 	User.findOne({ where: { username: username } })
// 		.then(user => res.send(user))
// 		.catch(error => console.log(error))

// }

// export const getUsuarioCarrito = (req, res) => {
// 	const idCarrito = req.params.id;

// 	User.findAll({ where: { idCarrito: idCarrito } }).then(usuario => {
// 		res.send(usuario)
// 	})
// }

export const setNewMovie = (req, res) => {
	const movie = req.body

	// Movie.create({
	//     title: movie.title,
	//     genre: movie.genre,
	//     price: movie.price
	// }).then(msg => res.send(msg.dataValues))
	// .catch(err => console.log(err))

}

module.exports = { registerController, getAllUsers, getUsuario, loginController }





