const Book = require("../models/modelBuku");  // Ensure to replace "./bookModel" with the actual path to your Book model

// Create a new book
exports.create = function (req, res) {
    const new_book = new Book(req.body);

    // Validate request
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "Please provide all required fields" });
    } else {
        Book.create(new_book, function (err, book) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    error: false,
                    message: "Book added successfully!",
                    data: book,
                });
            }
        });
    }
};

// Delete a book by ID
exports.delete = function (req, res) {
    Book.delete(req.params.idBuku, function (err, book) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                error: false,
                message: "Book deleted successfully!",
            });
        }
    });
};

// Update a book by ID
exports.update = function (req, res) {
    const updated_book = new Book(req.body);

    // Validate request
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "Please provide all required fields" });
    } else {
        Book.update(req.params.idBuku, updated_book, function (err, book) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    error: false,
                    message: "Book updated successfully!",
                });
            }
        });
    }
};

// Get all books
exports.getAll = function (req, res) {
    Book.getAll(function (err, books) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                error: false,
                message: "Books retrieved successfully!",
                data: books,
            });
        }
    });
};

// Search books by name
exports.searchByName = function (req, res) {
    Book.searchByName(req.query.name, function (err, books) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                error: false,
                message: "Books retrieved successfully!",
                data: books,
            });
        }
    });
};
