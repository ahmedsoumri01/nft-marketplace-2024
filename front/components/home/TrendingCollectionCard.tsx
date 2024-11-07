import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Link from "next/link";
type Props = {
  images: string[];
  ownerName: string;
  ownerImage: string;
  collectionName: string;
};

function TrendingCollectionCard({
  images,
  ownerName,
  ownerImage,
  collectionName,
}: Props) {
  console.log(images, ownerName, ownerImage, collectionName);
  return (
    <div className="w-full sm:max-w-[330px]">
      <div>
        <Image
          src={images[0]}
          width={330}
          height={330}
          alt="NFT"
          className="rounded-lg w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-3 my-4">
        <Image
          src={images[1]}
          width={50}
          height={50}
          alt="NFT"
          className="w-2/6 h-24 rounded-lg"
        />
        <Image
          src={images[3]}
          width={50}
          height={50}
          alt="NFT"
          className="w-2/6 h-24 rounded-lg"
        />
        <div className="bg-callAction text-xl text-white text-center font-semibold flex justify-center items-center rounded-lg w-2/6 h-24">
          {images.length - 3 > 0 && images.length - 3 + " +"}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl">{collectionName}</h3>
        <Link href="/artist/76576GG87676D76C76D5C79S87C68S7C6">
        <div className="flex items-center gap-4 my-4 hover:text-callAction">
          <Avatar src={ownerImage} alt="Owner img" size="small" />
          <p>{ownerName}</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default TrendingCollectionCard;
