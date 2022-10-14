const express = require('express');
const bodyParser = require('body-parser');
const db = require("./config/database");
const booksRoutes = require('./routes/BooksRoutes')

// Initiaizing express
const app = express();

/**
 * Using the body-parser middleware
 * 
 * Using for parsing the request.
 * Parsing the request of the type json and convert that to object
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connecting to database
db.authenticate()
.then((res) => console.log('Connection has been established succesfully. '))
.catch((err) => console.log('Unable to connect to the database: ', console.error))


app.get('/', (req, res) => {
    res.send("This API is Working")
});

// book routes to handle all API starting with /books
app.use('/books', booksRoutes);

app.listen(8080, () => {
    console.log('Server Started on Port 8080...');
});