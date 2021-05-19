const express = require('express');
const mongoose = require('mongoose');
const { cardsRoute } = require('./routes/cards');
const { usersRoute } = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use('/users', usersRoute);

app.use((req, res, next) => {
  req.user = {
    _id: '60a439b9ba614b1fda6b6cbd',
  };

  next();
});

app.use('/cards', cardsRoute);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
