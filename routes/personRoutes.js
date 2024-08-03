const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();

    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// fetch by worktype
router.get("/:work", async (req, res) => {
  try {
    const workType = req.params.work;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const data = await Person.find({ work: workType });
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedData = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedData);

    if (!response) {
      res.status(404).json({ error: "Person not found!" });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// To delete a record
router.delete('/:id', async (req, res) => {
  const personId = req.params.id;
  try {
    const response = await Person.findByIdAndDelete(personId);
    res.status(200).json({success: "Successfully deleted"}); 
    console.log(response)

    if(!response){
      res.status(404).json({error: "Person not found"})
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})

module.exports = router;
