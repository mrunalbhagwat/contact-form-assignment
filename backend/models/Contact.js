const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  state: String,
  gender: String,
  message: String,
});

module.exports = mongoose.model("Contact", ContactSchema);
