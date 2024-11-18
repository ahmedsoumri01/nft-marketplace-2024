const crypto = require("crypto");
const jwt = require("jsonwebtoken");

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

 
