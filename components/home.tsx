import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1440px] px-[100px] py-10 flex items-center">
      <div className="flex flex-col space-y-4 border-r-2 border-gray-200 pr-[50px]">
        <span className="flex items-center">
          <p className="pr-16">Woman’s Fashion</p>
          <AiOutlineRight></AiOutlineRight>
        </span>
        <span className="flex items-center">
          <p className="pr-[87px]">Men’s Fashion</p>
          <AiOutlineRight></AiOutlineRight>
        </span>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby’s & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
      </div>
      <div className="ml-auto">
        <Image
          src={"/images/Frame.png"}
          alt={"Frame"}
          height={344}
          width={892}
        ></Image>
      </div>
    </div>
  );
}
