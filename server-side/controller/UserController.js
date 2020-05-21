const UserRepository = require('../repository/UserRepository');
const { validationResult } = require('express-validator/check');
const errorMessages = require('../utils/errorMessages');

exports.getAll = (req, res) => {
  console.log('UserController ---- getAll');
  UserRepository.getAll()
    .then(data => res.status(200).json(data));
}

exports.getById = (req, res) => {
  console.log('UserController ---- getById');
  if (!req.params.id) {
    return res.status(400).json(errorMessages.badRequest());
  }
  const id = parseInt(req.params.id, 10);
  UserRepository.getById(id)
    .then(data => {
      (data) ? res.status(200).json(data) : res.status(404).json(errorMessages.notFound('userID'));
    });
}

exports.create = (req, res) => {
  console.log('UserController ---- create');

  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return res.status(405).json({ errors: validation.array() });
  } 

  UserRepository.create(req.body)
    .then(data => res.status(201).send(data));
}

exports.updateById = (req, res) => {
  console.log('UserController ---- update');
  const id = parseInt(req.params.id, 10);
  
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return res.status(400).json({ errors: validation.array() });
  } 

  UserRepository.updateById(id, req.body)
    .then(data => {
      (data) ? res.status(200).send(data) : res.status(404).json(errorMessages.notFound('userID'));
    });
}

exports.deleteById = (req, res) => {
  console.log('UserController ---- delete');
  if (!req.params.id) {
    return res.status(400).json(errorMessages.badRequest());
  }
  const id = parseInt(req.params.id, 10);
  
  UserRepository.deleteById(id)
    .then(data => {
      (data !== -1) ? res.status(200).json({success: 'true'}) : res.status(404).json(errorMessages.notFound('userID'));
    });
}

