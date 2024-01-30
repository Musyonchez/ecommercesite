import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center pt-3 pl-3 pr-2 pb-1 bg-white">
      <div className=" w-40">
        <Image
          src={logo}
          alt="Logo"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
      <div className=" hidden sm:flex">
        <ul className=" flex space-x-5 text-xl">
          <li>New now</li>
          <li>Clothing</li>
          <li>Accesories</li>
        </ul>
      </div>
      <div className=" flex">
        <ul className=" flex items-center space-x-2">
          <li className=" hidden md:flex">Search</li>
          <li className=" hidden md:flex">Sign in</li>
          <li className=" hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
          <li className=" flex md:hidden">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
