import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Skip rendering Navigation on shop page
  if (location.pathname === '/shop') {
    return null;
  }

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/shop', label: 'Shop' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 h-[80px] md:h-[100px] lg:h-[120px] flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-black text-2xl sm:text-3xl font-medium leading-[48px] font-inter">
            FreshHarvest
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {menuItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path} 
                className={`text-lg xl:text-xl font-medium leading-[30px] font-inter ${
                  location.pathname === item.path ? 'text-black' : 'text-black/75 hover:text-black transition-colors'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login"
              className="px-6 py-3.5 bg-black hover:bg-black/90 transition-colors shadow-sm rounded-lg text-white text-base font-medium leading-6 font-inter"
            >
              Login
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 z-50"
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-6 h-6 flex flex-col justify-center items-center"
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.span
              className="w-6 h-0.5 bg-black block mb-1.5 origin-center"
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-black block mb-1.5"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-black block origin-center"
              variants={{
                open: { rotate: -45, y: -6 },
                closed: { rotate: 0, y: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-40 lg:hidden flex flex-col"
        >
          <div className="flex flex-col gap-4 p-6 mt-[80px] md:mt-[100px]">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className={`text-lg font-medium leading-[30px] font-inter block py-2 ${
                    location.pathname === item.path ? 'text-black' : 'text-black/75'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Link
                to="/login"
                className="px-6 py-3.5 bg-black hover:bg-black/90 transition-colors shadow-sm rounded-lg text-white text-base font-medium leading-6 font-inter w-full text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}