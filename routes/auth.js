// Auth.js

const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//login post
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ error: "User Not Found!" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(403).json("Invalid Password!");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
