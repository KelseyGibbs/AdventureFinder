const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const hikes = require("./routes/api/hikes");
const routes = require("./routes")

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
require('./DB/dbConnection');

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/hikes", hikes);




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
