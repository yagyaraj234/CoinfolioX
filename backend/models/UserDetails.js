import mongoose, { Schema } from "mongoose";

const userData = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
  confirmpassword: {
    type: String,
    min: 8,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = mongoose.model("userSchema", userData);

export default UserSchema;
