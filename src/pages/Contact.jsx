import React from "react";
import contactImg from "../assets/workerPic3.jpg"; // Make sure to import your image

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex items-center mb-18">
        <h2 className="pr-4 text-2xl md:text-5xl text-gray-800 font-semibold">
          Contact Us
        </h2>
        <hr className="flex-grow border-t-2 border-green-600 sm:w-1/3 md:w-2/3 lg:w-3/4" />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Side - Contact Form */}
        <div data-aos="fade-right" className="md:w-1/2 flex flex-col">
          <p className="text-lg text-gray-700 mb-4">
            Reach out to us for all your landscaping needs. We’re here to help
            you create the perfect outdoor space.
          </p>

          {/* Contact Info */}
          <div className="mb-8 mt-2">
            <p className="text-lg font-semibold">
              Email:{" "}
              <span className="text-green-600">info@edensgarden.com</span>
            </p>
            <p className="text-lg font-semibold">
              Phone: <span className="text-green-600">+123 456 7890</span>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:border-gray-300 focus:ring-1 focus:ring-gray-500"
              />
              <input
                type="text"
                placeholder="Surname"
                className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            ></textarea>
            <button className="px-6 py-2 bg-green-600 text-white font-semibold hover:bg-transparent hover:text-gray-700 hover:border-gray-700 hover:border cursor-pointer transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Image with matching height */}
        <div data-aos="zoom-in" className="md:w-1/2 flex justify-center">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-full md:h-auto max-h-[500px] object-cover object-bottom rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
