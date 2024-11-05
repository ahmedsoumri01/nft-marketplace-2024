import React from "react";
import SectionTitle from "@/components/home/SectionTitle";
import TrendingCollectionCard from "./TrendingCollectionCard";
const TrendingCollectionsArray = [
  {
    ownerName: "MrFox",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "DSGN Animals",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(1).png",
      "/assets/images/placeholders/ImagePlaceholder(2).png",
      "/assets/images/placeholders/ImagePlaceholder(3).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
  {
    ownerName: "Shroomie",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "Disco Machines",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
  {
    ownerName: "John Doe",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "Magic Mushrooms",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
  {
    ownerName: "John Doe",
    ownerImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
    collectionName: "Magic Mushrooms",
    images: [
      "/assets/images/placeholders/PrimaryPlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder.png",
      "/assets/images/placeholders/ImagePlaceholder(7).png",
      "/assets/images/placeholders/ImagePlaceholder(6).png",
      "/assets/images/placeholders/ImagePlaceholder(5).png",
      "/assets/images/placeholders/ImagePlaceholder(4).png",
    ],
  },
];
function TrendingSection() {
  return (
    <div className="min-h-screen container mx-auto p-4">
      <SectionTitle
        title="Trending NFTs"
        description="Discover the most popular NFTs on the market"
        sectionStyle="withoutBtn"
      />
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-9 mt-8">
        {TrendingCollectionsArray.sort(() => 0.5 - Math.random()).slice(0, 4).map((collection, index) => (
          <div key={index} className="w-full">
            <TrendingCollectionCard
              ownerName={collection.ownerName}
              ownerImage={collection.ownerImage}
              collectionName={collection.collectionName}
              images={collection.images}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
