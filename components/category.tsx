import React from "react";
import Image from "next/image";

export default function Category() {
  return (
    <div className="w-[1440px] px-[100px] pt-[80px]">
      <div className="flex items-center">
        <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
        <span className="font-semibold leading-5 text-[#DB4444] px-4">
          Categories
        </span>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-[36px] leading-[48px] py-5">
          Browse By Category
        </h1>
        <div className="flex justify-end items-center ml-auto">
          <Image
            src={"/images/Double Arrow.png"}
            alt={"double arrow"}
            height={46}
            width={100}
          />
        </div>
      </div>
      <div className="flex flex-col-6 gap-10 py-10 items-center justify-between">
        <Image
          src={"/images/Phone.png"}
          alt={"phone"}
          height={145}
          width={170}
        />
        <Image
          src={"/images/Computer.png"}
          alt={"computer"}
          height={145}
          width={170}
        />
        <Image
          src={"/images/Smartwatch.png"}
          alt={"smartwatch"}
          height={145}
          width={170}
        />
        <Image
          src={"/images/Camera.png"}
          alt={"camera"}
          height={200}
          width={200}
        />
        <Image
          src={"/images/Headphones.png"}
          alt={"headphones"}
          height={145}
          width={170}
        />
        <Image
          src={"/images/Gaming.png"}
          alt={"gaming"}
          height={145}
          width={170}
        />
      </div>
      <div className="flex justify-center py-4">
        <div className="w-[1400px] border-t-2 border-gray-200"></div>
      </div>
    </div>
  );
}
