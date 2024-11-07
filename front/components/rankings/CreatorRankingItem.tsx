import React from "react";
 import Avatar from "../Avatar";
 import Link from "next/link";
type Props = {
  rank: number;
  creatorName: string;
  creatorImage: string;
  chnage: string;
  nftsSold: number;
  volume: number;
};

export default function CreatorRankingItem({
  rank,
  creatorName,
  creatorImage,
  chnage,
  nftsSold,
  volume,
}: Props) {
  return (
    <Link href={`/artist/${creatorName}`}>
    <div className="flex justify-around gap-3 items-center bg-backgroundSecondary p-4 rounded-xl my-4 cursor-pointer transition-all duration-300 group ease-in-out hover:bg-callAction">
     
      <div className="w-3/4 flex items-center justify-start gap-4 sm:w-2/5">
      <p className="p-2 px-4 bg-background rounded-full text-captionLabel font-bold transition-all duration-300 group-hover:bg-white">{rank}</p>
        <Avatar src={creatorImage} alt={creatorName} size="medium" />
        <p className="font-bold text-lg sm:text-xl">{creatorName}</p>
      </div>
      <p className="hidden w-1/5 text-green-500 text-lg sm:block">{chnage}</p>
      <p className="hidden w-1/5 text-lg md:block">{nftsSold}</p>
      <p className="w-1/4 sm:w-1/5 text-sm sm:text-lg">{volume} ETH</p>
    </div>
    </Link>
  );
}
