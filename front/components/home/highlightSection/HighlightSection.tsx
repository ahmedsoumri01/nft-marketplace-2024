import React from "react";
import AuctionTimer from "./AuctionTimer";
import Avatar from "@/components/Avatar";
import Button from "@/components/buttons/Button";

const nftHighlight = {
  creatorName: "John Doe",
  creatorAvatar: "/assets/images/avatar1.png",
  nftName: "Magic Mushrooms",
  NFTImage: "/assets/images/ScreenTablet.png",
  nftLink: "/nft/1",
  auctionEndTime: "2024-12-31T23:59:59Z",
};

export default function HighlightSection() {
  return (
    <div
      className={`relative min-h-screen bg-[url('/assets/images/ScreenTablet.png')] bg-no-repeat bg-cover`}
    >
      {/* Blurred overlay with purple gradient shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-600 opacity-80 backdrop-blur-sm"></div>

      <div className="container relative mx-auto p-4 flex items-center justify-between min-h-screen">
        <div className="container mx-auto items-end justify-between md:flex lg:p-12">
          <div>
            <div className="bg-background flex items-center rounded-full px-4 py-2 gap-4 my-4 w-fit">
              <Avatar
                src={nftHighlight.creatorAvatar}
                alt={nftHighlight.creatorName}
                size="small"
              />
              <p>{nftHighlight.creatorName}</p>
            </div>

            <p className=" my-4 font-black text-5xl">{nftHighlight.nftName}</p>
            <div className="py-12 md:hidden">
            <AuctionTimer auctionEndTime={nftHighlight.auctionEndTime} />
          </div>
            <Button
              styleType="primary"
              BtnStyle="simple"
              icon="Eye"
              text="See NFT"
              extraClasses="!rounded-xl w-full justify-center px-12 py-4 font-bold text-xl myt-4 md:w-auto md:px-8 md:py-2"
            />
          </div>
          <div className="hidden md:block">
            <AuctionTimer auctionEndTime={nftHighlight.auctionEndTime} />
          </div>
        </div>
      </div>
    </div>
  );
}
