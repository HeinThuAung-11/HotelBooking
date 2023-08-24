const Bookings = require("./../model/booking");
const mongoose = require("mongoose");

async function saveBooking(req) {
  const userId = req.user.id;
  const { room, check_in, check_out, num_guests, total_price } =
    req.body;
  console.log(
    "userod",
    userId,
    { room, check_in, check_out, num_guests, total_price },
    typeof room,
    typeof userId
  );
  const booking = new Bookings({
    user: new mongoose.Types.ObjectId(userId),
    room: new mongoose.Types.ObjectId(room),
    check_in: check_in,
    check_out: check_out,
    num_guests: num_guests,
    total_price: total_price,
  });
  await booking.save();
  return booking.populate("rooms");
}
async function getAllBooking() {
  const bookings = await Bookings.find()
    .populate("room")
    .populate("user");
  return bookings;
}
async function getBookingByUserId(userId) {
  try {
    const bookings = await Bookings.find({ user: userId }).populate(
      "room"
    );
    return bookings;
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    throw error;
  }
}
async function deleteBookingById(bookingId) {
  const bookings = await Bookings.findByIdAndDelete(bookingId);
  console.log("delte booking", bookings);
  return bookings;
}
async function updateBooking(id, bookingData) {
  const updatedBooking = await Bookings.findByIdAndUpdate(
    id,
    bookingData,
    {
      new: true,
    }
  );
  return updatedBooking;
}

module.exports = {
  saveBooking,
  getAllBooking,
  getBookingByUserId,
  updateBooking,
  deleteBookingById,
};
