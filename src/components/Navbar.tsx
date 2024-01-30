import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center pt-3 pl-3 pr-2">
      <div className=" w-40">
        <Image
          src={logo}
          alt="Logo"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <div>
        {/* <ul className=" flex space-x-2">
            <li>New now</li>
            <li>Collections</li>
            <li>Essential prices</li>
            <li>Clothing</li>
            <li>Accesories</li>
        </ul> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 font-extrabold"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
