import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="bg-[#eddfdf] min-h-screen px-6 md:px-[80px]">
      <div className="flex flex-col md:flex-row items-center pt-16 md:pt-[100px]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="md:ml-12 lg:ml-20">
            <p className="text-[30px] md:text-[40px] lg:text-[55px] text-black font-bold leading-tight">
              Connecting
              <br />
              Vendors for <br />
              Seamless <br />
              Collaboration
            </p>
          </div>
          <div className="mt-6 md:ml-12 lg:ml-20">
            <p className="text-black text-[16px] md:text-[20px]">
              At Teams, we bring together the best of the
              <br />
              best in the industry
              <br />
              to give your event the most quality hands
              <br />
              ever.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/images/banner-girl.svg" width={526} height={508} alt="Banner Girl" className="mx-auto md:mx-0" />
        </div>
      </div>

      {/* Get Started Button */}
      <div className="flex justify-center md:justify-start mt-8 md:ml-12 lg:ml-20">
        <div className="px-6 py-3 rounded-xl bg-[#992b1c]">
          <p className="text-white text-[16px] md:text-[20px]">Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
