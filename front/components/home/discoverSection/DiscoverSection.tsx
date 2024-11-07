import React from "react";
import SectionTitle from "@/components/home/SectionTitle";
import NftCard from "@/components/home/NftCard";

const DiscoveredNFTs = [
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(1).png",
    nftName: "Artwork",
    nftOwner: "Keepitreal",
    nftOwnerAvatar: "/assets/images/Avatar1.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(2).png",
    nftName: "Artwork",
    nftOwner: "DigiLab",
    nftOwnerAvatar: "/assets/images/Avatar2.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(3).png",
    nftName: "Artwork",
    nftOwner: "GravityOne",
    nftOwnerAvatar: "/assets/images/Avatar3.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(4).png",
    nftName: "Artwork",
    nftOwner: "Juanie",
    nftOwnerAvatar: "/assets/images/Avatar4.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(5).png",
    nftName: "Artwork",
    nftOwner: "BlueWhale",
    nftOwnerAvatar: "/assets/images/Avatar5.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(6).png",
    nftName: "Artwork",
    nftOwner: "mr fox",
    nftOwnerAvatar: "/assets/images/Avatar6.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
  {
    nftImage: "/assets/images/placeholders/ImagePlaceholder(7).png",
    nftName: "Artwork",
    nftOwner: "Shroomie",
    nftOwnerAvatar: "/assets/images/Avatar7.png",
    nftPrice: "0.5",
    hiestBid: "0.6",
  },
];

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function DiscoverSection() {
  const randomNFTs = shuffleArray([...DiscoveredNFTs]).slice(0, 3);

  return (
    <div className="min-h-screen container mx-auto p-6 sm:p-8">
      <SectionTitle
        title="Discover More NFTs"
        description="Explore new trending NFTs"
        sectionStyle="withBtn"
        buttonProps={{
          text: "See All",
          styleType: "secondary",
          icon: "Eye",
          extraClasses: "w-full justify-center md:w-auto",
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {randomNFTs.map((nft, index) => (
          <NftCard
            key={index}
            nftImage={nft.nftImage}
            nftName={nft.nftName}
            nftOwner={nft.nftOwner}
            nftOwnerAvatar={nft.nftOwnerAvatar}
            nftPrice={nft.nftPrice}
            hiestBid={nft.hiestBid}
          />
        ))}
      </div>
    </div>
  );
}

export default DiscoverSection;
