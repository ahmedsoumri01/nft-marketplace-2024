import React from "react";
import Image from "next/image";

type Props = {
  categorieCoverImage: string;
  categorieName: string;
  categorieIcon: string;
};

export default function CategorieItem({
  categorieCoverImage,
  categorieName,
  categorieIcon,
}: Readonly<Props>) {
  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer group"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="relative group">
        {/* Cover Image with hover blur effect */}
        <Image
          width={200}
          height={200}
          src={categorieCoverImage}
          alt={categorieName}
          className="w-full h-full object-cover group-hover:blur-sm transition duration-300"
        />

        {/* Centered Icon */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            width={200} // Adjust size as needed
            height={200}
            src={categorieIcon}
            alt={`${categorieName} icon`}
            className="opacity-90 w-1/3"
          />
        </div>
      </div>

      {/* Category name */}
      <div className="p-4 bg-backgroundSecondary rounded-b-xl transition-all ease-in-out duration-300 group-hover:bg-callAction">
        <h3 className="font-bold text-xl">{categorieName}</h3>
      </div>
    </div>
  );
}
