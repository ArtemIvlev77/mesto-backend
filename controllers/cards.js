const { Card } = require('../models/card');

exports.getCards = (req, res, next) =>
  Card.find({})
    .sort({ createdAt: -1 })
    .then((cards) => res.status(200).send(cards))
    .catch(next);

exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(400).send({ message: err.message }))
    .catch(next);
};

exports.deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(new Error('Not Found'))
    .then((deleteCard) => res.send({ deleteCard }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданые данные некорректны' });
      } else if (err.message === 'NotFound') {
        res.status(404).send({ message: 'Не найдено' });
      } else {
        res.status(500).send({ message: `Ошибка на сервере: ${err}` });
      }
    })
    .catch(next);
};
