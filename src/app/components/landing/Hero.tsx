"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-green-700 to-lime-600 text-white px-6">
      <section className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hey, I&apos;m{" "}
            <span className="text-lime-300">Oyindamola Shakirat Erikitola</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6">
            Creative Frontend Developer
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            I am passionate about building impactful products and helping people
            achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-lg text-lg font-bold transition shadow-lg"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-lime-300 hover:bg-lime-300 hover:text-black text-lime-200 px-6 py-3 rounded-lg text-lg font-bold transition shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image with Stronger Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-lime-300 shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1708439136/OPDR1153_x0r2ge.jpg"
              alt="Oyindamola"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
