const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/add_product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add_product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
