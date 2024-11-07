// NavMenu.tsx
"use client";
import React from "react";
import Button from "@/components/buttons/Button";
import NavMenuItem from "./NavMenuItem";
import MobileNavMenu from "./MobileNavMenu";

const NavMenuItems = [
  {
    text: "Marketplace",
    href: "/marketplace",
  },
  {
    text: "Rankings",
    href: "/rankings",
  },
  {
    text: "Connect a wallet",
    href: "/connectwallet",
  },
];

const NavMenu = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden gap-12 items-center font-bold lg:flex">
        {NavMenuItems.map((item, index) => (
          <NavMenuItem key={index} href={item.href} text={item.text} />
        ))}
      </div>
    
      <div className="hidden mx-2 lg:block">
        <Button
          isLink={true}
          href="/login"
          text="login"
          icon="User"
          styleType="tertiary"
          BtnStyle="simple"
          extraClasses="w-full font-bold"
        />
      </div>
      <div className="hidden mx-2 lg:block">
        <Button
          isLink={true}
          href="/signup"
          text="Sign Up"
          icon="User"
          styleType="tertiary"
          BtnStyle="inline"
          extraClasses="w-full font-bold"
        />
      </div>
      <div className="lg:hidden z-50">
        <MobileNavMenu NavMenuItems={NavMenuItems} />
      </div>
    </div>
  );
};

export default NavMenu;
