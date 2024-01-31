import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Recover = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" flex flex-col justify-center items-center my-auto">
        <h1 className="text-4xl font-bold mb-3 text-center flex w-full justify-center items-center">Recover Your Password</h1>
        <p className="text-2xl text-center flex w-full justify-center items-center">
  We will send you an e-mail to reset your password:
</p>

        <form className=" flex flex-col">
          <input
            type="text"
            className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
            placeholder="E-mail"
            autoComplete="username"
          />
          <button className="border border-white text-white font-bold bg-black px-5 py-2 rounded-3xl mb-5">
            ENTER
          </button>
        </form>
        <Link href="/login">
          <p className="text-gray-600">I remember now! Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Recover;
