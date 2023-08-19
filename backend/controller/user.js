import { userSchema, validate } from "../models/UserDetails.js";
import bcrypt from "bcrypt";

const userRegistration = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await userSchema.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exist" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newuser = await new userSchema({
      ...req.body,
      password: hashPassword,
      confirmpassword: hashPassword,
    }).save();
    res.status(201).send({ message: "User created Succesfully", user: user });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export default userRegistration;
