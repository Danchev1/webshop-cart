const express = require('express');
const { get404Page } = require('../../controllers/404');

const router = express.Router();
router.get('*', get404Page);

module.exports = router;
