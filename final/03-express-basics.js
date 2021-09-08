const express = require('express');
const app = express();


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

app.get('/', (req, res) => {
    console.log("You're trying to get on home page.");
    res.status(200).send("You're trying to get on home page.");
});

app.get('/about', (req, res) => {
    console.log('user is tryin to get about page');
    res.status(200).send('About page');
});


app.all('*', (req, res) => {
    console.log('Can`t find that resourse on the server!')
    res.status(404).send('<h1>resource not found!</h1>')
})



app.listen(5000, () => {
    console.log('server is listenin on port 5000');
});