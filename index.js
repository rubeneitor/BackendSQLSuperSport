import sequelize from './app/sequelize';
import app from './app/express';

// Comprobar que la BD Funciona

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    const server = app.listen(3001, () => {
      console.log(`Listening on port ${server.address().port}...`);
    });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

