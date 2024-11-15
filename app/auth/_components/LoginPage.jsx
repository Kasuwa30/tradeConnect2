"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import nookies from "nookies"; // Setting cookies here
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = e => {
    e.preventDefault();
    if (username === "user@gmail.com" && password === "pass") {
      console.log({ username, password });
      // Set the auth cookie for one day
      nookies.set(null, "auth", "true", {
        maxAge: 24 * 60 * 60,
        path: "/home",
      });
      router.push("/dashboard/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg p-4">
      {/* Left Partition */}
      <div
        className="w-full lg:w-1/2 flex items-center justify-center min-h-[50vh] lg:min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/images/Pattern.png)` }}
      >
        <div className="p-8 lg:p-16 text-center bg-red-200 bg-opacity-70 rounded-lg shadow-lg w-5/6 lg:w-4/6 min-h-[200px] lg:min-h-[300px]">
          <h1 className="text-2xl lg:text-3xl pb-4 text-red-800 font-bold">Welcome Back to Trade Connect!</h1>
          <p className="text-red-800 text-sm lg:text-lg">Log in to your account and continue planning your dream event with ease.</p>
        </div>
      </div>

      {/* Right Partition */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative">
        {/* Logo above the form */}
        <div className="w-full flex justify-center mb-6">
          <Image src="/images/trade_connect.svg" alt="Logo" width={100} height={100} className="w-20 lg:w-24" />
        </div>

        {/* Login Form */}
        <form className="space-y-6 items-center mx-auto w-full lg:w-3/5 p-8 bg-white shadow-lg rounded-lg" onSubmit={handleLogin}>
          <h1 className="text-3xl lg:text-4xl text-center font-semibold text-red-800">Log In</h1>
          <p className="text-gray-600 text-center mt-2 lg:text-lg">Sign in to your account on Trade Connect.</p>

          {/* Email Input */}
          <div className="w-full">
            <label className="block text-black font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <label className="block text-black font-semibold mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="off"
              className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end w-full">
            <a href="/auth/forgetpassword" className="text-sm text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-700 transition">
            Log In
          </button>

          {/* Sign-Up Link */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link href="/auth/sign-up" className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
