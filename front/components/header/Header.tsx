"use client";

// components/Header.tsx
import React from "react";
import Logo from "./Logo";
import { useAccount } from "wagmi";
import NavMenu from "./NavMenu";
export default function Header() {
  const { isConnected } = useAccount();
  console.log("wallet is connected " , isConnected);
  return (
    <div className="p-4 flex items-center justify-between">
      <Logo
        title="NFT MARKETPLACE"
        customTitleStyle={"text-2xl hover:text-callAction"}
      />
      <NavMenu />
    </div>
  );
}
