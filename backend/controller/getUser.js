import { userSchema } from "../models/userData.js";

const getUser = async (req, res) => {
  try {
    const user = await userSchema.findOne({ jwt_token: req.token });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

export default getUser;
