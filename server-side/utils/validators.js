const { body } = require('express-validator/check');

exports.validateUser = () => {
  return [
    body('id', 'userID not found').exists().isInt(),
    body('firstname', 'firstname not found').exists(),
    body('lastname', 'lastname not found').exists(),
    body('email', 'email not found').exists().isEmail(),
    body('birthDate', 'birthDate not found').exists(),
    body('address', 'address not found').exists(),
    body('address.id', 'addressID not found').exists().isInt(),
    body('address.street', 'street not found').exists(),
    body('address.city', 'city not found').exists(),
    body('address.country', 'country not found').exists(),
    body('address.postalcode', 'postalcode not found').exists().isInt()
  ]
}