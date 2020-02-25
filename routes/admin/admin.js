const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.render('add-products', {
    meta: {
      title: 'Add products - Sneaker Hype',
      description: 'Add products to store'
    }
  });
});

router.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
