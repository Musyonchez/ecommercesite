import React from "react";
import Image from "next/image";
import logo from "../../public/logowhite.png";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const login = () => {
  return (
    <div className=" flex my-auto min-h-screen">
      <Navbar />
      <div className=" hidden lg:flex flex-col flex-1 px-10 justify-center items-center text-white bg-zinc-900">
        <div className=" w-96 justify-center items-center">
          <Image src={logo} alt="your Logo" width={400} height={400} />
        </div>
        <h2 className=" text-3xl font-bold my-3">at your service</h2>
        <p className=" mb-2 text-xl w-full xl:w-11/12 xl:pl-5">
          From shopping preferences to&nbsp;
          <span className=" font-bold">MANGO</span>&nbsp;activity. manage
          everything you do with&nbsp;<span className=" font-bold">MANGO</span>
          &nbsp;from one account. Registered members get personalized services
          and benefits like:
        </p>
        <p className=" flex items-start justify-start w-full xl:w-11/12 xl:pl-5 text-xl">
          - Express checkout and order tracking.
        </p>
        <p className=" flex items-start justify-start w-full xl:w-11/12 xl:pl-5 text-xl">
          - Tracking and sharing your&nbsp;
          <span className="font-bold">MANGO</span>&nbsp;activity
        </p>
        <button className=" border border-white px-10 py-2 rounded-3xl mt-10">
          JOIN US
        </button>
      </div>

      <div className=" flex flex-1 justify-center items-center text-black">
        <form className=" flex flex-col">
          <h1 className=" text-5xl mb-5 justify-center w-full flex font-extrabold">Login</h1>
          <input
            type="text"
            className="border-0 border-b-2 border-black bg-white w-80 sm:w-96 mb-5 focus:outline-none"
            placeholder="E-mail"
            autoComplete="username"
          />

          <input
            type="password"
            className="border-0 border-b-2 border-black w-80 bg-white sm:w-96 mb-5 focus:outline-none"
            placeholder="Password"
            autoComplete="current-password"
          />

          <div className="flex space-x-3 justify-center w-full">
            <input
              type="checkbox"
              id="keepSignedIn"
              style={{ width: "20px", height: "20px" }}
            />
            <label> Keep me signed in</label>
          </div>

          <button className=" border border-white text-white font-bold bg-black px-5 py-2 mb-5 rounded-3xl mt-5">
            ENTER
          </button>
          <Link href="/recover">
            <p className=" mb-5 justify-center w-full flex font-bold">
              Forgotten yout password?
            </p>
          </Link>
         <Link href="/register"> <p className=" mb-5 justify-center w-full flex">
            Don't have an account? <span>Register</span>
          </p></Link>
        </form>
      </div>
    </div>
  );
};

export default login;
