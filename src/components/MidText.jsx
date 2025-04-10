import React from "react";
import backgroundImg from "../assets/gardenBackground.jpg"; // Replace with your actual image path

const MidText = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-8 h-64 md:h-72"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        data-aos="fade-down"
        className="relative flex flex-col justify-center items-center h-full px-4"
      >
        <blockquote className="text-xl md:text-2xl font-medium text-white w-11/12 max-w-lg mx-auto">
          "A beautiful garden is a sanctuary that nurtures life, inspires
          creativity, and transforms the ordinary into extraordinary."
        </blockquote>
        <p className="mt-4 text-base md:text-lg text-white">- John Doe</p>
      </div>
    </section>
  );
};

export default MidText;
