import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Color Palette Generator",
    description:
      "A tool to generate and save color palettes inspired by Coolors.",
    image: "/images/color-palette.png",
    link: "https://your-color-app.vercel.app",
  },
  {
    title: "AgroConnect",
    description:
      "A platform connecting farmers with buyers and sustainability resources.",
    image: "/images/agroconnect.png",
    link: "https://agroconnect.app",
  },
  // Add more projects here
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
