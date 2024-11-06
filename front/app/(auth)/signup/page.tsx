import React from "react";

import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
export default function page() {
  return (
    <div className="flex min-h-screen items-start w-full">
      <div className="w-1/2 h-screen bg-[url('/assets/images/signin.png')] bg-no-repeat bg-cover"></div>
      <div className="w-1/2 p-14">
        <p className="font-black text-6xl py-4">Create Account</p>
        <p className="text-2xl py-4">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <div>
          <Input
            type="text"
            placeholder="username"
            withIcon={true}
            iconType="FaUserAlt"
          />
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
          <Input
            type="password"
            placeholder="Confirm Password"
            withIcon={true}
            iconType="FaEye"
          />
          <Button
            text="Create Account"
            styleType="secondary"
            BtnStyle="simple"
            extraClasses="w-full !rounded-full flex justify-center font-black"
          />
        </div>
      </div>
    </div>
  );
}
