import { userSchema } from "../models/UserDetails.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLogin = async (req, res) => {
  try {
    const loginData = req.body;
    const user = await userSchema.findOne({ email: req.body.email });
    user.name = "Yagyaraj Lodhi";
    if (!user) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    let token = jwt.sign(loginData, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    user.jwt_token = token;
    user.save();

    res.cookie("Authtoken", token, { httpOnly: true, secure: true });
    res.status(200).send({ message: "Logged in successfully" });
    // return response;
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export default userLogin;
