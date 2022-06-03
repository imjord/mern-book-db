const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const db = require('./config/connection');
const routes = require('./routes');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// /
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api', routes);

// listen
db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
});
