"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg">
      {/* Left Side with Background Image */}
      <div className="w-1/2 relative animate-fadeIn">
        <Image
          src="/images/forget-password.svg"
          alt="Background"
          width={100}
          height={100}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex flex-col justify-center items-center animate-slideIn px-6">
        {/* Logo at the Top */}
        <Link href="/">
          <Image src="/images/trade_connect.svg" alt="Logo" width={80} height={80} className="w-20 lg:w-24 mb-8" />
        </Link>

        <form className="shadow-lg bg-white rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl text-center mb-6 font-semibold text-gray-800 animate-fadeIn">Forgot Password?</h1>
          <p className="text-gray-700 text-center font-medium mb-4 animate-fadeIn">Not to worry, we will send you reset instructions.</p>
          <p className="text-gray-700 text-center mb-6 animate-fadeIn">
            Enter your registered Email Address to receive reset instructions.
          </p>

          <div className="mb-6 animate-fadeIn">
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <Link href="/auth/sendemail">
            <button type="submit" className="w-full py-3 bg-red-800 text-white rounded hover:scale-105 transform transition-all">
              Send recovery instructions
            </button>
          </Link>

          <p className="text-center text-gray-600 mt-6">
            Go back to{" "}
            <Link href="/auth/login" className="text-red-500 font-medium hover:underline">
              Log in Page
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
