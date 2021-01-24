const express = require('express');

const { getCart } = require('../../controllers/webshop/cart');

const router = express.Router();

router.get('/cart', getCart);

module.exports = router;
