const express = require('express');
const { getCards, createCard, deleteCard } = require('../controllers/cards');

const cardsRoute = express.Router();

cardsRoute.get('/', getCards);
cardsRoute.post('/', createCard);
cardsRoute.delete('/:cardId', deleteCard);

module.exports = { cardsRoute };
