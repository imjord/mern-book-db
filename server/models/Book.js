const {Schema, model} = require('mongoose');


// Create Book Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    // image later maybe seed with a default image
});

// create Book model
const Book = model('Book', BookSchema);

// export Book model
module.exports = Book;