// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js.
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class.
class Product extends Model {}

// Set up fields and rules for Product model.
// Define columns.
Product.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Exports Product.
module.exports = Product;
