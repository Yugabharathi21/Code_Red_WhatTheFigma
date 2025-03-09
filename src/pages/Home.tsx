import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-12">
        {/* Hero Section */}
        <SectionTransition direction="up" className="w-full">
          <div className="w-full lg:w-[844px] mt-8 sm:mt-12 lg:mt-[212px] flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-10">
            <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 lg:gap-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-inter leading-tight"
              >
                Fresh & Organic Food Delivered to Your Doorstep
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-black/75 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed"
              >
                Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/article"
                className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg flex justify-center items-center hover:bg-black/90 transition-colors duration-200"
              >
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter">Article</span>
              </Link>
            </motion.div>
          </div>
        </SectionTransition>

        {/* Featured Image */}
        <SectionTransition direction="up" delay={0.2} className="w-full mt-8 sm:mt-12 lg:mt-[100px]">
          <motion.img
            src="https://s3-alpha-sig.figma.com/img/9b92/834d/ba5db2760928a8f3f665c5a65b4b8020?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tSwUkp92cjVqoJGHQ3hRWirMzWbev21AQy35ehLZmVLpH7otIHTjg2sg3KVrAAqGFCc4Lb3EjDciMy4bsBVIt0QLBX8lJnUwEZOIQDXHqfd3ryBtuPliRFFs1GBAvQOtxkt2hZrAglMKl3e6EzIxfymIY250WNhieNO8HNjCXgioXLBEBlNQuOTDS6FKOdu2otoXfwLSJC7Q2MEM6KlyafQ~4NTyepcfLLBudY0G~VqRBB1c2NH1OmMwcRqTfGRTg3BRCCP9PWGCIJVbcMK9ZIv2LUg0weoPJJiWCGurmolqB9MR1eJAL4elZ9dGR3m1z3zpFctXjgKvADIxBrxqCw__"
            alt="Fresh produce"
            className="w-full h-[250px] sm:h-[300px] md:h-[480px] lg:h-[640px] object-cover rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </SectionTransition>

        {/* Products Section */}
        <SectionTransition direction="up" className="w-full mt-12 sm:mt-16 lg:mt-24">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-6 sm:mb-8 lg:mb-12">
            Discover Freshness in Every Bite
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Handpicked Fruits",
                description: "Juicy and delicious seasonal picks.",
                weight: 500,
                image: "https://s3-alpha-sig.figma.com/img/fb25/d8f9/83ea2e776c241974d5ef8eed56b84417?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eAKSrPcabw5RVzyXFVL4OGj5QqUyRE4vE2QEwzM0XvfhYIk4s6qect5P~tXpp2OJluFIOl9cjazs-GOG28z~fp15x2FJ6DYZWGe6I-MA081dbeBfuZ7L0Fr-lvDY8bNv0t2ejYbz0cwjOzE5FVV3VMJ76nhC3hVYKfz8fPvgPLQnc2uQaUFEBOhqAcM0AZ0tCeTaVQwnfdGEQ77K0u06EA3VzZ4a9DbHTGgZBgPZCLl7tdsYz3D2CF-TIHwncrKcxRmnzPkOwmW8Ye5Czs0Q3UBC3RCbD973amE5neixO~cKqLuSqq4zgLHguTQ7wRzDtolIBGFiaIj0014te8z3nA__"
              },
              {
                title: "Delicious Beverages",
                description: "Taste the richness of homemade juices and natural drinks.",
                weight: 400,
                image: "https://s3-alpha-sig.figma.com/img/f3eb/12ac/603716fd0ec4e8600b4333d8950c7b89?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kPNgdG0AVjzE6dkQhwOdaIqeUQRCLh03FIVfM~g~eUvuEN3IThW4m9CcMsIrem4vDVe0SJt6T5eSal8xjAt9kPPSJd9gEM8JH0P2iQB4mSs9iSbtV4nO9fcsylQEhUTyEhBWZZOVNxfCwsjf3vNjJSeyvzTYRq42xbT~BDrsUgDjA85UMzl4cmRY4Uqdk8oM75x4ab46yNpvFXz~sSCbDlpIRCD9ya9q4o8C90Wfats7V4LSFvux3QAERNIlgel6FxKrZAfoyWhnu8hBp2wQjTLd0s3J4xXagLZ2xLmxIE30N11VxC3qbzobNmKFBFN834dPNh2G7VAtTifx3Qajog__"
              },
              {
                title: "Gourmet & Essentials",
                description: "Premium dairy, nuts, and healthy snacks.",
                weight: 500,
                image: "https://s3-alpha-sig.figma.com/img/aa4f/9ac4/cd522222c092125a1ea0a13f2d010316?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o3LmB-2wq9dXSG7lUKVJzI4QpEi0JUfjw2Va34ah81gwGUL6spoJjHc0W99pi2Eb1HxpBYqgpG4kfGsuvzrLDncAVoLcxouqxIamJBZHVZfU5tPzXCD~CMTUaPP0dh4oe2z7MzjIezJf8ImiSS59CK0rNoJsCPH9Sxnu6jsXoIJBvUQfwfsbNfJEpYDDnrAcaKBdZttdEG~S-W~vo9~KzfswdpR1fojFjrEsBolflttk72qXVISiYZahDWQQP0dRfZov5KYyNgL7Ka2N8fQIZCNTapr~nDqb-LsPJNvFW1sfc~pBNqj44fcNlRupReoB57I6wEMGuR47wMU0PmOeYA__"
              }
            ].map((product, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col justify-start items-start gap-3 sm:gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[405px] rounded-lg object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col justify-center items-start gap-1 sm:gap-2">
                  <h3 className="text-black text-lg sm:text-xl md:text-2xl font-[${product.weight}] font-inter leading-relaxed">
                    {product.title}
                  </h3>
                  <p className="text-[#828282] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionTransition>

          {/* Features Section */}
          <SectionTransition direction="up" className="w-full mt-12 sm:mt-16 lg:mt-24">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
  {/* Text Section */}
  <div className="w-full lg:w-[516px] flex flex-col justify-start gap-6 sm:gap-8 lg:gap-12">
    {[
      {
        title: "Premium Quality",
        description: "We ensure the highest quality standards with farm-to-table freshness."
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
        className="flex flex-col justify-center items-start gap-2 sm:gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 * index }}
      >
        <h3 className="text-black text-lg sm:text-xl md:text-2xl font-medium font-inter leading-relaxed">
          {feature.title}
        </h3>
        <p className="text-[#828282] text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-[516px] flex justify-center">
    <img 
      src="https://s3-alpha-sig.figma.com/img/ad77/3759/391bb742e64b67ae254c60116828b50b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X-BFmAYlMIOcZoYE-b7iyJFKsYulHHzQn~gCB14aEci4xIsiMVgLUFoq0d9mlw2ylvehmC7vfp2m5iOS-c-grnaNHEvwZau9CQxwxoM~DAmN1DQGWigkpqBm04zIHWq4AV0CjbHlIWn1noIEg4yIFz5~y7EAOHaFYvOhZigMVNiFTmSC7BgiEQWXOx8bM4npdRha0k8V7xdKIMIDS42psPvdRE7hhmPmYpmvRbvlwRrzGcpIGNCOArcafw6RRGNuBCQYPXvrgFf1bIkzkpAIMwGxKoGTaU8ZkRb0kCPKLsoKUW9UGdM93AjyMajXzs4eiA9hfLAoQCXrjtBZy8Mybw__"
      alt="Feature Section Image"
      className="rounded-xl shadow-lg w-full h-auto"
    />
  </div>
</div>
          </SectionTransition>

        {/* Why Choose Us Section */}
        <SectionTransition direction="up" className="w-full mt-12 sm:mt-16 lg:mt-24">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-6 sm:mb-8 lg:mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "High-Quality, Fresh Ingredients",
                description: "We source only the freshest, organic ingredients to ensure the best quality.",
                image: "https://s3-alpha-sig.figma.com/img/222c/c630/37460d83213fc820abe67c0bb92fb1cb?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rv9eCC-tqDoEpMhablOxiY8VYxBpk0~RTQ4j6leyMN77cDM8LpGbGX~HliNKQziQPy-DLt5~fh8G-KMakCJEK41Q8SeE4aYiPGTpN84Gk-YEqyuRQXk8BgpvRpHS-y1yrSWieMNN-0YReh~vOU~pMF1dym73javntd3hiEAclrI7pE5~ysDWWKhWAymxVZVkLdpP1wv1T~GAa87kBSQSVa3MIPkqOtzjkCAXPLTfSLor3x4wFfUkODPriNUCu0~NYstnZRzlCGq7CPpLh92jiQiWUmbewdQGzMQBkk8unaS-nqxoR3iWFNbV2xsg5TOgqnaSWhpkYZmzVIhtGho6gg__"
              },
              {
                title: "A Taste of Luxury & Comfort",
                description: "Enjoy artisanal, handcrafted baked goods and fresh produce, perfect for every occasion.",
                image: "https://s3-alpha-sig.figma.com/img/98ee/e121/76fd0f7948f96d4bb34d57d5a759a05e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OgpkycujIkjle7mFeC88XSQe7sHiec5RLl7JOZAE7XmPUHl4WUVCWqDMzqwdL88kLfBfPfxmrvXZ40ypR-daRio5BX99~X9KiVst7GHsp65n0cTK3Tvs79DtVIQI588cVHKmN60UIJpSf-BzUDqkC8bJN9X2MeaU9t3EbR7lU6bdRimZ~hrRDgPkVoSqdP9DVq968bNfyS9LEpAJuITStSm~WbTKpxaHKIcdyRc2CrXxp222WPSmbrUlsI69ucCpta9mqrS6FtXCfgXCM7hoXQW2UscrbzD4~ndA3srsg-lP~hg4j0DypgFfzQvsFirg06d1IAJvJCTscft-llxNMA__"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-black text-lg sm:text-xl md:text-2xl font-medium font-inter">
                    {item.title}
                  </h3>
                  <p className="text-[#828282] text-base sm:text-lg md:text-xl font-normal font-inter">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionTransition>

        {/* CTA Section */}
        <SectionTransition direction="up" className="w-full mt-12 sm:mt-16 lg:mt-24 py-8 sm:py-12 lg:py-16 bg-[#F7F7F7]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter text-center lg:text-left max-w-[728px]"
            >
              Join Us for a Healthier Lifestyle!
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                to="/shop"
                className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg flex justify-center items-center hover:bg-black/90 transition-colors duration-200"
              >
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter">Shop</span>
              </Link>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-[#E6E6E6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-lg flex justify-center items-center hover:bg-[#D6D6D6] transition-colors duration-200">
                <span className="text-black/90 text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter">Learn More</span>
              </button>
            </motion.div>
          </div>
        </SectionTransition>
      </div>
    </div>
  );
};

export default Home;