import React, { useRef } from "react";
import Product from "../Shirts/Product";

const Shirts = () => {
  const shirtsData = [
    {
      name: "New Shirt 1",
      description: "Check our new arrivals for essentials with a trendy twist",
      imageUrl: "https://example.com/image1.jpg",
      price: 29.99,
    },
    {
      name: "New Shirt 2",
      description:
        "Discover the latest trends in comfortable and stylish shirts",
      imageUrl: "https://example.com/image2.jpg",
      price: 34.99,
    },
    {
      name: "New Shirt 3",
      description: "Elevate your style with our premium shirt collection",
      imageUrl: "https://example.com/image3.jpg",
      price: 39.99,
    },
    {
      name: "New Shirt 4",
      description: "Casual and cool shirts for a laid-back look",
      imageUrl: "https://example.com/image4.jpg",
      price: 27.99,
    },
    {
      name: "New Shirt 5",
      description: "Stay on trend with our fashionable shirt designs",
      imageUrl: "https://example.com/image5.jpg",
      price: 31.99,
    },
    {
      name: "New Shirt 6",
      description: "Classic shirts that never go out of style",
      imageUrl: "https://example.com/image6.jpg",
      price: 37.99,
    },
    {
      name: "New Shirt 7",
      description: "Effortlessly chic shirts for any occasion",
      imageUrl: "https://example.com/image7.jpg",
      price: 32.99,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      (containerRef.current as HTMLDivElement).scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      (containerRef.current as HTMLDivElement).scrollLeft += 250;
    }
  };

  return (
    <div className="relative flex border-2 overflow-hidden">
      <button
        className="z-30 justify-center items-center flex absolute top-1/2 transform -translate-y-1/2 left-0"
        onClick={scrollLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="flex-col hidden sm:flex max-w-56 bg-zinc-900 min-h-80 justify-around text-white px-5 py-5 space-y-5">
        <p className="text-6xl">New Shirts</p>
        <p className=" text-2xl">Check our new arrivals for essentials with a trendy twist</p>
      </div>
      <div
        ref={containerRef}
        className="flex flex-row max-w-full sm:px-5 py-5 space-x-5 overflow-x-hidden"
      >
              <div className="flex flex-col sm:hidden max-w-56 bg-zinc-900 min-h-80 justify-around text-white px-5 py-5 space-y-5">
        <p className="text-6xl">New Shirts</p>
        <p className=" text-2xl">Check our new arrivals for essentials with a trendy twist</p>
      </div>
        {shirtsData.map((shirt, index) => (
          <div
            key={index}
            className="flex flex-col max-w-56 px-1 py-2 space-y-5"
          >
            <Product imageUrl={shirt.imageUrl} price={shirt.price} name={shirt.name}/>
          </div>
        ))}
      </div>
      <button
        className="z-30 justify-center items-center flex absolute top-1/2 transform -translate-y-1/2 right-0"
        onClick={scrollRight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>{" "}
      </button>
    </div>
  );
};

export default Shirts;
