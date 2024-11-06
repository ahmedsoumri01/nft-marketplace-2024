import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";
type Props = {
  nft: {
    title: string;
    image: string;
    owner: string;
  };
};

function HighlightedNft({ nft }: Props) {
  return (
    <div className="w-full max-w-auto md:max-w-[310px] lg:max-w-[510px]">
      <Image
        src={nft.image}
        className="w-full rounded-t-lg"
        alt={nft.title}
        width={300}
        height={300}
      />

      <div className="p-4 rounded-b-lg bg-backgroundSecondary w-full max-w-auto md:max-w-[310px] lg:max-w-[510px]">
        <h3 className="font-bold text-xl">{nft.title}</h3>
        <div className="text-lg flex items-center gap-3 mt-4">
          <Avatar
            src={"/assets/images/placeholders/ImagePlaceholder(4).png"}
            alt={nft.owner}
            size="small"
            className="inline-block"
          />
          <p>{nft.owner}</p>
        </div>
        <p className="text-lg flex items-center gap-3 mt-4">{nft.owner}</p>
      </div>
    </div>
  );
}

export default HighlightedNft;
