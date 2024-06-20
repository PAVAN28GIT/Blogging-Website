import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-center bg-cover bg-no-repeat bg-[url('/Onepiece-hero.jpg')] py-11 lg:py-0 lg:h-screen transition-all duration-1000 w-full flex flex-col items-center justify-center"
      >
        {/* Empty div to maintain layout on mobile */}
        <div className="block lg:hidden h-[600px]"></div>

        {/* Main text section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="intro text-white lg:w-[80%] order-2 transition-all duration-1000 px-4 lg:px-0 text-center font-Dancing-script text-3xl lg:text-5xl mt-[-250px] lg:mt-[-350px] mx-auto"
        >
          Welcome to our blogging site, where we discuss the quirks of this cursed world and share stories, insights, and ideas that matter most to us.
        </motion.div>

        {/* Scroll down link for small screens */}
        <Link className="lg:hidden" to="showTopPosts" smooth={true} duration={500}>
          <FontAwesomeIcon className="items-end w-6 h-6 text-black cursor-pointer relative bg-[rgba(255,255,255,0.7)] rounded-full p-2 my-4 top-6 left-[45%] lg:left-1/2 animate-bounce" icon={faArrowDown} />
        </Link>
      </motion.div>

      {/* Scroll down link for large screens */}
      <Link className="hidden lg:block" to="showTopPosts" smooth={true} duration={500}>
        <FontAwesomeIcon className="items-end w-6 h-6 text-black cursor-pointer bg-[rgba(255,255,255,0.7)] rounded-full p-2 left-[45%] absolute lg:left-1/2 bottom-8 animate-bounce" icon={faArrowDown} />
      </Link>
    </>
  );
};

export default Hero;

