const express = require('express');
const { getUsers, createUser, getUserById } = require('../controllers/users');

const usersRoute = express.Router();

usersRoute.get('/', getUsers);

usersRoute.get('/:userId', getUserById);

usersRoute.post('/', createUser);

module.exports = {
  usersRoute,
};
