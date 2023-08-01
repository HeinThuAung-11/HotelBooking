const adminRoomService = require("../service/adminService");

async function getAllRooms(req, res, next) {
  try {
    const rooms = await adminRoomService.getAllRooms();
    res.json(rooms);
  } catch (err) {
    next(err);
  }
}

async function getRoomsById(req, res, next) {
  console.log("room id", req.params.id);
  try {
    const room = await adminRoomService.getRoomsById(req.params.id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    next(err);
  }
}

// save room (admin only)
async function saveRoom(req, res, next) {
  try {
    const room = await adminRoomService.saveRoom(req.body);
    res.json(room);
  } catch (err) {
    next(err);
  }
}

// update room (admin only)
async function updateRoom(req, res, next) {
  try {
    const room = await adminRoomService.updateRoom(
      req.params.id,
      req.body
    );
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    next(err);
  }
}

// delete room (admin only)
async function deleteRoom(req, res, next) {
  try {
    const room = await adminRoomService.deleteRoom(req.params.id);
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
  saveRoom,
  updateRoom,
  deleteRoom,
};
