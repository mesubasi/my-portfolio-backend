const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    namesurname: { type: String, require: true },
    email: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;
