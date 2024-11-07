"use client";
import React, { useState } from "react";

export default function FilterBar() {
  const [selected, setSelected] = useState("today");

  const handleClick = (value: string) => {
    setSelected(value);
  };

  // Get left position for each button based on the selected state
  const getButtonPosition = () => {
    switch (selected) {
      case "today":
        return "0%";
      case "week":
        return "25%";
      case "month":
        return "50%";
      case "all":
        return "75%";
      default:
        return "0%";
    }
  };

  return (
    <div className="relative w-full flex items-center justify-between pt-8">
      <button
        onClick={() => handleClick("today")}
        className={`${selected === "today" ? "text-white" : "text-captionLabel"} w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
       <p
       className="hidden sm:block"
       >Today</p> 
       <p
       className="sm:hidden"
       >1d</p>
      </button>
      <button
        onClick={() => handleClick("week")}
        className={`${selected === "week" ? "text-white" : "text-captionLabel"} w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
        
        <p
       className="hidden sm:block"
       >This Week</p> 
       <p
       className="sm:hidden"
       >7d</p>
      </button>
      <button
        onClick={() => handleClick("month")}
        className={`${selected === "month" ? "text-white" : "text-captionLabel"} w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
       
        <p
       className="hidden sm:block"
       >This Month</p> 
       <p
       className="sm:hidden"
       >30d</p>
      </button>
      <button
        onClick={() => handleClick("all")}
        className={`${selected === "all" ? "text-white" : "text-captionLabel"} w-full p-2 font-bold text-lg cursor-pointer text-captionLabel hover:text-callAction`}
      >
        All Time
      </button>

      {/* Bottom bar indicator */}
      <div
        className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out"
        style={{
          width: "25%", // Each button takes up 25% width
          left: getButtonPosition(),
        }}
      ></div>
    </div>
  );
}
