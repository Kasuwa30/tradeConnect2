"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const handleLogin = e => {
  e.preventDefault();
};
export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row justify-center items-center w-full gap-9 bg-white">
      {/* Left Side with Image */}
      <div className="w-full lg:w-1/2 lg:h-screen flex flex-grow flex-col items-center justify-center">
        <Image
          src="/images/sign-up-image.svg"
          alt="Logo"
          height={100}
          width={100}
          className="h-48 w-full lg:h-full lg:w-full lg:rounded-none bg-red-100 lg:bg-red-100 object-cover"
        />
      </div>

      {/* Right Side with Sign-Up Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="space-y-4 w-full lg:w-3/5  lg:p-10 rounded-lg">
          {/* Logo Above the Sign-Up Form */}
          <div className="text-center mb-6">
            <Link href="/">
              <Image src="/images/trade_connect.svg" alt="Logo" height={100} width={100} className="mx-auto" />
            </Link>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-start">Sign Up</h2>
          <p className="text-gray-600 text-lg mb-4 text-start">Let's get you started</p>

          {/* First Name Field */}
          <div>
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              autoComplete="off"
              className="w-full p-2 border-2 border-red-800 opacity-60 rounded"
            />
          </div>

          {/* Last Name Field */}
          <div>
            <label className="block font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              autoComplete="off"
              className="w-full p-2 border-2 border-red-800 opacity-60 rounded"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full p-2 border-2 border-red-800 opacity-60 rounded"
            />
          </div>

          {/* Next Button */}
          <button className="w-full bg-red-800 text-white p-2 rounded mt-4 hover:bg-red-700">
            <Link href="/auth/createpassword">Next</Link>
          </button>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-red-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
