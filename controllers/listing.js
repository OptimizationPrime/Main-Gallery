const model = require('../model/model.js');

/* eslint-disable array-callback-return */
// const schema = require('../db/schema.js');
module.exports = {
  get: (req, res) => {
    // console.log(req);
    model.getListing(req.params.listing_id, (err, result) => {
      if (err) {
        console.log('error in controller');
        res.sendStatus(400);
      } else {
        res.send(result);
      }
    });
  },

  post: (req, res) => {
    const listing = {
      userId: req.params.user_id,
      posted: req.body.posted,
      sale: req.body.sale,
      pending: req.body.pending,
      construction: req.body.construction,
      homeAddress: req.body.homeAddress,
      price: req.body.price,
      beds: req.body.beds,
      baths: req.body.baths,
      images: req.body.images,
    };
    model.addListing(listing, (err) => {
      if (err) {
        console.log('error');
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    });
  },
};
