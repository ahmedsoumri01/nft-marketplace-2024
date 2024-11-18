//check if that email exists in the database
const User = require("../../models/User");
const { encrypt, decrypt } = require("../../utils/utils");
exports.checkEmailExists = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

//check if that username exists in the database
exports.checkUsernameExists = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

//check if password contain the minimum requirement , atleast 6 character with atleast one number
exports.checkPassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/;
  return passwordRegex.test(password);
};

exports.getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};
