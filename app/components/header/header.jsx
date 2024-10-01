import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="px-[80px] py-5">
      <div className="flex justify-between border-b-[1px] border-[#0000004c] pb-4 items-center">
        <div className="flex justify-center items-center">
          <ul>
            <li className="text-black text-[20px]">Logo</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[41px] items-center">
            <li className="text-black text-[20px]">Home</li>
            <li className="text-black text-[20px]">About us</li>
            <div class="flex">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search"
                  class="w-80 py-[10px] pl-10 pr-4 text-black text-center text-[20px] rounded-full border border-[#992b1c] focus:outline-none placeholder-[#000]"
                />
                <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Image src="/images/search-icon.svg" width={20} height={20} />
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[41px]">
            <div className="border px-[20px] py-[10px] rounded-xl border-[#13121280]">
              <p className="text-black text-[20px]">Login</p>
            </div>
            <div className="flex px-[20px] py-[10px] rounded-xl bg-[#992b1c] gap-[10px] justify-center">
              <p className="text-white text-[20px]">Sign up</p>
              <Image src="/images/drop-down.svg" width={15} height={15} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
