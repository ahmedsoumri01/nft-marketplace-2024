// components/Button.tsx
import React from "react";
import Icon from "@/components/Icons";

type ButtonProps = {
  text: string;
  styleType?: "primary" | "secondary" | "tertiary";
  BtnStyle: "inline" | "simple";
  icon?: "ArrowLeft" | "ArrowRight" | "Basketball" | "BookmarksSimple" | "Camera" | "CoinBase" | "Copy" | "DiscordLogo" | "EnvelopeSimple" | "Eye" | "EyeSlash" | "Globe" | "InstagramLogo" | "List" | "LockKey" | "MagicWand" | "MagnifyingGlass" | "Metamask" | "MusicNotes" | "PaintBrush" | "Planet" | "Plus" | "Rocket" | "RocketLaunch" | "Storefront" | "Swatches" | "TrendUp" | "TwitterLogo" | "User" | "UserCircle" | "VideoCamera" | "Wallet" | "WalletConnect" | "YoutubeLogo";
  extraClasses?: string;
};

export default function Button({
  text,
  styleType = "primary",
  BtnStyle = "simple",
  icon,
  extraClasses = "",
}: ButtonProps) {
  return (
    <button
      className={`p-4 my-2 flex items-center gap-2 ${
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
      {icon && <Icon name={icon} alt={text} width={24} height={24} />}
      {text}
    </button>
  );
}
