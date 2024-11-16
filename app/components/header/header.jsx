"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-6 py-3 md:px-[80px] bg-white shadow-md">
      <div className="flex justify-between items-center px-3">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <Image src="/images/trade_connect.svg" width={95} height={90} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <p className="text-black text-[16px] md:text-[20px]">Home</p>
          <p className="text-black text-[16px] md:text-[20px]">About us</p>
        </div>

        {/* Login and Sign-up Buttons */}
        <div className="hidden md:flex gap-4">
          <div className="border px-4 py-2 rounded-xl border-[#13121280]">
            <Link href="/auth/login">
              <p className="text-black text-[16px] md:text-[20px]">Login</p>
            </Link>
          </div>
          <div className="flex px-4 py-2 rounded-xl bg-[#992b1c] gap-2 justify-center">
            <Link href="/auth/sign-up">
              <p className="text-white text-[16px] md:text-[20px]">Sign up</p>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Image src="/images/hamburger-icon.svg" width={40} height={40} alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col mt-4 md:hidden">
          <p className="text-black text-[16px] py-2">Home</p>
          <p className="text-black text-[16px] py-2">About us</p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="border px-4 py-2 rounded-xl border-[#13121280]">
              <Link href="/auth/login">
                <p className="text-black text-[16px]">Login</p>
              </Link>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-[#992b1c] gap-2 justify-center">
              <Link href="/auth/sign-up">
                <p className="text-white text-[16px]">Sign up</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <div className="px-6 py-3 md:px-[80px]">
//       <div className="flex flex-col md:flex-row md:justify-between items-center">
//         {/* Logo and Navigation */}
//         <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20">
//           <Image src="/images/trade_connect.svg" width={95} height={90} />
//           <div className="flex gap-5 md:gap-10">
//             <p className="text-black text-[16px] md:text-[20px]">Home</p>
//             <p className="text-black text-[16px] md:text-[20px]">About us</p>
//           </div>
//         </div>

//         {/* Login and Sign-up Buttons */}
//         <div className="flex gap-4 md:gap-10 mt-4 md:mt-0">
//           {/* Login Button */}
//           <div className="border px-4 py-2 rounded-xl border-[#13121280]">
//             <Link href="/auth/login">
//               <p className="text-black text-[16px] md:text-[20px]">Login</p>
//             </Link>
//           </div>

//           {/* Sign-up Button */}
//           <div className="flex px-4 py-2 rounded-xl bg-[#992b1c] gap-2 justify-center">
//             <Link href="/auth/sign-up">
//               <p className="text-white text-[16px] md:text-[20px]">Sign up</p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
