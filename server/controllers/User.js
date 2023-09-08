const User = require('../db/User');

const login = (req, res) => {
  res.send('Login');
};

const createUser = (req, res) => {
  User.create(req.body)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  login,
  createUser
};