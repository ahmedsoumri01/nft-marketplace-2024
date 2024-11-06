import React from "react";
import SectionTitle from "@/components/home/SectionTitle";
import CategorieItem from "@/components/home/CategorieItem";
const categoriesArray = [
  {
    categorieName: "Art",
    categorieIcon: "/assets/icons/PaintBrush.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(1).png",
  },
  {
    categorieName: "Collectibles",
    categorieIcon: "/assets/icons/Swatches.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(2).png",
  },
  {
    categorieName: "Music",
    categorieIcon: "/assets/icons/MusicNotes.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(3).png",
  },
  {
    categorieName: "Photography",
    categorieIcon: "/assets/icons/Camera.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(4).png",
  },
  {
    categorieName: "Video",
    categorieIcon: "/assets/icons/VideoCamera.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(5).png",
  },
  {
    categorieName: "Utility",
    categorieIcon: "/assets/icons/MagicWand.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(6).png",
  },
  {
    categorieName: "Sport",
    categorieIcon: "/assets/icons/Basketball.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(7).png",
  },
  {
    categorieName: "Virtual Worlds",
    categorieIcon: "/assets/icons/Planet.png",
    categorieImage: "/assets/images/placeholders/ImagePlaceholder(1).png",
  },
];

function CategoriesSection() {
  return (
    <div className="min-h-screen container mx-auto p-12">
      <SectionTitle
        title="Browse Categories"
        description=""
        sectionStyle="withoutBtn"
      />
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-9 mt-8">
        {categoriesArray.map((categorie, index) => (
          <div key={index}>
            <CategorieItem
              categorieName={categorie.categorieName}
              categorieIcon={categorie.categorieIcon}
              categorieCoverImage={categorie.categorieImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
