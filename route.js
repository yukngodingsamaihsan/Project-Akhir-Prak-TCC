const express = require("express");
const router = express.Router();
const controllerBuku = require("./controllers/controllerBuku");
const controllerPenerbit = require("./controllers/controllerPenerbit");

router.post('/books', controllerBuku.create);

// Delete a book by ID
router.delete('/books/:idBuku', controllerBuku.delete);

// Update a book by ID
router.put('/books/:idBuku', controllerBuku.update);

// Get all books
router.get('/books', controllerBuku.getAll);

// Search books by name
router.get('/books/search', controllerBuku.searchByName);

// Create a new penerbit
router.post('/penerbits', controllerPenerbit.create);

// Delete a penerbit by ID
router.delete('/penerbits/:idPenerbit', controllerPenerbit.delete);

// Update a penerbit by ID
router.put('/penerbits/:idPenerbit', controllerPenerbit.update);

// Get all penerbits
router.get('/penerbits', controllerPenerbit.getAll);

// Find penerbit by ID
router.get('/penerbits/:idPenerbit', controllerPenerbit.findById);

module.exports = router;