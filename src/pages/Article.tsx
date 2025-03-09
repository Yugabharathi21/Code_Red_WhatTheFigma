import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import { AnimatePresence } from 'framer-motion';

const Article: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "The Secret to Eating Healthy & Fresh";
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // Show feedback
        const feedback = document.getElementById('copy-feedback');
        if (feedback) {
          feedback.style.opacity = '1';
          setTimeout(() => {
            feedback.style.opacity = '0';
          }, 2000);
        }
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen relative bg-white px-4 md:px-6 lg:px-20">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Action Buttons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="p-3 bg-white rounded-full shadow-lg"
        >
          <svg 
            className={`w-6 h-6 ${isBookmarked ? 'fill-black' : 'stroke-black fill-none'}`}
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </motion.button>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="p-3 bg-white rounded-full shadow-lg"
          >
            <svg className="w-6 h-6 stroke-black fill-none" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
            </svg>
          </motion.button>

          {/* Share Menu */}
          <AnimatePresence>
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -10 }}
                className="absolute right-full top-0 mr-4 bg-white rounded-lg shadow-lg p-2 w-48"
              >
                <div className="flex flex-col gap-2">
                  {[
                    { platform: 'twitter', icon: 'Twitter', color: 'text-[#1DA1F2]' },
                    { platform: 'facebook', icon: 'Facebook', color: 'text-[#4267B2]' },
                    { platform: 'linkedin', icon: 'LinkedIn', color: 'text-[#0077B5]' },
                    { platform: 'copy', icon: 'Copy Link', color: 'text-gray-700' }
                  ].map(({ platform, icon, color }) => (
                    <motion.button
                      key={platform}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShare(platform)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 ${color}`}
                    >
                      {icon}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Copy Feedback */}
      <div 
        id="copy-feedback"
        className="fixed bottom-8 right-8 bg-black text-white px-4 py-2 rounded-lg opacity-0 transition-opacity duration-200"
      >
        Link copied to clipboard!
      </div>

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
            src="https://s3-alpha-sig.figma.com/img/9b92/834d/ba5db2760928a8f3f665c5a65b4b8020?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tSwUkp92cjVqoJGHQ3hRWirMzWbev21AQy35ehLZmVLpH7otIHTjg2sg3KVrAAqGFCc4Lb3EjDciMy4bsBVIt0QLBX8lJnUwEZOIQDXHqfd3ryBtuPliRFFs1GBAvQOtxkt2hZrAglMKl3e6EzIxfymIY250WNhieNO8HNjCXgioXLBEBlNQuOTDS6FKOdu2otoXfwLSJC7Q2MEM6KlyafQ~4NTyepcfLLBudY0G~VqRBB1c2NH1OmMwcRqTfGRTg3BRCCP9PWGCIJVbcMK9ZIv2LUg0weoPJJiWCGurmolqB9MR1eJAL4elZ9dGR3m1z3zpFctXjgKvADIxBrxqCw__"
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
            src="https://s3-alpha-sig.figma.com/img/222c/c630/37460d83213fc820abe67c0bb92fb1cb?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rv9eCC-tqDoEpMhablOxiY8VYxBpk0~RTQ4j6leyMN77cDM8LpGbGX~HliNKQziQPy-DLt5~fh8G-KMakCJEK41Q8SeE4aYiPGTpN84Gk-YEqyuRQXk8BgpvRpHS-y1yrSWieMNN-0YReh~vOU~pMF1dym73javntd3hiEAclrI7pE5~ysDWWKhWAymxVZVkLdpP1wv1T~GAa87kBSQSVa3MIPkqOtzjkCAXPLTfSLor3x4wFfUkODPriNUCu0~NYstnZRzlCGq7CPpLh92jiQiWUmbewdQGzMQBkk8unaS-nqxoR3iWFNbV2xsg5TOgqnaSWhpkYZmzVIhtGho6gg__"
            alt="Healthy salad"
            className="w-full md:w-[624px] h-[300px] md:h-[436px] object-cover rounded-lg"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            src="https://s3-alpha-sig.figma.com/img/f3eb/12ac/603716fd0ec4e8600b4333d8950c7b89?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kPNgdG0AVjzE6dkQhwOdaIqeUQRCLh03FIVfM~g~eUvuEN3IThW4m9CcMsIrem4vDVe0SJt6T5eSal8xjAt9kPPSJd9gEM8JH0P2iQB4mSs9iSbtV4nO9fcsylQEhUTyEhBWZZOVNxfCwsjf3vNjJSeyvzTYRq42xbT~BDrsUgDjA85UMzl4cmRY4Uqdk8oM75x4ab46yNpvFXz~sSCbDlpIRCD9ya9q4o8C90Wfats7V4LSFvux3QAERNIlgel6FxKrZAfoyWhnu8hBp2wQjTLd0s3J4xXagLZ2xLmxIE30N11VxC3qbzobNmKFBFN834dPNh2G7VAtTifx3Qajog__"
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
                image: "https://s3-alpha-sig.figma.com/img/4737/fe1b/f44d7342d9605d5c93635abf8a144817?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ouu6KnvS0JaEF8GEGKBgDrw~Kk93KQ2UrXuNT0kl~rn80iAkeXhXCXnVBiUGazIaj4PRz~rE0daUGSsSL-fnf53vj9x~vcjYFL~CYfqiTxAAtXS3LOveKLkdF5wh09vg3s-DdOvNok0YAXvlEHP02ejJKSID2x-Ni764BZPAfkiYQaMCi74fkFZwZE5jsN7247T9v6QT3XyF7xCv0uwuxXO-lvQY8rL1QTj~FQs~~vKOwrglyZD8tkNxN7hlxDl8bOChwc8Pzpdhbe-jlX3dX0K49iZLDCpatQYFR78kWkRfK3x9P5zgVX~QV1tpWlEhQrYeDy78zE6-mtQG1hd19w__"
              },
              {
                title: "How to Store Fruits Properly",
                author: "Author",
                image: "https://s3-alpha-sig.figma.com/img/379c/0155/bc413a61ca41917df832a2e64530e9d7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KPVM7RP9am2b51V5k7VqPjax5OblTgUvHUgYLWcKXFctF6EFFLJQG1JKa5lg5-TdtEohl6ZnIfGSowHL6-RmIuL1M20dWfIgTbBEKFws0mNpCJcIjwTppvxBVLT1XqiXPuobmv9o3gRYElOp1Z4rHfbWUP2gRVFCK5uTCwrZLdtSVb10JpXNNNynwvyJml5kX7CJ5Xv10C06ahDk6yCzYSSWHWqBowNZTneH35fX7XF0tHek-qyGaufZmCJIX13KSrnP~J8LIuzIivpy3mnh0biDSw8MqjDPxZmMiZpHXEnuQZGE9aIIRsQYbDlyFA5mYQslk5a6Jfo4lxRCUp42qQ__"
              },
              {
                title: "Best Superfoods for Your Diet",
                author: "Author",
                image: "https://s3-alpha-sig.figma.com/img/44b0/aa43/a57e23aec207706d7933d9eaa0f3360a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nOgKt40HIr5juk-OtLC8-5GPaFyJkufk~PAI8p1tHK6eCgzIbIioB5kijSruVq~pGpUDVgCHf1DvqD6KwaGv-JjA43n4HCMo4Stb2qLxVF-4nAIFJYKVldNWCKV~B~jllj1IC8mL~ugC1qbSKpcG1JJUL2qD7pwUhmBRo1-RB5FH90VNM7tBJCBR7FyFogLfJEQu4ELHc2wyUq0phAWfhv0kTZobiwSembTyAe1cLkFhAxghv63qvxBULvw~I8~Q1qTNr98U27vhswDJ8QwLu0U1xo0RIVUT79fhgi0ZCHxdu3SWjZgiRKqMYh7rApATcgw2vFvvfRwOcfWoLkU~yQ__"
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