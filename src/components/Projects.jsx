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

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
    {[
      {
        title: "School Registration System",
        desc: "A registration platform for higher education schools built with HTML and CSS.",
      },
      {
        title: "SmartBazaar AI",
        desc: "An inclusive shopping assistant app using Flutter, Firebase, and AI technologies.",
      },
    ].map((project, i) => (
      <motion.div
        key={i}
        className="relative group rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/40 transition"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2, duration: 0.8 }}
      >
        {/* Inner card */}
        <div className="bg-gray-800 rounded-xl p-6 h-full text-center group-hover:bg-gray-850 transition">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-gray-400">{project.desc}</p>
          <a
            href="#"
            className="mt-4 inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
          >
            View Project
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>
