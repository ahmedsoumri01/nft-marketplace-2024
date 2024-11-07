"use client";
import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
type Props = {
  auctionEndTime: string; // ISO 8601 format: "2023-12-31T23:59:59Z"
  extraClasses?: string;
  containBid?: boolean;
};

export default function AuctionTimer({
  auctionEndTime,
  extraClasses,
  containBid,
}: Props) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const endTime = new Date(auctionEndTime).getTime();
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [auctionEndTime]);

  return (
    <div
      className={`p-4 rounded-xl bg-background min-w-[300px] text-center ${extraClasses}`}
    >
      <p>Auction ends in:</p>
      <div className="flex items-center justify-center gap-2 py-2">
        {/* Days */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </p>
          <p className="text-sm text-captionLabel">Days</p>
        </div>
        <p className="text-2xl font-bold">:</p>
        {/* Hours */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </p>
          <p className="text-sm text-captionLabel">Hours</p>
        </div>
        <p className="text-2xl font-bold">:</p>
        {/* Minutes */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </p>
          <p className="text-sm text-captionLabel">Minutes</p>
        </div>
        <p className="text-2xl font-bold">:</p>
        {/* Seconds */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
          <p className="text-sm text-captionLabel">Seconds</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {containBid && (
          <Button
            text="Place Bid"
            styleType="secondary"
            BtnStyle="simple"
            hoverType="inlined"
            extraClasses="!w-full my-2 text-center flex justify-center"
          />
        )}
      </div>
    </div>
  );
}
