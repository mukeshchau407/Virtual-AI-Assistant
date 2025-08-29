const User = require("../models/userModel");

export const getCurrentUser = async (req, res) => {
  try {
    const userId = res.userId;
    const user = await User.findOne(email);
    if (!user) {
      return res.status(400).json({ message: "user not found!" });
    }
    return res.status(200).json(user);
  } catch (error) {}
  return res.status(400).json({ message: "get current user error!" });
};
