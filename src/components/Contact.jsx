// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 mb-6">Email: <a href="mailto:derartudereje0@gmail.com" className="text-purple-600">derartudereje0@gmail.com</a></p>
        <p className="text-gray-700">Phone: <span className="font-medium">+251 938 065 644</span></p>
      </div>
    </section>
  );
};

export default Contact;
