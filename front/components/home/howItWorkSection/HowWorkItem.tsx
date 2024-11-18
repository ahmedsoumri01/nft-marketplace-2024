import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  description: string;
};

export default function HowWorkItem({ image, title, description }: Props) {
  return (
    <div
    data-aos="zoom-in-right"
     data-aos-duration="2000"
    className="flex items-center bg-backgroundSecondary transition-all ease-in-out duration-300 p-4 rounded-xl text-center md:block object-fill cursor-pointer hover:bg-callAction h-full">
      <div className="flex justify-center items-center">
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
          className="min-w-[100px] w-64 rounded-full"
        />
      </div>
     <div>
     <h1 className="my-2 text-xl font-bold text-start sm:text-2xl md:text-center">{title}</h1>
     <p className="text-sm text-start  sm:text-lg md:text-center">{description}</p>
     </div>
    </div>
  );
}
