const bcrypt = require('bcrypt');
const Admin = require('./../model/admin');
const Rooms = require('./../model/rooms');
const fs = require('fs');

const register = async (name, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  let admin = new Admin({
    name,
    email,
    password: hashPassword,
  });
  return admin.save();

}
const login = async (email, password) => {

  const filter = {
    email
  };
  console.log('Filter ', filter, password);
  const admin = await Admin.findOne(filter);
  if (admin) {
    console.log('email ', email, " Password ", admin.password);
    const validPass = await bcrypt.compare(password, admin.password);
    if (validPass) {
      return admin;
    }
    else {
      throw Error("Invalid user or password");
    }
  }
  throw Error("Invalid user or password");;
};


async function getAllRooms() {
  const rooms = await Rooms.find().populate('bookings');
  return rooms;
}

async function getRoomsById(id) {
  const room = await Rooms.findById(id).populate('bookings');
  return room;
}
async function saveRoom(roomData) {
  const newRoom = new Rooms(roomData);
  const savedRoom = await newRoom.save();
  return savedRoom;
}

async function updateRoom(id, roomData) {
  const updatedRoom = await Rooms.findByIdAndUpdate(id, roomData, { new: true });
  return updatedRoom;
}

async function deleteRoom(id) {
  const deletedRoom = await Rooms.findByIdAndDelete(id);
  return deletedRoom;
}
module.exports = {
  getAllRooms,
  getRoomsById,
  register,
  login,
  saveRoom,
  updateRoom,
  deleteRoom
}