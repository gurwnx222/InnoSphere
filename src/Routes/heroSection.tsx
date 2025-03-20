import React from 'react';
import imagehero from '../Images/Screenshot (34).png';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-6 md:py-10 lg:py-12">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3">Perfect Blend of Technology & Creativity</p>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#1A2B5F] mb-4 md:mb-6 leading-tight">
            Design to Deployment <br /> Solution
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
            One-Stop Technical Solutions for Web & Mobile Apps For All Your Business Needs
          </p>
          <NavLink
            to="/contact"
            className=" bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-transform duration-300 transform hover:scale-105"
          >
            Get In Touch
          </NavLink>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10">
          <img 
            src={imagehero} 
            alt="Hero Image" 
            className="object-contain w-full max-w-[600px] h-auto md:max-h-[550px]"
          />
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200 mt-12"></div>
    </div>
  );
};

export default HeroSection;