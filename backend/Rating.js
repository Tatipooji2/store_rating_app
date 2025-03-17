const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Assuming you have a database.js file for Sequelize instance

class Rating extends Model {}

Rating.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ratingValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }
}, {
  sequelize,
  modelName: 'Rating'
});

module.exports = Rating;
