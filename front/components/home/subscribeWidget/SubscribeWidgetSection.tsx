import React from "react";
import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";
const subscribeImage = "/assets/images/Photo.png";
export default function SubscribeWidgetSection() {
  return (
    <div className="container mx-auto p-6 sm:p-8">
      <div className="block bg-backgroundSecondary rounded-2xl p-5 sm:p-9 md:flex gap-8 items-center justify-around content-center">
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
            <h2 className="text-3xl lg:text-5xl max-w-[400px] py-2 font-bold">
              Join our weekly digest
            </h2>
            <h3 className="text-xl lg:text-2xl max-w-[600px] py-2">
              Get exclusive promotions & updates straight to your inbox.
            </h3>
          </div>
          <div className="py-4">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
