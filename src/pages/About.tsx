import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';

export default function About() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SectionTransition direction="up" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-36">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-6 max-w-full lg:max-w-[624px]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              About
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-[#828282] font-normal leading-relaxed"
            >
              Your trusted source for fresh, organic produce delivered right to your doorstep.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed"
            >
              At FreshHarvest, we believe in bringing the freshest, highest-quality organic produce directly to your table. Our carefully curated selection of fruits, vegetables, and artisanal products ensures that you get the best nature has to offer.
              <br /><br />
              We work directly with local farmers and sustainable producers to maintain the highest standards of quality while supporting our community and protecting the environment.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-full lg:w-auto mx-auto lg:mx-0"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://s3-alpha-sig.figma.com/img/eef3/6a48/1a33eb6dc13aa6b624105a5a5e591e72?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eXvR7ZkzcLlbGQLzRu2dellkkRNjb9tGu9zhCnWGp8Q7gKl3T6CiYGxsJ~MeS2EbOjOyw9CIfO7wGricqYUwrs0IEsABAAMlt~L9dyDuZz61dDwEp4~oY1L3yoZ1bxNvNajd837wJmQRbkDla5y0QQplbknUnd2sO-WHKzcHiLjiTGk-SIL-rN4fMj7DrGzZZ3tFKL660y2omdiY18NHMAoluwYLKUneG1gkVXRHshfYRs7AFwR9q25u2AuF1K4SrL~B-SD4QTFMnA29tW4gdc4Q~mN0EwWx7FRwN7R2MLH4qWpTqxCjmnn2OAW66mZo0Ag7Q0~hE-H-hRn2ZUkVhg__"
              alt="Fresh produce"
              className="w-full sm:w-[400px] lg:w-[508px] h-auto sm:h-[500px] lg:h-[657px] rounded-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          >
            Contact us
          </motion.h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 max-w-full lg:max-w-[626px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[295px]"
            >
              <label className="block text-black text-base font-medium mb-2">
                First name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none"
                placeholder="Enter your first name"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[297px]"
            >
              <label className="block text-black text-base font-medium mb-2">
                Last name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none"
                placeholder="Enter your last name"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="w-full"
            >
              <label className="block text-black text-base font-medium mb-2">
                Email address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="w-full"
            >
              <label className="block text-black text-base font-medium mb-2">
                Your message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[120px] sm:h-[146px] px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none resize-none"
                placeholder="Enter your question or message"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg shadow-sm text-base sm:text-lg md:text-xl font-medium hover:bg-black/90 transition-colors"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12 sm:mt-16 lg:mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8"
          >
            Visit us
          </motion.h2>
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98784692426385!3d40.75798657138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710284346976!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our location"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </SectionTransition>
    </div>
  );
}