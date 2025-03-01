import React from "react";

const FirstText = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Section: Title */}
          <div data-aos="fade-right" className="w-full md:w-2/3 mb-9 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800">
              Edens Garden transforms outdoor spaces into lush, inspiring oases
              while generating jobs and empowering local communities.
            </h1>
          </div>
          {/* Right Section: Lead Text */}
          <div data-aos="fade-left" className="w-full md:w-2/3 md:pl-8">
            <p className="text-base leading-relaxed mb-4 text-gray-600">
              At Eden Gardens, we bring vibrant landscapes to life across
              Johannesburg. Our expert team specializes in lawn care, garden
              design, and seasonal maintenance, ensuring lush, thriving outdoor
              spaces for homes and businesses.
            </p>
            <p className="text-base leading-relaxed mb-4 text-gray-600">
              From custom flower beds to irrigation solutions, Eden Garden
              transforms gardens with sustainable practices. We prioritize
              eco-friendly methods to create breathtaking green spaces that
              enhance property value and natural beauty year-round.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              From custom flower beds to irrigation solutions, Eden Garden
              transforms gardens with sustainable practices. We prioritize
              eco-friendly methods to create breathtaking green spaces that
              enhance property value and natural beauty year-round.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstText;
