import React from "react";

import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-[1440px] h-[48px] bg-black flex justify-between items-center px-4">
      <div className="flex-1 flex justify-center items-center space-x-4">
        <span className="text-white text-[14px] leading-5">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <span className="font-semibold text-[14px] leading-6 text-white underline">
          ShopNow
        </span>
      </div>

      <div className="flex items-center space-x-1 mr-[180px]">
        <span className="text-white text-[14px] leading-5">English</span>
        <FiChevronDown size={18} color="white"></FiChevronDown>
      </div>
    </div>
  );
}
