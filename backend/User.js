const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Assuming you have a database.js file for Sequelize instance

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [20, 60]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 16]
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [0, 400]
    }
  },
  role: {
    type: DataTypes.ENUM('System Administrator', 'Normal User', 'Store Owner'),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
