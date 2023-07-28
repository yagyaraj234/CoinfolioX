const model = require("../models/UserAccount");
const user = model.UserModel;

// Get all user
const getUsersDetails = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ message: "unsuccessful" });
  }
};

module.exports = getUsersDetails;
