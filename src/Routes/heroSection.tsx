import React, { useEffect } from "react";
import { motion } from "framer-motion";
import image from "../Images/image.png";
import aboutImage from "../Images/aboutImage.png";

const HeroSection = () => {
  useEffect(() => {
    // Parallax effect code
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
        {/* Compare Component */}
    
      </section>
    </div>
  );
};

export default HeroSection;