const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mern-book-db');



module.exports = mongoose.connection;