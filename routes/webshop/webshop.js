const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    page: {
      pageUrl: req.originalUrl,
      meta: {
        title: 'Sneaker Hype - Online shop for designer sneakers',
        description:
          'We offer sneakers and merch from limited time capsule collection'
      }
    }
  });
});

module.exports = router;
