const express = require('express');

const router = express.Router();
router.get('*', (req, res, next) => {
  res.status(404).render('404', {
    meta: {
      title: '404 - Not found',
      description: 'There is no such page on this domain'
    }
  });
});

module.exports = router;
