import React from "react";
import Link from "next/link";
import Button from "../buttons/Button";
import { FiPlus } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import { SocialLink } from "@/types"; // Import the SocialLink type
import { CiTwitter } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
type Props = {
  artistName: string;
  artistBio: string;
  myProfile: boolean;
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
  stats,
  walletLinked = false,
  myProfile = false,
}: Props) {
  return (
    <div className="container mx-auto pt-20">
      <div className="items-center justify-between p-2 md:flex">
        <h1 className="text-6xl font-bold">{artistName}</h1>
        <div className="flex items-center gap-4">
          {walletLinked ? (
            <Button
              text="0xc0E3...B79C"
              isLink={false}
              styleType="secondary"
              BtnStyle="simple"
              extraClasses="font-bold"
              icon={<FaRegCopy />}
            />
          ) : (
            <Button
              text="Link Wallet"
              isLink={false}
              styleType="secondary"
              BtnStyle="simple"
              extraClasses="font-bold"
              icon={<FaWallet />}
            />
          )}

          {!myProfile && (
            <Button
              text="Follow"
              isLink={false}
              styleType="secondary"
              BtnStyle="inline"
              extraClasses="font-bold"
              icon={<FiPlus />}
            />
          )}
        </div>
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
      <div className="p-4">
        <p className="text-captionLabel text-lg">Bio</p>
        <p className="text-lg">{artistBio}</p>
      </div>
      <div className="p-3">
        {
          //show links label if at least one link is present and is not empty
          Links.filter((link) => link.link !== "").length > 0 && (
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
