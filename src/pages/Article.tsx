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
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-12">
        {/* Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
          style={{ scaleX }}
        />

        {/* Floating Action Buttons */}
        <div className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 sm:gap-4 z-40">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-2 sm:p-3 bg-white rounded-full shadow-lg"
          >
            <svg 
              className={`w-5 h-5 sm:w-6 sm:h-6 ${isBookmarked ? 'fill-black' : 'stroke-black fill-none'}`}
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
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-black fill-none" viewBox="0 0 24 24">
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
                  className="absolute right-full top-0 mr-2 sm:mr-4 bg-white rounded-lg shadow-lg p-2 w-36 sm:w-48"
                >
                  <div className="flex flex-col gap-1 sm:gap-2">
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
                        className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 text-sm sm:text-base ${color}`}
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
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg opacity-0 transition-opacity duration-200 text-sm sm:text-base z-50"
        >
          Link copied to clipboard!
        </div>

        {/* Hero Section */}
        <SectionTransition direction="up">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[733px] mt-8 sm:mt-12 lg:mt-[244px] flex flex-col justify-center items-start gap-4 sm:gap-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold font-inter max-w-full lg:max-w-[892px]"
            >
              The Secret to Eating Healthy & Fresh
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-black/75 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-inter leading-relaxed"
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
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="https://s3-alpha-sig.figma.com/img/9b92/834d/ba5db2760928a8f3f665c5a65b4b8020?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tSwUkp92cjVqoJGHQ3hRWirMzWbev21AQy35ehLZmVLpH7otIHTjg2sg3KVrAAqGFCc4Lb3EjDciMy4bsBVIt0QLBX8lJnUwEZOIQDXHqfd3ryBtuPliRFFs1GBAvQOtxkt2hZrAglMKl3e6EzIxfymIY250WNhieNO8HNjCXgioXLBEBlNQuOTDS6FKOdu2otoXfwLSJC7Q2MEM6KlyafQ~4NTyepcfLLBudY0G~VqRBB1c2NH1OmMwcRqTfGRTg3BRCCP9PWGCIJVbcMK9ZIv2LUg0weoPJJiWCGurmolqB9MR1eJAL4elZ9dGR3m1z3zpFctXjgKvADIxBrxqCw__"
              alt="Healthy food spread"
              className="w-full max-w-[1281px] h-[250px] sm:h-[400px] md:h-[550px] lg:h-[650px] object-cover rounded-lg"
            />
          </motion.div>
        </SectionTransition>

        {/* Article Content First Part */}
        <SectionTransition direction="up">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 md:ml-0 lg:ml-[219px]"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-base md:text-lg lg:text-xl font-medium font-inter leading-relaxed max-w-full lg:max-w-[842px]"
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
            className="mt-8 sm:mt-16 md:mt-24 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8"
          >
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              src="https://s3-alpha-sig.figma.com/img/222c/c630/37460d83213fc820abe67c0bb92fb1cb?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rv9eCC-tqDoEpMhablOxiY8VYxBpk0~RTQ4j6leyMN77cDM8LpGbGX~HliNKQziQPy-DLt5~fh8G-KMakCJEK41Q8SeE4aYiPGTpN84Gk-YEqyuRQXk8BgpvRpHS-y1yrSWieMNN-0YReh~vOU~pMF1dym73javntd3hiEAclrI7pE5~ysDWWKhWAymxVZVkLdpP1wv1T~GAa87kBSQSVa3MIPkqOtzjkCAXPLTfSLor3x4wFfUkODPriNUCu0~NYstnZRzlCGq7CPpLh92jiQiWUmbewdQGzMQBkk8unaS-nqxoR3iWFNbV2xsg5TOgqnaSWhpkYZmzVIhtGho6gg__"
              alt="Healthy salad"
              className="w-full md:w-[624px] h-[200px] sm:h-[300px] md:h-[436px] object-cover rounded-lg"
            />
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              src="https://s3-alpha-sig.figma.com/img/f3eb/12ac/603716fd0ec4e8600b4333d8950c7b89?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kPNgdG0AVjzE6dkQhwOdaIqeUQRCLh03FIVfM~g~eUvuEN3IThW4m9CcMsIrem4vDVe0SJt6T5eSal8xjAt9kPPSJd9gEM8JH0P2iQB4mSs9iSbtV4nO9fcsylQEhUTyEhBWZZOVNxfCwsjf3vNjJSeyvzTYRq42xbT~BDrsUgDjA85UMzl4cmRY4Uqdk8oM75x4ab46yNpvFXz~sSCbDlpIRCD9ya9q4o8C90Wfats7V4LSFvux3QAERNIlgel6FxKrZAfoyWhnu8hBp2wQjTLd0s3J4xXagLZ2xLmxIE30N11VxC3qbzobNmKFBFN834dPNh2G7VAtTifx3Qajog__"
              alt="Fresh vegetables"
              className="w-full md:w-[624px] h-[200px] sm:h-[300px] md:h-[436px] object-cover rounded-lg"
            />
          </motion.div>
        </SectionTransition>

        {/* Article Content Second Part */}
        <SectionTransition direction="up">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 sm:mt-16 md:mt-24 md:ml-0 lg:ml-[219px]"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-base md:text-lg lg:text-xl font-medium font-inter leading-relaxed max-w-full lg:max-w-[842px]"
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
            className="mt-8 sm:mt-16 md:mt-24 mb-8 sm:mb-16 md:mb-24"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8"
            >
              Related Articles
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Seasonal Eating: Why It Matters",
                  excerpt: "Discover the benefits of eating with the seasons and how it can improve your health.",
                  image: "https://s3-alpha-sig.figma.com/img/fb25/d8f9/83ea2e776c241974d5ef8eed56b84417?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eAKSrPcabw5RVzyXFVL4OGj5QqUyRE4vE2QEwzM0XvfhYIk4s6qect5P~tXpp2OJluFIOl9cjazs-GOG28z~fp15x2FJ6DYZWGe6I-MA081dbeBfuZ7L0Fr-lvDY8bNv0t2ejYbz0cwjOzE5FVV3VMJ76nhC3hVYKfz8fPvgPLQnc2uQaUFEBOhqAcM0AZ0tCeTaVQwnfdGEQ77K0u06EA3VzZ4a9DbHTGgZBgPZCLl7tdsYz3D2CF-TIHwncrKcxRmnzPkOwmW8Ye5Czs0Q3UBC3RCbD973amE5neixO~cKqLuSqq4zgLHguTQ7wRzDtolIBGFiaIj0014te8z3nA__"
                },
                {
                  title: "Organic Farming: A Sustainable Choice",
                  excerpt: "Learn how organic farming practices benefit both your health and the environment.",
                  image: "https://s3-alpha-sig.figma.com/img/aa4f/9ac4/cd522222c092125a1ea0a13f2d010316?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o3LmB-2wq9dXSG7lUKVJzI4QpEi0JUfjw2Va34ah81gwGUL6spoJjHc0W99pi2Eb1HxpBYqgpG4kfGsuvzrLDncAVoLcxouqxIamJBZHVZfU5tPzXCD~CMTUaPP0dh4oe2z7MzjIezJf8ImiSS59CK0rNoJsCPH9Sxnu6jsXoIJBvUQfwfsbNfJEpYDDnrAcaKBdZttdEG~S-W~vo9~KzfswdpR1fojFjrEsBolflttk72qXVISiYZahDWQQP0dRfZov5KYyNgL7Ka2N8fQIZCNTapr~nDqb-LsPJNvFW1sfc~pBNqj44fcNlRupReoB57I6wEMGuR47wMU0PmOeYA__"
                },
                {
                  title: "The Art of Meal Prepping",
                  excerpt: "Tips and tricks for efficient meal planning with fresh, organic ingredients.",
                  image: "https://s3-alpha-sig.figma.com/img/f3eb/12ac/603716fd0ec4e8600b4333d8950c7b89?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kPNgdG0AVjzE6dkQhwOdaIqeUQRCLh03FIVfM~g~eUvuEN3IThW4m9CcMsIrem4vDVe0SJt6T5eSal8xjAt9kPPSJd9gEM8JH0P2iQB4mSs9iSbtV4nO9fcsylQEhUTyEhBWZZOVNxfCwsjf3vNjJSeyvzTYRq42xbT~BDrsUgDjA85UMzl4cmRY4Uqdk8oM75x4ab46yNpvFXz~sSCbDlpIRCD9ya9q4o8C90Wfats7V4LSFvux3QAERNIlgel6FxKrZAfoyWhnu8hBp2wQjTLd0s3J4xXagLZ2xLmxIE30N11VxC3qbzobNmKFBFN834dPNh2G7VAtTifx3Qajog__"
                }
              ].map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  <Link to="#" className="group">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[200px] sm:h-[220px] md:h-[250px] rounded-lg object-cover"
                    />
                    <h3 className="mt-3 text-lg sm:text-xl font-medium group-hover:underline">{article.title}</h3>
                    <p className="text-sm sm:text-base text-[#828282]">{article.excerpt}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionTransition>
      </div>
    </div>
  );
};

export default Article; 