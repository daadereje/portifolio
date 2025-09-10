/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import photo from "./assets/photo.jpg"; // make sure your photo is in src/assets/

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20">
        <motion.img
          src={photo}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="mt-4 text-3xl md:text-4xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Derartu Dereje
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Frontend Developer | Designer
        </motion.p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 bg-gray-700 py-3 shadow-md sticky top-0 z-50">
        {["About", "Projects", "Contact"].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-purple-400 transition text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>

      {/* About Section */}
      <section
        id="about"
        className="max-w-3xl mx-auto px-6 py-20 text-center"
      >
        <motion.h2
          className="text-2xl font-semibold text-purple-400 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I am a Computer Science student at Jimma University and a passionate
          frontend developer. I love building clean, user-friendly, and modern
          websites using React, Tailwind CSS, and other technologies. My goal is
          to become a full-stack developer and also grow my skills in graphic
          design.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-20 px-6">
        <motion.h2
          className="text-2xl font-semibold text-purple-400 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "School Registration System",
              desc: "A registration platform for higher education schools built with HTML and CSS.",
            },
            {
              title: "SmartBazaar AI",
              desc: "An inclusive shopping assistant app using Flutter, Firebase, and AI technologies.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center px-6">
        <motion.h2
          className="text-2xl font-semibold text-purple-400 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          📧 derartudereje0@gmail.com
        </motion.p>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          📞 +251938065644
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Derartu Dereje. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
