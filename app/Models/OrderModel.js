import { Model, Sequelize } from 'sequelize';


// Sequelize con SQLite configurado por nosotros
import sequelize from '../sequelize';

import ProductoModel from './ProductoModel'


class Order extends Model { }

Order.init(
    {
        // Propiedades == Columnas

        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
    
        precio_total: {
            type: Sequelize.INTEGER
        }
        

    }, 
    {
        sequelize,
        modelName: 'order'
        // options
    }
);


 

// Movie.hasOne(Genre);
+
Order.sync()


//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default Order;