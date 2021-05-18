const express = require('express');

const usersRoutes = express.Router();

usersRoutes.get('/', (req, res) => {
  res.send('Hello world');
});

usersRoutes.post('/', express.json(), (req, res, next) => {
  res.send(req.body);
  next();
});

module.exports = {
  usersRoutes,
};
