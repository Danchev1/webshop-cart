const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.render('add-products');
});

router.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
