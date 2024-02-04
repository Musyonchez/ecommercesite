import React from "react";
import Column_product from "./Column_product";

const Column = () => {
  const shirtsData = [
    {
      name: "New Shirt 5",
      description: "Stay on trend with our fashionable shirt designs",
      imageUrl: "https://example.com/image5.jpg",
      price: 31.99,
      title: "BAG",
    },
    {
      name: "New Shirt 6",
      description: "Classic shirts that never go out of style",
      imageUrl: "https://example.com/image6.jpg",
      price: 37.99,
      title: "SHOES",

    },
    {
      name: "New Shirt 7",
      description: "Effortlessly chic shirts for any occasion",
      imageUrl: "https://example.com/image7.jpg",
      price: 32.99,
      title: "BELTS",
    },
  ];

  return (
    <div className=" flex flex-col w-1/4 justify-center items-center space-y-5">
        {shirtsData.map((shirt, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <Column_product
              imageUrl={shirt.imageUrl}
              price={shirt.price}
              name={shirt.name}
              description={shirt.description}
              title={shirt.title}
            />
          </div>
        ))}
    </div>
  );
};

export default Column;
