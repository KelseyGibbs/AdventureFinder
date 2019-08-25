const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");const cors = require('cors')

const users = require("./routes/api/users");

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

// Use Cors
app.use(cors())

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://www.hikingproject.com"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
