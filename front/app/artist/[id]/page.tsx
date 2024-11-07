"use client";
import React from "react";
import { useParams } from "next/navigation";
import CoverImage from "@/components/artist-profile/CoverImage";
import ArtistInfo from "@/components/artist-profile/ArtistInfo";
import TabCard from "@/components/artist-profile/TabCard";
import { artistData } from "@/utils/StaticData";
import { DiscoveredNFTs, TrendingCollectionsArray } from "@/utils/StaticData";
import NftCard from "@/components/home/NftCard";
import TrendingCollectionCard from "@/components/home/TrendingCollectionCard";

export default function Page() {
  const { id } = useParams();
  const [selected, setSelected] = React.useState("Created");

  return (
    <div>
      <div className="bg-red-800">The ID of this artist is {id}</div>
      <CoverImage
        coverImage={artistData.coverImage}
        artistImage={artistData.artistImage}
      />
      <ArtistInfo
        artistName={artistData.artistName}
        artistBio={artistData.artistBio}
        Links={artistData.Links}
        stats={artistData.stats}
      />
      <div className="border-t-2 border-backgroundSecondary p-2">
        <TabCard
          selected={selected}
          setSelected={setSelected}
          createdCount={DiscoveredNFTs.length}
          ownedCount={0}
          collectionCount={TrendingCollectionsArray.length}
        />
      </div>
      <div className="p-4 container mx-auto">
        {selected === "Created" ? (
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
        ) : selected === "Owned" ? null : (
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
    </div>
  );
}
