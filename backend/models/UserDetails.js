import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userData = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  jwt_token:{
    type:String,
    default:""
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// userData.methods.generateAuthToken = () => {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
//     expiresIn: "7d",
//   });
//   return token;
// };

const userSchema = mongoose.model("user", userData);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().required().label("Name"),
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

export { validate, userSchema };
