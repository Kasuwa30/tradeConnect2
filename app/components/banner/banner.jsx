import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="bg-[#eddfdf] h-screen px-[80px]">
      <div className="flex gap-[12px] justify-end">
        <div className="flex border border-[#992b1c] px-[15px] py-[7px] rounded-xl gap-1">
          <Image src="/images/client.svg" width={20} height={20} />
          <p className="text-black text-[17px]">Vendor</p>
        </div>
        <div className="flex border border-[#992b1c] px-[15px] py-[7px] rounded-xl gap-1">
          <Image src="/images/client.svg" width={20} height={20} />
          <p className="text-black text-[17px]">Client</p>
        </div>
      </div>
      <div className="flex items-center pt-[185px]">
        <div className="w-1/2">
          <div className="ml-48">
            <p className="text-[55px] text-black font-bold leading-none">
              Connecting
              <br />
              Vendors for <br />
              Seamless <br />
              Collaboration
            </p>
          </div>
          <div className="ml-48 py-[30px]">
            <p className="text-black text-[20px]">
              At Teams, we bring together the best of the <br />
              best in the industry <br />
              to give your event the most quality hands <br /> ever.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/images/banner-girl.svg" width={526} height={508} />
        </div>
      </div>
      <div className="flex px-[20px] py-[10px] ml-48 rounded-xl bg-[#992b1c] gap-[10px] justify-center w-[227px]">
        <p className="text-white text-[20px]">Get Started</p>
      </div>
    </div>
  );
}

export default Banner;
