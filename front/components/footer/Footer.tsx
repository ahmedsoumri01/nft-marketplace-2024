import React from "react";
import Logo from "@/components/header/Logo";
import Icon from "../Icons";
import SubscribeForm from "../SubscribeForm";
import CopyRight from "./CopyRight";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineDiscord } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="container px-4 mx-auto py-14">
      <div className="lg:flex items-start justify-around gap-4 py-14">
        <div className="py-3 sm:flex items-start justify-around gap-12 lg:p-0">
          {" "}
          <div className="h-full">
            <Logo
              title="NFT MARKETPLACE"
              customTitleStyle={"text-2xl hover:text-callAction"}
            />
            <div className="py-3">
              <p className="text-captionLabel">
                NFT marketplace UI created with Anima for Figma.
              </p>
            </div>
            <div className="py-3">
              <p className="text-captionLabel"> Join our community</p>
              <div className="flex gap-6 py-2">
                <Icon
                  icon={<CiTwitter />}
                  extraClasses={"cursor-pointer"}
                />
                <Icon
                  icon={<CiInstagram />}
                  extraClasses={"cursor-pointer"}
                />
                <Icon
                  icon={<AiOutlineDiscord />}
                  extraClasses={"cursor-pointer"}
                />
                <Icon
                  icon={<CiYoutube />}
                  extraClasses={"cursor-pointer"}
                />
              </div>
            </div>
          </div>
          <div className="h-full">
            <h3 className="font-bold text-2xl">Explore</h3>
            <ul className="pt-2">
              <li className="text-captionLabel text-lg py-2">
                <Link
                  href="/marketplace"
                  className="transition-all ease-in-out duration-200 hover:text-callAction"
                >
                  Marketplace
                </Link>
              </li>
              <li className="text-captionLabel text-lg">
                <Link
                  href="/Rankings"
                  className="transition-all ease-in-out duration-200 hover:text-callAction"
                >
                  Rankings
                </Link>
              </li>
              <li className="text-captionLabel text-lg">
                <Link
                  href="/create"
                  className="transition-all ease-in-out duration-200 hover:text-callAction"
                >
                  Connect a wallet
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-full py-4 lg:p-0">
          <p className="font-bold text-2xl pb-4">Join our weekly digest</p>
          <p className="text-captionLabel pb-2">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <SubscribeForm />
        </div>
      </div>
      <CopyRight
        websiteName="NFT MARKETPLACE"
        year={new Date().getFullYear()}
        owner="ahmed soumri"
      />
    </div>
  );
};

export default Footer;
