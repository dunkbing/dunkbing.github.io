import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import Gap from './Gap';

type ProjectProps = {
  description: string;
  image: any;
  techs?: string[];
  name: string;
  url?: string;
};

const ProjectItem: React.FC<ProjectProps> = ({
  description,
  image,
  name,
  techs,
  url,
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-row font-mono gap-3 p-2 border border-solid border-yellow-700 rounded-md transition duration-300 hover:border-yellow-600 hover:shadow-md hover:shadow-yellow-700"
    >
      <div className="my-auto w-2/5 h-20 flex flex-row justify-center bg-gray-800 rounded-md">
        <Image
          src={image}
          alt={name}
          className="image rounded-md mx-auto"
          objectFit="contain"
        />
      </div>
      <div className="w-3/5 flex flex-col">
        <span className="text-lg">{name}</span>
        <span className="w-full text-sm text-white">{description}</span>
        <div className="flex flex-row gap-1.5 mt-1.5">
          {techs.map(tech => (
            <span
              className="mr-0.5 border border-solid border-white text-white px-1 rounded-md text-xs"
              key={tech}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <>
      <Gap.XS />
      <p>I built these..!</p>
      <div className="grid md:grid-cols-2 gap-3">
        {projects.map(project => (
          <ProjectItem
            key={project.name}
            description={project.description}
            image={project.image}
            techs={project.techs}
            url={project.url}
            name={project.name}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
