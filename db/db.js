const arango = require('arangojs');

const db = new arango.Database({
  url: 'http://127.0.0.1:8529',
});

db.useDatabase('sdc');
db.useBasicAuth('root', '');

// Collections
// const users = db.collection('users');
// const listings = db.collection('listingsArr');
// const images = db.collection('images');

module.exports = db;
