import React from "react";
import SectionTitle from "@/components/home/SectionTitle";
const categoriesArray = [
  {
    categorieName: "Art",
    categorieIcon: "/assets/images/icons/ArtIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Music",
    categorieIcon: "/assets/images/icons/MusicIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Photography",
    categorieIcon: "/assets/images/icons/PhotographyIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Collectibles",
    categorieIcon: "/assets/images/icons/CollectiblesIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Sports",
    categorieIcon: "/assets/images/icons/SportsIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Utility",
    categorieIcon: "/assets/images/icons/UtilityIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Games",
    categorieIcon: "/assets/images/icons/GamesIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
  {
    categorieName: "Virtual Worlds",
    categorieIcon: "/assets/images/icons/VirtualWorldsIcon.svg",
    categorieImage: "/assets/images/placeholders/PrimaryPlaceholder.png",
  },
];

function CategoriesSection() {
  return (
    <div className="min-h-screen container mx-auto p-4">
      <SectionTitle
        title="Browse Categories"
        description=""
        sectionStyle="withoutBtn"
      />
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-9 mt-8">
        {categoriesArray.map((categorie, index) => (
          <div key={index}>dd</div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
