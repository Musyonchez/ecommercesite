import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import facebook from "../../public/facebook-logo.svg";
import instagram from "../../public/instagram-logo.svg";
import pintrest from "../../public/pintrest-logo.svg";
import twitter from "../../public/twitter-logo.svg";

const Navbar = () => {
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);

  const toggleMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  };

  const closeMenu = () => {
    setSideMenuVisible(false);
  };

  return (
    <>
      <div className=" flex justify-between items-center pt-3 pl-3 pr-2 pb-1 bg-white fixed w-full">
        <div className=" w-40">
          <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
        <div className=" hidden md:flex">
          <ul className=" flex space-x-5 text-xl">
            <li>New now</li>
            <li>Clothing</li>
            <li>Accesories</li>
          </ul>
        </div>
        <div className=" flex">
          <ul className=" flex items-center space-x-2">
            <li className=" hidden sm:flex">Search</li>
            <li className=" hidden sm:flex">Sign in</li>
            <li className=" hidden sm:flex">
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
            <li className="" onClick={toggleMenu}>
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

      <div
        className={`fixed top-0 left-0 w-full sm:w-1/2 h-screen bg-white z-50 overflow-x-hidden overflow-y-auto scrollbar ${
          isSideMenuVisible ? "block" : "hidden"
        }`}
      >
        <div className="p-10 text-xl font-bold">
          <div className="flex justify-between mb-8">
            <div className="w-40">
              <Image
                src={logo}
                alt="Logo"
                layout="responsive"
                width={200}
                height={200}
              />
            </div>
            <div>
              <button onClick={closeMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 font-extrabold"
                  >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" space-y-6">
            <div>
              <ul className=" space-y-4">
                <li>Home</li>
                <li>New now</li>
                <li>Essentials prices</li>
                <li>Clothing</li>
                <li>Accesories</li>
                <li>Collections</li>
              </ul>
            </div>
            <div>
              <ul className=" space-y-4">
                <li>Help</li>
                <li>Shops now</li>
                <li>Company</li>
                <li>Work for Mango</li>
                <li>Mango Outel</li>
              </ul>
            </div>
            <div className="flex space-x-5">
              <Image src={facebook} alt="Facebook Logo" className="w-8 h-8" />
              <Image src={twitter} alt="twitter Logo" className="w-8 h-8" />
              <Image src={instagram} alt="instagram Logo" className="w-8 h-8" />
              <Image src={pintrest} alt="pintrest Logo" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
