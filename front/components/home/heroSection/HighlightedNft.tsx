import React from "react";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Link from "next/link";
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
        <Link
        className="hover:text-callAction"
        href="/nft/76576GG87676D76C76D5C79S87C68S7C6">
        <h3 className="font-bold text-xl">{nft.title}</h3>
        </Link>
        <Link
        href={`/artist/76576GG87676D76C76D5C79S87C68S7C6`}
        className="text-lg flex items-center gap-3 mt-4 hover:text-callAction">
          <Avatar
            src={"/assets/images/placeholders/ImagePlaceholder(4).png"}
            alt={nft.owner}
            size="small"
            className="inline-block"
          />
          <p>{nft.owner}</p>
        </Link>
       </div>
    </div>
  );
}

export default HighlightedNft;
