import React from 'react'
import Button from "@/components/buttons/Button";

 
export default function SubscribeForm() {
  return (
    <div>  <div className="block items-center justify-start lg:flex">
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
  </div></div>
  )
}