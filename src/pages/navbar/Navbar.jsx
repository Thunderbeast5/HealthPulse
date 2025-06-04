// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Lottie from "lottie-react";
import heartAnim from "../../assets/logo copy.json"; // adjust the path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-lime-200/30 to-green-300/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: `translate(-50%, -50%) scale(${1 + scrollY / 10000})`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-lime-300/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transform: `translate(50%, 50%) scale(${0.8 + scrollY / 8000})`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-lime-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <Lottie animationData={heartAnim} loop autoplay />
              </div>
              <Link to="/">
                <span className="cursor-pointer text-xl sm:text-2xl font-bold bg-gradient-to-r from-lime-600 to-green-700 bg-clip-text text-transparent">
                  HealthPulse
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-lime-600 transition-colors font-medium">Reviews</a>
              <Link to="/doctor">
                <button className="bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all border-2 border-lime-600 hover:border-green-700">
                  Get Started
                </button>
              </Link>
            </div>

            <button 
              className="md:hidden transform hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-lime-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 font-medium">Home</a>
              <a href="#features" className="block py-2 text-gray-700 font-medium">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 font-medium">How It Works</a>
              <a href="#testimonials" className="block py-2 text-gray-700 font-medium">Reviews</a>
              <Link to="/doctor">
                <button className="w-full bg-gradient-to-r from-lime-500 to-green-600 text-white py-3 rounded-lg font-bold mt-2">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;