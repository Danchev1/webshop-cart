const path = require('path');
const AdminRouter = require('express').Router();

const { rootDir } = require('../../helpers/index');

AdminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir(), 'views', 'add-products.html'));
});

AdminRouter.post('/product', (req, res, next) => {
  res.redirect('/');
});

module.exports = AdminRouter;
