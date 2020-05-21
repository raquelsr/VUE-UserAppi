const express = require('express');
const UserController = require('../controller/UserController');
const { validateUser } = require('../utils/validators');

const router = express.Router();

router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/', validateUser(), UserController.create);

router.put('/:id', validateUser(), UserController.updateById);

router.delete('/:id', UserController.deleteById);

module.exports = router;