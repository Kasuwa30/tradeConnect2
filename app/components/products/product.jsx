import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <div className="py-[41px]">
      <div className="flex items-center flex-col">
        <h3 className="text-black text-[40px] font-bold">
          No <span className="text-[#992b1c]">Team</span> is Left Out!
        </h3>
        <h4 className="text-[35px] text-black">Get the best of the best vendors</h4>
      </div>
      <div className="pt-[77px]">
        <div className="flex justify-center gap-[30px]">
          <div>
            <Image src="/images/event-planner.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-black text-[20px]">Event Planner</p>
            </div>
          </div>
          <div>
            <Image src="/images/event-photographer.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-black text-[20px]">Event Photographer</p>
            </div>
          </div>
          <div>
            <Image src="/images/logistics.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-black text-[20px]">Logistics</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[30px]">
          <div>
            <Image src="/images/markup-artist.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-black text-[20px]">Makeup Artist</p>
            </div>
          </div>
          <div>
            <Image src="/images/automobile.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-black text-[20px]">Automobile Mechanic</p>
            </div>
          </div>
          <div>
            <Image src="/images/disk-jockey.svg" width={327} height={239} />
            <div className="py-5">
              <p className="text-black text-[20px]">Disk Jockey (DJ)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
