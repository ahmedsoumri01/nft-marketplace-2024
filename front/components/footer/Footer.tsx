import React from "react";
import Logo from "@/components/header/Logo";
import Icon from "../Icons";
import SubscribeForm from "../SubscribeForm";
import CopyRight from "./CopyRight";
const Footer = () => {
  return (
    <div className="container px-4 mx-auto py-14">
      <div className="lg:flex items-start justify-around">
        <div className="py-3 sm:flex items-start justify-around lg:p-0">
          {" "}
          <div className="h-full">
            <Logo title="NFT MARKETPLACE" customTitleStyle={"text-2xl"} />
            <div className="py-3">
              <p className="text-captionLabel">
                NFT marketplace UI created with Anima for Figma.
              </p>
            </div>
            <div className="py-3">
              <p className="text-captionLabel"> Join our community</p>
              <div className="flex gap-6 py-2">
                <Icon name="TwitterLogo" extraClasses={"w-10"} />
                <Icon name="InstagramLogo" extraClasses={"w-10"} />
                <Icon name="DiscordLogo" extraClasses={"w-10"} />
                <Icon name="YoutubeLogo" extraClasses={"w-10"} />
              </div>
            </div>
          </div>
          <div className="h-full">
            <h3 className="font-bold text-2xl">Explore</h3>
            <ul>
              <li className="text-captionLabel text-lg">Marketplace</li>
              <li className="text-captionLabel text-lg">Rankings</li>
              <li className="text-captionLabel text-lg">Connect a wallet</li>
            </ul>
          </div>
        </div>

        <div className="h-full py-4 lg:p-0" >
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
