"use client";
import React, { useState, useEffect } from "react";
import CoverImage from "@/components/artist-profile/CoverImage";
import ArtistInfo from "@/components/artist-profile/ArtistInfo";
import TabCard from "@/components/artist-profile/TabCard";
import { artistData } from "@/utils/StaticData";
import { DiscoveredNFTs, TrendingCollectionsArray } from "@/utils/StaticData";
import NftCard from "@/components/home/NftCard";
import TrendingCollectionCard from "@/components/home/TrendingCollectionCard";
import { getUser } from "@/lib/features/user/userAPI";
import Spinner from "@/components/Spinner";
import { UserData } from "@/types"; // Import the UserData type
export default function Page() {
  const [selected, setSelected] = useState("Created");
  const [userData, setUserData] = useState<UserData | null>(null); // Use the UserData type
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await getUser();
      setUserData(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(userData);
  return loading ? (
    <Spinner white={true} size="large" />
  ) : (
    <div>
      <CoverImage
        coverImage={
          userData?.coverImage || artistData.coverImage
        }
        artistImage={
          userData?.avatar || artistData.artistImage
        }
      />
      <ArtistInfo
        walletLinked={userData?.walletLinked || false} // Safely access walletLinked
        myProfile={true} // Set myProfile to true
        artistName={userData?.username || ""} // Safely access name
        artistBio={userData?.bio || ""} // Safely access bio
        Links={userData?.socialLinks || []} // Safely access socialLinks
        stats={{
          nfts: userData?.followers?.length || 0, // Safely access nfts
          volume: userData?.followers?.length || 0, // Safely access volume
          followers: userData?.followers?.length || 0, // Safely access
        }}
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
