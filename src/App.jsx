import { React, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animations occur only once when scrolling down
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="pt-16 min-h-screen flex flex-col">
        <div className="flex-grow"> {/* Ensures the content pushes the footer to the bottom */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Footer added at the bottom */}
      </div>
    </>
  );
}

export default App;
