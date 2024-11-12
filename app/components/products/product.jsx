import React from "react";
import Image from "next/image";
import SeeMoreButton from "../../commonComponents/button/seeMore";
export default function Product() {
  return (
    <div className="py-[41px]">
      <div className="flex items-center flex-col">
        <h3 className="text-black text-[40px] font-bold">
          No <span className="text-[#992b1c]">Team</span> is Left Out!
        </h3>
        <h4 className="text-[35px] text-black">Get the best of the best vendors</h4>
      </div>
      <div className="pt-[60px]">
        <div className="flex justify-center gap-10">
          <div className="bg-[#EDDFDF] p-4 rounded-md">
            <Image src="/images/event-planner.svg" width={327} height={239} />
            <div className="py-3">
              <p className="text-[#800000] text-[20px]">Event Planner</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
            <Image src="/images/automobile.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Event Photographer</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
            <Image src="/images/disk-jockey.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Logistics</p>
            </div>
            <SeeMoreButton />
          </div>
        </div>
        <div className="flex justify-center gap-10 pt-10">
          <div className="bg-[#EDDFDF] p-4 rounded-md">
            <Image src="/images/markup-artist.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Makeup Artist</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
            <Image src="/images/event-planner.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Automobile Mechanic</p>
            </div>
            <SeeMoreButton />
          </div>
          <div className="bg-[#EDDFDF] p-4 rounded-md">
            <Image src="/images/event-planner.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-[#800000] text-[20px]">Disk Jockey (DJ)</p>
            </div>
            <SeeMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}
