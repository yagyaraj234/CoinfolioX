import mongoose, { Schema } from "mongoose";
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
  avatar_url: {
    type: String,
    default:
      "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AABvWklEQVR42u2dB3gc1dWGB2ODAdN77yX0EnpCCS20EEiA0Hvgp9eEbjoBQiAhgQAhQEIAm92VLMty7733XuQm2ypTthft6v73jExirDszd",
  },
  jwt_token: {
    type: String,
    default: "",
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
    name: joi.string().required().label("name"),
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

export { validate, userSchema };
