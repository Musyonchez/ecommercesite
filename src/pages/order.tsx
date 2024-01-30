import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Navbar from "@/components/Navbar";

const order = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className=" mt-14">
        <div className=" flex justify-center items-center">
          <Image src={logo} alt="Logo" width={400} height={400} />
        </div>

        <div className="flex items-center justify-around">
        <div className=" flex flex-col text-center justify-center items-center">
            <p className="mt-2 font-bold">Order</p>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              1
            </div>
          </div>

          <div className=" flex flex-col text-center justify-center items-center">
            <p className="mt-2 font-bold">Checkout</p>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              2
            </div>
          </div>

          <div className=" flex flex-col text-center justify-center items-center">
            <p className="mt-2 font-bold">Delivery</p>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              3
            </div>
          </div>

          <div className=" flex flex-col text-center justify-center items-center">
            <p className="mt-2 font-bold">Done</p>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              4
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default order;
