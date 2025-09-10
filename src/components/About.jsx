{/* About Section */}
<section
  id="about"
  className="max-w-3xl mx-auto px-6 py-20 text-center"
>
  <motion.h2
    className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    About Me
  </motion.h2>

  <motion.p
    className="text-gray-300 leading-relaxed hover:text-gray-100 transition"
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
