import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imageOne from "../Images/hero-section-image-1.png";
import imageTwo from "../Images/hero-section-image-2.png";
import imageThree from "../Images/hero-section-image-3.png";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Show popup after 10 seconds (adjusted to 10 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleReviewClick = () => {
    navigate("/portfolio");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // WhatsApp redirect handler
  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/917889130942", "_blank");
  };

  return (
    <div className="relative bg-[#F8F8FF] w-full">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Simplified heading - Miller's Law (7±2 chunks of information) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B5F] mb-4 md:mb-6 leading-tight">
            From Vision to Deployment
            <br />
            We Build With Impact
          </h1>

          {/* Clear, concise paragraph - Miller's Law */}
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 max-w-lg mx-auto">
            Design, Develop, and Deliver High-Performant Applications So You
            Don't Have to Worry About Anything Anymore.
          </p>

          {/* Two clear options - Hick's Law (limit choices) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-16">
            {/* Larger target area - Fitts' Law */}
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-900 text-white px-6 py-4 rounded-md font-medium transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
              aria-label="Book a free consultation call on WhatsApp"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm1.5 18.5c-1.25 0-2.48-.2-3.64-.594l-4.16 1.094 1.1-4.02C6.21 13.73 6 12.5 6 11.25c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              Book a Free Call
            </button>

            {/* Fitts' Law - distinct styling to prevent errors */}
            <button
              onClick={handleReviewClick}
              className="w-full sm:w-auto bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-4 rounded-md font-medium transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
              aria-label="View our portfolio projects"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Our Projects
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full mt-6">
          {/* Added gradient background and appropriate spacing */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gradient-to-r from-[#364251] to-[#364251] rounded-xl">
            {/* Responsive images with consistent sizes */}
            <div className="w-full md:w-1/3 p-3 transition-transform hover:scale-105 duration-300">
              <img
                src={imageOne}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt="Web development showcase"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/3 p-3 transition-transform hover:scale-105 duration-300">
              <img
                src={imageTwo}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt="Mobile application showcase"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/3 p-3 transition-transform hover:scale-105 duration-300">
              <img
                src={imageThree}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                alt="UI/UX design showcase"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200 mt-12"></div>

      {/* Popup notification - only shown when state is true */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-xl p-6 max-w-sm animate-fadeIn z-50">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Need help with your project?
            </h3>
            <button
              onClick={closePopup}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close popup"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Let's discuss how we can bring your vision to life with our expert
            development services.
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      )}

      {/* Animation styles */}
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
