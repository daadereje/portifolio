{/* About Section */}
<section id="about" className="px-6 py-16 bg-gray-800 text-center">
  <h2 className="text-3xl font-semibold mb-6">About Me</h2>
  <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
    Hi, I’m <span className="text-blue-400 font-semibold">Derartu Dereje</span>, 
    a passionate Computer Science student at Jimma University and aspiring 
    Full-Stack Developer. I love building modern, user-friendly applications 
    and exploring <span className="text-purple-400">Graphic Design</span> to mix creativity with technology.
  </p>

  {/* Timeline */}
  <div className="mt-10 max-w-3xl mx-auto space-y-8 text-left">
    {/* Step 1 */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
        1
      </div>
      <div>
        <h3 className="text-xl font-semibold">Frontend Journey</h3>
        <p className="text-gray-400">
          Started with <span className="text-blue-300">HTML, CSS, and JavaScript</span>,
          building my first project — a School Registration System.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">
        2
      </div>
      <div>
        <h3 className="text-xl font-semibold">SmartBazaar AI</h3>
        <p className="text-gray-400">
          Developed a voice-first AI shopping assistant with 
          <span className="text-purple-300"> Flutter + Firebase + AI</span>.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">
        3
      </div>
      <div>
        <h3 className="text-xl font-semibold">Backend Growth</h3>
        <p className="text-gray-400">
          Currently mastering <span className="text-green-300">Node.js, Prisma, and PostgreSQL</span>, 
          building APIs like my Task Management System.
        </p>
      </div>
    </div>
  </div>
</section>
