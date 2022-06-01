const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const db = require('./config/connection');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// listen
db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
});
