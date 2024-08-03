const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST request to insert data to the database
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new Menu(data);
    const response = await newMenuItem.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
