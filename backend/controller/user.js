import UserSchema from "../models/UserDetails.js";

const userRegistration = async (req, res) => {
  const userInfo = new UserSchema(req.body);
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  if (password === confirmpassword) {
    try {
      userInfo.save();
      res.status(201).json({ message: "Signup Succesfully 😍" });
    } catch (error) {
      res.status(422).json({ message: "Signup failed 😶" });
    }
  } else {
    res.json({ message: "Password does not match" });
  }
};

export default userRegistration;
