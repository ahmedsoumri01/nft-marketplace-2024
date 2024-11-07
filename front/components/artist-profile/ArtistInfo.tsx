import React from "react";
import Link from "next/link";
import Button from "../buttons/Button";
import { FiPlus } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
type props = {
  artistName: string;
  artistBio: string;
  Links: {
    twitter: string;
    instagram: string;
    website: string;
    discord: string;
  };
  stats: {
    followers: number;
    volume: number;
    nfts: number;
  };
};
export default function ArtistInfo({
  artistName,
  artistBio,
  Links,
  stats,
}: props) {
  return (
    <div className="container mx-auto pt-20">
      <div className="items-center justify-between p-2 md:flex">
        <h1 className="text-6xl font-bold">{artistName}</h1>
        <div className="flex items-center gap-4">
          <Button
            text="0xc0E3...B79C"
            isLink={false}
            styleType="secondary"
            BtnStyle="simple"
            extraClasses="font-bold"
            icon={<FaRegCopy />}
          />
          <Button
            text="Follow"
            isLink={false}
            styleType="secondary"
            BtnStyle="inline"
            extraClasses="font-bold"
            icon={<FiPlus />}
          />
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
        <p className="text-captionLabel text-lg">Links</p>
        <div className="flex items-center gap-5 text-2xl py-4">
          <Link href={Links.twitter} className="transition-all duration-300 ease-in-out hover:text-callAction">
            <CiTwitter />
          </Link>
          <Link href={Links.instagram} className="transition-all duration-300 ease-in-out hover:text-callAction">
            <FaInstagram />
          </Link>
          <Link href={Links.website} className="transition-all duration-300 ease-in-out hover:text-callAction">
            <TbWorld />
          </Link>
          <Link href={Links.discord} className="transition-all duration-300 ease-in-out hover:text-callAction">
            <RxDiscordLogo />
          </Link>
        </div>
      </div>
    </div>
  );
}
