const UserRepository = require('../repository/UserRepository');
const { validationResult, body } = require('express-validator/check');

exports.validate = (method) => {
  switch(method) {
    case 'create': {
      return [
        body('name', 'Name doesnt exist').exists(),
        body('email', 'invalid email').exists().isEmail()
      ]
    }
  }
}

exports.getAll = (req, res) => {
  console.log('UserController ---- getAll');
  UserRepository.getAll()
    .then(data => res.status(200).json(data));
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




