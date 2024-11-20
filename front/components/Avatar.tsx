import React from "react";
import Image from "next/image";
type Props = {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
  className?: string;
};

const Avatar = (props: Props) => {
  return (
    <div>
      <Image
      width={200}
      height={200}
        src={props.src || "/assets/images/Avatar1.png"}
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
