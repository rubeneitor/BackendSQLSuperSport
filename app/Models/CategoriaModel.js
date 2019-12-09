import { Model, Sequelize } from 'sequelize';


// Sequelize con SQLite configurado por nosotros
import sequelize from '../sequelize';
import Carrito from './CarritoModel';




class Categoria extends Model { }

Categoria.init(
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
        }
    },
    {
        sequelize,
        modelName: 'categoria'
        // options
    }
);

// Categoria.hasOne(Carrito)

Categoria.sync()
    // .then(() => {
    //     return Categoria.create({
    //         nombre: 'Running',
    //         descripcion: 'Accesorios para running'
    //     })
    // })

//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default Categoria;

