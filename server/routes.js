const router = require('express').Router();
const controller = require('../controllers/listing.js');

router.get('/*/:listing_id/homesData', controller.get);

router.post('/*/:user_id/create', controller.post);

module.exports = router;
