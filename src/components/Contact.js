import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
