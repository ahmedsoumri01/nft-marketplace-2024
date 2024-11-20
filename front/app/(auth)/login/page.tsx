"use client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/lib/features/auth/authSlice";
import { loginUser } from "@/lib/features/auth/authAPI";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import {
  isValidEmail,
  isValidPassword,
  extractUserObjectFromToken,
} from "@/utils/utils";
export default function Page() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!isValidPassword(password)) {
      toast.error("Please enter a valid password.");
      return;
    }

    try {
      setLoading(true);

      await loginUser({ email, password }).then((res) => {
        if (res.token) {
          dispatch(login({ token: res.token }));

          setLoading(false);
          const user = extractUserObjectFromToken(res.token);

          //empty the fields
          setEmail("");
          setPassword("");
          if (user.role === "admin") {
            push("/admin/dashboard");
          } else if (user.firstTimeLogin) {
            push("/complete-profile");
          } else if (!user.profileCompleted) {
            push("/complete-profile");
          } else {
            push("/artist/my-profile");
          }
        } else {
          toast.error(
            "Login failed , probably there is an issue with the server"
          );
          setLoading(false);
        }
      });
    } catch (error) {
      console.error("Login failed:", error);
      console.log("Login failed:", error);
      setLoading(false);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen items-start w-full md:flex">
      <div className="h-80 bg-[url('/assets/images/signin.png')] bg-no-repeat bg-cover md:w-1/2 md:h-screen"></div>
      <div className="p-4 sm:p-8 md:w-1/2 md:p-14">
        <p className="text-4xl font-black sm:text-6xl py-4">
          Login into your Account
        </p>
        <p className="text-xl sm:text-2xl py-4">
          Welcome! Enter your details and start creating, collecting, and
          selling NFTs.
        </p>

        <div>
          <Input
            type="email"
            placeholder="Email Address"
            withIcon
            value={email}
            iconType="FaEnvelope"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            withIcon
            value={password}
            iconType="FaEye"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text="Login"
            styleType="secondary"
            BtnStyle="simple"
            onClick={handleLogin}
            disbaled={!email || !password || loading}
            loading={loading}
            extraClasses="w-full !rounded-full flex justify-center font-black"
          />
        </div>
      </div>
    </div>
  );
}
