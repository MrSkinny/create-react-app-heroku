require('dotenv').config();
const app = require('./app');
const db = require('./config/db');

const PORT = process.env.PORT || 8080;

db.on('error', err => {
  throw new Error(err);
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
});

