// components/TabCard.tsx
"use client";
import React from "react";

type TabCardProps = {
  selected: string;
  setSelected: (value: string) => void;
  createdCount: number;
  collectionCount: number;
  ownedCount: number;
};

export default function TabCard({
  selected,
  setSelected,
  createdCount,
  collectionCount,
  ownedCount,
}: TabCardProps) {
  const handleClick = (value: string) => {
    setSelected(value);
  };

  // Calculate left position for each button based on the selected state
  const getButtonPosition = () => {
    switch (selected) {
      case "Created":
        return "0%";
      case "Owned":
        return "33.3%";
      case "Collection":
        return "66.6%";
      default:
        return "0%";
    }
  };

  return (
    <div className="relative w-full flex items-center justify-between pt-8">
      {[
        { label: "Created", count: createdCount },
        { label: "Owned", count: ownedCount },
        { label: "Collection", count: collectionCount },
      ].map((tab) => (
        <button
          key={tab.label}
          onClick={() => handleClick(tab.label)}
          className={`${
            selected === tab.label ? "text-white" : "text-captionLabel"
          } flex justify-center gap-4 items-center w-full p-2 font-bold text-lg cursor-pointer hover:text-callAction`}
        >
          <p>{tab.label}</p>
          <p className="hidden bg-captionLabel px-3 rounded-full text-sm text-white sm:block">
            {tab.count}
          </p>
        </button>
      ))}

      {/* Bottom bar indicator */}
      <div
        className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out"
        style={{
          width: "33.3%",
          left: getButtonPosition(),
        }}
      ></div>
    </div>
  );
}
