const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: String,
    bio: String,
    socialLinks: [{
      platformName: String,
      platformIcon: String,
      link: String
    }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    blockchainAddress: { type: String, unique: true, sparse: true },
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
    ownedNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
    favoriteNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
    resetPasswordToken: String,
    notifications: [{
      type: { type: String, enum: ['Bid', 'AuctionEnd', 'Follow'] },
      message: String,
      read: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now }
    }],
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    walletConnectedAt: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { timestamps: true });
  