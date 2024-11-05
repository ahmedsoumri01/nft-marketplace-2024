import React from "react";
import Button from "@/components/buttons/Button";
import NavMenuItem from "./NavMenuItem";
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
    href: "/connect-wallet",
  },
];

const NavMenu = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-12 items-center font-bold">
        {NavMenuItems.map((item, index) => (
          <NavMenuItem key={index} href={item.href} text={item.text} />
        ))}
      </div>
      <div className="mx-2">
        <Button
          text="Sign Up"
          icon="User"
          styleType="tertiary"
          BtnStyle="simple"
          extraClasses="w-full font-bold"
        />
      </div>
    </div>
  );
};

export default NavMenu;
