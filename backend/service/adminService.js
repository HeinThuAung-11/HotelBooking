const bcrypt = require('bcrypt');
const Admin = require('./../model/admin');
const Room = require('./../model/rooms');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

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
  // const rooms = await Room.find().populate('bookings');
  const rooms = await Room.find();

  return rooms;
}

async function getRoomsById(id) {
  // const room = await Room.findById(id).populate('bookings');
  const room = await Room.findById(id);
  const imageBuffer = room.picture.data;
  const imageType = room.picture.contentType;
  const imageDataUri = `data:${imageType};base64,${imageBuffer.toString('base64')}`;
  console.log('room', room)
  room.picture = {
    data: imageDataUri,
    contentType: imageType
  };
  console.log('room', room)

  return room;
}

async function saveRoom(roomData) {
  // Get the file buffer and content type from the request
  console.log("req file", roomData)
  const imagePath = path.join(process.cwd(), 'img/2.jpeg');
  const imageBuffer = fs.readFileSync(imagePath);
  const contentType = mime.lookup(imagePath);
  // const fileBuffer = req.file.buffer;
  // const contentType = req.file.mimetype;
  console.log('content type', contentType, imagePath)
  // Create a new room document with the photo
  const newRoom = new Room({
    type: roomData.type,
    description: roomData.description,
    capacity: roomData.capacity,
    beds: roomData.beds,
    amenities: roomData.amenities,
    price: roomData.price,
    picture: {
      data: imageBuffer,
      contentType: contentType
    }
  });

  // Save the new room to the database
  const savedRoom = await newRoom.save();
  return savedRoom;
}

async function updateRoom(id, roomData) {
  console.log('roomdata', roomData)
  const updatedRoom = await Room.findByIdAndUpdate(id, roomData, { new: true });
  return updatedRoom;
}

async function deleteRoom(id) {
  const deletedRoom = await Room.findByIdAndDelete(id);
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