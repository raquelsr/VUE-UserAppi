const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();

router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/', UserController.validate('post'), UserController.create);

module.exports = router;