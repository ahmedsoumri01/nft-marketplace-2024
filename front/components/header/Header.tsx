// components/Header.tsx
import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
export default function Header() {
  return <div className="p-4 flex items-center justify-between">
    <Logo title="NFT MARKETPLACE" />
    <NavMenu />
  </div>;
}
