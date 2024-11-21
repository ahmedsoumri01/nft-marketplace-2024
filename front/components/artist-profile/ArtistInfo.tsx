import React from "react";

import { SocialLink } from "@/types";

import ArtistBio from "@/components/artist-profile/ArtistBio";
import ArtistnameAndWalet from "@/components/artist-profile/ArtistnameAndWalet";
import SocialLinks from "@/components/artist-profile/SocialLinks";
type Props = {
  artistName: string;
  artistBio: string;
  myProfile: boolean;
  fetchUserData: () => void; // Add the fetchUserData function
  walletLinked: boolean;
  Links: SocialLink[]; // Correct type
  stats: {
    nfts: number;
    volume: number;
    followers: number;
  };
};

export default function ArtistInfo({
  artistName = "Unknown Artist", // Default fallback
  artistBio = "No bio available.",
  Links = [], // Default to an empty array
  fetchUserData,
  stats,
  walletLinked = false,
  myProfile = false,
}: Props) {
  return (
    <div className="container mx-auto pt-20">
      <div>
        <ArtistnameAndWalet
          artistName={artistName}
          walletLinked={walletLinked}
          myProfile={myProfile}
          fetchUserData={fetchUserData}
        />
      </div>
      <div className="flex items-center p-4 justify-between py-8 lg:w-1/3">
        <div>
          <p className="font-bold text-2xl">{stats.nfts}</p>
          <p className="text-lg">NFTs Sold</p>
        </div>
        <div>
          <p className="font-bold text-2xl">{stats.volume}</p>
          <p className="text-lg">Volume</p>
        </div>
        <div>
          <p className="font-bold text-2xl">{stats.followers}</p>
          <p className="text-lg">Followers</p>
        </div>
      </div>

      <div>
        <ArtistBio
          artistBio={artistBio}
          myProfile={myProfile}
          fetchUserData={fetchUserData}
        />
      </div>
      <div>
        <SocialLinks
          Links={Links}
          myProfile={myProfile}
          fetchUserData={fetchUserData}
        />
      </div>
    </div>
  );
}
