import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">
            Oyindamola Shakirat Erikitola
          </h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/kirahsub1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a
            href="https://linkedin.com/in/oyindamola-erikitola"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          >
            <FaTwitter className="w-5 h-5 hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
