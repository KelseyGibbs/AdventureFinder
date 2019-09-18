const mongoose = require("mongoose");
const db = require("../models");

// This file empties the hikes collection and inserts the hikes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const hikeSeed = [
  {
    userID: "5d5425bb25562b3d3e2ff1e0",
    ID: "7003859",
    name: "hike this landscape",
    location: "here",
    length: 1,
    ascent: 1,
    descent: 100,
    high: 2,
    low: 1,
    imgSmall: "https://cdn-files.apstatic.com/hike/7030317_small_1554926735.jpg"
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
