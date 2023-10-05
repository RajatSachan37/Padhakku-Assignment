const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User's name is required"],
  },
  email: {
    type: String,
    required: [true, "User's Email is required"],
    unique: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
