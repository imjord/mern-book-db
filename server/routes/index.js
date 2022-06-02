const { getBooks, postBook, deleteBook, editBook } = require('../controllers/BookController');

const router = require('express').Router();



router.get('/', getBooks);
router.post('/', postBook);
router.delete('/:id', deleteBook);
router.put('/:id', editBook);

module.exports = router;
