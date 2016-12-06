const express = require('express');

const Message = require('../models/Message');

const messagesRouter = express.Router();

messagesRouter.get('/', (req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.sendStatus(500));
});

module.exports = messagesRouter;
