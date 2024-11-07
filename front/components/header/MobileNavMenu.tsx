"use client";
import React, { useState } from "react";
import Icon from "@/components/Icons";
import { IoClose } from "react-icons/io5";
import MobileNavItem from "./MobileNavItem";
import Button from "@/components/buttons/Button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
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
            <Icon 
             icon={<HiOutlineMenuAlt2 />}
            />
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
            <div>
            <Button
          isLink={true}
          href="/login"
          text="login"
          icon={<IoLogInSharp  className="text-lg" /> }
          styleType="tertiary"
          BtnStyle="simple"
          extraClasses="w-full font-bold hover:text-black"
        />
         <Button
          isLink={true}
          href="/signup"
          text="Sign Up"
          icon={<FaUser className="text-lg" /> }
          styleType="tertiary"
          BtnStyle="inline"
          extraClasses="w-full font-bold text-black"
        />

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenu;
