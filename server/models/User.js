const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, default: "" },
  dob: { type: String, default: "" },
  address: { type: String, default: "" },
  city: { type: String, default: "" },
  image: { type: String, default: "" }

});

module.exports = mongoose.model('User', userSchema);
