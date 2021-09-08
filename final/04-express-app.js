const express = require('express');
const app = express();
const path = require('path');

//setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});




app.get('*', (req, res) => {
    res.status(404).send('resource not found!');
});


app.listen(5000, () => {
    console.log('user hit the server!');
});