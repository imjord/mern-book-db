const { getBooks, postBook } = require('../controllers/BookController');

const router = require('express').Router();



router.get('/', getBooks);
router.post('/', postBook);


module.exports = router;
