const express = require('express');
const mongoose = require('mongoose');
const { usersRoutes } = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use('/', usersRoutes);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
