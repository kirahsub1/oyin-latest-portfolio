"use client";

import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-lime-400 via-green-500 to-lime-700 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-lg">
          Have a question or want to work together? Let’s connect.
        </p>

        {/* Contact Details */}
        <div className="mb-10 flex flex-col sm:flex-row sm:justify-center gap-8 text-left">
          <div className="bg-green-300 bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full sm:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="mb-1">
              <strong>Address:</strong> Lagos, Nigeria
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +234 9035843790
            </p>
            <p>
              <strong>Email:</strong> oyindamolaerikitola@yahoo.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="text-white text-xl font-semibold">
            Thank you! I’ll get back to you soon.
          </div>
        ) : (
          <form
            onSubmit={() => setSubmitted(true)}
            action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your actual Formspree form ID
            method="POST"
            className="space-y-6 text-left bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-black rounded-lg bg-white/20 text-gray-900 placeholder-white focus:outline-none focus:ring focus:ring-white/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-black rounded-lg bg-white/20 text-gray-900 placeholder-white focus:outline-none focus:ring focus:ring-white/50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full px-4 py-2 border border-black rounded-lg bg-white/20 text-gray-900 placeholder-white focus:outline-none focus:ring focus:ring-white/50"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-100 text-lime-700 font-semibold rounded-lg hover:bg-lime-100 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
