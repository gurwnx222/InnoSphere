import React, { useEffect } from "react";
import { motion } from "framer-motion";
import image from "../Images/image.png";

const HeroSection = () => {
  useEffect(() => {
    // Add a little parallax effect on mouse move
    const handleMouseMove = (e) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="container mx-auto px-6 py-8 md:py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Left Side with Text */}
          <motion.div 
            className="md:w-1/2 relative z-10 mb-12 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Circle */}
            <motion.div 
              className="absolute -top-20 -left-12 w-64 h-64 bg-blue-50 rounded-full -z-10 parallax"
              data-speed="2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>

            {/* Text Content */}
            <div className="relative">
              <motion.p 
                className="text-blue-600 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                \ We Are Here \
              </motion.p>

              <motion.h1 
                className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Better Insights For Business Growth
              </motion.h1>

              <motion.button 
                className="bg-blue-500 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side with Image */}
          <motion.div 
            className="md:w-1/2 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Circle */}
            <motion.div 
              className="absolute -top-10 -right-12 w-64 h-64 bg-blue-50 rounded-full -z-10 parallax"
              data-speed="3"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>

            {/* Person Image */}
            <motion.div 
              className="flex justify-center items-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut", 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <motion.img
                src={image}
                alt="Description"
                className="w-full max-w-5xl h-auto object-cover rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              />
            </motion.div>

            {/* Background Decoration Circle */}
            <motion.div 
              className="absolute -bottom-12 -right-12 w-32 h-32 bg-gray-100 rounded-full -z-10 parallax"
              data-speed="1"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;