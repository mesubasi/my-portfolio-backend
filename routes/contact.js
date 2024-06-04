const Contact = require("../models/Contact");
const express = require("express");
const router = express.Router();

//POST Add Message
router.post("/to-send", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json("Message send successfuly!");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
