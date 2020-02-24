const path = require('path');
const { rootDir } = require('../../utils/index');
const express = require('express');

const NotFoundRouter = express.Router();

NotFoundRouter.get('*', (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir(), 'views', '404.html'));
});

module.exports = NotFoundRouter;
