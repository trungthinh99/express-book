const router = require('express').Router();
const authorController = require('../controllers/authorController');

// ADD AUTHOR
router.post('/', authorController.addAuthor);

// GET ALL AUTHOR
router.get('/all', authorController.getAllAuthors);

// GET AN AUTHOR
router.get('/:id', authorController.getAnAuthor);

// UPDATE AN AUTHOR
router.put('/:id', authorController.updateAuthor);

// DELETE AN AUTHOR
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
