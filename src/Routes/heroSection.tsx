import React, { useState, useEffect } from "react";
import imagehero from "../Images/Screenshot (34).png";
import { NavLink, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Show popup after 10 seconds (adjust timing as needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100000);

    return () => clearTimeout(timer);
  }, []);

  const handleReviewClick = () => {
    navigate("/portfolio");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative bg-white w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-8 md:py-6 lg:py-8">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-3">
            Perfect Blend of Technology & Creativity
          </p>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#1A2B5F] mb-4 md:mb-6 leading-tight">
            Transforming Ideas into Products <br />
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
            One-Stop Technical Solutions for Web & Mobile Apps For All Your
            Business Needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-transform duration-300 transform hover:scale-105"
            >
              Get In Touch
            </NavLink>
            <button
              onClick={handleReviewClick}
              className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-transform duration-300 transform hover:scale-105 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Projects
            </button>
          </div>
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

      {/* Review Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden transform transition-all animate-fadeIn">
            <div className="relative">
              {/* Decorative top gradient */}
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>

              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  Enjoying our services?
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  We value your feedback! Share your experience and help us
                  improve.
                </p>
                <button
                  onClick={handleReviewClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  Leave a Review
                </button>
                <button
                  onClick={closePopup}
                  className="w-full mt-3 bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-medium py-3 rounded-md transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200 mt-12"></div>

      {/* Add some CSS for animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
