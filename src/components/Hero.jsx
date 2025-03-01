import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.webm";
import video3 from "../assets/video3.mp4";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Desktop Layout: Three side-by-side hero items with full-height white dividers */}
      <div className="hidden md:flex h-[90vh]">
        <div
          className="relative flex-1 group overflow-hidden"
          onMouseEnter={() => videoRefs[0].current.play()}
          onMouseLeave={() => {
            videoRefs[0].current.pause();
            videoRefs[0].current.currentTime = 0;
          }}
        >
          <video ref={videoRefs[0]} src={video1} className="w-full h-full object-cover" muted loop playsInline />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div data-aos="fade-down" className="absolute bottom-0 left-0 w-full h-32">
            <h1 className="absolute bottom-4 left-0 w-full px-4 text-white text-4xl font-semibold transition-transform duration-500 group-hover:-translate-y-44 z-10">
              Outdoor Locations
            </h1>
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0">
              <p className="text-base text-white mb-4">From home gardens and office parks to sports fields and estates, we ensure lush, well-maintained greenery that enhances every environment.</p>
              <NavLink to="/about">
                <button className="mt-2 border border-white bg-transparent text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition cursor-pointer">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="border-r border-white h-full"></div>
        <div
          className="relative flex-1 group overflow-hidden"
          onMouseEnter={() => videoRefs[1].current.play()}
          onMouseLeave={() => {
            videoRefs[1].current.pause();
            videoRefs[1].current.currentTime = 0;
          }}
        >
          <video ref={videoRefs[1]} src={video2} className="w-full h-full object-cover" muted loop playsInline />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div data-aos="fade-down" className="absolute bottom-0 left-0 w-full h-32">
            <h1 className="absolute bottom-4 left-0 w-full px-4 text-white text-4xl font-semibold transition-transform duration-500 group-hover:-translate-y-44 z-10">
              Garden Work
            </h1>
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0">
              <p className="text-base text-white mb-4">We shape, nurture, and transform outdoor spaces with precision. Whether it’s soil preparation, seasonal planting, or meticulous pruning, our expertise ensures a thriving and picturesque garden.</p>
              <NavLink to="/about">
                <button className="mt-2 border border-white bg-transparent text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition cursor-pointer">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="border-r border-white h-full"></div>
        <div
          className="relative flex-1 group overflow-hidden"
          onMouseEnter={() => videoRefs[2].current.play()}
          onMouseLeave={() => {
            videoRefs[2].current.pause();
            videoRefs[2].current.currentTime = 0;
          }}
        >
          <video ref={videoRefs[2]} src={video3} className="w-full h-full object-cover" muted loop playsInline />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div data-aos="fade-down" className="absolute bottom-0 left-0 w-full h-32">
            <h1 className="absolute bottom-4 left-0 w-full px-4 text-white text-4xl font-semibold transition-transform duration-500 group-hover:-translate-y-44 z-10">
              Lawn Perfection
            </h1>
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0">
              <p className="text-base text-white mb-4">A well-maintained lawn is the foundation of any beautiful outdoor space. We specialize in precise mowing, edging, and fertilization to keep your grass lush, healthy, and vibrant all year round.</p>
              <NavLink to="/about">
                <button className="mt-2 border border-white bg-transparent text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition cursor-pointer">
                  Learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Layout: Full-screen background video that fades every 3 seconds */}
      <div className="md:hidden h-screen relative overflow-hidden">
        {[video1, video2, video3].map((vid, index) => (
          <video
            key={index}
            src={vid}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentVideoIndex === index ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg mb-4">
              Precision Lawn & Garden Care
            </h2>
            <p className="mt-4 text-lg md:text-xl font-light italic drop-shadow-md">
              Reliable gardening services around Johannesburg South.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
