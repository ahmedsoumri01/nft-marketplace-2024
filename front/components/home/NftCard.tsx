import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Button from "../buttons/Button";
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
    <div className="group transition-all ease-in-out duration-300 cursor-pointer">
      <div className="relative">
        <Image
          width={200}
          height={200}
          src={nftImage}
          alt={nftName}
          className="w-full rounded-t-xl  group-hover:blur-sm"
        />
        <div className="hidden absolute inset-0 group-hover:flex items-center justify-center bg-black bg-opacity-50 rounded-t-xl group-hover:bg-opacity-0">
          <Button
            isLink={true}
            href="/marketplace/nft"
            text="Details"
            styleType="secondary"
            BtnStyle="simple"
            hoverType="inlined"
            extraClasses="hover:bg-transparent hover:border-2"
          />
        </div>
      </div>
      <div className="p-4 px-6 bg-backgroundSecondary  transition-all ease-in-out duration-300   rounded-b-xl group-hover:bg-callAction">
        <h3 className="my-2 text-xl font-bold">{nftName}</h3>

        <div className="flex items-center gap-2 my-2">
          <Avatar src={nftOwnerAvatar} alt={nftOwner} size="small" />
          <p>{nftOwner}</p>
        </div>
        <div className="flex justify-between items-center pt-2 my-2">
          <div>
            <p className="text-sm text-captionLabel group-hover:text-white  transition-all ease-in-out duration-300 ">
              Price
            </p>

            <p className="text-lg">{nftPrice} ETH</p>
          </div>
          <div>
            <p className="text-sm text-captionLabel group-hover:text-white  transition-all ease-in-out duration-300 ">
              Highest Bid
            </p>

            <p className="text-lg">{hiestBid} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
