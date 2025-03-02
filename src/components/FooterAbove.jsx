import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FooterAbove = () => {
  return (
    <section className="bg-white text-gray-800 py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Top Div with Heading and HR */}
        <div className="flex items-center mb-12">
          {/* HR line that adjusts width based on screen size */}
          <hr className="flex-grow border-t-2 border-green-600 sm:w-1/3 md:w-2/3 lg:w-3/4" />
          <h2 className="px-4 text-2xl font-semibold">Future of Landscaping</h2>
        </div>

        {/* Middle Div with Three Divs */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
          {/* 1st Div: Logo */}
          <div className="text-2xl md:text-4xl font-bold text-green-600 w-full md:w-auto text-center md:text-left mb-6">
            <span className="text-black">EDENS</span>GARDEN
          </div>

          {/* 2nd Div: Contact Info */}
          <div className="text-lg text-gray-600 font-bold w-full md:w-auto text-center md:text-left">
            <p>edensgardnersl@gmail.com</p>
            <p>+27 644801101</p>
          </div>

          {/* 3rd Div: Social Media Icons */}
          <div className="space-x-4 text-2xl w-full md:w-auto text-center md:text-left">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-gray-500 hover:text-green-700"></i>
            </a>
            <a href="https://www.instagram.com/edens_gardners/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-gray-500 hover:text-green-700"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8">
          <p className="text-left md:text-center text-sm text-gray-600">
            © 2025 Edens Garden. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterAbove;
