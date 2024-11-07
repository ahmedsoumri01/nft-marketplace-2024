"use client";
import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SearchFilter from "@/components/Marketplace/SearchFilter";
import FilterBar from "@/components/Marketplace/FilterBar";
import NftCard from "@/components/home/NftCard";
import TrendingCollectionCard from "@/components/home/TrendingCollectionCard";
import { DiscoveredNFTs, TrendingCollectionsArray } from "@/utils/StaticData";
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
