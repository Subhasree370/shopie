const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopie', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
