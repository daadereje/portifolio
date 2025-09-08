import React from "react";
import profilePic from "../assets/photo.jpg"; // make sure your photo is inside src/assets

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-8 py-20"
    >
      {/* Profile image with background style */}
      <div className="relative md:w-1/3 flex justify-center mb-10 md:mb-0">
        <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
        
        <img
          src={profilePic}
          alt="Profile"
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* About text */}
      <div className="md:w-2/3 text-center md:text-left px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hi, I’m <span className="font-semibold text-gray-900">Derartu Dereje</span>, 
          a passionate <span className="text-blue-600">Computer Science student</span> 
          and aspiring <span className="text-purple-600">Full Stack Developer & Designer</span>.  
          I enjoy crafting clean, user-friendly web applications and exploring new technologies.  
          My goal is to build digital experiences that are{" "}
          <span className="italic">beautiful</span>,{" "}
          <span className="italic">functional</span>, and{" "}
          <span className="italic">impactful</span>. 🚀
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition shadow-md"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
