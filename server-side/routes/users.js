const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();

router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/', UserController.validate(), UserController.create);

router.put('/:id', UserController.validate(), UserController.updateById);

router.delete('/:id', UserController.deleteById);

module.exports = router;