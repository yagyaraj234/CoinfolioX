// const model = require("../models/UserAccount");
// const user = model.UserModel;
import { userSchema } from "../models/userData.js";

const updateUser = async (req, res) => {
  const token = req.token;
  const updateData = req.body;
  console.log(updateData);
  try {
    const updatedUser = await userSchema.findOneAndUpdate(
      { jwt_token: token },
      { $set: updateData }, // Use $set to update specific fields
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "success", user: updatedUser });
  } catch (error) {
    res.json({ message: "error", error: error });
  }
};

export default updateUser;
// const replaceUser = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const replaceUser = await user.findOneAndReplace({ _id: id }, req.body, {
//       new: true,
//     });
//     res.json({ message: "success" });
//   } catch (error) {
//     res.json({ message: "error" });
//   }
// };

// module.exports = replaceUser;
