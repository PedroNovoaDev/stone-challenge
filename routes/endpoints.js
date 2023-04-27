const express = require('express');
const router = express.Router();
const helthCheckController = require('../controllers/healthCheckMethods');
const usersController = require('../controllers/usersMethods');
const countController = require('../controllers/countMethods');

router.get('/health-check', helthCheckController.healthCheck);

router.post('/add-new-user', usersController.addNewUser);

router.get('/search-user-by-id', usersController.searchUserById);

router.get('/show-ton-visit-count', countController.showTonVisitCount);

router.get('/increment-ton-visit-count', countController.incrementTonVisitCount);

module.exports = router;