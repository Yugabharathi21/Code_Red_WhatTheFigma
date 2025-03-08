import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Overlay Nav */}
      <div className="relative w-full h-[720px]">
        <div className="absolute inset-0 bg-[#F7F7F7] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80)' }}>
          <div className="absolute inset-0 bg-black/24"></div>
        </div>

        {/* Special Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 h-[164px] flex justify-between items-center">
            <Link to="/" className="text-white text-3xl font-medium leading-[48px] font-inter">
              FreshHarvest
            </Link>
            <div className="hidden lg:flex items-center gap-12">
              <Link to="/" className="text-white text-xl font-medium leading-[30px] font-inter hover:text-white/90 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white text-xl font-medium leading-[30px] font-inter hover:text-white/90 transition-colors">
                About Us
              </Link>
              <Link to="/product/1" className="text-white text-xl font-medium leading-[30px] font-inter hover:text-white/90 transition-colors">
                Learn More
              </Link>
              <Link to="/login" className="px-6 py-3.5 border-2 border-white text-white text-base font-medium leading-6 font-inter rounded-lg shadow-sm hover:bg-white/10 transition-colors">
                Login
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-[164px] left-0 right-0 ${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col gap-4 p-4 bg-black/90`}
          >
            <Link 
              to="/" 
              className="text-lg font-medium leading-[30px] font-inter text-white hover:text-white/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium leading-[30px] font-inter text-white hover:text-white/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/product/1" 
              className="text-lg font-medium leading-[30px] font-inter text-white hover:text-white/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn More
            </Link>
            <Link
              to="/login"
              className="px-6 py-3.5 border-2 border-white text-white text-base font-medium leading-6 font-inter rounded-lg shadow-sm hover:bg-white/10 transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative max-w-[844px] mx-auto px-4 pt-[120px]">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight">Shop Fresh & Organic</h1>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-relaxed">Explore our selection of premium fresh produce and organic food</p>
            </div>
            <Link to="/shop" className="inline-flex px-8 py-5 bg-black text-white text-2xl font-medium rounded-lg shadow hover:bg-black/90 transition-colors">
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Seasonal Picks Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">Seasonal Picks</h2>
            <p className="text-xl md:text-2xl text-[#828282]">A subheading for this section, as long or as short as you like</p>
            <Link 
              to="/products/seasonal-picks" 
              className="w-fit px-6 py-3 bg-[#E6E6E6] text-black text-2xl font-medium rounded-lg shadow hover:bg-[#d9d9d9] transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="aspect-[1.56/1] w-full">
            <img 
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&h=400" 
              alt="Fresh seasonal fruits and vegetables arranged on a wooden table" 
              className="w-full h-full object-cover rounded-lg bg-[#F7F7F7]" 
            />
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">Best Sellers</h2>
            <p className="text-xl md:text-2xl text-[#828282]">A subheading for this section, as long or as short as you like</p>
            <Link 
              to="/products/best-sellers" 
              className="w-fit px-6 py-3 bg-[#E6E6E6] text-black text-2xl font-medium rounded-lg shadow hover:bg-[#d9d9d9] transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="md:order-1 aspect-[1.56/1] w-full">
            <img 
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=625&h=400" 
              alt="Collection of our best-selling organic vegetables" 
              className="w-full h-full object-cover rounded-lg bg-[#F7F7F7]" 
            />
          </div>
        </div>
      </div>

      {/* Fresh & Organic Selection */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12">Fresh & Organic Selection</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <Link to="/products/featured-pears" className="group">
                <img 
                  src="https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&h=735" 
                  alt="Fresh organic pears, our featured product" 
                  className="w-full aspect-square object-cover rounded-lg bg-[#F7F7F7] transition-transform group-hover:scale-[1.02]" 
                />
                <div className="flex flex-col gap-1 mt-6">
                  <h3 className="text-2xl font-medium text-black">Featured product</h3>
                  <p className="text-lg md:text-xl text-[#828282]">Handpicked premium pears, rich in flavor and nutrients</p>
                  <p className="text-xl font-medium text-black">$10.99</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <Link to="/products/fresh-fruits" className="group">
              <div className="flex flex-col gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=515&h=283" 
                  alt="Fresh assorted fruits including apples, oranges, and berries" 
                  className="w-full aspect-[1.82/1] object-cover rounded-lg bg-[#F7F7F7] transition-transform group-hover:scale-[1.02]" 
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-medium text-black">Fruits</h3>
                  <p className="text-lg md:text-xl text-[#828282]">A delicate blend of fresh fruits for a balanced taste</p>
                  <p className="text-xl font-medium text-black">$10.99</p>
                </div>
              </div>
            </Link>
            <Link to="/products/organic-mushrooms" className="group">
              <div className="flex flex-col gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1504545102780-26774c1bb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=515&h=283" 
                  alt="Fresh organic mushrooms variety" 
                  className="w-full aspect-[1.82/1] object-cover rounded-lg bg-[#F7F7F7] transition-transform group-hover:scale-[1.02]" 
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-medium text-black">Mushrooms</h3>
                  <p className="text-lg md:text-xl text-[#828282]">Organic mushrooms, perfect for gourmet dishes</p>
                  <p className="text-xl font-medium text-black">$10.99</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Shop With Us Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12">Why Shop With Us?</h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#828282]">Sustainability First</h3>
              <p className="text-xl text-[#828282]">Our products are ethically sourced and environmentally friendly.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#828282]">Customer Satisfaction</h3>
              <p className="text-xl text-[#828282]">We prioritize customer experience with reliable service and fresh produce</p>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#828282]">Quality Assurance</h3>
              <p className="text-xl text-[#828282]">Every product goes through a rigorous quality check before reaching you.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-[#828282]">Fresh, Every Day</h3>
              <p className="text-xl text-[#828282]">We ensure daily restocking for the best and freshest selection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}