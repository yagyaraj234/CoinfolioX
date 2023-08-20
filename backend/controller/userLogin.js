import { userSchema } from "../models/UserDetails.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "js-cookie";

const userLogin = async (req, res) => {
  try {
    const loginData = req.body;
    const Finduser = await userSchema.findOne({ email: req.body.email });
    if (!Finduser) {
      res.status(401).send({ message: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      Finduser.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    let token = jwt.sign(loginData, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
    });
    Finduser.jwt_token = token;
    Finduser.save();
    res.cookie("Authtoken", token, { httpOnly: true, secure: true });
    res.status(200).send({ message: "Logged in successfully", token: token });
  } catch (error) {
    res.status(500).send({ message: "" });
  }
};

export default userLogin;
