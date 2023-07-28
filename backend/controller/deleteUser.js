const model = require("../models/UserAccount");
const users = model.UserModel;

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await users.findByIdAndRemove({ _id: id });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = deleteUser;
