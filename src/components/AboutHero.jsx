import React from "react";
import logo from "../assets/logo.jpg"; // Adjust the path to your logo

const AboutHero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section: Logo Image covering the entire div */}
      <div data-aos="fade" data-aos-delay="500" className="w-full md:w-1/2">
        <img
          src={logo}
          alt="Company Logo"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Section: Text with Green Background */}
      <div className="w-full md:w-1/2 flex flex-col justify-start bg-green-700 p-8">
        <h2 data-aos="fade-left" className="text-[56px] text-white mt-12">About <span className="text-gray-200">Us</span></h2>
        <hr data-aos="fade-left" className="border-t-2 border-white md:w-80 mb-10 mt-5" />
        <p data-aos="fade-left" className="text-white font-bold text-base leading-relaxed">
          Our passion for nature and sustainable landscaping drives everything we do. Based in Johannesburg, we transform ordinary spaces into vibrant, thriving gardens that not only enhance your property but also inspire creativity and a deep connection with the environment.
        </p>
        <p data-aos="fade-left" className="mt-5 text-white font-bold text-base leading-relaxed">
          With expert design and dedicated care, our services bring life and beauty to every outdoor environment, ensuring lush landscapes all year round. We pride ourselves on our attention to detail and commitment to eco-friendly practices, delivering bespoke solutions that elevate the aesthetic and functionality of every space.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
