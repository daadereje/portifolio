// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-bold text-gray-900">Derartu</div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
