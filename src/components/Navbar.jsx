import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold text-blue-600">MyPortfolio</div>
<ul className="flex space-x-6 text-gray-700 font-medium">
  <li><a href="#home" className="hover:text-blue-500">Home</a></li>
  <li><a href="#about" className="hover:text-blue-500">About</a></li>
  <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
  <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
</ul>
    </nav>
  );
};

export default Navbar;
