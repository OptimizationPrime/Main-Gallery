const router = require('express').Router();
const controller = require('../controllers/listing.js');

router.get('/listings/:listing_id/api', controller.get);

router.post('/user/:user_id/create', controller.post);



module.exports = router;
