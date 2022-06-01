const { getBooks } = require('../controllers/BookController');

const router = require('express').Router();



router.get('/', getBooks);
