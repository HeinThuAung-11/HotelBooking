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

async function getBookingByUserId(req, res, next) {
  try {
    let userId = req.params.userId;
    console.log("getuserbookingid", userId);
    const bookings = await bookingService.getBookingByUserId(userId);
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}
const deleteBooking = async function (req, res, next) {
  try {
    console.log("Req delete booking", req.params.id);
    let bookingId = req.params.id;
    const booking = await bookingService.deleteBookingById(bookingId);
    return res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};
async function updateBooking(req, res, next) {
  try {
    const booking = await bookingService.updateBooking(
      req.params.id,
      req.body
    );
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  saveBooking,
  getAllBooking,
  getBookingByUserId,
  deleteBooking,
  updateBooking,
};
