// import sequelize

const Sequelize = require('sequelize');

// Create connection

const db = new Sequelize('books_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// export connection

module.exports = db;