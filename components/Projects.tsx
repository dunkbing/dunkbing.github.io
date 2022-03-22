import Image from 'next/image';
import React from 'react';
import Gap from './Gap';
// import { Carousel } from 'react-responsive-carousel';

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
  // images,
  name,
  techs,
  url,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10px',
      }}
    >
      <div style={{ margin: 'auto', marginLeft: 0, marginRight: '10px' }}>
        <Image
          src={image}
          alt="cyber purr"
          className="image rounded-full h-48 w-48"
          width="50%"
          height="50%"
        />
      </div>
      <div style={{ marginLeft: '15px' }}>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
        <h4>{description}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {techs.map(tech => (
            <span
              style={{
                boxSizing: 'border-box',
                marginRight: '5px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#ccc',
                paddingLeft: '3px',
                paddingRight: '3px',
                borderRadius: '4px',
                fontSize: '0.8em',
              }}
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
      <p>
        Sometimes, I build personal projects, enhance my skill, and ... for fun!
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
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
