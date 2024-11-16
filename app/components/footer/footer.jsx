import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-6 py-8 md:px-[80px] bg-[#992B1C4D]">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row py-24 gap-10 md:gap-0">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
          <h3 className="text-[#992B1C] font-bold text-2xl">About Us</h3>
          <p className="text-[#992B1C] font-normal text-md">What we do</p>
          <div className="pt-10">
            <p className="text-[#992B1C] text-lg md:text-xl leading-relaxed">
              The Vendor Services Exchange Platform is a digital marketplace designed to connect professionals from various industries—such
              as catering, event planning, drink sales, rentals, photography, and more—allowing them to offer, exchange, and request
              services.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="flex justify-center  w-full md:w-1/2 relative hidden md:block">
          <div className="flex justify-center">
            <Image src="/images/about1.svg" width={327} height={239} alt="About 1" />
            <Image
              src="/images/about2.svg"
              width={327}
              height={239}
              alt="About 2"
              className="absolute top-28 left-0 md:top-44 md:-left-37"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row justify-between md:py-24 ">
        {/* Links */}
        <div className="flex flex-wrap gap-8 md:gap-16">
          <div>
            <h5 className="text-black text-lg font-bold pb-3">Teams</h5>
            <p className="text-black text-md">Vendors</p>
            <p className="text-black text-md">Clients</p>
            <p className="text-black text-md">Subscription</p>
          </div>
          <div>
            <h5 className="text-black text-lg font-bold pb-3">Company</h5>
            <p className="text-black text-md">Partners</p>
            <p className="text-black text-md">Contact Us</p>
            <p className="text-black text-md">About Us</p>
            <p className="text-black text-md">FAQs</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 md:mt-0">
          <h3 className="text-black text-lg font-bold pb-3">Reach out to us</h3>
          <p className="text-black text-md leading-relaxed">Get your questions answered about partnerships on Teams.</p>
          <div className="flex items-center gap-3 py-4">
            <Image src="/images/call.svg" width={33} height={33} alt="Call" />
            <p className="text-black text-md">+234 80 555 7868 99</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/images/email.svg" width={33} height={33} alt="Email" />
            <p className="text-black text-md">info@teams.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div>
          <Image src="/images/trade_connect.svg" width={95} height={90} alt="Logo" />
        </div>
        <div className="flex gap-4">
          <Image src="/images/linkedin.svg" width={32} height={32} alt="LinkedIn" />
          <Image src="/images/twitter.svg" width={32} height={32} alt="Twitter" />
          <Image src="/images/instagram.svg" width={32} height={32} alt="Instagram" />
          <Image src="/images/facebook.svg" width={32} height={32} alt="Facebook" />
        </div>
      </div>

      <div className="pt-5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex gap-5">
          <p className="text-black text-md">Privacy</p>
          <p className="text-black text-md">Terms of Service</p>
          <p className="text-black text-md">Cookie Policy</p>
        </div>
        <p className="text-black text-md mt-4 md:mt-0">Copyright &copy; 2024</p>
      </div>
    </div>
  );
}
