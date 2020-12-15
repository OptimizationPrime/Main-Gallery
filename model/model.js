/* eslint-disable no-underscore-dangle */
const { aql } = require('arangojs');
const db = require('../db/db.js');

module.exports = {
  getListing: (id, callback) => {
    db.query(`FOR l IN listingsArr FILTER l._key == "${id}" RETURN l`, {}, {
      stream: true,
    }).then(
      (cursor) => cursor.all(),
    ).then(
      (result) => callback(null, result),
      (err) => callback(err),
    );
  },

  addListing: async (listing, callback) => {
    try {
      const newListing = await db.query(aql`
        INSERT ${listing} INTO listingsArr
        RETURN NEW
      `);
      const resultListing = newListing._result[0];
      const q = {
        _from: `users/${resultListing.userId}`,
        _to: resultListing._id,
      };
      const addEdge = await db.query(aql`
        INSERT ${q} INTO edge
        RETURN NEW
      `);

      console.log('second', addEdge._result[0]);
      callback(null);
    } catch (err) {
      console.log('error with async/await funct', err);
      callback(err);
    }
  },
};
