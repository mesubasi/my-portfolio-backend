//server.js

const express = require("express");
const mongoose = require("mongoose");
const server = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

//middlewares
server.use(express.json());

server.listen(PORT, () => {
  connect();
  console.log(`Server listening on port ${PORT}`);
});
