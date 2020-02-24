const path = require('path');
const express = require('express');

const { rootDir } = require('../../utils/index');

const AdminRouter = express.Router();

AdminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir(), 'views', 'add-products.html'));
});

AdminRouter.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = AdminRouter;
