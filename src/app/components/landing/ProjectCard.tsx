import React from "react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 bg-white">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
