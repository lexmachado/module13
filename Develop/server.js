const express = require('express.js');
const routes = require('./routes');
// import sequelize connection
const { sequelize } = require('./sequelize');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config()

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const schema = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, { 
  host: 'localhost', dialect: 'mysql', port: 3306 });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected');
  })
  .catch((error) => {
    console.error('failure to connect:', error);
  });
  module.exports = sequelize;

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./sequelize');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

const sequelize = require('./config/connection');

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});