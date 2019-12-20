module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      nombreCategoria: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img_url: DataTypes.STRING,
      img_url_detalle1: DataTypes.STRING,
      img_url_detalle2: DataTypes.STRING

      // createdAt: {
      //   type: DataTypes.DATE,
      //   defaultValue: () => new Date()
      // }
    },
    
  );
  Product.associate = function (models) {
    // Product.hasOne(models.Category);
    Product.belongsToMany(models.Order, { through: 'order_product' });
  };


  Product.sync().catch(error =>
    console.error(`couldn't connect to database`, error),
  );
  return Product;
};
