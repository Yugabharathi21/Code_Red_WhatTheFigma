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
      <SectionTransition direction="up" className="max-w-[1280px] mx-auto px-20 py-16">
        <div className="flex gap-36">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-[624px]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl font-bold"
            >
              About
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl text-[#828282] font-normal leading-9"
            >
              Your trusted source for fresh, organic produce delivered right to your doorstep.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-black font-medium leading-[30px]"
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
            className="flex-shrink-0"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://s3-alpha-sig.figma.com/img/eef3/6a48/1a33eb6dc13aa6b624105a5a5e591e72?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eXvR7ZkzcLlbGQLzRu2dellkkRNjb9tGu9zhCnWGp8Q7gKl3T6CiYGxsJ~MeS2EbOjOyw9CIfO7wGricqYUwrs0IEsABAAMlt~L9dyDuZz61dDwEp4~oY1L3yoZ1bxNvNajd837wJmQRbkDla5y0QQplbknUnd2sO-WHKzcHiLjiTGk-SIL-rN4fMj7DrGzZZ3tFKL660y2omdiY18NHMAoluwYLKUneG1gkVXRHshfYRs7AFwR9q25u2AuF1K4SrL~B-SD4QTFMnA29tW4gdc4Q~mN0EwWx7FRwN7R2MLH4qWpTqxCjmnn2OAW66mZo0Ag7Q0~hE-H-hRn2ZUkVhg__"
              alt="Fresh produce"
              className="w-[508px] h-[657px] rounded-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-semibold mb-8"
          >
            Contact us
          </motion.h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-8 max-w-[626px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-[295px]"
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
              className="w-[297px]"
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
                className="w-full h-[146px] px-4 py-3 rounded-lg border border-[#E0E0E0] shadow-sm focus:ring-2 focus:ring-black/5 outline-none resize-none"
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
              className="px-8 py-4 bg-black text-white rounded-lg shadow-sm text-xl font-medium hover:bg-black/90 transition-colors"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </SectionTransition>
    </div>
  );
}