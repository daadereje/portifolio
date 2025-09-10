{/* Contact Section */}
<section id="contact" className="py-20 text-center px-6">
  <motion.h2
    className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Contact Me
  </motion.h2>

  {/* Contact Info */}
  <div className="space-y-3">
    <motion.p
      className="text-gray-300 hover:text-purple-400 transition text-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      📧 derartudereje0@gmail.com
    </motion.p>

    <motion.p
      className="text-gray-300 hover:text-purple-400 transition text-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 1 }}
    >
      📞 +251938065644
    </motion.p>
  </div>

  {/* Social Links */}
  <div className="flex justify-center gap-6 mt-8">
    <motion.a
      href="#"
      className="text-gray-400 hover:text-purple-400 transition text-2xl"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      🌐
    </motion.a>
    <motion.a
      href="#"
      className="text-gray-400 hover:text-purple-400 transition text-2xl"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      💼
    </motion.a>
    <motion.a
      href="#"
      className="text-gray-400 hover:text-purple-400 transition text-2xl"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      🐙
    </motion.a>
  </div>
</section>
