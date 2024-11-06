import React from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";
const subscribeImage = "/assets/images/Photo.png";
export default function SubscribeWidgetSection() {
  return (
    <div className="min-h-screen container mx-auto p-6 sm:p-8">
      <div className="block bg-backgroundSecondary rounded-2xl p-9 md:flex gap-8 items-center justify-around content-center">
        <div className="flex justify-center items-center py-4">
          <Image
            src={subscribeImage}
            alt="subscribe"
            width={200}
            height={200}
            className="rounded-lg min-h-[200px] min-w-[300px] lg:min-h-[310px] lg:min-w-[400px]"
          />
        </div>
        <div>
          <div className="py-4">
            <h2 className="text-3xl lg:text-5xl max-w-[400px] py-2 font-bold">Join our weekly digest</h2>
            <h3 className="text-xl lg:text-2xl max-w-[600px] py-2">Get exclusive promotions & updates straight to your inbox.</h3>
          </div>
          <div className="block items-center justify-start lg:flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full p-2 h-[60px] w-full  text-black pr-8 focus:outline-none lg:rounded-lg"

            />
            <Button
              text="Subscribe"
              styleType="secondary"
              extraClasses="rounded-lg w-full font-bold  flex items-center justify-center !rounded-full lg:-ml-8 lg:w-[200px]"
              BtnStyle="simple"
              icon="EnvelopeSimple"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
