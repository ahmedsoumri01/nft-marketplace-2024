const CollectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: String,
    coverImage: String,
    nfts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }],
    visibility: { type: String, enum: ['public', 'private'], default: 'public' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { timestamps: true });
  