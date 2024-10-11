"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]); 

  return (
    <nav className='bg-customBlack'>
      <div className='container mx-auto flex items-center justify-between py-4 px-4'>
        
        <div className='lg:hidden'>
          <CiMenuBurger 
            className='text-white text-3xl cursor-pointer' 
            onClick={toggleMenu} 
          />
        </div>

        <div className={`lg:flex hidden w-fit gap-10 mx-auto font-normal py-2 text-white`}>
          <Link href="/">Home</Link>
          <Link href="/product">New Arrivals</Link>
          <Link href="/smart">Smartwatches</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/support">Support</Link>
        </div>


        {isMenuOpen && (
          <div className='lg:hidden absolute top-16 left-0 w-full bg-customBlack'>
            <div className="flex flex-col items-center gap-6 py-4 text-white">
              <Link href="/">Home</Link>
              <Link href="/product">New Arrivals</Link>
              <Link href="/smart">Smartwatches</Link>
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/support">Support</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
