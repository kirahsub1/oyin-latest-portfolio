"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.img
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1708439094/ODVZ9406_y6pgcu.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* About Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
            Oyindamola is an ambitious and driven software engineer with a
            strong foundation in full-stack development and a passion for
            building efficient, user-centric applications. They have
            successfully completed rigorous training programs, including a
            9-week AI program with ALX Aice and a mentorship in frontend web
            development with Digihive, showcasing their dedication to mastering
            the latest technologies. Currently, they are advancing their skills
            at the Sail Innovation Lab, in partnership with CcHub and Findworka,
            where they are focused on developing expertise in JavaScript and
            modern software engineering practices. With a keen eye for
            sustainability and innovation, Oyindamola blends their technical
            knowledge with a deep understanding of environmentally conscious
            practices. They bring a unique perspective to tech projects, having
            worked on technology-driven solutions in their agriculture business,
            where they have implemented strategies that increased productivity
            while reducing resource consumption. Driven by a passion for
            impactful solutions, Oyindamola is particularly interested in
            leveraging technology to solve real-world challenges. They are
            exploring avenues that merge their software engineering skills with
            sustainable business practices, making them a valuable asset to
            forward-thinking teams seeking to create efficient and responsible
            software solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSRTACU0zeOQZJQqxbwgTplnKl0VVH4gl2VZZBoiFLWgzHzqYW2O6SpS7u56Gx4KBgO2S6atnsXh-kv/pub" // replace with your resume path
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition mb-4"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <Link href="https://github.com/kirahsub1" target="_blank">
              <Github className="w-6 h-6 text-gray-700 hover:text-black transition" />
            </Link>
            <Link
              href="https://linkedin.com/in/oyindamola-erikitola"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-700 transition" />
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank">
              <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-500 transition" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
