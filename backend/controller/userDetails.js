const model = require("../models/UserAccount");
const user = model.UserModel;

const userDetails = (req, res) => {
  try {
    let newUser = new user(req.body);
    newUser.save().then(res.status(201).json({ message: "success" }));
  } catch (error) {
    res.status(401).json({ message: "Not created", error });
  }

};

module.exports = userDetails;
