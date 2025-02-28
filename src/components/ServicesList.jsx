import React from 'react';
import callOutIcon from '../assets/grasscutter.png';
import maintenanceIcon from '../assets/lawnmower.png';
import installationIcon from '../assets/dustbin.png';

const ServicesList = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* First Service - Image on Left, Green Left Border */}
      <div data-aos="fade-right" className="container bg-gray-200 flex flex-col md:flex-row items-center justify-center rounded shadow transition transform duration-300 hover:scale-105 p-4 border-l-8 border-green-600">
        <img
          src={callOutIcon}
          alt="Call Out Icon"
          className="w-64 h-64 object-contain flex-shrink-0 animate-rock"
        />
        <div className="mt-16 md:mt-0 md:ml-20 text-left">
          <h3 className="text-4xl md:text-5xl mb-2 text-green-600 font-bold">Call Out Fee:</h3>
          <p className="text-base md:text-xl text-gray-600 mb-2">
            Fast and professional service for emergency landscaping needs.
          </p>
          <p className="text-2xl md:text-3xl mt-4">
            <span className="font-bold mr-1">R</span>300 (First Time Clients)
          </p>
        </div>
      </div>

      {/* Second Service - Image on Right, Gray Right Border */}
      <div data-aos="fade-left" className="container mt-2 bg-gray-200 flex flex-col md:flex-row-reverse items-center justify-center rounded shadow transition transform duration-300 hover:scale-105 p-4 border-r-8 border-gray-600">
        <img
          src={maintenanceIcon}
          alt="Maintenance Icon"
          className="w-64 h-64 object-contain flex-shrink-0 animate-rock"
        />
        <div className="mt-16 md:mt-0 md:mr-20 text-left md:text-right">
          <h3 className="text-4xl md:text-5xl mb-2 text-gray-600 font-bold">Lawn Mowing:</h3>
          <p className="text-base md:text-xl text-gray-600 mb-2">
            Precision trimming for a clean, manicured lawn every time.
          </p>
          <p className="text-2xl md:text-3xl mt-4">
            <span className="font-bold mr-1">R</span>500
          </p>
        </div>
      </div>

      {/* Third Service - Image on Left, Green Left Border */}
      <div data-aos="fade-right" className="container mt-2 bg-gray-200 flex flex-col md:flex-row items-center justify-center rounded shadow transition transform duration-300 hover:scale-105 p-4 border-l-8 border-green-600">
        <img
          src={installationIcon}
          alt="Installation Icon"
          className="w-64 h-64 object-contain flex-shrink-0 animate-rock mt-2"
        />
        <div className="mt-16 md:mt-0 md:ml-20 text-left">
          <h3 className="text-4xl md:text-5xl mb-2 text-green-600 font-bold">Dustbin Cleaning:</h3>
          <p className="text-base md:text-xl text-gray-600 mb-2">
            Efficient cleaning to keep your waste bins spotless and hygienic.
          </p>
          <p className="text-2xl md:text-3xl mt-4">
            <span className="font-bold mr-1">R</span>80 (Dumping <span className="font-bold">R</span>40)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
