const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env; // Ensure this is set in your environment variables.

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.ENCRYPTION_KEY, "hex"); // Store a 32-byte hex key in your environment variables
const iv = Buffer.from(process.env.ENCRYPTION_IV, "hex"); // Store a 16-byte hex IV in your environment variables

// Encrypt user info
exports.encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted; // No need to store the IV if it's constant
};

// Decrypt user info
exports.decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

//get userID from token in header
exports.getUserID = (req) => {
  // Get the token from the Authorization header
  const authHeader = req.header("Authorization");

  // Check if the Authorization header exists and follows the Bearer format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  // Extract the token from the Bearer scheme
  const token = authHeader.split(" ")[1];
  // Verify the token and decode it
  const decoded = jwt.verify(token, JWT_SECRET);

  return decoded.user.id;
};
