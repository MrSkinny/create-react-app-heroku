const express = require('express');
const messagesRouter = express.Router();

messagesRouter.get('/', (req, res) => {
  res.json({ message: 'howdy' });
});

module.exports = messagesRouter;
