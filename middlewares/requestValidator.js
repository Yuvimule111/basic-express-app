const books = require("../models/BookModes");

const ValidateBookRequest = (req, res, next) => {
    /**
     * Validation of the request body
     */

    if(!req.body.title) {
        res.status(400).send({
            message: "Title of the book can't empty !"
        })
        return;
    }
    next();
}

module.exports = { ValidateBookRequest }