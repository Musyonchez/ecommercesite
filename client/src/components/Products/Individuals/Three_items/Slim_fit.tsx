import React from "react";
import Image from "next/image";
import cottonshirt1 from "../../../../../public/cottonshirt1.jpeg";
import cottonshirt2 from "../../../../../public/cottonshirt2.jpeg";
import cottonshirt3 from "../../../../../public/cottonshirt3.jpeg";

const Slim_fit = () => {
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



      <div style={containerStyle2} className=" flex flex-col w-1/2">
        <div className=" flex flex-col h-full justify-end items-center pb-3">
          <p className=" text-2xl font-extrabold">Slim-fit cotton shirt</p>
          <p className=" text-3xl font-extrabold">$29.99</p>
          <button className=" text-md font-bold border-2 border-black px-12 py-1 w-11/12 rounded-full">
            ADD TO BAG
          </button>
        </div>
      </div>
  );
};

export default Slim_fit;
