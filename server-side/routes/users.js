const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();

router.get('/', UserController.getAll);

// router.get('/a', UserController.createUser);

router.post('/', UserController.create);

module.exports = router;