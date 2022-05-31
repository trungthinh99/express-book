const router = require('express').Router();
const { Route } = require('express');
const bookController = require('../controllers/bookController');

// ADD A BOOK
router.post('/', bookController.addABook);

// GET ALL BOOKS
router.get('/all', bookController.getAllBooks);

// GET A BOOK
router.get('/:id', bookController.getABook);

// UPDATE A BOOK
router.put('/:id', bookController.updateBook);

// DELETE A BOOK
router.delete('/:id', bookController.deleteBook);

module.exports = router;
