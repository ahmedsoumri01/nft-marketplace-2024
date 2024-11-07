import React from "react";
import Image from "next/image";
type props = {
  coverImage: string;
  artistImage: string;
};
export default function CoverImage({ coverImage, artistImage }: props) {
  return (
    <div className="relative">
      <Image
        src={coverImage}
        alt="cover"
        width={1000}
        height={300}
        className="w-full max-h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-600 opacity-80 backdrop-blur-sm"></div>

      <Image
        src={artistImage}
        alt="artist"
        width={100}
        height={100}
        className="absolute -bottom-12 left-14"
      />
    </div>
  );
}
