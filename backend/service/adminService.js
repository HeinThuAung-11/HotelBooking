const bcrypt = require("bcrypt");
const Admin = require("./../model/admin");
const Room = require("./../model/rooms");
const User = require("./../model/user");
const Booking = require("./../model/booking");
const register = async (name, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  let admin = new Admin({
    name,
    email,
    password: hashPassword,
  });
  return admin.save();
};

const login = async (email, password) => {
  const filter = {
    email,
  };
  console.log("Filter ", filter, password);
  const admin = await Admin.findOne(filter);
  if (admin) {
    console.log("email ", email, " Password ", admin.password);
    const validPass = await bcrypt.compare(password, admin.password);
    if (validPass) {
      return admin;
    } else {
      throw Error("Invalid user or password");
    }
  }
  throw Error("Invalid user or password");
};

async function getAllRooms() {
  const rooms = await Room.find().populate("bookings");
  // const rooms = await Room.find();

  return rooms;
}

async function getRoomsById(id) {
  // const room = await Room.findById(id).populate('bookings');
  const room = await Room.findById(id);

  return room;
}

async function saveRoom(roomData) {
  // Create a new room document with the photo

  const newRoom = new Room({
    room_num: roomData.room_num,
    type: roomData.type,
    description: roomData.description,
    capacity: roomData.capacity,
    beds: roomData.beds,
    amenities: roomData.amenities,
    price: roomData.price,
    picture: roomData.picture,
  });

  // Save the new room to the database
  const savedRoom = await newRoom.save();

  return savedRoom;
}

// Update an existing room in the database
async function updateRoom(id, roomData) {
  const updatedRoom = await Room.findByIdAndUpdate(id, roomData, {
    new: true,
  });
  return updatedRoom;
}

// Delete a room from the database
async function deleteRoom(id) {
  const deletedRoom = await Room.findByIdAndDelete(id);
  return deletedRoom;
}
// Get All User from the database
async function getAllUsers() {
  const users = await User.find();
  return users;
}
// Delete a user from the database
async function deleteUser(id) {
  const deleteUser = await User.findByIdAndDelete(id);
  return deleteUser;
}

// Get user by ID from the Database
async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

//Get Booking from the Database

async function getAllBooking() {
  const booking = await Booking.find()
    .populate("user")
    .populate("room");
  return booking;
}

// Delete a user from the database
async function deleteBooking(id) {
  const deleteBookikng = await Booking.findByIdAndDelete(id);
  return deleteBookikng;
}

// Export the functions for use in other modules
module.exports = {
  getAllRooms,
  getRoomsById,
  register,
  login,
  saveRoom,
  updateRoom,
  deleteRoom,
  deleteUser,
  getAllUsers,
  getUserById,
  getAllBooking,
  deleteBooking,
};
