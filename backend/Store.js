const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Assuming you have a database.js file for Sequelize instance

class Store extends Model {}

Store.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [0, 400]
    }
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Store'
});

module.exports = Store;
