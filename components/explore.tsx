import React from 'react'
import Image from 'next/image'

const products = [
  {
    image: "/images/Food.png",
    title: "Breed Dry Dog Food",
    discountPrice: "$100",
    stars: "/images/Three star.png",
    rating: "(35)",
  },
  {
    image: "/images/DSLR.png",
    title: "CANON EOS DSLR Camera",
    discountPrice: "$360",
    stars: "/images/Four star.png",
    rating: "(95)",
  },
  {
    image: "/images/Laptop.png",
    title: "ASUS FHD Gaming Laptop",
    discountPrice: "$700",
    stars: "/images/Five star.png",
    rating: "(325)",
  },
  {
    image: "/images/Cart.png",
    title: "Curology Product Set ",
    discountPrice: "$500",
    stars: "/images/Four star.png",
    rating: "(145)",
  },
  {
    image: "/images/Car.png",
    title: "Kids Electric Car",
    discountPrice: "$960",
    stars: "/images/Five star.png",
    rating: "(65)",
  },
  {
    image: "/images/Shoes.png",
    title: "Jr. Zoom Soccer Cleats",
    discountPrice: "$1160",
    stars: "/images/Five star.png",
    rating: "(35)",
  },
  {
    image: "/images/Shooter.png",
    title: "GP11 Shooter USB Gamepad",
    discountPrice: "$660",
    stars: "/images/Four Half star.png",
    rating: "(55)",
  },
  {
    image: "/images/Jacket.png",
    title: "Quilted Satin Jacket",
    discountPrice: "$660",
    stars: "/images/Four Half star.png",
    rating: "(55)",
  }
]

export default function Explore() {
  return (
    <div className="w-[1440px] px-[100px] pt-6">
      <div className="flex items-center">
        <div className="w-5 h-10 rounded bg-[#DB4444]"></div>
        <span className="font-semibold leading-5 text-[#DB4444] px-4">
        Our Products
        </span>
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-[36px] leading-[48px] py-4">
        Explore Our Products
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

        <div className="grid grid-cols-4 grid-rows-2 gap-y-16 gap-x-9 mt-10">
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
                <Image
                  src={product.stars}
                  alt={"stars"}
                  height={20}
                  width={100}
                />
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
    </div>
  )
}
