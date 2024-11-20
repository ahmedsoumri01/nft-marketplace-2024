"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/reduxStore";
import { extractUserObjectFromToken } from "@/utils/utils";

export default function WelcomeFirstTime() {
  const { isLoggedIn, token } = useSelector((state: RootState) => state.auth);
//if tokrn is not present then return null
  if (!token) return null;
  const { firstTimeLogin } = extractUserObjectFromToken(token);

  return (
    isLoggedIn &&
    token &&
    firstTimeLogin && (
      <div className="bg-green-500 text-center">
        {" "}
        welcome to the new user !{" "}
      </div>
    )
  );
}
