import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-[80px]">
      <div className="flex">
        <div className="w-1/2">
          <h3 className="text-black text-[20px]">Reach out to us</h3>
          <h6 className="text-black text-[16px]">
            Get your questions answered <br />
            about partnerships on Teams
          </h6>
          <div className="flex py-4 gap-3 items-center">
            <Image src="/images/call.svg" width={33} height={33} />
            <p className="text-black text-[18px]">+234 80 555 7868 99</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/images/email.svg" width={33} height={33} />
            <p className="text-black text-[18px]">info@teams.com</p>
          </div>
          <div className="flex gap-4 pt-[25px]">
            <Image src="/images/linkedin.svg" width={33} height={33} />

            <Image src="/images/twitter.svg" width={33} height={33} />

            <Image src="/images/instagram.svg" width={33} height={33} />

            <Image src="/images/facebook.svg" width={33} height={33} />
          </div>
        </div>
        <div className="flex w-1/2 gap-5">
          <div>
            <p className="text-black text-[20px]">Teams</p>
            <div className="py-3">
              <p className="text-black text-[14px]">Vendors</p>
            </div>
            <div>
              <p className="text-black text-[14px]">Clients</p>
            </div>
          </div>
          <div>
            <p className="text-black text-[20px]">Company</p>
            <div className="py-3">
              <p className="text-black text-[14px]">Vendor</p>
            </div>
            <div>
              <p className="text-black text-[14px]">contact us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-[67px]">
        <div className="flex gap-5">
          <p className="text-black text-[16px]">Privacy</p>
          <p className="text-black text-[16px]">Teams of Service</p>
          <p className="text-black text-[16px]">Cookie Policy</p>
        </div>
        <div className="flex">
          <p>Copyright &copy; 2024</p>
        </div>
      </div>
    </div>
  );
}
