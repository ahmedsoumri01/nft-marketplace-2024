import React from "react";
import { fromISODate } from "@/utils/utils";
import Avatar from "../Avatar";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import AuctionTimer from "@/components/home/AuctionTimer";
type props = {
  nftName: string;
  mintedDate: string;
  createdBy: string;
  desciption: string;
  creatorImage: string;
  details: {
    etherscan: string;
    oroginal: string;
    contract: string;
    tokenID: string;
    collection: string;
    category: string;
  };
  tags: string[];
  auction: {
    active: boolean;
    highestBid: string;
    endTime: string;
  };
};
export default function NftInfo({
  nftName,
  mintedDate,
  createdBy,
  desciption,
  creatorImage,
  details,
  tags,
  auction,
}: props) {
  return (
    <div>
      <div className="grid sm:grid-cols-[70%_30%] gap-4">
      <div className="p-6 sm:order-last">
        <AuctionTimer auctionEndTime={auction.endTime} extraClasses="border-2 border-callAction" containBid={true} />
      </div>
        <div className="p-4">
          <div className="py-8">
            <h1 className="font-black text-5xl">{nftName}</h1>
            <p className="text-captionLabel font-bold text-xl py-2">
              Minted On {fromISODate(mintedDate)}
            </p>
          </div>
          <div className="py-4">
            <p className="text-captionLabel font-bold text-xl py-2">
              Created By
            </p>
            <Link
            href={`/artist/${createdBy}`}
            className="flex items-center gap-3 w-fit transition-all duration-200 ease-in-out hover:text-callAction ">
              <Avatar src={creatorImage} alt="creator" size="small" />
              <p className="font-bold text-lg">{createdBy}</p>
            </Link>
          </div>
          <div className="py-6">
            <p className="text-captionLabel font-bold text-xl py-2">
              Description
            </p>
            <p className="text-lg">{desciption}</p>
          </div>
          <div className="py-6">
            <p className="text-captionLabel font-bold text-xl py-2">Details</p>
            <div className="flex items-center py-2">
              <span className="inline-block text-2xl mx-2">
                <TbWorld />
              </span>

              <Link className="hover:text-callAction" href={details.etherscan}>
                View on Etherscan{" "}
              </Link>
            </div>
            <div className="flex items-center  py-2">
              <span className="inline-block text-2xl mx-2">
                <TbWorld />
              </span>

              <Link className="hover:text-callAction" href={details.oroginal}>
                {" "}
                View Original
              </Link>
            </div>
          </div>
          <div className="py-6">
            <p className="text-captionLabel font-bold text-xl py-2">Tags</p>
            <div className="py-1 flex flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-backgroundSecondary px-4 py-2 rounded-full mx-1 m-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
