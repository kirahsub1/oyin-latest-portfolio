// components/SkillsSection.tsx

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-12 bg-lime-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
