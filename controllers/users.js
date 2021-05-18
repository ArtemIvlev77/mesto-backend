const { User } = require('../models/user');

exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

exports.createUser = (req, res) => {
  res.send(req.body);
};
