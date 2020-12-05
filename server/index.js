const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../controllers/listing.js');
const arangojs = require('arangojs');

// const path = require('path')

const app = express();
const PORT = 8040;

app.use(bodyParser.json());
app.use('/gallery/:id', express.static('client/dist'));


// app.get('/listings/:id/db', controller.getAll);

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

// app.get('/db', controller.get);
app.get('/*/:id/homesData', controller.getListings);

