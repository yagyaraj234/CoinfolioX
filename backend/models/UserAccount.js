const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const usersDetails = new Schema({
  id: { type: Number, required: true },
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 8,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 30,
  },
  email: {
    type: String,
    minlength: 10,
    includes: "@",
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports.UserModel = mongoose.model("userModel", usersDetails);
