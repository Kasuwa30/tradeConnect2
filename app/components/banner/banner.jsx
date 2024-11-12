import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="bg-[#eddfdf] h-screen px-[80px]">
      <div className="flex items-center pt-[100px]">
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
