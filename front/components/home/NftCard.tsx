import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";
type Props = {
  nftImage: string;
  nftName: string;
  nftPrice: string;
  nftOwner: string;
  nftOwnerAvatar: string;
  hiestBid: string;
};

export default function NftCard({
  nftImage,
  nftName,
  nftPrice,
  nftOwner,
  nftOwnerAvatar,
  hiestBid,
}: Props) {
  return (
    <div>
      <div>
        <Image
          width={200}
          height={200}
          src={nftImage}
          alt={nftName}
          className="w-full rounded-t-xl"
        />
      </div>
      <div className="p-4 px-6 bg-backgroundSecondary  rounded-b-xl">
        <h3 className="my-2 text-xl font-bold">{nftName}</h3>

        <div className="flex items-center gap-2 my-2">
          <Avatar src={nftOwnerAvatar} alt={nftOwner} size="small" />
          <p>{nftOwner}</p>
        </div>
        <div className="flex justify-between items-center pt-2 my-2">
          <div>
            <p className="text-sm text-captionLabel">Price</p>

            <p className="text-lg">{nftPrice} ETH</p>
          </div>
          <div>
            <p className="text-sm text-captionLabel">Highest Bid</p>

            <p className="text-lg">{hiestBid} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
