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
    <div className="flex flex-row font-mono gap-3">
      <Link
        href={url}
        target="_blank"
        className="my-auto w-2/5 h-24 flex flex-row justify-center bg-gray-800 rounded-md shadow-md"
      >
        <Image
          src={image}
          alt={name}
          className="image rounded-md mx-auto"
          objectFit="contain"
        />
      </Link>
      <div className="w-3/5 flex flex-col">
        <Link href={url} target="_blank" className="text-lg">
          {name}
        </Link>
        <span className="w-full text-sm">{description}</span>
        <div className="flex flex-row gap-1.5 mt-1.5">
          {techs.map(tech => (
            <span
              className="mr-0.5 border border-solid border-white px-1 rounded-md text-xs"
              key={tech}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <>
      <Gap.XS />
      <p>I built these..!</p>
      <div className="grid md:grid-cols-2 gap-2">
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
