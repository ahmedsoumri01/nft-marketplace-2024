const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const {
  checkEmailExists,
  checkUsernameExists,
  checkPassword,  
} = require("../User/utils");
const jwt = require("jsonwebtoken"); // to generate signed token
//register user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //check if the user exists
    const checkUserEmailIfexist = await checkEmailExists(email);
    if (checkUserEmailIfexist) {
      return res
        .status(400)
        .json({ message: "this User email already exists" });
    }
    //check if the username exists
    const checkUsernameIfexist = await checkUsernameExists(username);
    if (checkUsernameIfexist) {
      return res.status(400).json({ message: "this Username already exists" });
    }
    //check if password contain the minimum requirement , atleast 6 character with atleast one number
    const checkPasswordRegex = await checkPassword(password);
    if (!checkPasswordRegex) {
      return res.status(400).json({
        message: "Password must be atleast 6 character with atleast one number",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    return res
      .status(200)
      .json({ message: "User registered successfully", user: user });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

//login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if that email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    //check if the password match
    const isMatch = await bcrypt.compare(password, user.password);
   console.log(user)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //generate token
    const payload = {
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        firstTimeLogin: user.firstTimeLogin,
        profileCompleted: user.profileCompleted,
        walletLinked: user.walletLinked,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ message: "User logged in sucessefuly", token });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};
