"use client";
import React, { useState } from "react";

export default function FilterBar() {
  const [selected, setSelected] = useState("NFTs");

  const handleClick = (value: string) => {
    setSelected(value);
  };

  // Get left position for each button based on the selected state
  const getButtonPosition = () => {
    switch (selected) {
      case "NFTs":
        return "0%";
      case "Collections":
        return "50%";

      default:
        return "0%";
    }
  };

  return (
    <div className="relative w-full flex items-center justify-between pt-8">
      <button
        onClick={() => handleClick("NFTs")}
        className={`${
          selected === "NFTs" ? "text-white" : "text-captionLabel"
        } flex justify-center gap-4 items-center w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
        <p>NFTs</p>
        <p className="bg-captionLabel px-3 rounded-full text-sm text-white hover:text-white">302</p>
      </button>
      <button
        onClick={() => handleClick("Collections")}
        className={`${
          selected === "Collections" ? "text-white" : "text-captionLabel"
        } flex justify-center gap-4 items-center  w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
        <p>Collections</p>
        <p className="bg-captionLabel px-3 rounded-full text-sm text-white hover:text-white">67</p>

      </button>

      {/* Bottom bar indicator */}
      <div
        className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out"
        style={{
          width: "50%", // Each button takes up 25% width
          left: getButtonPosition(),
        }}
      ></div>
    </div>
  );
}
