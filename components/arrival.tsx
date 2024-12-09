import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Arrival() {
  return (
    <div className="w-[1440px] px-[100px] pt-16">
      <div className="flex items-center">
        <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
        <span className="font-semibold leading-5 text-[#DB4444] px-4">
          Featured
        </span>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-[36px] leading-[48px] py-4">
          New Arrival
        </h1>
      </div>
      <div className="my-10">
        <Image
          src={"/images/Picture.png"}
          alt="picture"
          width={1170}
          height={600}
          className="w-full object-cover"
        ></Image>
      </div>

      <div className="flex flex-col-3 items-center justify-between px-[150px] py-20">
        <div className="flex items-center flex-col text-center">
          <Image
            src={"/images/Delivery.png"}
            alt="delivery"
            height={80}
            width={80}
          />
          <h1 className="font-semibold text-[20px] leading-7 pt-6">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-[14px] leading-5 pt-3">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex items-center flex-col text-center">
          <Image
            src={"/images/Service).png"}
            alt="service"
            height={80}
            width={80}
          />
          <h1 className="font-semibold text-[20px] leading-7 pt-6">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-[14px] leading-5 pt-3">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex items-center flex-col text-center">
          <Image
            src={"/images/Guarantee.png"}
            alt="guarantee"
            height={80}
            width={80}
          />
          <h1 className="font-semibold text-[20px] leading-7 pt-6">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-[14px] leading-5 pt-3">
            We reurn money within 30 days
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-full border-2  bg-gray-200 h-12 w-12 ml-auto mb-9">
        <FaArrowUp size={20}></FaArrowUp>
      </div>
    </div>
  );
}
