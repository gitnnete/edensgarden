import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

// Replace these with your actual video import paths.
import video1 from "../assets/video1.webm";
import video2 from "../assets/video2.webm";
import video3 from "../assets/video3.webm";

const heroData = [
  {
    src: video1,
    title: "Outdoor Locations",
    description:
      "From home gardens and office parks to sports fields and estates, we ensure lush, well-maintained greenery that enhances every environment.",
  },
  {
    src: video2,
    title: "Garden Work",
    description:
      "We shape, nurture, and transform outdoor spaces with precision. Whether it’s soil preparation, seasonal planting, or meticulous pruning, our expertise ensures a thriving and picturesque garden.",
  },
  {
    src: video3,
    title: "Lawn Perfection",
    description:
      "A well-maintained lawn is the foundation of any beautiful outdoor space. We specialize in precise mowing, edging, and fertilization to keep your grass lush, healthy, and vibrant all year round.",
  },
];

const HeroItem = ({ data }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative flex-1 group overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={data.src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Overlay with title, description, and button */}
      <div data-aos="fade-down" className="absolute bottom-0 left-0 w-full h-32">
        <h1 className="absolute bottom-4 left-0 w-full px-4 text-white text-4xl font-semibold transition-transform duration-500 group-hover:-translate-y-44 z-10">
          {data.title}
        </h1>
        <div className="absolute bottom-0 left-0 w-full px-4 pb-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0">
          <p className="text-base text-white mb-4">{data.description}</p>
          <NavLink to="/about">
            <button className="mt-2 border border-white bg-transparent text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition cursor-pointer">
              Learn More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  // Mobile: cycle through videos every 3 seconds.
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Desktop Layout: Three side-by-side hero items with full-height white dividers */}
      <div className="hidden md:flex h-[90vh]">
        {heroData.map((data, index) => (
          <React.Fragment key={index}>
            <HeroItem data={data} />
            {index < heroData.length - 1 && (
              <div className="border-r border-white h-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Layout: Full-screen background video that fades every 3 seconds */}
      <div className="md:hidden h-screen relative overflow-hidden">
        {heroData.map((data, index) => (
          <video
            key={index}
            src={data.src}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentVideoIndex === index ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
        {/* Constant overlay text on mobile */}
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
