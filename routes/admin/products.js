const express = require('express');

const { getAddProductsPage, postAddProduct } = require('../../controllers/products');

const router = express.Router();
router.get('/add-products', getAddProductsPage);
router.post('/product', postAddProduct);

module.exports = router;
