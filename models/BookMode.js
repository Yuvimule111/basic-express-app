const Sequelize = require('sequelize');
// import conncetion
const db = require('../config/database');

// init DataTypes
const { DataTypes } = Sequelize;

// Define Schema
const Books = db.define('books', {

    // Define attributes
    title: {
        type: DataTypes.STRING
       },
       price: {
        type: DataTypes.DOUBLE
       },
       author: {
        type: DataTypes.STRING
       },
       published: {
        type: DataTypes.DATEONLY
       },
       publisher: {
        type: DataTypes.STRING
       }
    }, {
    // Freeze Table Name 
    freezeTableName: true
    });
    
    // Exports model Product
    module.exports= Books;
