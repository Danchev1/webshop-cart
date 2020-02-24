const path = require('path');
const WebShopRouter = require('express').Router();

const { rootDir } = require('../../utils/index');

WebShopRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir(), 'views', 'index.html'));
});

module.exports = WebShopRouter;
