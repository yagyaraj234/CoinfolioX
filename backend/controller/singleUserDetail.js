const model = require("../models/UserAccount");
const user = model.UserModel;

// Get single user
const oneUserDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await user.findById({ _id: id });
    console.log(singleUser);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(401).json({ message: "Unsuccesful" });
  }
};

module.exports = oneUserDetail;
