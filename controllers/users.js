const { User } = require('../models/user');

exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }))
    .catch(next);
};

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  res.send(await user.save());
};
