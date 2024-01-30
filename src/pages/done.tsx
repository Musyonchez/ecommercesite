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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className=" flex flex-col text-center justify-center items-center">
            <p className="mt-2 font-bold">Checkout</p>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className=" flex flex-col text-center justify-center items-center">
            <p className="mt-2 font-bold">Delivery</p>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clip-rule="evenodd"
                />
              </svg>
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
