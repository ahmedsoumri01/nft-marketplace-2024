"use client";
import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SearchFilter from "@/components/Marketplace/SearchFilter";
import FilterBar from "@/components/Marketplace/FilterBar";
import NftCard from "@/components/home/NftCard";
import TrendingCollectionCard from "@/components/home/TrendingCollectionCard";
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
const TrendingCollectionsArray = [
  {
    ownerName: "MrFox",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "DSGN Animals",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
  {
    ownerName: "Shroomie",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "Disco Machines",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
  {
    ownerName: "John Doe",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "Magic Mushrooms",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
  {
    ownerName: "John Doe",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "Magic Mushrooms",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
];
export default function Page() {
  const [selected, setSelected] = useState("NFTs");

  return (
    <div className="container mx-auto">
      <PageHeader
        pageTitle="Browse Marketplace"
        pageDescription="Browse through more than 50k NFTs on the NFT Marketplace."
      />

      <div >
        <SearchFilter />
      </div>
      <div className="px-4">
        <FilterBar selected={selected} setSelected={setSelected} nftsCount={
          DiscoveredNFTs.length
        } 
        collectionsCount={TrendingCollectionsArray.length}
        />
      </div>
      {selected === "NFTs" ? (
        <div className="px-8 py-8 pt-12  gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {DiscoveredNFTs.map((nft, index) => (
            <NftCard
              key={index}
              nftImage={nft.nftImage}
              nftName={nft.nftName}
              nftPrice={nft.nftPrice}
              nftOwner={nft.nftOwner}
              nftOwnerAvatar={nft.nftOwnerAvatar}
              hiestBid={nft.hiestBid}
            />
          ))}
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-9 mt-8">
          {TrendingCollectionsArray.map((collection, index) => (
            <div key={index} className="w-full">
              <TrendingCollectionCard
                ownerName={collection.ownerName}
                ownerImage={collection.ownerImage}
                collectionName={collection.collectionName}
                images={collection.images}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
