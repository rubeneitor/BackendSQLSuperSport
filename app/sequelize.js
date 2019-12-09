import Sequelize from 'sequelize';

const sequelize = new Sequelize('SuperSport', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

export default sequelize;