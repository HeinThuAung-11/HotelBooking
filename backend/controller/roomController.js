const roomService = require("./../service/userRoomService");

async function getAllRooms(req, res, next) {
  try {
    const rooms = await roomService.getAllRooms();
    res.json(rooms);
  } catch (err) {
    next(err);
  }
}

async function getRoomsById(req, res, next) {
  try {
    const room = await roomService.getRoomsById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllRooms,
  getRoomsById,
};
