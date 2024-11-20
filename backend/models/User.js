const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    avatar: String,
    bio: String,
    socialLinks: [
      {
        platformName: String,

        link: String,
      },
    ],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    blockchainAddress: { type: String, unique: true, sparse: true },
    //make the email with get  and set and crypt and decrypt it
    email: {
      type: String,
      unique: true,
      required: true,
    },

    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
    ownedNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
    favoriteNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: "NFT" }],
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Collection" }],
    resetPasswordToken: String,
    notifications: [
      {
        type: { type: String, enum: ["Bid", "AuctionEnd", "Follow"] },
        message: String,
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    role: { type: String, enum: ["user", "admin"], default: "user" },
    walletConnectedAt: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    walletLinked: { type: Boolean, default: false },
    waletLinkedAt: Date,
    firstTimeLogin: { type: Boolean, default: true },
    profileCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
// Encrypt password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
