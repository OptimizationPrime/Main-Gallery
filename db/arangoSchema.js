const Database = require('arangojs').Database;

// Security??

// Getting a handle
const db = new Database();

// Creating a new database
db.createDatabase('sdc').then(
  if (!err) console.log('Database created');
  else console.error('Failed to create database:', err);
);
db.useDatabase('sdc');

// create a handle to a collection
const trulia = db.collection('trulia');

// create the collection
trulia.create().then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);

const listing =  {
  _key: {
    "type": "integer",
  },
  posted: {
    "type": "boolean",
  },
  sale: {
    "type": "boolean",
  },
  pending: {
    "type": "boolean",
  },
  construction: {
    "type": "boolean",
  },
  homeAddress: {
    "type": "string",
  },
  price: {
    "type": "number",
  },
  beds: {
    "type": "integer",
  },
  baths: {
    "type": "integer",
  },
  user: {
    "type": "object",
    "minItems": 2,
    "properties": {
      "username": { "type": "string" },
      "firstName": { "type": "string" },
      "lastName": { "type": "string" },
      "email": { "type": "string" },
      "phone": { "type": "string" },
    }
  },
  images: {
    "type": "array",
    "items": {
      "type": "string"
    }
  },
};

collection.save(listing).then(
  meta => console.log('Document saved:', meta._rev),
  err => console.error('Failed to save document:', err)
);
