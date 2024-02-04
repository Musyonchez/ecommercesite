import React from "react";
import Product from "./Product";

const Lower = () => {
  const shirtsData = [
    {
      name: "New Shirt 1",
      REF: "REF. 63065533",
      price: 29.99,
    },
    {
      name: "New Shirt 2",
      REF:
        "REF. 63065533",
      price: 34.99,
    },
    {
      name: "New Shirt 3",
      REF: "REF. 63065533",
      price: 39.99,
    },
    {
      name: "New Shirt 4",
      REF: "REF. 63065533",
      price: 27.99,
    },
    ];


  return (
    <div className=" flex flex-col w-screen">
      

      <div
        className="flex flex-row justify-between items-center p-2 w-full"
      >
        {shirtsData.map((shirt, index) => (
          <div key={index} className="flex flex-col">
            <Product
              price={shirt.price}
              name={shirt.name}
              REF={shirt.REF}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lower;
