const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { JWT_SECRET } = process.env; // Ensure this is set in your environment variables.
const { getUserID } = require("../../utils/utils");
// Function to get user information from the Bearer token
exports.getUser = async (req, res) => {
  try {
    // Extract the user ID from the decoded token
    const userId = getUserID(req);

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
    const userId = getUserID(req);

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
    const userId = getUserID(req);

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
    const userId = getUserID(req);
    console.log({socialLinks});
    console.log({reqBody:req.body});

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

// fisrt time login use the token and extract the user if from it
exports.firstTimeLogin = async (req, res) => {
  try {
    // Extract the user ID from the decoded token
    const userId = getUserID(req);

    // Find the user by ID and update the firstTimeLogin field
    const user = await User.findByIdAndUpdate(
      userId,
      { firstTimeLogin: false },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user: "user" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

//complete user profile by put bio,socialLinks and avatar if exists and use the token to extract the user id
exports.completeUserProfile = async (req, res) => {
  try {
    // Extract the user ID from the decoded token
    const userId = getUserID(req);

    const { bio, socialLinks, avatar } = req.body;

    // Find the user by ID and update the bio, socialLinks, and avatar
    const user = await User.findByIdAndUpdate(
      userId,
      { bio, socialLinks, avatar, profileCompleted: true },
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
