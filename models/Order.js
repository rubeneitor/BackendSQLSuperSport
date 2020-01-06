'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      status: DataTypes.STRING,
      totalPrice: DataTypes.FLOAT,

    },
    {},
  );
  Order.associate = function(models) {

    Order.belongsToMany(models.Product,{ through: 'order_product' });
    Order.belongsTo(models.User);
  };
  Order.sync().catch(error =>
    console.error(`couldn't connect to database`, error),
  );
  return Order;
};
