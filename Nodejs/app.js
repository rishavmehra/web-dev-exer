const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('Add-Product route, In the middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="massage"><button type="submit"> Add product</button></form>');
    
    // next(); // Allows the request to continue to the next middleware in line
});

app.post('/product', (req, res, next) => {
    // console.log(`Product route, In the middleware! | a massage: ${req.body.massage}`);
    console.log(req.body);
    res.redirect('/');
    // res.send('<h1>Product added!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another-1 middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

