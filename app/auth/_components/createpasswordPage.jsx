"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CreatePassword() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleChange = event => {
    setChecked(event.target.checked);
  };
  const handleLogin = e => {
    e.preventDefault();
    router.push("/auth/login");
  };
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

      {/* Right Side with Form */}
      <div className="w-full lg:w-1/2 p-10 flex justify-center">
        <form className="space-y-6 w-full lg:w-4/5 lg:p-10 bg-white rounded-lg" onSubmit={handleLogin}>
          <div className="text-center mb-6">
            <Link href="/">
              <Image src="/images/trade_connect.svg" alt="Logo" height={100} width={100} className="mx-auto" />
            </Link>
          </div>
          <h2 className="text-start ml-10 text-4xl font-semibold">Create a Password</h2>
          <p className="ml-10 text-start mb-6 mt-3 text-gray-600 text-lg">Must be at least 8 characters</p>

          {/* Password Input */}
          <div>
            <label className="block text-black ml-10 font-semibold">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="w-4/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-80 rounded"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-black ml-10 font-semibold">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              autoComplete="off"
              className="w-4/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-80 rounded"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="ml-10 mb-4 flex items-center">
            <input type="checkbox" checked={checked} onChange={handleChange} className="mr-2" />
            <label className="text-gray-700">I agree to the terms and conditions</label>
          </div>

          {/* Already have an account Link */}
          <div className="mb-4 ml-10">
            <p>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-red-500">
                Log In
              </Link>
            </p>
          </div>

          {/* Submit Button */}
          <div className="w-4/5 ml-10">
            <button type="submit" className="w-full bg-red-800 text-white text-lg p-2 rounded hover:bg-red-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
