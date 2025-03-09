import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Overlay Nav */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[720px]"
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[#F7F7F7] bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80)' }}
        >
          <div className="absolute inset-0 bg-black/24"></div>
        </motion.div>

        {/* Special Navigation */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-0 left-0 right-0 z-10"
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 h-[164px] flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="text-white text-3xl font-medium leading-[48px] font-inter">
                FreshHarvest
              </Link>
            </motion.div>
            <div className="hidden lg:flex items-center gap-12">
              {['/', '/about', '/product/1'].map((path, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link 
                    to={path} 
                    className="text-white text-xl font-medium leading-[30px] font-inter hover:text-white/90 transition-colors"
                  >
                    {path === '/' ? 'Home' : path === '/about' ? 'About Us' : 'Learn More'}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/login" className="px-6 py-3.5 border-2 border-white text-white text-base font-medium leading-6 font-inter rounded-lg shadow-sm hover:bg-white/10 transition-colors">
                  Login
                </Link>
              </motion.div>
            </div>
            {/* Mobile Menu Button */}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-[164px] left-0 right-0 bg-black/90 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {['/', '/about', '/product/1', '/login'].map((path, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link 
                    to={path} 
                    className={`text-lg font-medium leading-[30px] font-inter text-white hover:text-white/90 transition-colors ${
                      path === '/login' ? 'px-6 py-3.5 border-2 border-white rounded-lg shadow-sm hover:bg-white/10 w-full text-center' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {path === '/' ? 'Home' : path === '/about' ? 'About Us' : path === '/product/1' ? 'Learn More' : 'Login'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.nav>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-[844px] mx-auto px-4 pt-[120px]"
        >
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-4 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight"
              >
                Shop Fresh & Organic
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-relaxed"
              >
                Explore our selection of premium fresh produce and organic food
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/shop" className="inline-flex px-8 py-5 bg-black text-white text-2xl font-medium rounded-lg shadow hover:bg-black/90 transition-colors">
                Shop
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Seasonal Picks Section */}
      <SectionTransition direction="left" className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold text-black"
            >
              Seasonal Picks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#828282]"
            >
              A subheading for this section, as long or as short as you like
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/products/seasonal-picks" 
                className="w-fit px-6 py-3 bg-[#E6E6E6] text-black text-2xl font-medium rounded-lg shadow hover:bg-[#d9d9d9] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="aspect-[1.56/1] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&h=400" 
              alt="Fresh seasonal fruits and vegetables arranged on a wooden table" 
              className="w-full h-full object-cover rounded-lg bg-[#F7F7F7]" 
            />
          </motion.div>
        </div>
      </SectionTransition>

      {/* Best Sellers Section */}
      <SectionTransition direction="right" className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold text-black"
            >
              Best Sellers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#828282]"
            >
              A subheading for this section, as long or as short as you like
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/products/best-sellers" 
                className="w-fit px-6 py-3 bg-[#E6E6E6] text-black text-2xl font-medium rounded-lg shadow hover:bg-[#d9d9d9] transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="md:order-1 aspect-[1.56/1] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=625&h=400" 
              alt="Collection of our best-selling organic vegetables" 
              className="w-full h-full object-cover rounded-lg bg-[#F7F7F7]" 
            />
          </motion.div>
        </div>
      </SectionTransition>

      {/* Fresh & Organic Selection */}
      <SectionTransition direction="up" className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12"
        >
          Fresh & Organic Selection
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col gap-6">
              <Link to="/products/featured-pears" className="group">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&h=735" 
                  alt="Fresh organic pears, our featured product" 
                  className="w-full aspect-square object-cover rounded-lg bg-[#F7F7F7]" 
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex flex-col gap-1 mt-6"
                >
                  <h3 className="text-2xl font-medium text-black">Featured product</h3>
                  <p className="text-lg md:text-xl text-[#828282]">Handpicked premium pears, rich in flavor and nutrients</p>
                  <p className="text-xl font-medium text-black">$10.99</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {[
              {
                path: "/products/fresh-fruits",
                image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b",
                title: "Fruits",
                description: "A delicate blend of fresh fruits for a balanced taste"
              },
              {
                path: "/products/organic-mushrooms",
                image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073",
                title: "Mushrooms",
                description: "Organic mushrooms, perfect for gourmet dishes"
              }
            ].map((item, index) => (
              <Link key={item.path} to={item.path} className="group">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                  className="flex flex-col gap-6"
                >
                  <motion.img 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src={`${item.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=515&h=283`}
                    alt={item.title}
                    className="w-full aspect-[1.82/1] object-cover rounded-lg bg-[#F7F7F7]" 
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
                    className="flex flex-col gap-1"
                  >
                    <h3 className="text-2xl font-medium text-black">{item.title}</h3>
                    <p className="text-lg md:text-xl text-[#828282]">{item.description}</p>
                    <p className="text-xl font-medium text-black">$10.99</p>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </SectionTransition>

      {/* Why Shop With Us Section */}
      <SectionTransition direction="up" className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-16 md:py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-12"
        >
          Why Shop With Us?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              ),
              title: "Sustainability First",
              description: "Our products are ethically sourced and environmentally friendly."
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              ),
              title: "Customer Satisfaction",
              description: "We prioritize customer experience with reliable service and fresh produce"
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              ),
              title: "Quality Assurance",
              description: "Every product goes through a rigorous quality check before reaching you."
            },
            {
              icon: (
                <svg className="w-6 h-6 text-[#454545]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              ),
              title: "Fresh, Every Day",
              description: "We ensure daily restocking for the best and freshest selection."
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
              className="flex flex-col gap-2"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                className="w-8 h-8 flex items-center justify-center"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl text-[#828282]">{item.title}</h3>
              <p className="text-xl text-[#828282]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionTransition>
    </div>
  );
}