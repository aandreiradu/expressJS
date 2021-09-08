const express = require('express');
const app = express();
const { products } = require('./data.js');
const { people } = require('./data.js');

app.get('/', (req, res) => {
    res.send(`
            <h1>Home page</h1>
            <a href="api/products">products</a>
            <br>
            <a href="api/people">people</a>
            `
    );
});


app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
        // let p = {};
        // p.id = product.id;
        // p.name = product.name;
        // p.image = product.image;
        // p.price = product.price;

        return { id, name, image };
    });

    res.json(newProducts);

});

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));


    if (singleProduct) {
        res.status(200).json(singleProduct);
    } else {
        res.status(404).send('<h1>Product with id ' + productID + ' does not exist</h1>')
    }
});


app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world!');
});


app.get('/api/people', (req, res) => {
    res.json(people);
});


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('For the moment, no product matched your search!')
        return res.status(200).json({ success: true, data: [] })
    } else {
        return res.status(200).json(sortedProducts);
    }

});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});