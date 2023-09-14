// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js.
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class.
class Tag extends Model {}

// Set up fields and rules for Product model.
// Define columns.
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Exports Tag.
module.exports = Tag;

// Class Mini Project 13 was a big help with structure and code snippets.