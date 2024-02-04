import React from "react";
import Image from "next/image";
import cottonshirt1 from "../../../../public/cottonshirt1.jpeg";
import cottonshirt2 from "../../../../public/cottonshirt2.jpeg";
import cottonshirt3 from "../../../../public/cottonshirt3.jpeg";

const Cotton_Shirt = () => {
  const containerStyle1 = {
    backgroundImage: `url(${cottonshirt1.src})`, // Use template literals for dynamic image paths
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const containerStyle2 = {
    backgroundImage: `url(${cottonshirt3.src})`, // Use template literals for dynamic image paths
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className=" flex min-h-96">
      <div className=" flex w-2/3">
        <div style={containerStyle1} className=" flex-1"></div>
        <div className=" flex flex-1 flex-col justify-around px-5">
          <p className=" text-xl font-bold text-blue-700">SHIRT</p>
          <p className=" text-4xl font-extrabold">
            Slim-fit cotton shirt pictures
          </p>
          <p className=" text-gray-300">REF.63000040-CLAUDE</p>
          <div className=" flex">
            <div className=" border-2 flex w-fit p-1 rounded-full">
              <button className=" bg-blue-800 h-5 w-5 rounded-full"></button>
            </div>
            <div className=" border-2 flex w-fit p-1 rounded-full">
              <button className=" bg-stone-300 h-5 w-5 rounded-full"></button>
            </div>
          </div>
          <p className=" text-3xl font-extrabold">$29.99</p>
          <div className=" flex">
            <div className="flex w-fit p-1 rounded-full">
              <button className=" bg-stone-300 h-8 w-8 rounded-full">S</button>
            </div>
            <div className="flex w-fit p-1 rounded-full">
              <button className=" bg-stone-300 h-8 w-8 rounded-full">M</button>
            </div>
            <div className="flex w-fit p-1 rounded-full">
              <button className=" bg-stone-300 h-8 w-8 rounded-full">L</button>
            </div>
            <div className="flex w-fit p-1 rounded-full">
              <button className=" bg-stone-300 h-8 w-8 rounded-full">XL</button>
            </div>
          </div>
          <div className=" w-full flex justify-center">
            <button className=" text-md font-bold border-2 border-black px-12 py-1 w-11/12 rounded-full">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>

      <div style={containerStyle2} className=" flex flex-col w-1/3">
        <div className=" flex flex-col h-full justify-end items-center pb-3">
          <p className=" text-2xl font-extrabold">Slim-fit cotton shirt</p>
          <p className=" text-3xl font-extrabold">$29.99</p>
          <button className=" text-md font-bold border-2 border-black px-12 py-1 w-11/12 rounded-full">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cotton_Shirt;
