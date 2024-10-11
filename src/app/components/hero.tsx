import React from 'react';
import profile from "../../../public/home.webp";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4'>

      <div className='text-center md:text-left md:w-1/2'>
        <h1 className='text-4xl font-bold mb-6 font-serif'>
          Modern Watches For Everyone
        </h1>
        <p className='text-black w-full md:w-4/5 lg:w-3/4 mx-auto md:mx-0 font-bold text-justify leading-relaxed'>
          Discover a stunning collection of modern timeless watches that effortlessly blend style and functionality. Whether your drawn to sleek minimalist designs or bold, contemporary styles our range offers something for every occasion and personal taste. Each watch is crafted with precision and care ensuring not only a beautiful accessory but also a reliable timepiece you can count on. Perfect for both casual and formal settings our watches add a touch of elegance and sophistication to any outfit making them the ideal choice for those who value both aesthetics and performance.
        </p>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0'>
        <Image 
          src={profile} 
          alt='hero' 
          className='rounded-lg'
          width={400}
          height={400} 
          priority={true} 
        />
      </div>
      
    </div>
    
  );
};

export default Hero;
