import React from "react";
import cottonshirt1 from "../../../../public/cottonshirt1.jpeg";

interface ProductProps {
  imageUrl: string;
  title: string;
  reference: string;
  price: number;
}

const Suit_product: React.FC<ProductProps> = ({
  imageUrl,
  title,
  reference,
  price,
}) => {
  const containerStyle1 = {
    backgroundImage: `url(${cottonshirt1.src})`, // Use template literals for dynamic image paths
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col h-full w-1/6">
        <div style={containerStyle1} className=" flex-1"></div>
        <div style={containerStyle1} className=" flex-1"></div>
        <div style={containerStyle1} className=" flex-1"></div>
      </div>
      <div className="flex h-full w-5/6 text-white bg-gray-800">
        <div style={containerStyle1} className=" flex-1"></div>

        <div className="flex flex-1 flex-col h-full justify-evenly px-5">
          <p className="text-xl font-bold text-blue-700">SHIRT</p>
          <p className="text-4xl font-extrabold">{title}</p>
          <p className="text-gray-300">{reference}</p>

          <div className=" border-2 flex w-fit p-1 rounded-full">
            <button className=" bg-black h-5 w-5 rounded-full"></button>
          </div>

          <p className="text-3xl font-extrabold">${price}</p>





          

          <div className=" flex space-x-2">
            <div className=" border-2 flex w-fit p-1 border-gray-600 rounded-full">
              <button className=" bg-gray-800 h-8 w-8 rounded-full">36</button>
            </div>
            <div className=" border-2 flex w-fit p-1 border-gray-600 rounded-full">
              <button className=" bg-gray-800 h-8 w-8 rounded-full">38</button>
            </div>

            <div className=" border-2 flex w-fit p-1 border-gray-600 rounded-full">
              <button className=" bg-gray-800 h-8 w-8 rounded-full">40</button>
            </div>
            <div className=" border-2 flex w-fit p-1 border-gray-600 rounded-full">
              <button className=" bg-gray-800 h-8 w-8 rounded-full">42</button>
            </div>
            <div className=" border-2 flex w-fit p-1 border-gray-600 rounded-full">
              <button className=" bg-gray-800 h-8 w-8 rounded-full">44</button>
            </div>
            <div className=" border-2 flex w-fit p-1 border-gray-600 rounded-full">
              <button className=" bg-gray-800 h-8 w-8 rounded-full">46</button>
            </div>
          </div>
          <div className=" w-full flex justify-center">
            <button className=" text-md font-bold border-2 border-black px-12 py-1 w-11/12 rounded-full">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suit_product;
