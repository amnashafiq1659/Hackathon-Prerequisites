import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className="w-[1440px] h-[72px] flex items-center border-b-2 border-gray-200 px-[100px] pt-4">
      <div className="h-9 flex items-center justify-between">
        <span className="font-bold text-[24px] leading-6">Exclusive</span>
      </div>

      <div className="h-6 flex items-center space-x-12 px-[140px]">
        <span className="flex items-center leading-6 border-b-2">Home</span>
        <span className="flex items-center leading-6">Contact</span>
        <span className="flex items-center leading-6">About</span>
        <span className="flex items-center leading-6">Sign Up</span>
      </div>

      <div className="bg-[#F5F5F5] py-[7px] pl-3 pr-5 flex items-center">
        <span className="text-[12px] leading-[18px] pr-16">
          What are you looking for?
        </span>
        <FiSearch size={18}></FiSearch>
      </div>
      <div className="flex items-center justify-center pl-12">
        <AiOutlineHeart size={30}></AiOutlineHeart>
      </div>
      <div className="flex items-center justify-center pl-9">
        <AiOutlineShoppingCart size={30}></AiOutlineShoppingCart>
      </div>
    </div>
  );
}
