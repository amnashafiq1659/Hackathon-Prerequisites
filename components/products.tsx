import React from "react";
import Image from "next/image";

const products = [
  {
    image: "/images/Coat.png",
    title: "The north coat",
    discountPrice: "$260",
    price: "$360",
    stars: "/images/Five star.png",
    rating: "(65)",
  },
  {
    image: "/images/Bag.png",
    title: "Gucci duffle bag",
    discountPrice: "$960",
    price: "$1160",
    stars: "/images/Four Half Star.png",
    rating: "(65)",
  },
  {
    image: "/images/Cooler.png",
    title: "RGB liquid CPU Cooler",
    discountPrice: "$160",
    price: "$170",
    stars: "/images/Four Half Star.png",
    rating: "(65)",
  },
  {
    image: "/images/Bookshelf.png",
    title: "Small BookSelf",
    discountPrice: "$360",
    stars: "/images/Five Star.png",
    rating: "(65)",
  },
];

export default function Products() {
  return (
    <div className="w-[1440px] px-[100px] pt-[100px]">
      <div className="flex items-center">
        <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
        <span className="font-semibold leading-5 text-[#DB4444] px-4">
        This Month
        </span>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-[36px] leading-[48px] py-4">
        Best Selling Products
        </h1>
        <div className="flex justify-end items-center col-span-3 ml-auto">
          <button className="font-medium leading-6 py-4 px-12 rounded bg-[#DB4444] text-white">View All</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
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
      <Image src={"/images/Image.png"} alt={"image"} height={500} width={1170} className="w-full object-cover py-[80px]"/>
      </div>
  );
}
