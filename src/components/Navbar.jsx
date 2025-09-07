import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold text-blue-600">MyPortfolio</div>
      <ul className="flex space-x-6">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Projects</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
