import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="w-full h-[164px] bg-white flex justify-center items-center gap-[643px]">
      <Link to="/" className="text-black text-3xl font-medium leading-[48px]">
        FreshHarvest
      </Link>
      <div className="flex justify-end items-center gap-12">
        <div className="flex justify-end items-center gap-12">
          <Link to="/" className="text-black text-xl font-medium leading-[30px]">
            Home
          </Link>
          <Link to="/about" className="text-black text-xl font-medium leading-[30px]">
            About Us
          </Link>
          <Link to="/shop" className="text-black text-xl font-medium leading-[30px]">
            Shop
          </Link>
          <Link
            to="/login"
            className="px-6 py-3.5 bg-black shadow-sm rounded-lg text-white text-base font-medium leading-6"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}