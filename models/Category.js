// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js.
const sequelize = require('../config/connection.js');

// Initialize Category model (table) by extending off Sequelize's Model class.
class Category extends Model {}

// Set up fields and rules for Product model.
// Define columns.
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Export Category.
module.exports = Category;

// Credits to Class Mini Project 13 with structure reference and code snippets.