const Rooms = require('../model/rooms');

async function getAllRooms() {
  const rooms = await Rooms.find().populate('bookings');
  return rooms;
}

async function getRoomsById(id) {
  const room = await Rooms.findById(id).populate('bookings');
  return room;
}

module.exports = {
  getAllRooms,
  getRoomsById,
};
