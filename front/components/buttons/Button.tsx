// components/Button.tsx
import React, { ReactElement } from "react";
import Icon from "@/components/Icons";
import Spinner from "@/components/Spinner";

import Link from "next/link";
type ButtonProps = {
  isLink?: boolean;
  href?: string;
  text: string;
  styleType?: "primary" | "secondary" | "tertiary";
  BtnStyle: "inline" | "simple";
  hoverType?: "default" | "inlined";
  icon?: ReactElement;
  onClick?: () => void;
  extraClasses?: string;
  disbaled?: boolean;
  loading?: boolean;
};

export default function Button({
  isLink = false,
  href = "/",
  text,
  styleType = "primary",
  BtnStyle = "simple",
  icon,
  extraClasses = "",
  hoverType = "default",
  disbaled = false,
  loading = false,
  onClick,
}: ButtonProps) {
  return (
    <div>
      {isLink ? (
        <Link
          href={href}
          className={`p-4 my-2 flex items-center gap-2 ${
            BtnStyle === "inline"
              ? "rounded-lg bg-transparent border-2 border-callAction hover:bg-callAction hover:text-white transition-all ease-in-out duration-300"
              : `rounded-lg bg-callAction border-callAction text-white transition-all ease-in-out duration-300 ${
                  hoverType === "inlined"
                    ? ""
                    : " hover:bg-transparent hover:border-2"
                }`
          } ${
            styleType === "primary"
              ? "h-[72px]"
              : styleType === "secondary"
              ? "h-[60px]"
              : "h-[46px]"
          }  ${extraClasses}`}
        >
          {icon && <Icon icon={icon} />}
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          disabled={disbaled}
          className={`p-4 my-2 flex items-center gap-2
            ${disbaled ? "cursor-not-allowed" : "cursor-pointer"}
            ${
              BtnStyle === "inline"
                ? "rounded-lg bg-transparent border-2 border-callAction hover:bg-callAction hover:text-white transition-all ease-in-out duration-300"
                : "rounded-lg bg-callAction hover:bg-transparent hover:border-2 border-callAction text-white transition-all ease-in-out duration-300"
            } ${
            styleType === "primary"
              ? "h-[72px]"
              : styleType === "secondary"
              ? "h-[60px]"
              : "h-[46px]"
          }  ${extraClasses}`}
        >
          {loading ? (
            <Spinner white={true} size="large"/>
          ) : (
            <>
              {icon && <Icon icon={icon} />}
              {text}
            </>
          )}
        </button>
      )}
    </div>
  );
}
