const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

//req => middleware => res
// app.use([authorize, logger]);

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home')
})


app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})



app.listen(5000, () => {
    console.log('user hit the server on port 5000');
})