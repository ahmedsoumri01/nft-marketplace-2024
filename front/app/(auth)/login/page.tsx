import React from "react";

import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
export default function page() {
  return (
    <div className="min-h-screen items-start w-full md:flex ">
      <div className="h-80 bg-[url('/assets/images/signin.png')] bg-no-repeat bg-cover md:w-1/2 md:h-screen"></div>
      <div className="p-4 sm:p-8 md:w-1/2 md:p-14">
        <p className="text-4xl font-black sm:text-6xl py-4">login into your Account</p>
        <p className="text-xl sm:text-2xl py-4">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <div>
          
          <Input
            type="email"
            placeholder="Email Address"
            withIcon={true}
            iconType="FaEnvelope"
          />
          <Input
            type="password"
            placeholder="Password"
            withIcon={true}
            iconType="FaEye"
          />
         
          <Button
            text="login"
            styleType="secondary"
            BtnStyle="simple"
            extraClasses="w-full !rounded-full flex justify-center font-black"
          />
        </div>
      </div>
    </div>
  );
}
