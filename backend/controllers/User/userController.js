 

const jwt = require('jsonwebtoken');
const User = require("../../models/User");
const { JWT_SECRET } = process.env; // Ensure this is set in your environment variables.

// Function to get user information from the Bearer token
exports.getUser = async (req, res) => {
  // Get the token from the Authorization header
  const authHeader = req.header("Authorization");

  // Check if the Authorization header exists and follows the Bearer format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Extract the token from the Bearer scheme
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, JWT_SECRET);

    // Extract the user ID from the decoded token
    const userId = decoded.user.id;

    // Fetch the user from the database
    const user = await User.findById(userId).select("-password"); // Exclude the password from the response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the user data
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Invalid token" });
  }
};

// update user bio
exports.updateUserBio = async (req, res) => {
  try {
    const { bio } = req.body;
    const userId = req.user.id;

    // Find the user by ID and update the bio
    const user = await User.findByIdAndUpdate(
      userId,
      { bio },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

//update username
exports.updateUsername = async (req, res) => {
  try {
    const { username } = req.body;
    const userId = req.user.id;

    // Find the user by ID and update the username
    const user = await User.findByIdAndUpdate(
      userId,
      { username },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

//set or update socialLinks  socialLinks: [{platformName: String, platformIcon: String, link: String,},],
exports.updateSocialLinks = async (req, res) => {
  try {
    const { socialLinks } = req.body;
    const userId = req.user.id;

    // Find the user by ID and update the socialLinks
    const user = await User.findByIdAndUpdate(
      userId,
      { socialLinks },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// fisrt time login
exports.firstTimeLogin = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find the user by ID and update the firstTimeLogin
    const user = await User.findByIdAndUpdate(
      userId,
      { firstTimeLogin: false },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
