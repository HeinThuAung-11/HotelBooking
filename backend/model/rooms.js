const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    room_num: {
      type: Number,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    beds: [
      {
        type: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
    ],
    amenities: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  {
    strictPopulate: false, // add this option to disable strict populate
  }
);

module.exports = mongoose.model("Room", roomSchema);
