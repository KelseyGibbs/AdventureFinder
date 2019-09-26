const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

// Create Schema
const hikeSchema = new Schema({
  userid: { 
    type: String,
    required: true
  }
  ,
  id: {
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
  summary: {
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
  weird: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  
});
hikeSchema.plugin(uniqueValidator)
const Hike = mongoose.model("Hike", hikeSchema);

module.exports = Hike;