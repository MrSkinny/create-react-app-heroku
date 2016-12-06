const express = require('express');

const messagesRouter = require('./routers/messagesRouter');
const allowCors = require('./middleware/allowCors');

const app = express();

// Serve build directory only on Production; otherwise, use create-react-app npm start
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Allow CORS on dev only; we need CORS because client and server are on different ports
if (process.env.NODE_ENV !== 'production') {
  app.use('/api/v1/*', allowCors);
}

app.use('/api/v1/messages', messagesRouter);

module.exports = app;
