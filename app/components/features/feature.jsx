import React from "react";
import Image from "next/image";

function Feature() {
  return (
    <div className="pb-[50px]">
      <div className="flex justify-center py-5">
        <h3 className="text-black text-[35px]">Features</h3>
      </div>
      <div className="px-4">
        <div className="flex justify-center pb-5">
          <div className="relative">
            <Image src="/images/features.svg" width={833} height={133} />
            <div className="absolute -top-[5px] left-[23px] md:top-[40px] md:left-[40px]">
              <Image src="/images/gang.svg" width={0} height={0} className="w-[30px] h-[80px] md:w-[80px] md:h-[80px] " />
            </div>
            <div className="absolute top-[10px] left-[100px] md:top-[50px] md:left-[300px]">
              <p className="text-center text-black text-md md:text-xl">
                Connect with vendors from the <br /> comfort of your home.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <div className="relative">
            <Image src="/images/features.svg" width={833} height={133} />
            <div className="absolute -top-[5px] left-[23px] md:top-[40px] md:left-[40px]">
              <Image src="/images/handshake.svg" width={0} height={0} className="w-[30px] h-[80px] md:w-[80px] md:h-[80px] " />
            </div>
            <div className="absolute top-[10px] left-[100px] md:top-[50px] md:left-[200px]">
              <p className="text-center text-black text-sm md:text-xl">
                Service exchanges can occur seamlessly, enabling bartering, and collaboration
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <div className="relative">
            <Image src="/images/features.svg" width={833} height={133} />
            <div className="absolute -top-[5px] left-[23px] md:top-[40px] md:left-[40px]">
              <Image src="/images/carbon.svg" width={0} height={0} className="w-[30px] h-[80px] md:w-[80px] md:h-[80px] " />
            </div>
            <div className="absolute top-[10px] left-[100px] md:top-[50px] md:left-[200px]">
              <p className="text-center text-black text-xs md:text-xl">
                Clients or event hosts can find, book, and coordinate with multiple vendors on one platform.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center pb-5">
        <div className="relative">
          <Image src="/images/features.svg" width={833} height={133} />
          <div className="absolute top-[35px] left-[45px]">
            <Image src="/images/handshake.svg" width={80} height={80} />
          </div>
          <div className="absolute top-[50px] left-[250px]">
            <p className="text-center text-black text-[20px]">
              Service exchanges can occur seamlessly, enabling <br /> bartering, and collaboration
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="flex justify-center  pb-5">
        <div className="relative">
          <Image src="/images/features.svg" width={833} height={133} />
          <div className="absolute top-[28px] left-[45px]">
            <Image src="/images/carbon.svg" width={80} height={80} />
          </div>
          <div className="absolute top-[50px] left-[250px]">
            <p className="text-center text-black text-[20px]">
              Clients or event hosts can find, book, and coordinate <br />
              with multiple vendors on one platform.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Feature;
