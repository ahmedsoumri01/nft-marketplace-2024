"use client";

import React, { useState } from "react";
import { registerUser } from "@/lib/features/auth/authAPI";
import { toast } from "react-toastify";
import {
  isValidEmail,
  isValidPassword,
  doPasswordsMatch,
  isValidUsername,
  isValidPasswordComplexity,
} from "@/utils/utils";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isValidPassword(password)) {
      toast.error("Please enter a valid password.");
      return;
    }
    if (!doPasswordsMatch(password, confirmPassword)) {
      toast.error("Passwords do not match.");
      return;
    }
    if (!isValidUsername(username)) {
      toast.error(
        "Please enter a valid username is not empty and have 6 characters minimum"
      );
      return;
    }
    if (!isValidPasswordComplexity(password)) {
      toast.error(
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and 8 characters minimum"
      );
      return;
    }

    try {
      setLoading(true);
      console.log("Registering...");
      await registerUser({ username, email, password }).then((res) => {
        console.log(res);
        //empty the fields
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLoading(false);
        toast.success("Registration successful!");
      });
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please check your credentials.");
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen items-start w-full md:flex ">
      <div className="h-80 bg-[url('/assets/images/signin.png')] bg-no-repeat bg-cover md:w-1/2 md:h-screen"></div>
      <div className="p-4 sm:p-8 md:w-1/2 md:p-14">
        <p className="text-4xl font-black sm:text-6xl py-4">Create Account</p>
        <p className="text-xl sm:text-2xl py-4">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <div>
          <Input
            type="text"
            placeholder="username"
            withIcon={true}
            value={username}
            iconType="FaUserAlt"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
          value={email}
            type="email"
            placeholder="Email Address"
            withIcon={true}
            iconType="FaEnvelope"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            withIcon={true}
            iconType="FaEye"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            withIcon={true}
            iconType="FaEye"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            loading={loading}
            text="Create Account"
            styleType="secondary"
            BtnStyle="simple"
            disbaled={!email || !password || !username || !confirmPassword || loading}
            extraClasses="w-full !rounded-full flex justify-center font-black"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
}
