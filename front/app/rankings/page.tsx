import React from "react";
import PageHeader from "@/components/PageHeader";
import FilterBar from "@/components/rankings/FilterBar";
import CreatorRankingItem from "@/components/rankings/CreatorRankingItem";
const creators = [
  {
    rank: 1,
    creatorName: "Beeple",
    creatorImage: "/assets/images/Avatar1.png",
    chnage: "+10%",
    nftsSold: 100,
    volume: 100000,
  },
  {
    rank: 2,
    creatorName: "Pak",
    creatorImage: "/assets/images/Avatar2.png",
    chnage: "-5%",
    nftsSold: 50,
    volume: 50000,
  },
  {
    rank: 3,
    creatorName: "Fewocious",
    creatorImage: "/assets/images/Avatar3.png",
    chnage: "+20%",
    nftsSold: 200,
    volume: 200000,
  },
  {
    rank: 4,
    creatorName: "Hackatao",
    creatorImage: "/assets/images/Avatar4.png",
    chnage: "+15%",
    nftsSold: 150,
    volume: 150000,
  },
  {
    rank: 5,
    creatorName: "Mad Dog Jones",
    creatorImage: "/assets/images/Avatar5.png",
    chnage: "-2%",
    nftsSold: 20,
    volume: 20000,
  },
  {
    rank: 6,
    creatorName: "Xcopy",
    creatorImage: "/assets/images/Avatar6.png",
    chnage: "+30%",
    nftsSold: 300,
    volume: 300000,
  },
  {
    rank: 7,
    creatorName: "Sven Eberwein",
    creatorImage: "/assets/images/Avatar7.png",
    chnage: "+25%",
    nftsSold: 250,
    volume: 250000,
  },
  {
    rank: 8,
    creatorName: "Josie",
    creatorImage: "/assets/images/Avatar8.png",
    chnage: "+12%",
    nftsSold: 120,
    volume: 120000,
  },
  {
    rank: 9,
    creatorName: "Ondrej Zunka",
    creatorImage: "/assets/images/Avatar9.png",
    chnage: "+18%",
    nftsSold: 180,
    volume: 180000,
  },
  {
    rank: 10,
    creatorName: "Mikael Gustafsson",
    creatorImage: "/assets/images/Avatar10.png",
    chnage: "+8%",
    nftsSold: 80,
    volume: 80000,
  },
];
export default function page() {
  return (
    <div className="container mx-auto">
      <PageHeader
        pageTitle="Top Creators"
        pageDescription="Check out top ranking NFT artists on the NFT Marketplace."
      />
      <FilterBar />
      <div className="pt-12">
        <div className="flex p-2 px-4 text-captionLabel rounded-full justify-around items-center border-2 border-backgroundSecondary my-4">
          <div className="flex w-3/4 sm:w-1/5">
            {" "}
            <p className="mx-4">#</p>
            <p className="mx-2">Artist</p>
          </div>
          <p className="hidden w-1/5 sm:block">Change</p>
          <p className="hidden w-1/5  md:block">NFTs Sold</p>
          <p className="w-1/4 sm:w-1/5">Volume</p>
        </div>
        <div className="px-2">
          {creators.map((creator) => (
            <CreatorRankingItem
              key={creator.rank}
              rank={creator.rank}
              creatorName={creator.creatorName}
              creatorImage={creator.creatorImage}
              chnage={creator.chnage}
              nftsSold={creator.nftsSold}
              volume={creator.volume}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
