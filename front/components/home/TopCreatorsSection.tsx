import React from "react";
import SectionTitle from "@/components/home/SectionTitle";
import CreatorItem from "@/components/home/CreatorItem";
const creatorsArray = [
  {
    creatorImage: "/assets/images/Avatar1.png",
    creatorName: "Keepitreal",
    totalSales: 100,
  },
  {
    creatorImage: "/assets/images/Avatar2.png",
    creatorName: "DigiLab",
    totalSales: 200,
  },
  {
    creatorImage: "/assets/images/Avatar3.png",
    creatorName: "GravityOne",
    totalSales: 300,
  },
  {
    creatorImage: "/assets/images/Avatar4.png",
    creatorName: "Juanie",
    totalSales: 400,
  },
  {
    creatorImage: "/assets/images/Avatar5.png",
    creatorName: "BlueWhale",
    totalSales: 100,
  },
  {
    creatorImage: "/assets/images/Avatar6.png",
    creatorName: "mr fox",
    totalSales: 200,
  },
  {
    creatorImage: "/assets/images/Avatar7.png",
    creatorName: "Shroomie",
    totalSales: 300,
  },
  {
    creatorImage: "/assets/images/Avatar8.png",
    creatorName: "robotica",
    totalSales: 400,
  },
];
function TopCreatorsSection() {
  return (
    <div className="min-h-screen container mx-auto p-4">
      <SectionTitle
        title="Top creators"
        description="Checkout Top Rated Creators on the NFT Marketplace"
        sectionStyle="withBtn"
        buttonProps={{
          text: "View Rankings",
          styleType: "secondary",
          icon: "RocketLaunch",
          extraClasses: "w-full justify-center md:w-auto",
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {creatorsArray.map((creator, index) => (
          <CreatorItem
            key={index}
            rate={index + 1}
            creatorImage={creator.creatorImage}
            creatorName={creator.creatorName}
            totalSales={creator.totalSales}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCreatorsSection;
