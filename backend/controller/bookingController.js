const bookingService = require("./../service/bookingService");

async function saveBooking(req, res, next) {
  try {
    const booking = await bookingService.saveBooking(req);
    res.json(booking);
  } catch (err) {
    next(err);
  }
}

async function getAllBooking(req, res, next) {
  try {
    const bookings = await bookingService.getAllBooking();
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  saveBooking,
  getAllBooking,
};
