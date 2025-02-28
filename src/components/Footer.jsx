import React from 'react';
import bottomGrass from '../assets/grass.jpg';
import FooterAbove from './FooterAbove';

const Footer = () => {
  const repeatCount = 18; // Adjust the number of images if needed
  return (
    <>
    <FooterAbove />
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center">
        {Array.from({ length: repeatCount }).map((_, index) => (
          <img
            key={index}
            src={bottomGrass}
            alt="Grass"
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Footer;
