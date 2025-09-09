// src/components/Hero.jsx
import React from "react";
import photo from "../assets/photo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="relative inline-block mb-6">
          {/* glowing gradient behind */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 blur-md opacity-40 -z-10"></div>

          {/* photo itself */}
          <img
            src={photo}
            alt="Derartu"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Derartu Dereje
          </span>
        </h1>

        <p className="mt-3 max-w-xl mx-auto text-gray-300">
          Full-Stack Developer & Designer passionate about building modern,
          user-friendly, and creative web experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white shadow-md hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-white/40 rounded-full text-white/90 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
