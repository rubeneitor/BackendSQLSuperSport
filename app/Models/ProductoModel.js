
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Producto = sequelize.define(
//     'ProductoModel',
//     {
//       name: DataTypes.STRING,
//       stock: DataTypes.INTEGER,
//       precio: DataTypes.FLOAT,
//       descripcion: DataTypes.TEXT,
//       imageUrl: DataTypes.STRING,
//       createdAt: {
//         type: DataTypes.DATE,
//         defaultValue: () => new Date()
//       }
//     },
//     {},
//   );
//   Producto.associate = function(Models) {
//     // Product.hasOne(models.Category);
//     Producto.belongsToMany(Models.OrderModel, {through: 'order_product'});
//   };
//   Producto.sync().catch(error =>
//     console.error(`couldn't connect to database`, error),
//   );
//   return Producto;
// };
import { Model, Sequelize, ForeignKeyConstraintError } from 'sequelize';


// Sequelize con SQLite configurado por nosotros
import sequelize from '../sequelize';

import OrderModel from './OrderModel'


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
        },

        imageUrl: Sequelize.STRING

    }, 
    {
        sequelize,
        modelName: 'producto'
        // options
    }
);

// Movie.hasOne(Genre);

// Producto.belongsToMany(OrderModel, {through: 'orderProducts', foreignKey: 'producto_id'})

Producto.sync()
// Producto.belongsToMany(OrderModel, {
//     through: 'orderProducts'
//   });
// .then (() => {
//     return Producto.create({
//         nombre: 'Uvex Air Wing',
//         descripcion: 'Cierre con cordones',
//         stock: 5,
//         precio: 38,
//         nombreCategoria: 'Ciclismo',
//         idCarrito: 1
       

//     })
// })
//User.findAll({where: {id: 1}}).then(user => console.log(user))

export default Producto;

