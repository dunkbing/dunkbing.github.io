import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import Gap from './Gap';

type ProjectProps = {
  description: string;
  image: any;
  images: any[];
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
    <div className="flex flex-row mb-2.5">
      <div className="my-auto w-1/5 flex flex-row  justify-center">
        <Image
          src={image}
          alt="cyber purr"
          className="image rounded-full mx-auto"
          width={60}
          height={60}
          objectFit="cover"
        />
      </div>
      <Gap.S />
      <div className="w-4/5">
        <Link href={url} target="_blank">
          {name}
        </Link>
        <br />
        <span className="w-full font-mono">{description}</span>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
      <div className="grid md:grid-cols-2">
        {projects.map(project => (
          <ProjectItem
            key={project.name}
            description={project.description}
            image={project.image}
            images={project.images}
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
