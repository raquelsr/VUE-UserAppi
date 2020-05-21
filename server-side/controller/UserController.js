const UserRepository = require('../repository/UserRepository');

exports.createUser = (req, res) => {
  const oo = {name : 'Raquel'}
  UserRepository.add(oo);
  return res.status(200).json({ message: 'Repository!' });

  /* 
    UserRepository.create(user)
    .then((newUser) => {
      res.json(newUser);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    }); */
}

exports.getAll = (req, res) => {
  console.log('UserController ---- getAll');
  return res.status(200).json(UserRepository.getAll());
}

exports.create = (req, res) => {
  console.log('UserControler ---- create');
  console.log(req)
  UserRepository.create(req.body);
  return res.status(200).json({ message: 'created!' });
}




