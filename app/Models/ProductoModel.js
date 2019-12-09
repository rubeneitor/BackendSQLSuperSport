import { Model, Sequelize, ForeignKeyConstraintError } from 'sequelize';


// Sequelize con SQLite configurado por nosotros
import sequelize from '../sequelize';


class Producto extends Model { }

Producto.init(
    {
        // Propiedades == Columnas
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
     
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },

        stock: {
            type: Sequelize.INTEGER
        },

        precio: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        nombreCategoria: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, 
    {
        sequelize,
        modelName: 'producto'
        // options
    }
);

// Movie.hasOne(Genre);

Producto.sync()
// .then (() => {
//     return Producto.create({
//         nombre: 'Zapatillas Puma Future',
//         descripcion: 'material exterior cuero sintetico, revestimiento de tela',
//         stock: 5,
//         precio: 28,
//         nombreCategoria: 'Futbol'
       

//     })
// })
//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default Producto;

