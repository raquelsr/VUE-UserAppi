const express = require('express');
const users = require('./users');

const router = express.Router();

router.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.use('/users', users);

module.exports = router;