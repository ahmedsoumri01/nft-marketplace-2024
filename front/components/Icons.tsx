/* // components/Icon.tsx
import Image from "next/image";

type IconProps = {
  name: "ArrowLeft" | "ArrowRight" | "Basketball" | "BookmarksSimple" | "Camera" | "CoinBase" | "Copy" | "DiscordLogo" | "EnvelopeSimple" | "Eye" | "EyeSlash" | "Globe" | "InstagramLogo" | "List" | "LockKey" | "MagicWand" | "MagnifyingGlass" | "Metamask" | "MusicNotes" | "PaintBrush" | "Planet" | "Plus" | "Rocket" | "RocketLaunch" | "Storefront" | "Swatches" | "TrendUp" | "TwitterLogo" | "User" | "UserCircle" | "VideoCamera" | "Wallet" | "WalletConnect" | "YoutubeLogo";
  alt?: string;
  width?: number;
  height?: number;
  extraClasses?: string;
};

const icons: Record<IconProps["name"], string> = {
  ArrowLeft: "/assets/icons/ArrowLeft.png",
  ArrowRight: "/assets/icons/ArrowRight.png",
  Basketball: "/assets/icons/Basketball.png",
  BookmarksSimple: "/assets/icons/BookmarksSimple.png",
  Camera : "/assets/icons/Camera.png",  
  CoinBase : "/assets/icons/CoinBase.png",
  Copy : "/assets/icons/Copy.png",
  DiscordLogo : "/assets/icons/DiscordLogo.png",
  EnvelopeSimple : "/assets/icons/EnvelopeSimple.png",
  Eye : "/assets/icons/Eye.png",
  EyeSlash : "/assets/icons/EyeSlash.png",
  Globe : "/assets/icons/Globe.png",
  InstagramLogo : "/assets/icons/InstagramLogo.png",
  List : "/assets/icons/List.png",
  LockKey : "/assets/icons/LockKey.png",
  MagicWand : "/assets/icons/MagicWand.png",
  MagnifyingGlass : "/assets/icons/MagnifyingGlass.png",
  Metamask : "/assets/icons/Metamask.png",
  MusicNotes : "/assets/icons/MusicNotes.png",
  PaintBrush : "/assets/icons/PaintBrush.png",
  Planet : "/assets/icons/Planet.png",
  Plus : "/assets/icons/Plus.png",
  Rocket : "/assets/icons/Rocket.png",
  RocketLaunch : "/assets/icons/RocketLaunch.png",
  Storefront : "/assets/icons/Storefront.png",
  Swatches : "/assets/icons/Swatches.png",
  TrendUp : "/assets/icons/TrendUp.png",
  TwitterLogo : "/assets/icons/TwitterLogo.png",
  User : "/assets/icons/User.png",
  UserCircle : "/assets/icons/UserCircle.png",
  VideoCamera : "/assets/icons/VideoCamera.png",
  Wallet : "/assets/icons/Wallet.png",
  WalletConnect : "/assets/icons/WalletConnect.png",
  YoutubeLogo : "/assets/icons/YoutubeLogo.png",
};

export default function Icon({
  name,
  alt = "",
  width = 24,
  extraClasses = "",
  height = 24,
}: IconProps) {
  return <Image className={extraClasses} src={icons[name]} alt={alt} width={width} height={height} />;
}
 */

// components/Icon.tsx
import { FC, ReactElement } from "react";

type IconProps = {
  icon: ReactElement; // Pass the actual icon component as a prop
  color?: string;
  size?: number;
  extraClasses?: string;
};

const Icon: FC<IconProps> = ({ icon, color = "currentColor", size = 24, extraClasses = "" }) => {
  return (
    <span className={`inline-flex items-center ${extraClasses}`} style={{ color, fontSize: size }}>
      {icon}
    </span>
  );
};

export default Icon;
