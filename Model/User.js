const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email_id: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  checkbox1: { type: Boolean, default: false },
  checkbox2: { type: Boolean, default: false },
  checkbox3: { type: Boolean, default: false },
  checkbox4: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
