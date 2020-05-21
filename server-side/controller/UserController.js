const UserRepository = require('../repository/UserRepository');
const { validationResult, body } = require('express-validator/check');

exports.validate = (method) => {
  switch(method) {
    case 'post': {
      return [
        body('firstname', 'firstname doesnt exist').exists(),
        body('lastname', 'lastname doesnt exist').exists(),
        body('email', 'email doesnt exist').exists().isEmail(),
        body('birthDate', 'birthDate doesnt exist').exists(),
        body('address', 'address doesnt exist').exists(),
        body('address.street', 'street doesnt exist').exists(),
        body('address.city', 'city doesnt exist').exists(),
        body('address.country', 'country doesnt exist').exists(),
        body('address.postalcode', 'postalcode doesnt exist').exists(),
      ]
    }
  }
}

exports.getAll = (req, res) => {
  console.log('UserController ---- getAll');
  UserRepository.getAll()
    .then(data => res.status(200).json(data));
}

exports.getById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  UserRepository.getById(id)
    .then(data => {
      (data) ? res.status(200).json(data) : res.status(401).json({error: "User not found"});
    })
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
