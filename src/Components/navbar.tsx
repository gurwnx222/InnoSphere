import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent py-4 px-4 md:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-black-500 w-10 h-10 rounded-full flex items-center justify-center">
          <img src={logo} alt="InnoSphere Logo" />
          <NavLink
            to="/"
            className="ml-1 mb-2 font- text-black-700 text-lg hover:text-blue-500 transition-colors duration-300"
          >
            InnoSphere
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black-700 hover:text-blue-500 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-black-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/about"
            className="text-black-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/contact"
            className="text-black-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>

          <NavLink
            to="/product"
            className="text-black-700 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            <span>Our Products</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      {isOpen && (
        <div className="md:hidden bg-[#F8F8FF] shadow-lg rounded-lg mt-4 p-4 absolute left-4 right-4 z-50 transition-all duration-300 transform origin-top animate-slideDown">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className="text-black-700 hover:text-blue-500 transition-colors duration-300 border-b border-transparent hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className="text-black-700 hover:text-blue-500 transition-colors duration-300 border-b border-transparent hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              Our Products
            </NavLink>

            <NavLink
              to="/about"
              className="text-black-700 hover:text-blue-500 transition-colors duration-300 border-b border-transparent hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-black-700 hover:text-blue-500 transition-colors duration-300 border-b border-transparent hover:border-blue-500 pb-1"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            {/* Mobile Docs Button */}
            <a
              href="/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F8F8FF] hover:bg-blue-50 text-black hover:text-blue-500 border border-gray-300 hover:border-blue-500 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <img src="/Vector.svg" alt="Docs Icon" className="w-4 h-4" /> Docs
            </a>
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
