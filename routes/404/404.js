const path = require('path');
const NotFound = require('express').Router();

NotFound.get('*', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../../', 'views', '404.html'));
});

module.exports = NotFound;
