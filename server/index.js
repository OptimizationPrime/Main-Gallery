// require('newrelic');
const express = require('express');
const parser = require('body-parser');
// const morgan = require('morgan');

const arangojs = require('arangojs');
const router = require('./routes.js');

// const path = require('path')

const app = express();
// app.use(morgan('dev'));
app.use(parser.json());

app.use('/', router);

const PORT = 3001;

app.use('/home/:listing_id', express.static('client/dist'));

app.get('/loaderio-58866d2ffb0e9d469c47a1ca47ddd9ca', (req, res) => {
  res.send('loaderio-58866d2ffb0e9d469c47a1ca47ddd9ca');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
