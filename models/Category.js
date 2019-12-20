'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    nombre: DataTypes.STRING, 
    descripcion: DataTypes.STRING
  }, {});
  // Category.associate = function(models) {

  //   Category.belongsTo(models.Product);

  // };
   Category.sync({force:true}).catch(error =>
     console.error(`couldn't connect to database`, error),
   );
  return Category;
};