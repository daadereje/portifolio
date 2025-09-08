import React from "react";
import profilePic from "../assets/photo.jpg"; 

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-8 py-20"
    >
      {/* Profile image */}
      <div className="md:w-1/3 flex justify-center mb-10 md:mb-0">
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* About text */}
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hi, I’m <span className="font-semibold">Derartu Dereje</span>, a Computer
          Science student and aspiring Full Stack Developer & Designer.
          I love building clean, user-friendly web applications and learning
          new technologies every day. 🚀
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default About;
