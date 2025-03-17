const sequelize = require('./database');
const User = require('./User');
const Store = require('./Store');
const Rating = require('./Rating');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use force: true to drop existing tables and recreate them
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();
