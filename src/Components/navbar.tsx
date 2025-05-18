import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleReviewClick = () => {
    navigate("/product");
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      } sticky top-0 py-4 px-4 md:px-6 relative z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-black-500 ml-11 md:ml-0 w-10 h-10 rounded-full flex items-center justify-center">
          <img src={logo} alt="InnoSphere Logo" />
          <NavLink
            to="/"
            className="ml-1 mb-2 font-medium text-gray-800 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            InnoSphere
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="mr-3 text-gray-700 hover:text-blue-500 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/about"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/product"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Our Products</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
          <NavLink
            to="/team"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Our Team</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      {isOpen && (
        <div className="md:hidden bg-white border border-gray-100 shadow-lg rounded-lg mt-4 p-4 absolute left-4 right-4 z-50 transition-all duration-300 transform origin-top animate-slideDown">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 border-b border-gray-100 hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 border-b border-gray-100 hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              Our Products
            </NavLink>

            <NavLink
              to="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 border-b border-gray-100 hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 border-b border-gray-100 hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/team"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300 border-b border-gray-100 hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              <span>Our Team</span>
            </NavLink>

            {/* Mobile Docs Button */}
            <button
              className="bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              onClick={handleReviewClick}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Products
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* Add this to your CSS or tailwind.config.js */
/* 
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}
*/
