const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  beds: [{
    type: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }],
  amenities: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: {
    data: Buffer,
    contentType: String
  },
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }]
});

module.exports = mongoose.model('Room', roomSchema);
