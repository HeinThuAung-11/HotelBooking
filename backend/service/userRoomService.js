const Rooms = require("../model/rooms");

async function getAllRooms() {
  const rooms = await Rooms.find().populate("bookings");
  // const rooms = await Rooms.find();

  return rooms;
}

async function getRoomsById(id) {
  // const room = await Rooms.findById(id).populate('bookings');
  const room = await Rooms.findById(id);
  return room;
}

module.exports = {
  getAllRooms,
  getRoomsById,
};
