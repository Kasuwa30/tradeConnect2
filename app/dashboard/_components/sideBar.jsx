"use client";
import Link from "next/link";
import LogoutButton from "../../../app/commonComponents/button/logout";
import Image from "next/image";
import navigations from "./navigations";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="border m-3 border-[#EBEBEB] rounded-[10px] h-full">
      <aside className=" flex flex-col">
        <Image src="/images/trade_connect.svg" width={95} height={90} className="self-center py-5" />
        <nav className="flex flex-col p-4">
          {navigations.map((dashboardNavigation, key) => {
            const isActive = pathname === dashboardNavigation.to || pathname.includes(dashboardNavigation.to);
            const isSecondToLast = key === navigations.length - 2;

            return (
              <div key={key}>
                <div className={`${isActive ? "bg-[#992B1C]" : ""} rounded-md`}>
                  <Link href={dashboardNavigation.to} key={dashboardNavigation.name}>
                    <span className={`flex px-3 gap-3 py-2 rounded-md mx-4 my-2 ${isActive ? "bg-utilityBrand" : ""}`}>
                      <Image src={dashboardNavigation.activeIcon} width={24} height={24} />

                      <p className={isActive ? "text-white" : "text-black"}>{dashboardNavigation.name}</p>
                    </span>
                  </Link>
                </div>
                {isSecondToLast && <div className="border-b border-[#8E8E8E]" />}
              </div>
            );
          })}
        </nav>
        <div className="pt-44">
          <LogoutButton />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
