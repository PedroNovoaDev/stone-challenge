const express = require('express');
const router = express.Router();
const countController = require('../controllers/countMethods');
const usersController = require('../controllers/usersMethods');

router.post('/add-new-user', usersController.addNewUser);

router.get('/search-user-by-id', usersController.searchUserById);

router.get('/show-ton-visit-count', countController.showTonVisitCount);

router.get('/increment-ton-visit-count', countController.incrementTonVisitCount);

module.exports = router;