import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-700 text-white px-4 py-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center relative justify-between z-10">
        <div className="flex items-center">
          <Link to="home" duration={500} smooth={true} className="text-2xl font-bold cursor-pointer">
            <span className="text-orange-400">NTYFW</span>
            3.0
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="highlights"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400"
          >
            Highlights
          </Link>
          <Link
            to="why-choose"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400"
          >
            Why Choose?
          </Link>
          <Link
            to="form"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400"
          >
            Sign Up
          </Link>
          <Link
            to="cta"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-400"
          >
            Buy Now
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 text-white absolute top-0 left-0 w-full py-6 px-4 pt-20 space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="block text-lg cursor-pointer hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="highlights"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="block text-lg cursor-pointer hover:text-orange-400"
          >
            Highlights
          </Link>
          <Link
            to="why-choose"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="block text-lg cursor-pointer hover:text-orange-400"
          >
            Why Choose?
          </Link>
          <Link
            to="form"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="block text-lg cursor-pointer hover:text-orange-400"
          >
            Sign Up
          </Link>
          <Link
            to="cta"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="block text-lg cursor-pointer hover:text-orange-400"
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
