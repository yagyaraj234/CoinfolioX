const model = require("../models/UserAccount");
const user = model.UserModel;

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await user.findOneAndUpdate({ _id: id }, req.body, );
    res.json({ message: "success", updateUser });
  } catch (error) {
    res.json({ message: "error" });
  }
};

const replaceUser = async (req, res) => {
  const id = req.params.id;
  try {
    const replaceUser = await user.findOneAndReplace({ _id: id }, req.body,{new:true});
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: "error" });
  }
};

module.exports = updateUser;
module.exports = replaceUser;
