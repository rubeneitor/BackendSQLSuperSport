// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Order = sequelize.define(
//     'OrderModel',
//     {
//         user_id: DataTypes.INTEGER,
//         precio_total: DataTypes.FLOAT,
//     },
//     {},
//   );
//   Order.associate = function(Models) {
//     // associations can be defined here
//     Order.hasMany(Models.ProductoModel);
//     // Order.hasOne(models.User);
//   };
//   Order.sync().catch(error =>
//     console.error(`couldn't connect to database`, error),
//   );
//   return Order;
// };

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
        },

        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique:true
        }
        

    }, 
    {
        sequelize,
        modelName: 'order'
        // options
    }
);


 

// Movie.hasOne(Genre);
// Order.belongsToMany(ProductoModel, {through: 'orderProducts', foreignKey: 'order_id'})
Order.sync()


//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default Order;