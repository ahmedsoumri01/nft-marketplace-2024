import React from "react";
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const waletImages = [
  "/assets/images/wallets/Coinbase.png",
  "/assets/images/wallets/Metamask.png",
  "/assets/images/wallets/WalletConnect.png",
];
export default function page() {
  return (
    <div className="min-h-screen items-start w-full md:flex ">
      <div className="h-80 bg-[url('/assets/images/signin.png')] bg-no-repeat bg-cover md:w-1/2 md:h-screen"></div>
      <div className="p-4 sm:p-8 md:w-1/2 md:p-14">
        <h2 className="py-2 font-black text-3xl md:text-5xl">Connect wallet</h2>
        <p className="py-2 text-2xl md:text-3xl">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
        <div className="flex items-center justify-center py-8 pt-12">
          <div className="p-4 py-5 w-1/2 border-2 border-callAction rounded-xl transition-all ease-in-out duration-200 cursor-pointer hover:bg-callAction">
            <div className="flex items-center justify-around font-bold text-xl">
              <div className="flex items-center">
                {waletImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="wallet"
                    width={50}
                    height={50}
                    className="-ml-4"
                  />
                ))}
              </div>
              <p>Connect your wallet</p>
            </div>
          </div>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
