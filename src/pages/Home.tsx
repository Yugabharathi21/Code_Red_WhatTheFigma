import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen relative bg-white px-4 md:px-6 lg:px-20">
      {/* Hero Section */}
      <SectionTransition direction="up" className="w-full">
        <div className="w-full md:w-[844px] mt-12 md:mt-[212px] flex flex-col justify-start items-start gap-6 md:gap-10">
          <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-4xl md:text-5xl lg:text-[64px] font-bold font-inter leading-tight"
            >
              Fresh & Organic Food Delivered to Your Doorstep
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-black/75 text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed"
            >
              Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/article"
              className="w-[150px] px-6 md:px-8 py-4 md:py-5 bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg flex justify-center items-center hover:bg-black/90 transition-colors duration-200"
            >
              <span className="text-white text-lg md:text-xl lg:text-2xl font-medium font-inter">Article</span>
            </Link>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Featured Image */}
      <SectionTransition direction="up" delay={0.2} className="w-full mt-12 md:mt-[100px]">
        <motion.img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&h=640&q=80"
          alt="Fresh produce"
          className="w-full h-[300px] md:h-[480px] lg:h-[640px] object-cover rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </SectionTransition>

      {/* Products Section */}
      <SectionTransition direction="up" className="mt-16 md:mt-24 lg:mt-32">
        <h2 className="text-black text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-8 md:mb-12">
          Discover Freshness in Every Bite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Handpicked Fruits",
              description: "Juicy and delicious seasonal picks.",
              weight: 500,
              image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=405&h=405&q=80"
            },
            {
              title: "Delicious Beverages",
              description: "Taste the richness of homemade juices and natural drinks.",
              weight: 400,
              image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=405&h=405&q=80"
            },
            {
              title: "Gourmet & Essentials",
              description: "Premium dairy, nuts, and healthy snacks.",
              weight: 500,
              image: "https://images.unsplash.com/photo-1631209121750-a6cc2393f02d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=405&h=405&q=80"
            }
          ].map((product, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col justify-start items-start gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-[280px] md:h-[340px] lg:h-[405px] rounded-lg object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="text-black text-xl md:text-2xl font-[${product.weight}] font-inter leading-relaxed">
                  {product.title}
                </h3>
                <p className="text-[#828282] text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionTransition>

      {/* Features Section */}
      <SectionTransition direction="left" className="mt-16 md:mt-24 lg:mt-32">
        <h2 className="text-black text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-8 md:mb-12">
          Why We're Different
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="w-full lg:w-[516px] flex flex-col justify-start gap-8 md:gap-12">
            {[
              {
                title: "Premium Quality",
                description: "We ensure the highest quality standards with farm-to-table freshness"
              },
              {
                title: "Sustainably Sourced",
                description: "Our products come from sustainable farming practices for a healthier planet."
              },
              {
                title: "Fast & Reliable Delivery",
                description: "Get your groceries delivered fresh and on time, every time."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col justify-center items-start gap-2 md:gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h3 className="text-black text-xl md:text-2xl font-medium font-inter leading-relaxed">
                  {feature.title}
                </h3>
                <p className="text-[#828282] text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="w-full lg:w-[704px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&h=704&q=80"
              alt="Features"
              className="w-full h-[300px] md:h-[500px] lg:h-[704px] object-cover rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </SectionTransition>

      {/* Why Choose Us Section */}
      <SectionTransition direction="right" className="mt-16 md:mt-24 lg:mt-32">
        <h2 className="text-black text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-8 md:mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "High-Quality, Fresh Ingredients",
              description: "We source only the freshest, organic ingredients to ensure the best quality.",
              image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&h=341&q=80"
            },
            {
              title: "A Taste of Luxury & Comfort",
              description: "Enjoy artisanal, handcrafted baked goods and fresh produce, perfect for every occasion.",
              image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&h=341&q=80"
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col justify-start items-start gap-6 md:gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] md:h-[300px] lg:h-[341px] rounded-lg object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col justify-start items-start gap-2 md:gap-3">
                <h3 className="text-black text-xl md:text-2xl font-medium font-inter leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-[#828282] text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionTransition>

      {/* Testimonials Section */}
      <SectionTransition direction="up" className="mt-16 md:mt-24 lg:mt-32">
        <h2 className="text-black text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-8 md:mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              text: "Absolutely love the fresh produce and quick delivery!",
              name: "Sam W",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=45&h=45&q=80"
            },
            {
              text: "Their organic fruits are the best I've ever tasted!",
              name: "Liam P.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=45&h=45&q=80"
            },
            {
              text: "Highly recommend for anyone looking for quality groceries",
              name: "Sophia M.",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=45&h=45&q=80"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="flex-1 p-6 md:p-8 bg-white rounded-xl border border-[#E6E6E6] flex flex-col justify-start items-start gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-black text-lg md:text-xl lg:text-2xl font-medium font-inter leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex justify-start items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <h4 className="text-black text-sm md:text-base font-medium font-inter leading-relaxed">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#828282] text-sm md:text-base font-medium font-inter leading-relaxed">
                    Description
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionTransition>

      {/* CTA Section */}
      <SectionTransition direction="up" className="w-full mt-16 md:mt-24 lg:mt-32 py-12 md:py-16 bg-[#F7F7F7]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-black text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter text-center lg:text-left max-w-[728px]"
          >
            Join Us for a Healthier Lifestyle!
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Link
              to="/shop"
              className="px-6 py-3 md:px-8 md:py-5 bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg flex justify-center items-center hover:bg-black/90 transition-colors duration-200"
            >
              <span className="text-white text-lg md:text-xl lg:text-2xl font-medium font-inter">Shop</span>
            </Link>
            <button className="px-6 py-3 md:px-8 md:py-5 bg-[#E6E6E6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg flex justify-center items-center hover:bg-[#D6D6D6] transition-colors duration-200">
              <span className="text-black/90 text-lg md:text-xl lg:text-2xl font-medium font-inter">Learn More</span>
            </button>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  );
};

export default Home;