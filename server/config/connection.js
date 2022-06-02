const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-book-db');



module.exports = mongoose.connection;