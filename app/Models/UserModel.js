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

