import React from 'react';
import { BsSearch } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold text-3xl md:text-4xl text-center sm:text-left text-black mx-3 mb-4 sm:mb-0 font-serif">
          Watches Shop
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[350px] md:w-[50%] lg:w-[40%] relative mx-3 sm:mx-0">
          <input
            className="border border-gray-300 p-3 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search your favourite Watch"
          />
          <BsSearch className="absolute right-0 top-0 mr-4 mt-4 text-gray-500" size={20} />
        </div>

        {/* Icons (Cart and Account) */}
        <div className="flex gap-6 mt-4 sm:mt-0">
          <div className="flex items-center gap-2 text-[28px] text-blue-600 cursor-pointer">
            <IoCartOutline />
          </div>
          <div className="flex items-center gap-2 text-[28px] text-blue-600 cursor-pointer">
            <MdAccountCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
