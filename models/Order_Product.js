'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Product = sequelize.define('Order_Product', {
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  // Category.associate = function(models) {

  //   Category.belongsTo(models.Product);

  // };
   Order_Product.sync({force: true}).catch(error =>
     console.error(`couldn't connect to database`, error),
   );
  return Order_Product;
};