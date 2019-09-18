const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HikeSchema = new Schema({
  userName: { 
    type: String,
    required: true
  },
  ID: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: false
  },
  ascent: {
    type: Number,
    required: false
  },
  descent: {
    type: Number,
    required: false
  },
  high: {
    type: Number,
    required: false
  },
  low: {
    type: Number,
    required: false
  },
  imgSmall: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Hike = mongoose.model("Hikes", HikeSchema);
