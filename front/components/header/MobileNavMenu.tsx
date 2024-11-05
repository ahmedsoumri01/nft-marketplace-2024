"use client";
import React, { useState } from "react";
import Icon from "@/components/Icons";
import { IoClose } from "react-icons/io5";
import MobileNavItem from "./MobileNavItem";
// props
type Props = {
  NavMenuItems: Array<{ text: string; href: string }>;
};
const MobileNavMenu = ({ NavMenuItems }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const onOpenMenu = () => {
    setShowMenu(true);
  };
  const onCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <div>
      <div>
        {showMenu ? (
          <button onClick={onCloseMenu} title="close menu" className="text-3xl">
            <IoClose />
          </button>
        ) : (
          <button
            onClick={onOpenMenu}
            title="open menu"
            className="cursor-pointer"
          >
            <Icon name="List" alt="Menu" width={35} height={35} />
          </button>
        )}
      </div>
      {showMenu && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <button
              onClick={onCloseMenu}
              title="close menu"
              className="text-3xl absolute top-4 right-4"
            >
              <IoClose />
            </button>
            <nav>
              <ul className="space-y-4 text-black">
                {NavMenuItems.map((item, index) => (
                  <MobileNavItem
                    key={index}
                    index={index}
                    href={item.href}
                    text={item.text}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenu;
