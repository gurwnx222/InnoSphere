import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../Images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto px-6 py-6 bg-white shadow-md relative z-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center">
          <img
            src={logo}
             />
          </div>
          <span className="ml-2 text-2xl font-bold text-[#1A2B5F]">InnoSphere</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-gray-700 font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-700 font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-gray-700 font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-500"
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-700 font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-500"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-gray-700 font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-500"
              }`
            }
          >
            Portfolios
          </NavLink>

          {/* Updated NavLink for "Get In Touch" */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `bg-blue-500 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 transform hover:scale-105`
            }
          >
            Get In Touch
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none transition-transform duration-200 transform hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
      >
        <div className="flex flex-col space-y-4 px-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-gray-700 font-medium py-2 border-b border-gray-100 ${isActive ? "text-blue-600" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-700 font-medium py-2 border-b border-gray-100 ${isActive ? "text-blue-600" : ""
              }`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-gray-700 font-medium py-2 border-b border-gray-100 ${isActive ? "text-blue-600" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Product
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-700 font-medium py-2 border-b border-gray-100 ${isActive ? "text-blue-600" : ""
              }`
            }
            onClick={toggleMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-gray-700 font-medium transition-colors duration-200 ${isActive ? "text-blue-600" : "hover:text-blue-500"
              }`
            }
          >
            Portfolios
          </NavLink> 
          
          {/* Updated NavLink for "Get In Touch" in Mobile */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium w-full text-center transition-colors duration-300 my-2`
            }
            onClick={toggleMenu}
          >
            Get In Touch
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
