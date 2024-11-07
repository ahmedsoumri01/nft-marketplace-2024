"use client";

import React from "react";
import { useParams } from "next/navigation";
import CoverImage from "@/components/artist-profile/CoverImage";
import ArtistInfo from "@/components/artist-profile/ArtistInfo";
const artistData = {
  coverImage: "/assets/images/placeholders/ImagePlaceHolder(9).png",
  artistImage: "/assets/images/Avatar.png",
  artistName: "Animakid",
  artistBio: "The internet's friendliest designer kid.",
  Links: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    website: "https://website.com",
    discord : "https://discord.com"
  },
  stats: {
    followers: 100,
    volume: 100,
    nfts: 100,
  },
};
export default function Page() {
  const { id } = useParams();

  return (
    <div>
      <div className="bg-red-800">the id of this artist is {id}</div>
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
    </div>
  );
}
