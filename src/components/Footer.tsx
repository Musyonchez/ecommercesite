import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <div className=" flex flex-col">
      <div className=" w-56 ml-10 pt-5">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      <div className=" flex flex-wrap justify-between px-10 space-y-5">
        <div className=" flex flex-col mr-10">
          <p className=" font-bold mt-5">New now</p>
          <p>Essential prices</p>
          <ul>
            <li>Nautical Collection</li>
            <li>Summer Mood</li>
            <li>Your favorite pair</li>
            <li>Season Events</li>
          </ul>
        </div>
        <div className=" flex flex-col mr-10">
          <p className=" font-extrabold">Clothing</p>
          <ul>
            <li>Shirts</li>
            <li>T-shirts</li>
            <li>Polos</li>
            <li>Knitwear</li>
            <li>Sweatshirts</li>
            <li>Blazer</li>
            <li>Suits</li>
            <li>Jackets</li>
            <li>Trench coats</li>
            <li>Trousers</li>
            <li>Jeans</li>
            <li>Shorts</li>
            <li>Underwear</li>
            <li>Swimwwear</li>
          </ul>
        </div>
        <div className=" flex flex-col flex-wrap justify-between mr-10">
          <div>
            <p className=" font-bold">Clothing</p>
            <ul>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Polos</li>
              <li>Knitwear</li>
              <li>Sweatshirts</li>
              <li>Blazer</li>
            </ul>
          </div>
          <div>
            <p className=" font-bold">Clothing</p>
            <ul>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Polos</li>
              <li>Knitwear</li>
            </ul>
          </div>
        </div>
        <div>
          <label className=" font-bold">Newsletter:</label>
          <input
            type="text"
            className=" border-0 border-b-2 border-black w-80 sm:w-96"
            placeholder="Enter your e-mail"
          />
        </div>
      </div>
      <div className=" flex flex-wrap space-x-5 max-sm:justify-center py-2 text-lg mt-5 bg-neutral-800 text-neutral-600">
        <p className=" ml-5">C 2016 MANGO All rights reserved</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
