"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/reduxStore";
import { isTokenExpired } from "@/utils/utils";
import { logout } from "@/lib/features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function CheckTokenValiditie() {
  const { isLoggedIn, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && token && isTokenExpired(token)) {
      dispatch(logout());
      window.location.href = "/";
    }
  }, [
    isLoggedIn,
    token,
    dispatch,
  ]);
  return <div></div>;
}
