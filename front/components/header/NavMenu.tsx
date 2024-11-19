// NavMenu.tsx
"use client";
import React from "react";
import Button from "@/components/buttons/Button";
import NavMenuItem from "./NavMenuItem";
import MobileNavMenu from "./MobileNavMenu";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/reduxStore";
import { IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
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
  const { isLoggedIn, token } = useSelector((state: RootState) => state.auth);

  console.log({ isLoggedIn, token });
  return (
    <div className="flex items-center gap-2">
      <div className="hidden gap-12 items-center font-bold lg:flex">
        {NavMenuItems.map((item, index) => (
          <NavMenuItem key={index} href={item.href} text={item.text} />
        ))}
      </div>

      {/*  {isLoggedIn ? "You are logged in" : "You are not logged in"}
      {token && <div>Token: {token}</div>} */}
      {!isLoggedIn && !token && (
        <>
          <div className="hidden mx-2 lg:block">
            <Button
              isLink={true}
              href="/login"
              text="login"
              icon={<IoLogIn />}
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
              icon={<FaUser />}
              styleType="tertiary"
              BtnStyle="inline"
              extraClasses="w-full font-bold"
            />
          </div>
        </>
      )}
      {isLoggedIn && token && (
        <div className="hidden mx-2 lg:block">
          <Button
            isLink={true}
            href="/profile"
            text="Profile"
            styleType="tertiary"
            icon={<CiUser  />}
            BtnStyle="simple"
            extraClasses="w-full font-bold"
          />
        </div>
      )}
      {isLoggedIn && token && (
        <div className="hidden mx-2 lg:block">
          <Button
            isLink={true}
            href="/logout"
            text="Logout"
            styleType="tertiary"
            BtnStyle="simple"
            icon={<IoIosLogOut />}
            extraClasses="w-full font-bold bg-red-500 hover:border-red-500"

          />
        </div>
      )}

      <div className="lg:hidden z-50">
        <MobileNavMenu NavMenuItems={NavMenuItems} />
      </div>
    </div>
  );
};

export default NavMenu;
