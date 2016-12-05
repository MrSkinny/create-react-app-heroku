const express = require('express');
const path = require('path');

const allowCors = require('./middleware/allowCors');
const messagesRouter = require('./routers/messagesRouter');

const PORT = process.env.PORT || 8080;

const app = express();

// Serve build directory only on Production; otherwise, use create-react-app npm start
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Allow CORS on dev only
if (process.env.NODE_ENV !== 'production') {
  app.use('/api/v1/*', allowCors);
}

app.use('/api/v1/messages', messagesRouter);

app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
