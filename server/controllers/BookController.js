const Book = require('../models/Book');


const BookController = {


    // get books 
    getBooks(req,res) {
        Book.find()
        .then(books => {
            res.json(books);
        })
        .catch(err => {
            res.json(err);
        })
    },
    // post book
    postBook(req,res) {
        Book.create(req.body)
        .then(book => {
            res.json(book);
        })
        .catch(err => {
            res.json(err);
        })
    }
}


// export BookController
module.exports = BookController;