import React from "react";
import Image from "next/image";
import cottonshirt1 from "../../../../public/cottonshirt1.jpeg";
import cottonshirt2 from "../../../../public/cottonshirt2.jpeg";
import cottonshirt3 from "../../../../public/cottonshirt3.jpeg";

const Upper = () => {
  const containerStyle1 = {
    backgroundImage: `url(${cottonshirt1.src})`, // Use template literals for dynamic image paths
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className=" flex min-h-96">
      <div style={containerStyle1} className=" flex-1"></div>
      <div className=" flex flex-col flex-1 justify-around">
        <p className=" text-xl text-blue-700 font-bold">OUTFIT</p>
        <p className=" text-5xl font-extrabold">Cear set of summer</p>
        <div className=" flex flex-col space-y-5 mt-1">
          <div className=" flex justify-between items-center px-8">
            <p className=" font-bold w-1/3 text-xl">Side posckets cardigan</p>
            <select
              id="size"
              name="size"
              className="block px-7 py-2 border-2 border-black w-1/6"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <div className=" flex flex-1 justify-center items-center">
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-orange-300 h-5 w-5 rounded-full"></button>
              </div>
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-gray-100 h-5 w-5 rounded-full"></button>
              </div>
            </div>
            <p className=" text-xl font-extrabold">$29.99</p>
          </div>
          <div className=" flex justify-between items-center px-8">
            <p className=" font-bold w-1/3 text-xl">Mao collar shirt</p>
            <select
              id="size"
              name="size"
              className="block px-7 py-2 border-2 border-black w-1/6"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <div className=" flex flex-1 justify-center items-center">
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-gray-100 h-5 w-5 rounded-full"></button>
              </div>
            </div>
            <p className=" text-xl font-extrabold">$29.99</p>
          </div>
          <div className=" flex justify-between items-center px-8">
            <p className=" font-bold w-1/3 text-xl">Slim-fit chinos</p>
            <select
              id="size"
              name="size"
              className="block px-7 py-2 border-2 border-black w-1/6"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <div className=" flex flex-1 justify-center items-center">
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-yellow-600 h-5 w-5 rounded-full"></button>
              </div>
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-gray-100 h-5 w-5 rounded-full"></button>
              </div>
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-blue-800 h-5 w-5 rounded-full"></button>
              </div>
            </div>
            <p className=" text-xl font-extrabold">$29.99</p>
          </div>
          <div className=" flex justify-between items-center px-8">
            <p className=" font-bold w-1/3 text-xl">Leather espadrilles</p>
            <select
              id="size"
              name="size"
              className="block px-7 py-2 border-2 border-black w-1/6"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <div className=" flex flex-1 justify-center items-center">
              <div className=" border-2 flex w-fit p-1 rounded-full">
                <button className=" bg-orange-700 h-5 w-5 rounded-full"></button>
              </div>
            </div>
            <p className=" text-xl font-extrabold">$29.99</p>
          </div>
        </div>
        <div className=" flex">
          <div className=" w-full flex justify-center items-end flex-1">
            <button className=" text-md font-bold border-2 bg-black text-white border-black px-12 py-1 w-3/4 rounded-full">
              ADD TO BAG
            </button>
          </div>
          <div className=" flex flex-col flex-1 justify-center w-full items-end space-y-5">
            <hr className=" bg-black h-1 w-28" />
            <p className=" text-3xl font-extrabold">$175.96</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
