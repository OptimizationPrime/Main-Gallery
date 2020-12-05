const db = require('arangojs')();

db.useBasicAuth('root', '');
// Security??

// Creating a new database
module.export = db.createDatabase('sdc')
  .then(() => {
    console.log('created sdc db');
    return db.useDatabase('sdc');
  })
  .then(() => {
    const collection = db.collection('listingCollection');

    {
      rule: {
        properties: { nums: { type: "array", items: { type: "number", maximum: 6 } } },
        additionalProperties: { type: "string" },
        required: ["nums"]
      },
      level: "moderate",
      message: "The document does not contain an array of numbers in attribute 'nums', or one of the numbers is bigger than 6."
    };

    const schema = {
      rule: {
        properties: {
          _key: { type: 'integer' },
          posted: { type: 'boolean' },
          sale: { type: 'boolean' },
          pending: { type: 'boolean' },
          construction: { type: 'boolean' },
          homeAddress: { type: 'string' },
          price: { type: 'number' },
          beds: { type: 'integer' },
          baths: { type: 'integer' },
          user: {
            type: 'object',
            minItems: 2,
            properties: {
              username: { type: 'string' },
              firstName: { type: 'string' },
              lastName: { type: 'string' },
              email: { type: 'string' },
              phone: { type: 'string' },
            },
          },
          images: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        required: ['_keys', 'posted', 'sale', 'pending', 'construction', 'homeAddress', 'price', 'beds', 'baths', 'user', 'images']
      },
      message: "This is the listing arango schema"
    };
    return collection.create('listingCollection', { schema });
  });

// create a handle to a collection
// const trulia = db.collection('trulia');
