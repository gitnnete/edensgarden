import React from 'react';
import homeImg1 from '../assets/beforeAfter1.jpg';
import homeImg2 from '../assets/beforeAfter2.jpg';
import homeImg3 from '../assets/workerPic.jpg';
import homeImg4 from '../assets/workerPic2.jpg';

const HomeImages = () => {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8 mt-4">
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
        {/* Left Image */}
        <div data-aos="zoom-in" className="relative">
          <img
            src={homeImg1}
            alt="Image 1"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg transform -rotate-2 transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* Right Image */}
        <div data-aos="zoom-in" data-aos-delay="500" className="relative mt-6 md:mt-0">
          <img
            src={homeImg2}
            alt="Image 2"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg transform rotate-2 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      
      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
        {/* Left Image */}
        <div data-aos="zoom-in" data-aos-delay="550" className="relative">
          <img
            src={homeImg3}
            alt="Image 3"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg transform -rotate-2 transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* Right Image */}
        <div data-aos="zoom-in" data-aos-delay="600" className="relative mt-4 md:mt-0">
          <img
            src={homeImg4}
            alt="Image 4"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg transform rotate-2 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImages;
