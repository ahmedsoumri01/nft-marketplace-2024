"use client";
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUserAlt,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

type Props = {
  iconExtraClasses?: string;
  reverse?: boolean;
  placeholder: string;
  type: "text" | "password" | "email";
  withIcon?: boolean;
  iconType: "FaEye" | "FaEyeSlash" | "FaUserAlt" | "FaEnvelope" | "FaSearch";
  extraClasses?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export default function Input({
  placeholder,
  type = "text",
  reverse,
  withIcon,
  iconType,
  extraClasses,
  iconExtraClasses,
  value,
  onChange,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-2">
      <div className={`relative ${reverse && "flex flex-row-reverse"}`}>
        {withIcon && (
          <div className="absolute text-captionLabel">
            <div className="p-2 px-4 h-14 flex items-center justify-center">
              <div className={`${iconExtraClasses}`}>
                {iconType === "FaEye" && !showPassword && (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
                {iconType === "FaEye" && showPassword === true && (
                  <FaEyeSlash
                    className="cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                )}
                {iconType === "FaUserAlt" && (
                  <FaUserAlt className={iconExtraClasses} />
                )}
                {iconType === "FaEnvelope" && <FaEnvelope />}
                {iconType === "FaSearch" && (
                  <FaSearch className={`${iconExtraClasses} cursor-pointer`} />
                )}
              </div>
            </div>
          </div>
        )}
        <input
          value={value}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          onChange={onChange}
          placeholder={placeholder}
          className={`text-black p-4 px-10 rounded-full w-full ${extraClasses}`}
        />
      </div>
    </div>
  );
}
