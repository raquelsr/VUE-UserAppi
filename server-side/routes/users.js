const express = require('express');
const UserController = require('../controller/UserController');
const { validateUser } = require('../utils/validators');

const router = express.Router();

router.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
});

router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/', validateUser(), UserController.create);

router.put('/:id', validateUser(), UserController.updateById);

router.delete('/:id', UserController.deleteById);

router.options('/*', UserController.options);

module.exports = router;