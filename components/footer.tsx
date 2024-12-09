import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-[1440px] px-[100px] py-20 bg-black text-white">
      <div className="grid grid-cols-5 text-left gap-20">
        <div className="flex flex-col space-y-5">
          <h1 className="font-bold text-[24px] leading-6">Exclusive</h1>
          <p className="font-medium text-[20px] leading-7">Subscribe</p>
          <p className="leading-6">Get 10% off your first order</p>
          <button className="text-[#FAFAFA] leading-6 border rounded border-white py-3 px-4 text-left">
            Enter your email
          </button>
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="font-medium text-[20px] leading-7">Support</h1>
          <p className="leading-6">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="leading-6">exclusive@gmail.com</p>
          <p className="leading-6">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="font-medium text-[20px] leading-7">Account</h1>
          <p className="leading-6">My Account</p>
          <p className="leading-6">Login / Register</p>
          <p className="leading-6">Cart</p>
          <p className="leading-6">Wishlist</p>
          <p className="leading-6">Shop</p>
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="font-medium text-[20px] leading-7">Quick Link</h1>
          <p className="leading-6">Privacy Policy</p>
          <p className="leading-6">Terms Of Use</p>
          <p className="leading-6">FAQ</p>
          <p className="leading-6">Contact</p>
        </div>

        <div className="flex flex-col space-y-5">
          <h1 className="font-medium text-[20px] leading-7">Download App</h1>
          <p className="leading-6">Save $3 with App New User Only</p>
          <Image
            src={"/images/Frame 719.png"}
            alt={"frame"}
            width={198}
            height={84}
          ></Image>
          <span className="flex space-x-6 mt-4">
            <FaFacebookF size="20"></FaFacebookF>
            <FaTwitter size="20"></FaTwitter>
            <FaInstagram size="20"></FaInstagram>
            <FaLinkedinIn size="20"></FaLinkedinIn>
          </span>
        </div>
      </div>
    </div>
  );
}
