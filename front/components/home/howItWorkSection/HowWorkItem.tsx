import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  description: string;
};

export default function HowWorkItem({ image, title, description }: Props) {
  return (
    <div className="flex items-center bg-backgroundSecondary transition-all ease-in-out duration-300 p-4 rounded-xl text-center md:block md:min-h-[560px] object-fill cursor-pointer hover:bg-callAction">
      <div>
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
          className="w-96 rounded-t-xl"
        />
      </div>
     <div>
     <h1 className="my-2 text-2xl font-bold">{title}</h1>
     <p className="text-lg">{description}</p>
     </div>
    </div>
  );
}
