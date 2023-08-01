const Bookings = require("./../model/booking");
const mongoose = require("mongoose");

async function saveBooking(req) {
  const userId = req.user.id;
  const { room, check_in, check_out, num_guests } = req.body;
  console.log(
    "userod",
    userId,
    { room, check_in, check_out, num_guests },
    typeof room,
    typeof userId
  );
  const booking = new Bookings({
    user: new mongoose.Types.ObjectId(userId),
    room: new mongoose.Types.ObjectId(room),
    check_in: check_in,
    check_out: check_out,
    num_guests: num_guests,
    total_price: 500,
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
module.exports = {
  saveBooking,
  getAllBooking,
};
