import React from "react";
import Image from "next/image";

const products = [
  {
    image: "/images/Gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    discountPrice: "$120",
    price: "$160",
    stars: "/images/Five star.png",
    rating: "(88)",
  },
  {
    image: "/images/Keyboard.png",
    title: "AK-900 Wired Keyboard",
    discountPrice: "$960",
    price: "$1160",
    stars: "/images/Four Star.png",
    rating: "(75)",
  },
  {
    image: "/images/Monitor.png",
    title: "IPS LCD Gaming Monitor",
    discountPrice: "$370",
    price: "$400",
    stars: "/images/Four Star.png",
    rating: "(99)",
  },
  {
    image: "/images/Chair.png",
    title: "S-Series Comfort Chair ",
    discountPrice: "$375",
    price: "$400",
    stars: "/images/Four Half Star.png",
    rating: "(99)",
  },
];

export default function Sale() {
  return (
    <div className="w-[1440px] px-[100px] pt-[100px]" >
      <div className="flex items-center">
        <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
        <span className="font-semibold leading-5 text-[#DB4444] px-4">
          Today’s
        </span>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-[36px] leading-[48px] py-4">
          Flash Sales
        </h1>
        <div className="flex flex-cols-7 flex-rows-2 pb-4 px-20 gap-5">
          <div className="flex flex-col">
            <h1 className="font-medium text-[12px] leading-[18px]">Days</h1>
            <div className="flex items-center">
              <p className="font-bold text-[32px] leading-[30px] pr-5">03</p>
              <Image
                src={"/images/Semiclone.png"}
                alt={"semiclone"}
                height={16}
                width={4}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[12px] leading-[18px]">Hours</h1>
            <div className="flex items-center">
              <p className="font-bold text-[32px] leading-[30px] pr-5">23</p>
              <Image
                src={"/images/Semiclone.png"}
                alt={"semiclone"}
                height={16}
                width={4}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[12px] leading-[18px]">Minutes</h1>
            <div className="flex items-center">
              <p className="font-bold text-[32px] leading-[30px] pr-5">19</p>
              <Image
                src={"/images/Semiclone.png"}
                alt={"semiclone"}
                height={16}
                width={4}
              />
            </div>
          </div>
          <div>
            <h1 className="font-medium text-[12px] leading-[18px]">Seconds</h1>
            <p className="font-bold text-[32px] leading-[30px]">56</p>
          </div>
        </div>
        <div className="flex justify-end items-center col-span-3 ml-auto">
          <Image
            src={"/images/Double Arrow.png"}
            alt={"double arrow"}
            height={46}
            width={100}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {products.map((product, index) => (
          <div key={index}>
            <Image
              src={product.image}
              alt={product.title}
              height={250}
              width={270}
              className="w-full object-cover"
            ></Image>
            <div className="py-2">
              <h1 className="font-medium leading-6">{product.title}</h1>
              <div className="flex items-center">
                <p className="font-medium text-[#DB4444] leading-6">
                  {product.discountPrice}
                </p>
                <span className="font-medium leading-6 line line-through px-5 text-gray-400">
                  {product.price}
                </span>
              </div>
              <div className="flex items-center py-2">
                <Image
                  src={product.stars}
                  alt={"stars"}
                  height={20}
                  width={100}
                ></Image>
                <span className="font-medium text-[14px] leading-5 px-2 text-gray-400">
                  {product.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-12 flex justify-center">
        <button className="font-medium leading-6 py-4 px-12 text-white bg-[#DB4444] rounded">
          View All Products
        </button>
      </div>

      <div className="flex justify-center py-4">
        <div className="w-[1400px] border-t-2 border-gray-200"></div>
      </div>
    </div>
  );
}
