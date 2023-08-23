var express = require("express");
var router = express.Router();
const bookings = require("./../controller/bookingController");

router.get("/", bookings.getAllBooking);
router.get("/:userId", bookings.getBookingByUserId);
router.put("/:id", bookings.updateBooking);
router.delete("/:id", bookings.deleteBooking);
router.post("/", bookings.saveBooking);

module.exports = router;
