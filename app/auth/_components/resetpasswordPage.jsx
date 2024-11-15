"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = {};

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted");
      // Add your form submission logic here
    }
  };

  return (
    <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg overflow-hidden">
      {/* Left Section: Image */}
      <div className="hidden lg:block w-1/2 h-full">
        <Image src="/images/forget-password.svg" alt="Background" width={600} height={600} className="h-full w-full object-cover" />
      </div>

      {/* Right Section: Form */}
      <div className="bg-white w-full lg:w-1/2 max-w-md mx-auto shadow-lg rounded-lg p-8 animate-fadeIn">
        <div className="text-center">
          <Image src="/images/trade_connect.svg" alt="Logo" width={100} height={100} className="mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Reset Password</h2>
          <p className="text-gray-600">Your new password must be at least 8 characters long.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Password Field */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block font-semibold text-gray-700">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              autoComplete="off"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-500 transition duration-300"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Remembered your password?{" "}
          <Link href="/" className="text-red-500 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Image from "next/image";

// function ResetPassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const validationErrors = {};

//     if (!password) {
//       validationErrors.password = "This field is required";
//     } else if (password.length < 8) {
//       validationErrors.password = "Password must be at least 8 characters";
//     }

//     if (!confirmPassword) {
//       validationErrors.confirmPassword = "This field is required";
//     } else if (confirmPassword !== password) {
//       validationErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form submitted");
//     }
//   };

//   return (
//     <div className="flex justify-center gap-10 items-center min-h-screen w-full">
//       <div className="w-1/2 relative animate-parallax">
//         <Image src="/images/trade_connect.svg" alt="Logo" width={80} height={80} className="w-20 lg:w-24 mb-8" />
//       </div>
//       <div className="w-1/2 h-full relative">
//         <Image
//           src="/images/forget-password.svg"
//           alt="Background"
//           width={500}
//           height={500}
//           className="h-full w-full object-cover rounded-l-lg"
//         />
//       </div>
//       <div className="w-1/2 items-center mx-10 p-4 justify-center animate-fadeIn">
//         <form onSubmit={handleSubmit} className="space-y-4 shadow ml-10 p-10 w-3/5">
//           <h2 className="text-start text-4xl font-semibold">Reset Password</h2>
//           <p className="text-start mb-6 mt-3 text-gray-600 text-lg">Must be at least 8 characters</p>
//           <div className="relative">
//             <label className="block font-semibold">New Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="knfhr34@-"
//               autoComplete="off"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               className="w-full p-2 mb-2 border-2 border-red-800 bg-transparent opacity-60 rounded focus:border-red-500 focus:ring-2 focus:ring-red-300 transition-all"
//             />
//             <span className="absolute right-3 top-10 cursor-pointer text-gray-600 hover:animate-rotate" onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
//           </div>

//           <div className="relative">
//             <label className="block font-semibold">Confirm Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="knfhr34@-"
//               autoComplete="off"
//               value={confirmPassword}
//               onChange={e => setConfirmPassword(e.target.value)}
//               className="w-full p-2 mb-2 border-2 border-red-800 bg-transparent opacity-60 rounded focus:border-red-500 focus:ring-2 focus:ring-red-300 transition-all"
//             />
//             <span className="absolute right-3 top-10 cursor-pointer text-gray-600 hover:animate-rotate" onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
//           </div>

//           <label className="block mb-4">
//             <input type="checkbox" className="mr-2" />I agree to the terms and conditions
//           </label>

//           <p className="mb-4">
//             Already have an account?{" "}
//             <Link href="/" className="text-red-500">
//               Log In
//             </Link>
//           </p>

//           <div className="w-3/5 text-center bg-red-800 text-red-200 ml-10 p-2 rounded transform hover:scale-105 transition-all">
//             <button type="submit" className="w-full">
//               <Link href="/Password-changed">Sign Up</Link>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;
