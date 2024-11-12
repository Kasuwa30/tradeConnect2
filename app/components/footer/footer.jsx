import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-[80px] bg-[#992B1C4D]">
      <div className="flex py-14">
        <div className="w-1/2">
          <div className="flex flex-col items-center pt-16">
            <h3 className="text-[#992B1C] font-bold text-2xl">About Us</h3>
            <p className="text-[#992B1C] font-normal text-md">What we do</p>
            <div className=" flex pt-52 items-center">
              <p className="text-[#992B1C] text-xl">
                The Vendor Services Exchange <br />
                Platform is a digital marketplace
                <br /> designed to connect professionals
                <br /> from various industries—such <br />
                as catering, event planning, <br />
                drink sales, rentals, photography, <br />
                and more—allowing them to offer, <br />
                exchange, and request services.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <div>
              <Image src="/images/about1.svg" width={327} height={239} />
            </div>
            <div className="absolute top-72 -left-36">
              <Image src="/images/about2.svg" width={327} height={239} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40 flex justify-between">
        <div className="flex gap-8">
          <div>
            <h5 className="text-black text-[18px] pb-3">Teams</h5>

            <p className="text-black text-[16px]">Vendors</p>
            <p className="text-black text-[16px]">Clients</p>
            <p className="text-black text-[16px]">Subscription</p>
          </div>
          <div>
            <h5 className="text-black text-[18px]  pb-3">Company</h5>

            <p className="text-black text-[16px]">Partners</p>
            <p className="text-black text-[16px]">Contact Us </p>
            <p className="text-black text-[16px]">About Us </p>
            <p className="text-black text-[16px]">FAQs</p>
          </div>
        </div>
        <div>
          <h3 className="text-black text-[20px] pb-3">Reach out to us</h3>
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
        </div>
      </div>
      <div className="pt-5 flex justify-between">
        <div>
          <Image src="/images/trade_connect.svg" width={95} height={90} />
        </div>
        <div className="flex gap-4">
          <Image src="/images/linkedin.svg" width={32} height={32} />

          <Image src="/images/twitter.svg" width={32} height={32} />

          <Image src="/images/instagram.svg" width={32} height={32} />

          <Image src="/images/facebook.svg" width={32} height={32} />
        </div>
      </div>
      <div className="flex justify-between py-10">
        <div className="flex gap-5">
          <p className="text-black text-[16px]">Privacy</p>
          <p className="text-black text-[16px]">Teams of Service</p>
          <p className="text-black text-[16px]">Cookie Policy</p>
        </div>
        <div className="flex">
          <p className="text-black text-[16px]">Copyright &copy; 2024</p>
        </div>
      </div>
    </div>
  );
}
