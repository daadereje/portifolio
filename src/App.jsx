import React from "react";
import photo from "./assets/photo.jpg"; // make sure photo is inside src/assets/

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-16">
        <img
          src={photo}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg"
        />
        <h1 className="mt-4 text-3xl font-bold">Derartu Dereje</h1>
        <p className="text-gray-400 text-lg mt-2">
          Frontend Developer | Designer
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 bg-gray-700 py-3 shadow-md sticky top-0">
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </nav>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Computer Science student at Jimma University and a passionate frontend developer.
          I love building clean, user-friendly, and modern websites using React, Tailwind CSS, and
          other technologies. My goal is to become a full-stack developer and also grow my skills in graphic design.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-16 px-6">
        <h2 className="text-2xl font-semibold text-purple-400 text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold mb-2">School Registration System</h3>
            <p className="text-gray-400">
              A registration platform for higher education schools built with HTML and CSS.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold mb-2">SmartBazaar AI</h3>
            <p className="text-gray-400">
              An inclusive shopping assistant app using Flutter, Firebase, and AI technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center px-6">
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">Contact Me</h2>
        <p className="text-gray-300">📧 derartudereje0@gmail.com</p>
        <p className="text-gray-300">📞 +251938065644</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-gray-400">
        <p>© {new Date().getFullYear()} Derartu Dereje. All rights reserved.</p>
      </footer>
    </div>
  );
}
