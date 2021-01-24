const express = require('express');

const { getCheckout } = require('../../controllers/webshop/checkout');

const router = express.Router();

router.get('/checkout', getCheckout);

module.exports = router;
