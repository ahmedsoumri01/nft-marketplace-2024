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
};

export default function Input({
  placeholder,
  type = "text",
  reverse,
  withIcon,
  iconType,
  extraClasses,
  iconExtraClasses,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="p-2">
      <div className={`relative ${reverse && "flex flex-row-reverse "}`}>
        {withIcon && (
          <div className="absolute text-captionLabel">
            <div className="p-2 px-4 h-14 flex items-center justify-center">
              <div className={`${iconExtraClasses}`}>
                {iconType === "FaEye" && showPassword === false && (
                  <FaEye
                    className={`cursor-pointer `}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
                {iconType === "FaEyeSlash" ||
                  (showPassword === true && (
                    <FaEyeSlash
                      className={`cursor-pointer `}
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  ))}
                {iconType === "FaUserAlt" && (
                  <FaUserAlt className={`${iconExtraClasses}`} />
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
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className={`text-black p-4 px-10 rounded-full w-full ${extraClasses}`}
        />
      </div>
    </div>
  );
}
