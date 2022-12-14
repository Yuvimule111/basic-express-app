const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");
const { ValidateBookRequest } = require("../middlewares/requestValidator");


// Route for the post request to add a book
router.post("/", ValidateBookRequest, bookController.addBook);

// Route for the GET request to feath all the books details
router.get("/", bookController.getAllBooks);

// Route for the GET request to fetch a book based on the id
router.get("/:id", bookController.getBookById);

// Route for the PUT request to update a book based on the id
router.put("/:id", ValidateBookRequest, bookController.updateBookById);

// Route for the DELETE request to delete a book based on the id
router.delete("/:id", bookController.deleteBookById);


module.exports = router;