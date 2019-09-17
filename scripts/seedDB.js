const mongoose = require("mongoose");
const db = require("../models");

// This file empties the hikes collection and inserts the hikes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const hikeSeed = [
  {
    name: "the big loop"
  }
];

db.Hike
  .remove({})
  .then(() => db.Hike.collection.insertMany(hikeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
