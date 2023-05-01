var express = require('express');
var router = express.Router();
const bookings = require('./../controller/bookingController')
/* GET users listing. */
router.get('/', bookings.getAllBooking);
router.post('/', bookings.saveBooking);


module.exports = router;
