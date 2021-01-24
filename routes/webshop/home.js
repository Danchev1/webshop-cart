const express = require('express');

const { getHome } = require('../../controllers/webshop/home');

const router = express.Router();

router.get('/', getHome);

module.exports = router;
