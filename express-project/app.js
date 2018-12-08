const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.post('/add_product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express</h>');
});

app.listen(4000);
