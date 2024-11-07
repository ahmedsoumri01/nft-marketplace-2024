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
        } w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
        <p className="hidden sm:block">NFTs</p>
      </button>
      <button
        onClick={() => handleClick("Collections")}
        className={`${
          selected === "Collections" ? "text-white" : "text-captionLabel"
        } w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
        <p className="hidden sm:block">Collections</p>
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
