import React from "react";
import Button from "@/components/buttons/Button";
import StatisticHeroBar from "@/components/StatisticHeroBar";
import HighlightedNft from "@/components/home/HighlightedNft";
const heroStatistics = [
  {
    title: "Total Sale",
    count: "240k+",
  },
  {
    title: "Auctions",
    count: "100k+",
  },
  {
    title: "Artists",
    count: "240k+",
  },
];
const highlightNft = {
  title: "Space Walking",
  image: "/assets/images/placeholders/ImagePlaceholder(4).png",
  owner: "Animakid",
  ownerImage: "/assets/images/placeholders/ImagePlaceholder(4).png",
};
function HeroSection() {
  return (
    <div className="p-4 sm:p-12 md:min-h-screen md:flex md:items-center md:justify-center">
      <div className="h-full w-full p-8">
        <h1 className="font-black text-5xl my-4 lg:text-6xl">
          Discover digital art & Collect NFTs
        </h1>
        <h2 className="font-normal text-xl my-4 lg:text-2xl mb-8">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </h2>
        <div className="md:hidden flex justify-center w-full p-4">
        <HighlightedNft nft={highlightNft} />
      </div>
        <div>
          <Button
            text="Get Started"
            styleType="secondary"
            BtnStyle="simple"
            icon="RocketLaunch"
            extraClasses="w-full justify-center md:w-auto"
          />
        </div>

        <StatisticHeroBar heroStatistics={heroStatistics} />
      </div>
      <div className="hidden md:block h-full w-full p-4">
        <HighlightedNft nft={highlightNft} />
      </div>
    </div>
  );
}

export default HeroSection;
