const express = require("express");
const app = express();
const db = require("./db");
const Menu = require("./models/Menu");
const bodyParser = require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menu', menuRoutes)


// GET request to get the menu items


app.listen(PORT, () => {
  console.log("listening on port 3000");
});
