import React from "react";
import Image from "next/image";
import SeeMoreButton from "../../commonComponents/button/seeMore";
export default function Product() {
  return (
    <div className="p-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4">
        <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
          No <span className="text-[#992b1c]">Team</span> is Left Out!
        </h3>
        <h4 className="text-lg sm:text-xl lg:text-2xl text-black mt-2">Get the best of the best vendors</h4>
      </div>

      {/* Vendor Cards Section */}
      <div className="pt-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-10">
          {/* Event Planner Card */}
          <div className="bg-[#EDDFDF] p-4 rounded-md shadow-md">
            <Image src="/images/event-planner.svg" width={327} height={239} className="w-full object-cover rounded" alt="Event Planner" />
            <div className="py-3">
              <p className="text-[#800000] text-lg font-semibold text-center">Event Planner</p>
            </div>
            <SeeMoreButton />
          </div>

          {/* Event Photographer Card */}
          <div className="bg-[#EDDFDF] p-4 rounded-md shadow-md">
            <Image src="/images/automobile.svg" width={327} height={239} className="w-full object-cover rounded" alt="Event Photographer" />
            <div className="py-3">
              <p className="text-[#800000] text-lg font-semibold text-center">Event Photographer</p>
            </div>
            <SeeMoreButton />
          </div>

          {/* Logistics Card */}
          <div className="bg-[#EDDFDF] p-4 rounded-md shadow-md">
            <Image src="/images/disk-jockey.svg" width={327} height={239} className="w-full object-cover rounded" alt="Logistics" />
            <div className="py-3">
              <p className="text-[#800000] text-lg font-semibold text-center">Logistics</p>
            </div>
            <SeeMoreButton />
          </div>

          {/* Makeup Artist Card */}
          <div className="bg-[#EDDFDF] p-4 rounded-md shadow-md">
            <Image src="/images/markup-artist.svg" width={327} height={239} className="w-full object-cover rounded" alt="Makeup Artist" />
            <div className="py-3">
              <p className="text-[#800000] text-lg font-semibold text-center">Makeup Artist</p>
            </div>
            <SeeMoreButton />
          </div>

          {/* Automobile Mechanic Card */}
          <div className="bg-[#EDDFDF] p-4 rounded-md shadow-md">
            <Image
              src="/images/event-planner.svg"
              width={327}
              height={239}
              className="w-full object-cover rounded"
              alt="Automobile Mechanic"
            />
            <div className="py-3">
              <p className="text-[#800000] text-lg font-semibold text-center">Automobile Mechanic</p>
            </div>
            <SeeMoreButton />
          </div>

          {/* Disk Jockey (DJ) Card */}
          <div className="bg-[#EDDFDF] p-4 rounded-md shadow-md">
            <Image src="/images/event-planner.svg" width={327} height={239} className="w-full object-cover rounded" alt="Disk Jockey" />
            <div className="py-3">
              <p className="text-[#800000] text-lg font-semibold text-center">Disk Jockey (DJ)</p>
            </div>
            <SeeMoreButton />
          </div>
        </div>
      </div>
    </div>
    // <div className="py-[41px]">
    //   <div className="flex items-center flex-col">
    //     <h3 className="text-black text-[40px] font-bold">
    //       No <span className="text-[#992b1c]">Team</span> is Left Out!
    //     </h3>
    //     <h4 className="text-[35px] text-black">Get the best of the best vendors</h4>
    //   </div>
    //   <div className="pt-[60px]">
    //     <div className="flex justify-center gap-10">
    //       <div className="bg-[#EDDFDF] p-4 rounded-md">
    //         <Image src="/images/event-planner.svg" width={327} height={239} />
    //         <div className="py-3">
    //           <p className="text-[#800000] text-[20px]">Event Planner</p>
    //         </div>
    //         <SeeMoreButton />
    //       </div>
    //       <div className="bg-[#EDDFDF] p-4 rounded-md">
    //         <Image src="/images/automobile.svg" width={327} height={239} />
    //         <div className="py-5">
    //           <p className="text-[#800000] text-[20px]">Event Photographer</p>
    //         </div>
    //         <SeeMoreButton />
    //       </div>
    //       <div className="bg-[#EDDFDF] p-4 rounded-md">
    //         <Image src="/images/disk-jockey.svg" width={327} height={239} />
    //         <div className="py-5">
    //           <p className="text-[#800000] text-[20px]">Logistics</p>
    //         </div>
    //         <SeeMoreButton />
    //       </div>
    //     </div>
    //     <div className="flex justify-center gap-10 pt-10">
    //       <div className="bg-[#EDDFDF] p-4 rounded-md">
    //         <Image src="/images/markup-artist.svg" width={327} height={239} />
    //         <div className="py-5">
    //           <p className="text-[#800000] text-[20px]">Makeup Artist</p>
    //         </div>
    //         <SeeMoreButton />
    //       </div>
    //       <div className="bg-[#EDDFDF] p-4 rounded-md">
    //         <Image src="/images/event-planner.svg" width={327} height={239} />
    //         <div className="py-5">
    //           <p className="text-[#800000] text-[20px]">Automobile Mechanic</p>
    //         </div>
    //         <SeeMoreButton />
    //       </div>
    //       <div className="bg-[#EDDFDF] p-4 rounded-md">
    //         <Image src="/images/event-planner.svg" width={327} height={239} />
    //         <div className="py-5">
    //           <p className="text-[#800000] text-[20px]">Disk Jockey (DJ)</p>
    //         </div>
    //         <SeeMoreButton />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
