const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = Schema({
  text: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
