const express = require('express');
const router = express.Router();
const countController = require('../controllers/countMethods');

router.get('/show-ton-visit-count', countController.showTonVisitCount);

module.exports = router;