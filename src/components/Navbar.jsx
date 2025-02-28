import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // NavLink classes for both active and hover states
  const linkClasses = ({ isActive }) =>
    `relative pb-1 transition-all duration-500 
    ${isActive 
      ? 'text-green-600 border-b-2 border-green-600' 
      : 'text-gray-700 hover:text-green-600 hover:border-b-2 hover:border-green-600'}`;

  return (
    <nav className="bg-[#F2E4D9] shadow-md fixed w-full z-20 top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div data-aos="fade-right" className="flex-shrink-0">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </div>
          {/* Desktop Menu */}
          <div data-aos="fade-left" className="hidden md:flex">
            <ul className="flex space-x-6 text-[17px]">
              <li>
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClasses}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={linkClasses}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClasses}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#F2E4D9]/80 shadow-md transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-center text-3xl font-bold">
          <li>
            <NavLink onClick={toggleMenu} to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to="/about" className={linkClasses}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to="/services" className={linkClasses}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
