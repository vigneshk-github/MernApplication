const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email_id: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  checkbox1: { type: String, default: null },
  checkbox2: { type: String, default: null },
  checkbox3: { type: String, default: null },
  checkbox4: { type: String, default: null },
  number: { type: Number, default: null },
});

module.exports = mongoose.model("User", UserSchema);
