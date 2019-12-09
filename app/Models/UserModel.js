import { Model, Sequelize } from 'sequelize';


// Sequelize con SQLite configurado por nosotros
import sequelize from '../sequelize';
import Carrito from './CarritoModel';




class User extends Model { }

User.init(
    {
        // Propiedades == Columnas
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
     
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        direccion: {
            type: Sequelize.STRING
        },
        
        idCarrito: {
            type: Sequelize.INTEGER,
            unique:true
        }
    }, 
    {
        sequelize,
        modelName: 'user'
        // options
    }
);


// UserSchema.methods.comparePassword = function (password) {
//     const user = this;
//     return bcrypt.compare(password, user.password)
// }

// UserSchema.pre('save', function (next) { //mongoose middleware que se ejecuta antes del save(), utilizamos ES5 functions porque queremmos el this para acceder a la instancia (UserModel). Si fuera function flexa (arow function), el this si que cogeria el de arriba, UserSchema
//     const user = this;
//     bcrypt.hash(user.password, 10).then(hash => {//generamos hash de forma asincrona
//         user.password = hash;//sobreescribimos la propiedad del password con el hash ya encriptado
//         next();//Cuando hace next(), es cuando hace el save() y se guarda en la base de datos
//     })
//         .catch(error => {
//             console.log(error);
//             res.status(500).send(error);
//         })
// })

// User.hasOne(Carrito)

User.sync()
// .then (() => {
//     return User.create({
//         username: 'user3',
//         password: '1234',
//         nombre: 'User three',
//         email: 'user3@gmail.com',
//         direccion: 'calle usuario n3',
//         idCarrito: 4
//     })
// })
       
//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default User;

