const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.URI;
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connectToMongoDB
};
