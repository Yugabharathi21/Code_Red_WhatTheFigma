import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-4 md:py-6 lg:py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-black text-2xl md:text-3xl font-medium leading-[48px] font-inter">
            FreshHarvest
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            <Link 
              to="/" 
              className={`text-xl font-medium leading-[30px] font-inter ${
                isActive('/') ? 'text-black' : 'text-black/75 hover:text-black transition-colors'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-xl font-medium leading-[30px] font-inter ${
                isActive('/about') ? 'text-black' : 'text-black/75 hover:text-black transition-colors'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/shop" 
              className={`text-xl font-medium leading-[30px] font-inter ${
                isActive('/shop') ? 'text-black' : 'text-black/75 hover:text-black transition-colors'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/login"
              className="px-6 py-3.5 bg-black hover:bg-black/90 transition-colors shadow-sm rounded-lg text-white text-base font-medium leading-6 font-inter"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col gap-4 mt-4 pb-4`}
        >
          <Link 
            to="/" 
            className={`text-lg font-medium leading-[30px] font-inter ${
              isActive('/') ? 'text-black' : 'text-black/75'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-lg font-medium leading-[30px] font-inter ${
              isActive('/about') ? 'text-black' : 'text-black/75'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/shop" 
            className={`text-lg font-medium leading-[30px] font-inter ${
              isActive('/shop') ? 'text-black' : 'text-black/75'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/login"
            className="px-6 py-3.5 bg-black hover:bg-black/90 transition-colors shadow-sm rounded-lg text-white text-base font-medium leading-6 font-inter w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}