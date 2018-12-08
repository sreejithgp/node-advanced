const express = require('express');

const app = express();

app.use('/add_product', (req, res, next) => {
  res.send('<h1>Add product</h>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express</h>');
});

app.listen(4000);
