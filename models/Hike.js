const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HikeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Hike = mongoose.model("Hikes", HikeSchema);
