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
      <div data-aos="fade-down" className="container mx-auto px-4 py-4 text-center relative h-full flex flex-col justify-center items-center">
        <blockquote className="text-2xl font-medium text-white w-3/4 mx-auto">
          "A beautiful garden is a sanctuary that nurtures life, inspires creativity, and transforms the ordinary into extraordinary."
        </blockquote>
        <p className="mt-4 text-lg text-white">- John Doe</p>
      </div>
    </section>
  );
};

export default MidText;
