import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';

const Article: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen relative bg-white px-4 md:px-6 lg:px-20">
      {/* Hero Section */}
      <SectionTransition direction="up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[733px] mt-16 md:mt-[244px] flex flex-col justify-center items-start gap-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-4xl md:text-5xl lg:text-[64px] font-bold font-inter max-w-[892px]"
          >
            The Secret to Eating Healthy & Fresh
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-black/75 text-lg md:text-xl lg:text-2xl font-normal font-inter leading-9"
          >
            Learn how organic food benefits your health and the environment.
          </motion.p>
        </motion.div>
      </SectionTransition>

      {/* Main Image */}
      <SectionTransition direction="up">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1281&h=650&q=80"
            alt="Healthy food spread"
            className="w-full max-w-[1281px] h-[400px] md:h-[550px] lg:h-[650px] object-cover rounded-lg"
          />
        </motion.div>
      </SectionTransition>

      {/* Article Content First Part */}
      <SectionTransition direction="up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 lg:mt-32 md:ml-[219px]"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-base md:text-lg lg:text-xl font-medium font-inter leading-[30px] max-w-[842px]"
          >
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
            <br /><br />
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            <br /><br />
            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
          </motion.p>
        </motion.div>
      </SectionTransition>

      {/* Article Images */}
      <SectionTransition direction="up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-8"
        >
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&h=436&q=80"
            alt="Healthy salad"
            className="w-full md:w-[624px] h-[300px] md:h-[436px] object-cover rounded-lg"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&h=436&q=80"
            alt="Fresh vegetables"
            className="w-full md:w-[624px] h-[300px] md:h-[436px] object-cover rounded-lg"
          />
        </motion.div>
      </SectionTransition>

      {/* Article Content Second Part */}
      <SectionTransition direction="up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 md:ml-[219px]"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-base md:text-lg lg:text-xl font-medium font-inter leading-[30px] max-w-[842px]"
          >
            Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccably aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
            <br /><br />
            Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
          </motion.p>
        </motion.div>
      </SectionTransition>

      {/* Related Articles */}
      <SectionTransition direction="up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-3xl md:text-[40px] font-semibold font-inter leading-[44px] mb-8 md:mb-12"
          >
            Related articles or posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "5 Benefits of Organic Food",
                author: "Author",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=404&h=346&q=80"
              },
              {
                title: "How to Store Fruits Properly",
                author: "Author",
                image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=404&h=346&q=80"
              },
              {
                title: "Best Superfoods for Your Diet",
                author: "Author",
                image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=404&h=346&q=80"
              }
            ].map((article, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-6"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[280px] md:h-[346px] object-cover rounded-lg bg-[#F7F7F7]"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  className="flex flex-col gap-1"
                >
                  <h3 className="text-black text-lg md:text-xl lg:text-2xl font-medium font-inter leading-[30px]">
                    {article.title}
                  </h3>
                  <p className="text-[#828282] text-lg md:text-xl lg:text-2xl font-medium font-inter leading-[30px]">
                    {article.author}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionTransition>
    </div>
  );
};

export default Article; 