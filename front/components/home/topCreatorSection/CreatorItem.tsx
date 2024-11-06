import React from "react";
import Image from "next/image";
type Props = {
  creatorImage: string;
  creatorName: string;
  totalSales: number;
  rate: number;
};

const CreatorItem = ({
  creatorImage,
  rate,
  creatorName,
  totalSales,
}: Props) => {
  return (
    <div className="relative bg-backgroundSecondary  rounded-2xl p-4 flex items-center justify-center lg:w-[240px] lg:h-[238px]">
      <div className="absolute right-0 w-full h-full opacity-50">
        <p className="p-2 w-10 text-center rounded-full font-bold m-3 bg-background">{rate}</p>
      </div>
      <div className="flex w-full items-center text-start gap-4 lg:text-center lg:block">
        <div className="flex justify-center mb-4">
          <Image
            src={creatorImage}
            alt={creatorName}
            width={100}
            height={100}
          />
        </div>
        <div>
          <p className="font-bold text-xl">{creatorName}</p>
          <p>
            <span className="text-captionLabel">Total Sales: </span>
            {totalSales} {" ETH"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatorItem;
