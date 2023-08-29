import { userSchema } from "../models/userData.js";

const addToFav = async (req, res) => {
  const token = req.token;
  const curr = req.body.coin;
  console.log(curr);
  console.log(token);

  try {
    const user = await userSchema.findOne({ jwt_token: token });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the coin is already in the favorites array
    if (user.favorites.includes(curr)) {
      return res.json({ message: "Coin is already a favorite", user });
    }

    // If the coin is not in favorites, push it to the array
    user.favorites.push(curr);
    const updatedUser = await user.save();

    res.json({ message: "Favorite added successfully", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding favorite", error: error.message });
  }
};

export default addToFav;
