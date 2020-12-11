require('newrelic');

const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');

const arangojs = require('arangojs');
const router = require('./routes.js');

// const path = require('path')

const app = express();
app.use(morgan('dev'));
app.use(parser.json());

const PORT = 8040;

app.use('/listings/:listing_id', express.static('client/dist'));

app.use('/', router);

// app.get('/listings/:id/db', controller.getAll);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
