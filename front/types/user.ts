export type SocialLink = {
  platformName: string;
  link: string;
  _id: string;
};
export type UserData = {
  _id: string;
  bio: string;
  avatar: string;
  coverImage: string;
  email: string;
  username: string;
  followers: string[];
  createdNFTs: string[];
  ownedNFTs: string[];
  favoriteNFTs: string[];
  collections: string[];
  role: "user" | "admin"; // Enum for role
  walletLinked: boolean;
  firstTimeLogin: boolean;
  profileCompleted: boolean;
  socialLinks: SocialLink[]; // Fixed: Changed from [SocialLink] to SocialLink[]
  notifications: string[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

