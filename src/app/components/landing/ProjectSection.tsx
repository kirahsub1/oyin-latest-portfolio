import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Heypexx Farms",
    description:
      "A platform connecting farmers with buyers and sustainability resources.",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747130959/MacBook_Pro_16__-_1_vq60fp.png",
    link: "https://heypexx-farms-j.vercel.app/",
  },
  {
    title: "Giftpixel",
    description:
      "A Platform where you can Share Meaningful Gifts With Your Loved Ones",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747136211/Hero_section_zovju0.png",
    link: "https://giftpixel.vercel.app/",
  },
  {
    title: "Zayithyogurt",
    description:
      "Zayith is a healthy dairy processing, marketing and distribution company based in Lagos, Nigeria.",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747137769/Hero_1_xkhopo.png",
    link: "https://zayithyogurt.com/",
  },
  {
    title: "Dessert App",
    description:
      "A Showcase of dessert",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730796392/active-states_nyxrvt.jpg",
    link: "https://sail-dessert-project.vercel.app/",
  },
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
