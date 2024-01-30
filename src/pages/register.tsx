import Navbar from "@/components/Navbar";
import React from "react";

const register = () => {
  return (
 <div className=" flex flex-col min-h-screen">
    <Navbar/>
       <div className=" flex flex-col justify-center items-center my-auto mt-16">
      <h1 className=" text-4xl font-bold">Register</h1>
      <h2 className=" text-2xl text-center ">
        Create your account and be among the first to find out about our
        promotions and new lookbooks.
      </h2>
      <form className=" flex flex-col">
        <input
          type="text"
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          placeholder="Name"
          autoComplete="name"
        />
        <input
          type="text"
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          placeholder="Surname"
          autoComplete="name"
        />
        <input
          type="email"
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          type="password"
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          placeholder="Password"
          autoComplete="pasword"
        />
        <input
          type="tel"
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          placeholder="Mobile"
          autoComplete="tel"
        />
        <select
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          autoComplete="country"
        >
          {/* <option value="" disabled selected>Select a country</option> */}
          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
          <option value="country3">Country 3</option>
        </select>

        <input
          type="text"
          className="border-0 border-b-2 border-black w-80 sm:w-96 my-5 focus:outline-none"
          placeholder="Postcode"
          autoComplete="address"
        />
        <button className="border border-white text-white font-bold bg-black px-5 py-2 rounded-3xl mb-5">
          ENTER
        </button>
      </form>
    </div>
 </div>
  );
};

export default register;
