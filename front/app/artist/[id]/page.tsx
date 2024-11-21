"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CoverImage from "@/components/artist-profile/CoverImage";
import ArtistInfo from "@/components/artist-profile/ArtistInfo";
import TabCard from "@/components/artist-profile/TabCard";
import { artistData } from "@/utils/StaticData";
import { DiscoveredNFTs, TrendingCollectionsArray } from "@/utils/StaticData";
import NftCard from "@/components/home/NftCard";
import TrendingCollectionCard from "@/components/home/TrendingCollectionCard";
 import { getArtistProfile } from "@/lib/features/user/userAPI";
import Spinner from "@/components/Spinner";
import { UserData } from "@/types"; // Import the UserData type
export default function Page() {
  const { id } = useParams();
  if (typeof id !== "string") {
    throw new Error("Invalid artist ID");
  }
  const [userData, setUserData] = useState<UserData | null>(null); // Use the UserData type
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = React.useState("Created");

  const fetchUserData = async () => {
    try {
      setLoading(true);
      await getArtistProfile(id).then((response) => {
        console.log(response.data.user);
        setUserData(response.data.user);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);
  return loading ? (
    <Spinner white={true} size="large" />
  ) : (
    <div>
      <div className="bg-red-800">The ID of this artist is {id}</div>
      <CoverImage
        coverImage={userData?.coverImage || artistData.coverImage}
        artistImage={userData?.avatar || artistData.artistImage}
      />
      <ArtistInfo
        artistName={userData?.username || ""} // Safely access name
        artistBio={userData?.bio || ""} // Safely access bio
        Links={userData?.socialLinks || []} // Safely access socialLinks
        stats={{
          nfts: userData?.followers?.length || 0, // Safely access nfts
          volume: userData?.followers?.length || 0, // Safely access volume
          followers: userData?.followers?.length || 0, // Safely access
        }}
        myProfile={false}
        fetchUserData={fetchUserData}
        walletLinked={false}
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
