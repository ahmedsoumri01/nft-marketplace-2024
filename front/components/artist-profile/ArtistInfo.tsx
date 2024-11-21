import React from "react";
import Link from "next/link";

import { SocialLink } from "@/types"; // Import the SocialLink type
import { CiTwitter } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import ArtistBio from "@/components/artist-profile/ArtistBio";
import ArtistnameAndWalet from "@/components/artist-profile/ArtistnameAndWalet.tsx";
type Props = {
  artistName: string;
  artistBio: string;
  myProfile: boolean;
  fetchUserData: () => void; // Add the fetchUserData function
  walletLinked: boolean;
  Links: SocialLink[];
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
      <div className="p-3">
        {
          //show links label if at least one link is present and is not empty
          Links?.filter((link) => link.link !== "").length > 0 && (
            <p className="text-captionLabel text-lg">Links</p>
          )
        }
        <div className="flex items-center gap-5 text-2xl py-4">
          {
            // Map over the Links array
            Links.filter(
              (link) => link.link !== "" // Filter out empty links
            ).map((link, index) => (
              <Link
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-callAction"
              >
                {
                  // Check the platformName and render the appropriate icon
                  link.platformName === "twitter" ? (
                    <CiTwitter />
                  ) : link.platformName === "instagram" ? (
                    <FaInstagram />
                  ) : link.platformName === "website" ? (
                    <TbWorld />
                  ) : link.platformName === "discord" ? (
                    <RxDiscordLogo />
                  ) : null
                }
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
