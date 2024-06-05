//server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const errorHandler = require("./middleware/errorHandler");
const reqHandler = require("./middleware/reqHandler");
const dotenv = require("dotenv");

//routes
const contactRoute = require("./routes/contact");

dotenv.config();

server.use(cors());
server.use(reqHandler);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw new Error("Error connecting to MongoDB", err);
  }
};

//middlewares
server.use(express.json());
server.use(errorHandler);
server.use("/api/contact", contactRoute);

server.listen(PORT, () => {
  connect();
  console.log(`Server listening on port ${PORT}`);
});
