"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
function CreatePassword() {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
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
        <form className="space-y-6 w-full lg:w-4/5 lg:p-10 bg-white rounded-lg">
          <div className="text-center mb-6">
            <Image
              src="/images/trade_connect.svg" // Update with actual logo path
              alt="Logo"
              height={100}
              width={100}
              className="mx-auto"
            />
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
    // <div className="flex flex-col min-h-screen lg:flex-row justify-center items-center  min-h-screen lg:gap-0 w-full gap-9 bg-gray-100">
    //   {/* Left Side with Image */}
    //   <div className="w-full lg:w-1/3 lg:h-screen flex flex-grow flex-col items-center justify-center">
    //     <Image
    //       src="/images/sign-up-image.svg"
    //       alt="Logo"
    //       height={100}
    //       width={100}
    //       className="h-48 w-full lg:h-full lg:w-full lg:rounded-none bg-red-100 lg:bg-red-100 object-cover"
    //     />
    //   </div>

    //   {/* Right Side with Form */}
    //   <div className="w-full lg:w-2/3 p-10 flex justify-center">
    //     <form className="space-y-4 w-full lg:w-3/5 lg:shadow-lg lg:p-5">
    //       <h2 className="text-start ml-10 text-4xl font-semibold">Create a Password</h2>
    //       <p className="ml-10 text-start mb-6 mt-3 text-gray-600 text-lg">Must be at least 8 characters</p>
    //       <div>
    //         <label className="block text-black ml-10 font-semibold">
    //           Password <span className="text-red-500">*</span>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Enter your password"
    //           autoComplete="off"
    //           className="w-4/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-black ml-10 font-semibold">
    //           Confirm Password <span className="text-red-500">*</span>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Confirm your password"
    //           autoComplete="off"
    //           className="w-4/5 p-2 mb-4 ml-10 border-2 bg-transparent border-red-800 opacity-60 rounded"
    //         />
    //       </div>
    //       <label className="block ml-10 mb-4">
    //         <input type="checkbox" checked={checked} onChange={handleChange} className="mr-2" />I agree to the terms and conditions
    //       </label>
    //       <p className="mb-4 ml-10">
    //         Already have an account?{" "}
    //         <Link href="/auth/login" className="text-red-500">
    //           Log In
    //         </Link>
    //       </p>
    //       <div className="w-4/5 ml-10 bg-red-800 text-red-200 text-lg p-2 rounded">
    //         <button type="submit" className="w-full">
    //           <Link href="/" className="text-red-500">
    //             Sign Up
    //           </Link>
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default CreatePassword;
