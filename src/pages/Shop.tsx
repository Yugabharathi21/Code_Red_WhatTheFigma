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
        className="relative w-full h-[500px] sm:h-[600px] md:h-[720px]"
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[#F7F7F7] bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/5232/b103/830b7cc9a42d4746c4deb07caa32d12d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OIRdb5DE8XjZO2rfizbTFMBi7-DvHs98ursTMJyrbW~snygelMeOvhOlF7g69odzRXgrYk~v-deuijittuOkOPpRE5EKtrVx7Y0rwZZfECJjoB5byz3OJVtC33p0orSz7YHIqxd8qm1gpQY0SA0L2bEovAQm~5B0wZqo~pZsLAWhXO~2Osoc4brfFrly2fUAmynZSHDiG8~zQy7nO~ACYfMChJNiqpI32lD9T8XkhJnKA10ZLETE95bDo3ifWGcbUKh6QVM8n1-pjGXnsVXlThF77UuwRnn7YGSQF4m40JIPAsKGFPke5e4wU17exi8YTTdgAQCXgfBj8ohi9ez65Q__)' }}
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
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 h-[100px] sm:h-[120px] md:h-[164px] flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="text-white text-2xl sm:text-3xl font-medium leading-[48px] font-inter">
                FreshHarvest
              </Link>
            </motion.div>
            <div className="hidden lg:flex items-center gap-6 xl:gap-12">
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
                    className="text-white text-lg xl:text-xl font-medium leading-[30px] font-inter hover:text-white/90 transition-colors"
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
                <Link to="/login" className="px-5 sm:px-6 py-3 sm:py-3.5 border-2 border-white text-white text-base font-medium leading-6 font-inter rounded-lg shadow-sm hover:bg-white/10 transition-colors">
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
              className="lg:hidden p-2 text-white z-20"
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
            className="lg:hidden fixed top-0 right-0 left-0 mt-[100px] sm:mt-[120px] md:mt-[164px] bg-black/90 overflow-hidden z-10"
          >
            <div className="flex flex-col gap-4 p-4 sm:p-6">
              {['/', '/about', '/product/1', '/login'].map((path, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link 
                    to={path} 
                    className={`text-base sm:text-lg font-medium leading-[30px] font-inter text-white hover:text-white/90 transition-colors block py-2 ${
                      path === '/login' ? 'px-5 sm:px-6 py-3 sm:py-3.5 border-2 border-white rounded-lg shadow-sm hover:bg-white/10 w-full text-center mt-2' : ''
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-inter leading-tight mb-4 sm:mb-6"
            >
              Fresh Harvest Shop
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed max-w-[800px] mx-auto"
            >
              Discover our selection of fresh, organic produce and artisanal goods
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Seasonal Picks Section */}
      <SectionTransition direction="left" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black"
            >
              Seasonal Picks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#828282]"
            >
              A subheading for this section, as long or as short as you like
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                to="/products/seasonal-picks" 
                className="w-full sm:w-fit inline-block px-4 sm:px-6 py-3 bg-[#E6E6E6] text-black text-base sm:text-lg md:text-xl lg:text-2xl font-medium rounded-lg shadow hover:bg-[#d9d9d9] transition-colors text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.img 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://s3-alpha-sig.figma.com/img/fb25/d8f9/83ea2e776c241974d5ef8eed56b84417?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eAKSrPcabw5RVzyXFVL4OGj5QqUyRE4vE2QEwzM0XvfhYIk4s6qect5P~tXpp2OJluFIOl9cjazs-GOG28z~fp15x2FJ6DYZWGe6I-MA081dbeBfuZ7L0Fr-lvDY8bNv0t2ejYbz0cwjOzE5FVV3VMJ76nhC3hVYKfz8fPvgPLQnc2uQaUFEBOhqAcM0AZ0tCeTaVQwnfdGEQ77K0u06EA3VzZ4a9DbHTGgZBgPZCLl7tdsYz3D2CF-TIHwncrKcxRmnzPkOwmW8Ye5Czs0Q3UBC3RCbD973amE5neixO~cKqLuSqq4zgLHguTQ7wRzDtolIBGFiaIj0014te8z3nA__" 
              alt="Seasonal fruits and vegetables" 
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg object-cover" 
            />
          </motion.div>
        </div>
      </SectionTransition>

      {/* Best Sellers Section */}
      <SectionTransition direction="right" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 md:py-20 bg-[#F7F7F7]">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 md:order-1"
          >
            <motion.img 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://s3-alpha-sig.figma.com/img/f3eb/12ac/603716fd0ec4e8600b4333d8950c7b89?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kPNgdG0AVjzE6dkQhwOdaIqeUQRCLh03FIVfM~g~eUvuEN3IThW4m9CcMsIrem4vDVe0SJt6T5eSal8xjAt9kPPSJd9gEM8JH0P2iQB4mSs9iSbtV4nO9fcsylQEhUTyEhBWZZOVNxfCwsjf3vNjJSeyvzTYRq42xbT~BDrsUgDjA85UMzl4cmRY4Uqdk8oM75x4ab46yNpvFXz~sSCbDlpIRCD9ya9q4o8C90Wfats7V4LSFvux3QAERNIlgel6FxKrZAfoyWhnu8hBp2wQjTLd0s3J4xXagLZ2xLmxIE30N11VxC3qbzobNmKFBFN834dPNh2G7VAtTifx3Qajog__" 
              alt="Best selling products" 
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg object-cover" 
            />
          </motion.div>
          <div className="flex flex-col gap-4 sm:gap-6 order-1 md:order-2">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black"
            >
              Best Sellers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#828282]"
            >
              Our most popular products that customers love
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                to="/products/best-sellers" 
                className="w-full sm:w-fit inline-block px-4 sm:px-6 py-3 bg-[#E6E6E6] text-black text-base sm:text-lg md:text-xl lg:text-2xl font-medium rounded-lg shadow hover:bg-[#d9d9d9] transition-colors text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Fresh & Organic Selection */}
      <SectionTransition direction="up" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 md:py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 sm:mb-8 md:mb-12"
        >
          Fresh & Organic Selection
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-2"
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              <Link to="/products/featured-pears" className="group">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="https://s3-alpha-sig.figma.com/img/5232/b103/830b7cc9a42d4746c4deb07caa32d12d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OIRdb5DE8XjZO2rfizbTFMBi7-DvHs98ursTMJyrbW~snygelMeOvhOlF7g69odzRXgrYk~v-deuijittuOkOPpRE5EKtrVx7Y0rwZZfECJjoB5byz3OJVtC33p0orSz7YHIqxd8qm1gpQY0SA0L2bEovAQm~5B0wZqo~pZsLAWhXO~2Osoc4brfFrly2fUAmynZSHDiG8~zQy7nO~ACYfMChJNiqpI32lD9T8XkhJnKA10ZLETE95bDo3ifWGcbUKh6QVM8n1-pjGXnsVXlThF77UuwRnn7YGSQF4m40JIPAsKGFPke5e4wU17exi8YTTdgAQCXgfBj8ohi9ez65Q__" 
                  alt="Fresh organic pears, our featured product" 
                  className="w-full aspect-square object-cover rounded-lg bg-[#F7F7F7]" 
                />
                <div className="mt-3 sm:mt-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black group-hover:underline">Featured Pears</h3>
                  <p className="text-base sm:text-lg text-[#828282]">Our signature organic pears, freshly harvested</p>
                  <p className="text-lg sm:text-xl font-medium text-black mt-1 sm:mt-2">$12.99</p>
                </div>
              </Link>
            </div>
          </motion.div>
          
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
                className="flex flex-col gap-3 sm:gap-4 md:gap-6"
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
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-black group-hover:underline">{item.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#828282]">{item.description}</p>
                  <p className="text-lg sm:text-xl font-medium text-black">$10.99</p>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </SectionTransition>
    </div>
  );
}