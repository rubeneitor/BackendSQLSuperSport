import { Model, Sequelize } from 'sequelize';


// Sequelize con SQLite configurado por nosotros
import sequelize from '../sequelize';


class Carrito extends Model { }

Carrito.init(
    {
        // Propiedades == Columnas

        nombreProducto: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
     
        precioProducto: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        cantidadProducto: {
            type: Sequelize.INTEGER
        },

        

    }, 
    {
        sequelize,
        modelName: 'carrito'
        // options
    }
);

// Movie.hasOne(Genre);

Carrito.sync()
// .then (() => {
//     return Carrito.create({
//         nombreProducto: 'Zapatillas Puma Future',
//         precioProducto: 28,
//         cantidadProducto: 2

//     })
// })
//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default Carrito;