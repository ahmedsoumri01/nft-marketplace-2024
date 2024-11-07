"use client";
import React from "react";
import { useParams } from "next/navigation";
import { NftData } from "@/utils/StaticData";
import NftInfo from "@/components/nft-details/NftInfo";
import Image from "next/image";
export default function Page() {
  const { id } = useParams();
  return (
    <div>
      <div className="bg-red-800">the id of this nft is {id}</div>
      <div>
        <Image
          src={NftData.nftimg}
          alt="nft image"
          width={500}
          height={500}
          className="w-full h-96"
        />
      </div>
      <div className="container mx-auto p-4 py-8">
        <NftInfo
          nftName={NftData.nftName}
          mintedDate={NftData.mintedDate}
          createdBy={NftData.createdBy}
          desciption={NftData.desciption}
          creatorImage={NftData.creatorImage}
          details={NftData.details}
          tags = {NftData.tags}
          auction = {NftData.auction}
        
        />
      </div>
    </div>
  );
}
