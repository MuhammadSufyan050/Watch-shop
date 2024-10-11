import Image from "next/image";
import React from "react";
import profile from "../../../public/pic-1.png";
import pic2 from "../../../public/pic-2.jpg";
import pic3 from "../../../public/pic-3.jpg";
import pic4 from "../../../public/pic-4.webp";
import pic5 from "../../../public/pic-5.png";
import pic6 from "../../../public/pic-6.jpg";

const Card = () => {
  return (
    <div className="text-center text-2xl font-medium">MENS WATCHES
    <div className="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8 mx-4">
      <div className="box relative p-2.5 flex flex-col justify-center rounded-lg shadow-lg">
        <Image
          src={profile}
          alt="product"
          className="w-full h-[350px] object-contain object-center p-5 bg-gray-100 rounded-lg"
        />
        <h3 className="text-base font-semibold uppercase mt-2 mb-2">
          Sveston Aspire SV-11306
        </h3>
        <div className="content flex items-center justify-around">
          <span className="px-4 py-1 text-white bg-black rounded-md font-medium">
            $99.99
          </span>
          <a
            href="#"
            className="px-4 py-1 text-gray-800 border-2 border-black rounded-md uppercase transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>

      <div className="box relative p-2.5 flex flex-col justify-center rounded-lg shadow-lg">
        <Image
          src={pic2}
          alt="product"
          className="w-full h-[350px] object-cover object-center p-5 bg-gray-100 rounded-lg"
        />
        <h3 className="text-base font-semibold uppercase mt-2 mb-2">
        Fenix Series
        </h3>
        <div className="content flex items-center justify-around">
          <span className="px-4 py-1 text-white bg-black rounded-md font-medium">
            $89.99
          </span>
          <a
            href="#"
            className="px-4 py-1 text-gray-800 border-2 border-black rounded-md uppercase transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>

      <div className="box relative p-2.5 flex flex-col justify-center rounded-lg shadow-lg">
        <Image
          src={pic3}
          alt="product"
          className="w-full h-[350px] object-cover object-center p-5 bg-gray-100 rounded-lg"
        />
        <h3 className="text-base font-semibold uppercase mt-2 mb-2">
        Apple Watch Ultra
        </h3>
        <div className="content flex items-center justify-around">
          <span className="px-4 py-1 text-white bg-black rounded-md font-medium">
            $79.99
          </span>
          <a
            href="#"
            className="px-4 py-1 text-gray-800 border-2 border-black rounded-md uppercase transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>
      <div className="box relative p-2.5 flex flex-col justify-center rounded-lg shadow-lg">
        <Image
          src={pic4}
          alt="product"
          className="w-full h-[350px] object-cover object-center p-5 bg-gray-100 rounded-lg"
        />
        <h3 className="text-base font-semibold uppercase mt-2 mb-2">
        Galaxy Watch Series
        </h3>
        <div className="content flex items-center justify-around">
          <span className="px-4 py-1 text-white bg-black rounded-md font-medium">
            $89.99
          </span>
          <a
            href="#"
            className="px-4 py-1 text-gray-800 border-2 border-black rounded-md uppercase transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>
      <div className="box relative p-2.5 flex flex-col justify-center rounded-lg shadow-lg">
        <Image
          src={pic5}
          alt="product"
          className="w-full h-[350px] object-contain object-center p-5 bg-gray-100 rounded-lg"
        />
        <h3 className="text-base font-semibold uppercase mt-2 mb-2">
          Sveston Aspire SV-11307
        </h3>
        <div className="content flex items-center justify-around">
          <span className="px-4 py-1 text-white bg-black rounded-md font-medium">
            $89.99
          </span>
          <a
            href="#"
            className="px-4 py-1 text-gray-800 border-2 border-black rounded-md uppercase transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>
      <div className="box relative p-2.5 flex flex-col justify-center rounded-lg shadow-lg">
        <Image
          src={pic6}
          alt="product"
          className="w-full h-[350px] object-cover object-center p-5 bg-gray-100 rounded-lg"
        />
        <h3 className="text-base font-semibold uppercase mt-2 mb-2">
        Classic Sheffield
        </h3>
        <div className="content flex items-center justify-around">
          <span className="px-4 py-1 text-white bg-black rounded-md font-medium">
            $89.99
          </span>
          <a
            href="#"
            className="px-4 py-1 text-gray-800 border-2 border-black rounded-md uppercase transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Buy Now
          </a>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Card;

