const express = require('express');

const { getAddProductsPage, postAddProduct, getProducts } = require('../../controllers/admin/products');

const router = express.Router();
router.get('/products', getProducts);
router.get('/add-products', getAddProductsPage);
router.post('/product', postAddProduct);

module.exports = router;
