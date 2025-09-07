import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
      <p className="text-xl md:text-2xl mb-6 text-gray-700">
        I'm a Frontend Developer & Designer building beautiful web experiences.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition"
      >
        See My Work
      </a>
    </section>
  );
};

export default Hero;
