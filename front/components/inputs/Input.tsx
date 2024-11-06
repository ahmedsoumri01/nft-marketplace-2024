"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

type Props = {
  placeholder: string;
  type: "text" | "password" | "email";
  withIcon?: boolean;
  iconType: "FaEye" | "FaEyeSlash" | "FaUserAlt" | "FaEnvelope";
  extraClasses?: string;
};

export default function Input({
  placeholder,
  type = "text",
  withIcon,
  iconType,
  extraClasses,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="p-2">
      <div className="relative">
        {withIcon && (
          <div className="absolute text-captionLabel">
            <div className="p-2 px-4 h-14 flex items-center justify-center">
              {iconType === "FaEye" &&
                showPassword ===
                  false &&(
                    <FaEye
                      className="cursor-pointer"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  )}
              {iconType === "FaEyeSlash" || showPassword ===
                  true &&(
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              )}
              {iconType === "FaUserAlt" && <FaUserAlt />}
              {iconType === "FaEnvelope" && <FaEnvelope />}
            </div>
          </div>
        )}
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className={`text-black p-4 pl-10 rounded-full w-full ${extraClasses}`}
        />
      </div>
    </div>
  );
}
