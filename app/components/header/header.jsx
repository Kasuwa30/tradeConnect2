import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-[80px] py-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-20">
          <Image src="/images/trade_connect.svg" width={95} height={90} />
          <div className="flex items-center gap-10">
            <p className="text-black text-[20px]">Home</p>
            <p className="text-black text-[20px]">About us</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="border px-[20px] py-[4px] rounded-xl border-[#13121280]">
            <Link href="/login">
              <p className="text-black text-[20px]">Login</p>
            </Link>
          </div>
          <div className="flex px-[20px] py-[4px] rounded-xl bg-[#992b1c] gap-[10px] justify-center">
            <p className="text-white text-[20px]">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
