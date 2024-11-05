import React from "react";

type Props = {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
  className?: string;
};

const Avatar = (props: Props) => {
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        className={`rounded-full ${
          props.size === "small"
            ? "w-8 h-8"
            : props.size === "medium"
            ? "w-12 h-12"
            : "w-16 h-16"
        } ${props.className}`}
      />
    </div>
  );
};

export default Avatar;
