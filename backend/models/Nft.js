const mongoose = require("mongoose");


const NFTSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: String,
    price: { type: Number, required: true },
    highestBid: Number,
    auction: {
      active: { type: Boolean, default: false },
      timer: Date,
      reservePrice: Number,
      highestBid: Number,
      bidHistory: [{
        amount: Number,
        bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        timestamp: { type: Date, default: Date.now }
      }]
    },
    details: {
      etherscanLink: String,
      openseaLink: String
    },
    tags: [String],
    category: String,
    mediaUrl: String,
    mediaType: { type: String, enum: ['image', 'video', 'audio'] },
    transactionHistory: [{
      from: String,
      to: String,
      timestamp: Date,
      transactionId: String
    }],
    saleStatus: { type: String, enum: ['listed', 'sold', 'onAuction'], default: 'listed' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { timestamps: true });
  

const NFT = mongoose.model('NFT', NFTSchema);
module.exports = NFT;