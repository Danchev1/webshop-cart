const path = require('path');
const express = require('express');

const { rootDir } = require('../../utils/index');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir(), 'views', 'add-products.html'));
});

router.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
