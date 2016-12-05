const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

const allowCors = function(req, res, next){
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

app.use('/api/v1/*', allowCors);

app.get('/api/v1/messages', (req, res) => {
  res.json({ message: 'howdy' });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
